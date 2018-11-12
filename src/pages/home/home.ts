import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';
import { NavController } from 'ionic-angular';
/*Pages*/
import {EmployeePage} from './../employee/employee';
import {StorageServices} from './../../services/storageService';
/*objects*/
import {LoginsObject} from './../../objects/Logins.object';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logins:LoginsObject=new LoginsObject();
  constructor(public navCtrl: NavController, public storage:Storage, public storageService:StorageServices) {
    this.storageService.GetData("UserInfo", function(data){
      console.log(data);
    })
  }
  /*page navigation*/
  LoginEmployee(){
    // if(this.logins.username != undefined || this.logins.password != undefined){
    //   //console.log(this.logins);
    //   this.storageService.StoreData(this.logins, "UserInfo", function(data){
    //     if(data){
    //       console.log("Success");
    //     }
    //   });      
    // }
    this.navCtrl.push(EmployeePage);
  }
  


}
