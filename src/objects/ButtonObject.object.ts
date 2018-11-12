export class ButtonObject{
    label:string;
    width:string;
    height:string;
    borderRadius:string;
    fontSize:string;
    backgroundColor:string;
    valueParamEvent:any;
    color:string;
    disabled:boolean;
    constructor(label:string, width:string, height:string, borderRadius:string, 
                fontSize:string, backgroundColor:string, valueParamEvent:string,
                color:string){
        this.label=label;
        this.width=width;
        this.height=height;
        this.borderRadius=borderRadius;
        this.fontSize=fontSize;
        this.backgroundColor=backgroundColor;
        this.valueParamEvent=valueParamEvent;
        this.color=color;
    }

}

