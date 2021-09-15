import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    readonly baseAppUrl: string = '';
    readonly baseAssetsUrl: string = '';

    constructor(){

      this.baseAppUrl+=location.protocol+'//'+location.hostname;
      if(location.hostname=="localhost"){
        this.baseAppUrl+=":8080";
       // this.baseAssetsUrl+="..";
      }else{
        this.baseAppUrl+=(location.port ? ':'+location.port: '');
        this.baseAssetsUrl=this.baseAppUrl+"/FVMWeb/WebContent/ng";
      }     
      this.baseAppUrl+="/FvmRestapi/fvm";
    }
}
