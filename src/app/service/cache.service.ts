import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Rx';

interface CacheContent {
  expiry: number;
  value: any;
}

/**
 * Cache Service is an observables based in-memory cache implementation
 * 
 * @export
 * @class CacheService
 */
export class CacheService {
  private cache: Map<string, CacheContent> = new Map<string, CacheContent>();
  readonly DEFAULT_MAX_AGE: number = 60*60*1000;

  /**
   * Gets the value from cache if the key is provided.
   * If no value exists in cache, then check if the same call exists  
   */
  get(key: string, fallback?: Observable<any>, maxAge?: number): Observable<any> | Subject<any> {

    if (this.hasValidCachedValue(key)) {
      
      return Observable.of(this.cache.get(key).value);
    }

    if (!maxAge) {
      maxAge = this.DEFAULT_MAX_AGE;
    }
    if (fallback && fallback instanceof Observable) {
        return fallback.do((value) => { this.set(key, value, maxAge); });
    }
    
  }

  /**
   * Sets the value with key in the cache
   * Notifies all observers of the new value
   */
  set(key: string, value: any, maxAge: number = this.DEFAULT_MAX_AGE): void {
    this.cache.set(key, { value: value, expiry: Date.now() + maxAge });
    
  }

  /**
   * Checks if the a key exists in cache
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

 
  /**
   * Checks if the key exists and   has not expired.
   */
  private hasValidCachedValue(key: string): boolean {
    if (this.cache.has(key)) {
      if (this.cache.get(key).expiry < Date.now()) {
        this.cache.delete(key);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
