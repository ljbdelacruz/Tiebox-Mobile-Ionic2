import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
/*home page*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/*employee page*/
import {EmployeePage} from './../pages/employee/employee';

/*Custom Components*/
import {TimerComponent} from './../components/timer/timer.component';
import {Button1Component} from './../components/button1/button1.component';
import {ClockComponent1} from './../components/clock1/clock1.component';
import {TableComponent1} from './../components/table1/table1.component';
/*Services*/
import {RequestService} from './../services/postService';
import {UserRequestService} from './../services/usersRequest';
import {ModalService} from './../services/modalService';
import {BreakIdentifierService} from './../services/breakIdentifierService';
import {StorageServices} from './../services/storageService';
//this is used for 
import {PostService} from './../services/postDataService';
/*Object*/
import {LoginsObject} from './../objects/Logins.object';
import {AlertViewModel} from './../objects/AlertViewModel.object';

import {Http, HttpModule} from '@angular/http'
@NgModule({
  declarations: [
    MyApp,
    /*Pages*/
    HomePage,
    EmployeePage,
    /*Components*/
    TimerComponent,
    Button1Component,
    ClockComponent1,
    TableComponent1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmployeePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    /*Service*/
    RequestService,
    UserRequestService,
    PostService,
    ModalService,
    BreakIdentifierService,
    StorageServices,
    /*Object*/
    LoginsObject,
    AlertViewModel
  ],
})
export class AppModule {}
