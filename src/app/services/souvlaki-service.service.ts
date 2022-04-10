import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SouvlakiServiceService {
  souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

  constructor() { }

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
