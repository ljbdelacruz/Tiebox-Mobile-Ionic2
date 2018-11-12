
import {Http, HttpModule} from '@angular/http'
import {Injectable} from '@angular/core';

@Injectable()
export class RequestService{
    public rawData:any;
    GetData(route:string, http:Http):any{
        return new Promise(resolve=>http.get(route)
        .map(res => res.json())
        .subscribe(data => {
            this.rawData=data;
            resolve(data);
        }));  
    }
}