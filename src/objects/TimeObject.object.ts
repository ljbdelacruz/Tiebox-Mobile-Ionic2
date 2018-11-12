export class TimerObject{
    public hour:number;
    public minute:number;
    public second:number;
    constructor(hour:number, minute:number, second:number){
        this.hour=hour;
        this.minute=minute;
        this.second=second;
    }
    public Assign(hour:number, minute:number, second:number){
        this.hour=hour;
        this.minute=minute;
        this.second=second;
    }
}