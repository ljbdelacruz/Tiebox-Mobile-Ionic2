import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Http, HttpModule} from '@angular/http'
import {ClockComponent1} from './../../components/clock1/clock1.component';
import {TimerComponent} from './../../components/timer/timer.component';
/*Services*/
import {RequestService} from './../../services/postService';
import {ModalService} from './../../services/modalService';
import {UserRequestService} from './../../services/usersRequest';
import {BreakIdentifierService} from './../../services/breakIdentifierService';
/*Objects*/
import {AlertViewModel} from './../../objects/AlertViewModel.object';
import {LoginsObject} from './../../objects/Logins.object';
import {ButtonObject} from './../../objects/ButtonObject.object';
import {TimerObject} from './../../objects/TimeObject.object';
/**
 * Generated class for the EmployeePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  enableBreak:boolean=false;
  breakSelected:number=0;
  public ajaxData:any;
  //buttonobject sample proper way of creating object in angular 2
  //ui stuff
  public buttonLists=[new ButtonObject("Morning", "100%", "50px","10px", "15px", "blue","1","white"), 
                      new ButtonObject("Lunch", "100%", "50px","10px", "15px", "red","2","white"),
                      new ButtonObject("Afternoon", "100%", "50px","10px", "15px", "#d0d8d8","3","white")];
  public alertObject=new AlertViewModel();
  AssignAlertObject(title:string, message:string, buttonText1:string, 
                    buttonText2:string, confirmEvent:Function, 
                    cancelEvent:Function){
                      this.alertObject.title=title;
                      this.alertObject.message=message;
                      this.alertObject.buttonText1=buttonText1;
                      this.alertObject.buttonText2=buttonText2;
                      this.alertObject.confirmEvent=confirmEvent;
                      this.alertObject.cancelEvent=cancelEvent;
  }
  //end here
  //timer
  public timeObject=new TimerObject(0,0,0);
  public clockObject=new TimerObject(0,0,0);
  //timer object directive
  @ViewChild('timer') timer:TimerComponent;
  //clock object directive
  @ViewChild('clock') clock:ClockComponent1;
  // prompts
  PromptTakeBreak(data:number){
    var promptContent=this.breakService.IdentifyStart(data);
    promptContent.confirmEvent=this.StartBreak.bind(this);
    promptContent.cancelEvent=this.Fail.bind(this);
    this.modalService.AlertConfirmation(this.alertController, promptContent).present();
    this.breakSelected=data;
  }
  PromptEndBreak(){
    this.AssignAlertObject("Are you sure?", "You want to End Break", "Cancel", 
                           "Ok Sure!", this.EndBreak.bind(this), this.Fail.bind(this));
    //proper way of sending exe function from service and execute there
    this.modalService.AlertConfirmation(this.alertController, this.alertObject).present();
  }
  //end

  StartBreak(){
    this.timer.InvokeDestroy();
    this.timer.InvokeStart();
    this.enableBreak=!this.enableBreak;
  }
  EndBreak(){
    console.log("TYPE");
    this.enableBreak=!this.enableBreak;
    console.log("END BREAK");
    this.UpdateBreak();
  }
  Fail(){
    console.log("Fail");
  }
  //this one updates the break;
  UpdateBreak(){
    var obj=new LoginsObject();
    // this.userRequest.Authenticate(this.postService, this.http, obj, this.RetrieveResponse.bind(this));
    this.userRequest.Authenticate(1,this.requestService, this.http, obj, function(data){
    }.bind(this));
  }
  GetCurrentTime(){
    var obj=new LoginsObject();
    this.userRequest.Authenticate(1,this.requestService, this.http, obj, function(data){
      this.clockObject.Assign(data.hour, data.minute, data.second);
      this.clock.StartTime();
    }.bind(this));
  }

  //this function checks if user is on break
  CheckIfOnBreak(){

  }
  RetrieveResponse(data){
    this.ajaxData=data;
  }
  //constructor
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http:Http,
              public alertController:AlertController,
              public requestService : RequestService,
              public modalService:ModalService, 
              public userRequest:UserRequestService,
              public breakService:BreakIdentifierService) {
                this.GetCurrentTime();
  }
  ionViewDidLoad() {
    //first thing that will be executed when page loads
  }

}
