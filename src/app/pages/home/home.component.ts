import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, of, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  count1: any = 0;
  count2: any = 0;

  private subs1: Subscription;
  private subs2: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subs1 = interval(1000).subscribe(count => {
      console.log(count);
      this.count1 = count;
    });

    this.subs2 = of(100, 100, 100, 100, 100).subscribe(count => {
      // print 100 for 5 times
      console.log(count);
      // print total sum of values
      this.count2 += count;
    });
  }

  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }
}
