import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppGlobals } from '../app.globals';
import { CacheService } from './cache.service';

@Injectable()
export class FvmService {

  constructor(private http: HttpClient,private globals: AppGlobals,private cacheService:CacheService) { }

  public static PIPE="|";
/*
  GetMessageDataDetails() {
    return  this.cacheService.get("GetMessageData",this.http.get(this.globals.baseAppUrl + '/FvmRestApi/fvm/getMessage')).pipe();;
  } 

  UnloadRotueDetails() {
    return  this.cacheService.get("UnloadRotue",this.http.get(this.globals.baseAppUrl + '/FvmRestApi/fvm/getUnloadRouteData')).pipe();;
  } 
*/
  getUnloadRouteOrderData(): Observable<any> {
    return this.http.get('http://localhost:8080/FvmRestApi/fvm/getUnloadRouteOrderData');
  }

  getAppUnloadRouteOrderData(): Observable<any> {
    return this.http.get('http://localhost:8080/FvmRestApi/fvm/getUnloadRouteOrderData');
  }

  isNullOrUndefined(str) {
    if (str === null || str === undefined) {
      return true;
    }
    return false;
  }
}
