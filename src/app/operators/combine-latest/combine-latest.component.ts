import { Component, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

type Souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {
  souvlaki$: Observable<Souvlaki>;
  pitaCounter = 0;
  kreasCounter = 0;
  ntomataCounter = 0;
  kremidiCounter = 0;
  patatesCounter = 0;

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

    this.souvlaki$ = combineLatest([
      this.pita.pipe(map((ing) => `${ing}${++this.pitaCounter}`), tap(console.log)),
      this.kreas.pipe(map((ing) => `${ing}${++this.kreasCounter}`), tap(console.log)),
      this.ntomata.pipe(map((ing) => `${ing}${++this.ntomataCounter}`), tap(console.log)),
      this.kremidi.pipe(map((ing) => `${ing}${++this.kremidiCounter}`), tap(console.log)),
      this.patates.pipe(map((ing) => `${ing}${++this.patatesCounter}`), tap(console.log))
    ]).pipe(
      tap((souvlaki) => {
        console.log('Enjoy!', souvlaki);
        this.counter = +this.counter + 1;
      })
    );

  }

}