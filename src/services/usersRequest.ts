import {RequestService} from './postService';
import {LoginsObject} from './../objects/Logins.object';
import {Http, HttpModule} from '@angular/http';
export class UserRequestService{
    Authenticate(option:number,requestService:RequestService, http:Http, logins:LoginsObject, dataRetriever:Function){
        //authentication to check if user really exists
        switch(option){
            //this one gets the time from server
            case 1:
                requestService.GetData("http://192.168.1.122:8081/Utility/GetTime", http).then((value:any)=>{
                    dataRetriever(value);
                });
                break;
            //this one gets the user information
            case 2:
                //this gets the data from users breaks
                requestService.GetData("https://randomuser.me/api/", http).then((value:any)=>{
                    dataRetriever(value);
                });
                break;
            case 3:
                break;
        }
    }
}