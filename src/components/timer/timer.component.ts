import {Component, EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx'

/*Objects*/
import {TimerObject} from './../../objects/TimeObject.object';

@Component({
    selector:'app-timer',
    templateUrl:'./timer.component.html'
})

export class TimerComponent implements OnDestroy{
    /*styling inputs*/
    @Input() fontSize;

    /*end here*/
    isPaused:boolean=true;
    data="00:00";
    seconds:number=0;
    @Input() public total_seconds:number=0;
    @Input() public timeObject:TimerObject;
    minutes:number=0;
    hour:number=0;
    public subscription=null;
    constructor(){
    }
    ngOnDestroy() { this.ResetTimer(); }
    InvokeStart() {
        console.log(this.timeObject);
        this.total_seconds+=(this.timeObject.hour*3600);
        this.total_seconds+=(this.timeObject.minute*60);
        this.total_seconds+=this.timeObject.second;
        this.subscription=Observable
        .interval(1000)
        .subscribe(() => {
                this.total_seconds++;
                this.minutes=Math.floor(this.total_seconds/60);
                this.seconds=(this.total_seconds % 60);
                var min=(""+this.minutes).length <= 1 ? "0"+this.minutes : this.minutes;
                var sec=(""+this.seconds).length <= 1 ? "0"+this.seconds : this.seconds; 
                this.data=min+":"+sec;
        });
    }
    InvokeDestroy(){
        if(this.subscription!=null){
            this.subscription.unsubscribe();
            this.ResetTimer();
        }
    }
    ResetTimer(){
        this.seconds=0;
        this.total_seconds=0;
        this.minutes=0;
        this.data="00:00";
    }


}

