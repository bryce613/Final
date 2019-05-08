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
        this.data = data;
        resolve(this.data);
      })
    })
  }

  getData(){
    return this.load().then( data => {
      return data;
    })
  }
}
