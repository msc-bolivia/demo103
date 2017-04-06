import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TimelinePage } from '../pages/timeline/timeline';
import { InformationPage } from '../pages/information/information';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pagesPublic: any[] = [
    {
      page: TutorialPage,
      title: 'Inicio'
    },
    {
      page: InformationPage,
      title: 'Informacion institucional'
    },
    {
      page: NewsPage,
      title: 'Noticias y plublicaciones'
    }
  ];

  @ViewChild(Nav) navMaster: Nav;
  rootPage:any = TutorialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage( item ){
    this.navMaster.setRoot( item.page );
  }
}
