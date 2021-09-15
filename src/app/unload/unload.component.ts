import { FvmService } from './../service/fvm.service';
import { Component, OnInit } from '@angular/core';
import { routeData } from './../models/routeData';

@Component({
  selector: 'app-unload',
  templateUrl: './unload.component.html',
  styleUrls: ['./unload.component.css']
})
export class UnloadComponent implements OnInit {

  listApprouteData:routeData[];
  constructor( private fvmService: FvmService) {    
    
}

  ngOnInit() {
    this.fvmService.getUnloadRouteOrderData()
    .subscribe(data => {
      this.listApprouteData = data;
    });  
   
  }


}
