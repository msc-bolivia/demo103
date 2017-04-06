import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {}

  ionViewDidLoad(){
    this.menuCtrl.enable(false, 'menuPublic');
    this.menuCtrl.enable(true, 'menuPrivate');
  }

  goToUsersPage(){
    this.navCtrl.push( UsersPage );
  }


}
