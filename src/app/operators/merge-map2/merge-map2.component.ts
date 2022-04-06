import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { map, tap, mergeMap, take } from 'rxjs/operators';

type Souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

interface Order {
  amount: number;
  customerId: number;
}

interface Product {
  product: Souvlaki;
  customerId: number;
}

@Component({
  selector: 'app-merge-map2',
  templateUrl: './merge-map2.component.html',
  styleUrls: ['./merge-map2.component.css']
})
export class MergeMap2Component implements OnInit {
  souvlaki$: Observable<Souvlaki>;
  delivery$: Observable<Product>;

  pitaCounter = 0;
  kreasCounter = 0;
  ntomataCounter = 0;
  kremidiCounter = 0;
  patatesCounter = 0;

  customerId = 0;

  order = new Subject<Order>();
  pita = new Subject<'pita'>();
  kreas = new Subject<'kreas'>();
  ntomata = new Subject<'ntomata'>();
  kremidi = new Subject<'kremidi'>();
  patates = new Subject<'patates'>();

  souvlakiCounter(i: number) {
    return new Array(i);
  }
  counter: number = 0;
  deliveryCounter: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.souvlaki$ = zip(
      this.pita.pipe(map((ing) => `${ing}${++this.pitaCounter}`), tap(console.log)),
      this.kreas.pipe(map((ing) => `${ing}${++this.kreasCounter}`), tap(console.log)),
      this.ntomata.pipe(map((ing) => `${ing}${++this.ntomataCounter}`), tap(console.log)),
      this.kremidi.pipe(map((ing) => `${ing}${++this.kremidiCounter}`), tap(console.log)),
      this.patates.pipe(map((ing) => `${ing}${++this.patatesCounter}`), tap(console.log))
    ).pipe(
      tap((souvlaki) => {
        console.log('Enjoy!', souvlaki);
        this.counter = +this.counter + 1;
      })
    );

    this.delivery$ = this.order.pipe(
      tap((order) => {
        console.log('New Order: ', order);
        this.deliveryCounter = +this.deliveryCounter + 1;
      }),
      mergeMap(
        ({ amount, customerId }) => this.souvlaki$
          .pipe(
            take(amount),
            map((souvlaki) => ({ product: souvlaki, customerId: customerId }))
          )
      ),
      tap(product => console.log('Delivered Product: ', product))
    );
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++this.customerId;
    this.order.next({ amount, customerId: this.customerId });
  }

}
