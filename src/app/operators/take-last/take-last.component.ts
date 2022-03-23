import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, of, from, range } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  source = of('Ignore', 'Ignore', 'Hello', 'World');
  // take the last 2 emitted values, 'Hello' and 'World'
  example = this.source.pipe(takeLast(2)).subscribe(val => console.log(val));
  // Hello
  // World


  many = range(1, 100);
  lastThree = this.many.pipe(takeLast(3)).subscribe(x => console.log(x));
  // 98
  // 99
  // 100


  firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
  combinedTimers = combineLatest([this.firstTimer, this.secondTimer]).pipe(take(5)).subscribe(value => console.log('timer: ' + value));
// timer: 0,0 after 0.5s
// timer: 1,0 after 1s
// timer: 1,1 after 1.5s
// timer: 2,1 after 2s

}

