import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhrasesService } from '../phrases.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, public ps: PhrasesService){} // include Router in the class constructor

  // create the navigate function, then use the router’s navigate method to go to the proper route
  showList(id) {
    this.router.navigate(['./list/' + id]);
    console.log("Working");
  }

  friends;

  ionViewWillEnter() {
    this.ps.getData()
    .then(data => {
      this.friends = data;
    })
  }

  addFriend() {
    let newName = prompt("Enter friends name");
    this.ps.addFriend(newName).then( () => {
      this.ps.getData()
      .then(data => {
        this.friends = data;
      })
    })
  }
}
