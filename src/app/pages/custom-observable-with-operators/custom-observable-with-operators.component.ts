import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-custom-observable-with-operators',
  templateUrl: './custom-observable-with-operators.component.html',
  styleUrls: ['./custom-observable-with-operators.component.css']
})
export class CustomObservableWithOperatorsComponent implements OnInit, OnDestroy {

  count: any = 0;

  private subs: Subscription;

  constructor() { }

  ngOnInit(): void {
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 10) {
          observer.complete();
        }
        // error never happens
        if (count > 11) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000)
    });

    this.subs = customIntervalObservable
    // we add the operators
    .pipe(
      filter((data:any) => {
        return data % 2 === 0;
      }),
      map((data:any) => {
        return 'Round ' + (data);
      })
    )
    // we listen to new values
    .subscribe(
      data => {
        console.log(data);
        this.count = data;
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
        this.count = 'Completed!';
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
