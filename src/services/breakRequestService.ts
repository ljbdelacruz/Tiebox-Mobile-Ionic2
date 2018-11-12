import {RequestService} from './postService';
import {LoginsObject} from './../objects/Logins.object';
import {Http, HttpModule} from '@angular/http';
export class BreakRequestService{
    Authenticate(option:number,requestService:RequestService, http:Http, logins:LoginsObject, dataRetriever:Function){
        //authentication to check if user really exists
        switch(option){
            case 1:
                //this one gets the users break list
                requestService.GetData("http://192.168.1.122/api/usersapi/getuser?id=12303", http).then((value:any)=>{
                    dataRetriever(value);
                });
                break;
            case 2:
                break;
            //http post
            //checks if the user is on break or not
            case 3:
            
                break;
                
        }
    }
}