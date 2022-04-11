import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SouvlakiServiceService {
  souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

  constructor() { }

  // after 3 seconds it returns an observable as below
  //    [
  //      1,
  //      ["pita", "kreas", "ntomata", "kremidi", "patates"]
  //    ] 
  makeSouvlaki(orderId){
    return from([
      orderId,
      this.souvlaki
    ])
    .pipe(
      delay(3000)
    );
  }
}
