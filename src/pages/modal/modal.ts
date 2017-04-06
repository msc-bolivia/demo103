import { Component, ViewChild } from '@angular/core';
import { ViewController, NavParams, Searchbar } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  items: any = [
    {
      title: 'Colombia',
      id: 1
    },
    {
      title: 'Bolivia',
      id: 2
    },
    {
      title: 'Chile',
      id: 3
    },
    {
      title: 'Argentina',
      id: 4
    },
    {
      title: 'Peru',
      id: 5
    },
    {
      title: 'Uruguay',
      id: 6
    },
    {
      title: 'Colombia',
      id: 1
    },
    {
      title: 'Bolivia',
      id: 2
    },
    {
      title: 'Chile',
      id: 3
    },
    {
      title: 'Argentina',
      id: 4
    },
    {
      title: 'Peru',
      id: 5
    },
    {
      title: 'Uruguay',
      id: 6
    },{
      title: 'Colombia',
      id: 1
    },
    {
      title: 'Bolivia',
      id: 2
    },
    {
      title: 'Chile',
      id: 3
    },
    {
      title: 'Argentina',
      id: 4
    },
    {
      title: 'Peru',
      id: 5
    },
    {
      title: 'Uruguay',
      id: 6
    }
  ];
  itemsCopy: any[] = [];
  @ViewChild('searchbar') searchbar: Searchbar;


  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams
  ) {
    this.itemsCopy = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.searchbar.setFocus();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  onInput(event){
    let value = event.target.value ? event.target.value : '';
    this.search( value );
  }

  private search( value: string ){
    if(value == ''){
      this.items = this.itemsCopy;
    }
    this.items = this.itemsCopy.filter(item =>{
      return item.title.toLowerCase().indexOf(value.toLowerCase()) != -1;
    });
  }



}
