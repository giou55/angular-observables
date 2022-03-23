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

}
