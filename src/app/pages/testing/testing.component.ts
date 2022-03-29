import { Component, OnInit } from '@angular/core';
import { Observable, interval, timer, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  output: any;
  source: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.source = interval(500);

    of(10, 20, 30).subscribe(
      (x) => console.log(x)
    );

    interval(1000)
    .pipe(
      takeUntil(timer(5000))
    )
    .subscribe(
      x => console.log(x)
    );
  }

}
