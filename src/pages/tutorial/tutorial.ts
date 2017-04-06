import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, LoadingController, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menuPublic');
    this.menuCtrl.enable(false, 'menuPrivate');
    let load = this.loadCtrl.create();
    load.present();
    setTimeout(()=>{
      load.dismiss();
    }, 1);
  }

  goToLoginPage(){
    this.navCtrl.push( LoginPage );
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Cuidado',
      message: 'esta app es muy buena!',
      buttons: ["OK"]
    });
    alert.present();
  }

  showConfirm(){
    let alert = this.alertCtrl.create({
      title: '¿Esta seguro de eliminar?',
      message: 'Se eliminara permanentemente el archivo',
      buttons: [
        {
          text: 'Si, estoy seguro',
          handler: ()=>{
            console.log('elimniar');
          }
        },
        {
          text: 'No',
          handler: ()=>{
            console.log('no');
          }
        }
      ]
    });
    alert.present();
  }

  showPrompt(){
    let alert = this.alertCtrl.create({
      title: 'Nueva tarea',
      message: 'Digite el titulo de la nueva tarea',
      inputs: [
        {
          name: 'title',
          placeholder: 'su tarea',
          type:'text'
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (data)=>{
            console.log(data.title);
            console.log('guardar');
          }
        },
        {
          text: 'Cancelar',
          handler: ()=>{
            console.log('Cancelar');
          }
        }
      ]
    });
    alert.present();
  }

  showModal(){
    let modal = this.modalCtrl.create( ModalPage );
    modal.present();
  }

}
