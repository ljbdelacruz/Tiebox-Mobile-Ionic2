
import {Http, HttpModule} from '@angular/http'
import {Injectable} from '@angular/core';

@Injectable()
export class PostService{
    public rawData:any;
    GetData(route:string, param : any, http:Http):any{

//        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        //this is how to do parameter 
//        var data = JSON.stringify({username: this.data.username});
        return new Promise(resolve=>http.post(route, param)
        .subscribe(data => {
            resolve(data);
        }, error => {
            console.log("failed post data service")
        }));
    }
}