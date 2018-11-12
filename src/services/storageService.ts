import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
@Injectable()
export class StorageServices{
    constructor(public storage:Storage){
    }
    StoreData(data:any, storageName:string, event:any){
        this.storage.ready().then(()=>{
            this.storage.set(storageName, data).then(()=>{
                event(true);
            }).catch(()=>{
                event(false);
            });
        })
        return false;
    }
    GetData(storageName:string, event:any){
        this.storage.get(storageName).then((val:any[])=>{
            event(val);
        }).catch(()=>{
            event(null);
        })
    }


    
}

