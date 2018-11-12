import {Component, EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx'
@Component({
    selector:'app-clock1',
    templateUrl:'./clock1.component.html'
})

export class ClockComponent1 implements OnDestroy{
    data="00:00:00";
    @Input() hours:number=0;
    @Input() minutes:number=0;
    @Input() seconds:number=0;
    constructor(){
    }
    ngOnDestroy() { this.ResetTimer(); }
    StartTime() {
        Observable
        .interval(1000)
        .subscribe(() => {
                if(this.seconds > 59){
                    this.seconds=0;
                    this.minutes++;
                    if(this.minutes > 59){
                        this.minutes=0;
                        this.hours++;
                        if(this.hours > 23){
                            this.hours=0;
                        }
                    }
                }
                var hour=(""+this.hours).length <= 1 ? "0"+this.hours : this.hours;
                var min=(""+this.minutes).length <= 1 ? "0"+this.minutes : this.minutes;
                var sec=(""+this.seconds).length <= 1 ? "0"+this.seconds : this.seconds; 
                this.data=hour+":"+min+":"+sec;
                this.seconds++;
        });
    }
    ResetTimer(){
        this.hours=0;
        this.seconds=0;
        this.minutes=0;
    }


}

