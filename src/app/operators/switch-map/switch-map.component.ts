import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { map, tap, switchMap, take } from 'rxjs/operators';

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
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
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

  // ανεξάρτητα πόσα Orders (παραγγελίες) έχουν γίνει emit,
  // κάθε φορά που πατάμε ένα από τα κουμπιά
  // στέλνεται μόνο μία φορά η τιμή από αυτό το Subject
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
    // το souvlaki$ κάνει emit έναν πίνακα τύπου Souvlaki, εφόσον πάρει μια τιμή από όλα τα Subjects
    // και κάνει complete όταν γίνουν emit όσα σουβλάκια αναφέρει το τελευταίο order
    // μετά όσο και να πατάμε τα κουμπιά, δεν γίνεται emit τίποτα 
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

    // το delivery$ κάνει emit ένα Product κάθε φορά που το order κάνει emit ένα Order,
    // το delivery$ ακούει και περιμένει το Subject order
    this.delivery$ = this.order.pipe( 
      // αφού γίνει emit ένα Order εκτελείται ο παρακάτω κώδικας
      tap((order) => {
        console.log('New Order: ', order);
        this.ordersArray.push(order);
      }),
      // το switchMap δέχεται σαν παράμετρο το order 
      // και παρακολουθεί (γίνεται subscribe) το souvlaki$ πότε θα κάνει emit ένα Souvlaki,
      // όμως για να γίνει το subscribe πρέπει πρώτα να έχει γίνει emit ένα Order
      switchMap(
        // γίνεται destructuring στο Order
        ({ amount, id }) => this.souvlaki$
          .pipe(
            // θα πάρουμε τόσες τιμές ανάλογα το amount του order, δηλαδή πόσα σουβλάκια θέλουνε,
            // και μετά κάνει complete το souvlaki$
            take(amount),
            // στην map περνιέται το Souvlaki που έχει γίνει emit από το souvlaki$
            map((souvlaki) => 
              // το Souvlaki μετατρέπεται σε Product, 
              // το οποίο επιστρέφεται και στέλνεται στο delivery$ για να γίνει emit
              ({ product: souvlaki, orderId: id })) 
          )
      ),
      // το switchMap μεταφέρει και δίνει ένα Product στον επόμενο operator  
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
