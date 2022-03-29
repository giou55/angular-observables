import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  counter: Number = 0;

  constructor() { }

  ngOnInit(): void {
    // example 1
    fromEvent(document, 'click')
      .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
      )
      .subscribe(x => this.counter = x);

    // example 2
    of(1, 2, 3)
    .pipe(
      switchMap((x: number) => of(x, x ** 2, x ** 3))
    )
    .subscribe(x => console.log(x));
    // outputs
    // 1
    // 1
    // 1
    // 2
    // 4
    // 8
    // 3
    // 9
    // 27

    // example 3
    of(1, 2, 3).pipe(
      switchMap((x: number) => of(x + 10, x + 20)),
      switchMap((x: number) => of(x + 100, x + 200))
    )
      .subscribe(x => console.log(x));
    // outputs
    // 111
    // 211
    // 121
    // 221
    // 112
    // 212
    // 122
    // 222
    // 113
    // 213
    // 123
    // 223
  }

}