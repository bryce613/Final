import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {
  data = null;
  constructor( public http: Http ) { }

  load() {
    return new Promise(resolve => {
      this.http.get('http://bonsai.lcsc.edu/bpcloward/CITPT_413/api.php/records/friends?join=phrases')
      .map( res => res.json())
      .subscribe(data=> {
        this.data = data.records;
        resolve(this.data);
      })
    })
  }

  getData(){
    return this.load().then( data => {
      return data;
    })
  }


  addFriend( name ){
    let friend = {"nickname" : name};
    return new Promise( resolve => {
      this.http.post('http://bonsai.lcsc.edu/bpcloward/CITPT_413/api.php/records/friends', friend)
      .subscribe( () => {
        resolve();
      });
    })
  }

  addPhrase( friend_id, text, context ){
    let d = new Date();
    let date_added = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    let phrase = {
      "friend_id" : friend_id,
      "phrase_text" : text,
      "phrase_context" : context,
      "date_added" : date_added
    };
    return new Promise( resolve => {
      this.http.post('http://bonsai.lcsc.edu/bpcloward/CITPT_413/api.php/records/phrases', phrase)
      .subscribe( () => {
        resolve();
      });
    })
  }
}
