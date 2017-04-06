import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  user: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.user = this.navParams.get('user');
    console.log( this.user );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
