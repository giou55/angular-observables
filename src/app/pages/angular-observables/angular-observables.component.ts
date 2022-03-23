import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, of, from } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.css']
})
export class AngularObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Emits only the first count values emitted by the source Observable
  source1 = of(1, 2, 3, 4, 5);
  source2 = of(10, 20, 30, 40, 50);
  source3 = from([1,2,3,4,5]); // από εδώ η take παίρνει τις 3 πρώτες τιμές
  combinedSources1 = combineLatest([this.source1, this.source2, this.source3]).pipe(take(3)).subscribe(value => console.log('sources1: ' + value));
  // sources1: 5,50,1
  // sources1: 5,50,2
  // sources1: 5,50,3
  // κάνει emit τις πρώτες 3 τιμές και μετά completes


  // Waits for the source to complete, then emits the last N values from the source, as specified by the count argument.
  // If for some reason the source completes before the count supplied to takeLast is reached, all values received until that point are emitted, and then completion is notified.
  // Using takeLast with an observable that never completes will result in an observable that never emits a value.
  source4 = of(1, 2, 3, 4, 5);
  source5 = of(10, 20, 30, 40, 50);
  source6 = from([1,2,3,4,5]); // από εδώ η takeLast παίρνει τις 3 τελευταίες τιμές
  combinedSources2 = combineLatest([this.source4, this.source5, this.source6]).pipe(takeLast(3)).subscribe(value => console.log('sources2: ' + value));
  // sources2: 5,50,3
  // sources2: 5,50,4
  // sources2: 5,50,5
  // κάνει emit τις πρώτες 3 τιμές και μετά completes


  firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
  combinedTimers = combineLatest([this.firstTimer, this.secondTimer]).pipe(take(5)).subscribe(value => console.log('timer: ' + value));
// timer: 0,0 after 0.5s
// timer: 1,0 after 1s
// timer: 1,1 after 1.5s
// timer: 2,1 after 2s

}
