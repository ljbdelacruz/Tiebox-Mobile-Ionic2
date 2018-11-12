import {Component, EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx'
@Component({
    selector:'app-table1',
    templateUrl:'./table1.component.html'
})

export class TableComponent1 implements OnDestroy{
    @Input() items=[];
    constructor(){
    }
    ngOnDestroy() {  }
    

}

