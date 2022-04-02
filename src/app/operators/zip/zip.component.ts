import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

type Souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

let pitaCounter = 0;
let kreasCounter = 0;
let ntomataCounter = 0;
let kremidiCounter = 0;
let patatesCounter = 0;

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {
  souvlaki$: Observable<Souvlaki>;

  pita = new Subject<'pita'>();
  kreas = new Subject<'kreas'>();
  ntomata = new Subject<'ntomata'>();
  kremidi = new Subject<'kremidi'>();
  patates = new Subject<'patates'>();

  souvlakiCounter(i: number) {
    return new Array(i);
  }
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {

    this.souvlaki$ = zip(
      this.pita.pipe(map((ing) => `${ing}${++pitaCounter}`),tap(console.log)),
      this.kreas.pipe(map((ing) => `${ing}${++kreasCounter}`),tap(console.log)),
      this.ntomata.pipe(map((ing) => `${ing}${++ntomataCounter}`),tap(console.log)),
      this.kremidi.pipe(map((ing) => `${ing}${++kremidiCounter}`),tap(console.log)),
      this.patates.pipe(map((ing) => `${ing}${++patatesCounter}`),tap(console.log))
    ).pipe(
      tap((souvlaki) => {
        console.log('Enjoy!', souvlaki);
        this.counter = +this.counter + 1;
      })
    );

  }

}
