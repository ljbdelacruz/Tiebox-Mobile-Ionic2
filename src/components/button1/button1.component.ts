import {Component, EventEmitter, Input, Output, OnDestroy} from '@angular/core';

@Component({
    selector:'app-button1',
    templateUrl:'./button1.component.html'
})
export class Button1Component implements OnDestroy{
    @Input() label;
    @Input() width;
    @Input() height;
    @Input() borderRadius;
    @Input() fontSize;
    @Input() backgroundColor;
    @Input() padding;
    @Output() eventPressed: EventEmitter<any> = new EventEmitter();
    @Input() valueParamEvent;
    @Input() color;
    @Input() disabled=false;

    constructor(){
    }
    buttonPressed(){
        this.eventPressed.emit(this.valueParamEvent);
    }

    ngOnDestroy() {
    }

}

