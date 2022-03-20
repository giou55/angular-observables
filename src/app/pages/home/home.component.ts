import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

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

    const custonIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 3) {
          observer.complete();
        }
        if(count > 5) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000)
    });

    this.subs2 = custonIntervalObservable.subscribe(
      data => { 
        console.log(data);
        this.count2 = data;
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => { 
        console.log('Completed!');
        this.count2 = 'Completed!';
      }
    );
  }

  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }
}
