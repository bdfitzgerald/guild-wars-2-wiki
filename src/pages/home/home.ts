import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController) {
    this.items = [
      {name: 'Achievements', image: '/assets/images/acheivements.png'},
      {name: 'Account', image: ''},
      {name: 'Game Mechanics', image: ''},
      {name: 'Guild', image: ''},
      {name: 'Items', image: ''},
      {name: 'Misc', image: ''},
      {name: 'Story', image: '/assets/images/story.png'},
      {name: 'Structured PvP', image: ''},
      {name: 'Trading Post', image: ''},
      {name: 'WvW', image: ''},
    ]
  }

}
