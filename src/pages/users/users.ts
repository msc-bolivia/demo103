import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserDetailPage } from '../user-detail/user-detail';

import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public usersService: UsersService
  ) {}

  ionViewDidLoad() {
    this.users = this.usersService.getAll().results;
  }

  goToUserDetailPage( user ){
    this.navCtrl.push( UserDetailPage, {
      user: user
    });
  }

  goBack(){
    this.navCtrl.pop();
  }

}
