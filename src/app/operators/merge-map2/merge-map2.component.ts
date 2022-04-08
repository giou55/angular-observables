import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { map, tap, mergeMap, take } from 'rxjs/operators';

type Souvlaki = ["pita", "kreas", "ntomata", "kremidi", "patates"];

interface Order {
  amount: number;
  id: number;
}

interface Product {
  product: Souvlaki;
  orderId: number;
}

@Component({
  selector: 'app-merge-map2',
  templateUrl: './merge-map2.component.html',
  styleUrls: ['./merge-map2.component.css']
})
export class MergeMap2Component implements OnInit {
  souvlaki$: Observable<Souvlaki>;
  delivery$: Observable<Product>;
  ordersArray: Order[] = [];
  productsArray: Product[] = [];

  pitaCounter = 0;
  kreasCounter = 0;
  ntomataCounter = 0;
  kremidiCounter = 0;
  patatesCounter = 0;

  orderId = 0;

  order = new Subject<Order>();
  pita = new Subject<'pita'>();
  kreas = new Subject<'kreas'>();
  ntomata = new Subject<'ntomata'>();
  kremidi = new Subject<'kremidi'>();
  patates = new Subject<'patates'>();

  souvlakiaArray(i: number) {
    return new Array(i);
  }

  souvlakiaCounter: number = 0;

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
        this.souvlakiaCounter = +this.souvlakiaCounter + 1;
      })
    );

    this.delivery$ = this.order.pipe(
      tap((order) => {
        console.log('New Order: ', order);
        this.ordersArray.push(order);
      }),
      mergeMap(
        ({ amount, id }) => this.souvlaki$
          .pipe(
            take(amount),
            map((souvlaki) => ({ product: souvlaki, orderId: id }))
          )
      ),
      tap((product) => {
        console.log('Delivered Product: ', product);
        this.productsArray.push(product);
      })
    );
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++this.orderId;
    this.order.next({ amount, id: this.orderId });
  }

}
