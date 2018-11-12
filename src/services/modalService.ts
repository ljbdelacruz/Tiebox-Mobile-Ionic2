import {ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {AlertViewModel} from './../objects/AlertViewModel.object';
//this service creates a modal for you and also the alert prompter
export class ModalService{
    CreateModal(page:any, modalCtrl:ModalController, successEvent:Function, cancelEvent:any){
        let modal = modalCtrl.create(page);
        return modal;
    }
    AlertConfirmation(alertCtrl:AlertController, alertVM:AlertViewModel) :any{
        let alert = alertCtrl.create({
                    title: alertVM.title,
                    message: alertVM.message,
                    buttons: [
                    {
                        text: alertVM.buttonText1,
                        role: 'cancel',
                        handler: () => {
                            alertVM.cancelEvent();
                        }
                    },
                    {
                        text: alertVM.buttonText2,
                        handler: () => {
                            alertVM.confirmEvent();
                        }
                    }
                    ]
                });
        return alert;
    }

}