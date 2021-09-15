import { FvmService } from './service/fvm.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppGlobals } from './app.globals';
import { CacheService } from './service/cache.service';
import { AppComponent } from './app.component';
import { UnloadComponent } from './unload/unload.component';
import { GetMessageComponent } from './getmessage/getmessage.component';

import { AccordionModule } from 'primeng/primeng';
import {ChipsModule} from 'primeng/chips';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/datagrid';
import { TableModule } from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {MenubarModule} from 'primeng/menubar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {GrowlModule} from 'primeng/growl';
import {DropdownModule} from 'primeng/dropdown';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {CheckboxModule} from 'primeng/checkbox';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';


import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AutoCompleteModule} from 'primeng/autocomplete';






@NgModule({
  declarations: [
    AppComponent,
    UnloadComponent,
    GetMessageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'UnloadRotue', component: UnloadComponent},
      {path: 'GetMessageData', component: GetMessageComponent},
    ]),
  ],
  providers: [AppGlobals,FvmService,CacheService],
bootstrap: [AppComponent]
})
export class AppModule { }
