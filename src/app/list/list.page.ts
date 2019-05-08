import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhrasesService } from '../phrases.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  id: any;
  phrases: any = [];

  constructor( public route: ActivatedRoute, public ps: PhrasesService ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ps.getData().then( data => {
      this.phrases = data[this.id - 1];
      console.log(this.phrases);
    })
  }

  addPhrase() {
    let friend_id = this.route.snapshot.paramMap.get("id");
    let text = prompt("Enter text");
    let context = prompt("Enter context");
    this.ps.addPhrase(friend_id, text, context).then( () => {
      this.ps.getData().then( data => {
        this.phrases = data[this.id - 1];
        console.log(this.phrases);
      })
    })
  }

  ngOnInit() {
  }

}
