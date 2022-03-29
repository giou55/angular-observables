import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  output:Number;  
  observable:Observable<any>;
  isSubscribed:Boolean = false;
  subscription:Subscription;

  constructor() { }

  ngOnInit(): void {
    this.observable = interval(500);
  }

  onSubscribe() {
      this.isSubscribed = true;
      this.subscription = this.observable.subscribe(v => this.output = v);
  }

  onUnsubscribe() {
    this.isSubscribed = false;
    this.subscription.unsubscribe();
}

  // onSubscribe() {
  //   if(!this.isSubscribed){
  //     this.subscription = this.observable.subscribe(v => this.output = v);
  //     this.isSubscribed = true;
  //   }
  //   if(this.isSubscribed){
  //     this.subscription.unsubscribe();
  //     this.isSubscribed = false;
  //   }
  // }

}
