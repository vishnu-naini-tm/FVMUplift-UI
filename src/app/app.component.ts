import { Component } from '@angular/core';
import { FvmService } from './service/fvm.service';
import { routeData } from './models/routeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fvm-uplift-ui';
  
  listApprouteData:routeData[];
  constructor( private fvmService: FvmService) {    
    
}

  ngOnInit() {
    this.fvmService.getAppUnloadRouteOrderData()
    .subscribe(data => {
      this.listApprouteData = data;
    });  
   
  }
}
