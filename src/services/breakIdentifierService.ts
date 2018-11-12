import {Injectable} from '@angular/core';
import {AlertViewModel} from './../objects/AlertViewModel.object';


@Injectable()
export class BreakIdentifierService{
    IdentifyStart(type: number):AlertViewModel{
        var temp = new AlertViewModel();
        console.log("TYPE");
        console.log(type);
        if(type == 1){
            temp.title="Are you sure?";
            temp.message="You want to Start Morning Break?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        } else if(type == 2){
            temp.title="Are you sure?";
            temp.message="You want to Start Lunch Break?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";            
        }else if(type == 3){
            temp.title="Are you sure?";
            temp.message="You want to Start Afternoon Break?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        }else if(type == 4){
            temp.title="Are you sure?";
            temp.message="You want to Start Side By Side?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        }else if(type == 5){
            temp.title="Are you sure?";
            temp.message="You want to Start One-on-One?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        }else if(type == 6){
            temp.title="Are you sure?";
            temp.message="You want to Start BIO Break?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        }else if(type == 7){
            temp.title="Are you sure?";
            temp.message="You want to Start AFK?";
            temp.buttonText1="Cancel";
            temp.buttonText2="Ok Sure!";
        }
        return temp;
    }
    




    

}