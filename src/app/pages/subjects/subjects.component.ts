import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, from } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  user1: String;
  user2: String;
  number: Number;
  subject1: Subject<String>;
  subject2: Subject<Number>;
  observable: Observable<Number>;
  subject3: BehaviorSubject<Number>;

  constructor() { }

  ngOnInit(): void {
    this.subject1 = new Subject<String>();
    this.subject2 = new Subject<Number>();
    this.observable = from([1, 2, 3, 4]);
    this.subject3 = new BehaviorSubject<Number>(0); // 0 is the initial value


    this.subject1.subscribe({
      next: (s) => this.user1 = s
    });

    this.subject1.subscribe({
      next: (s) => this.user2 = s
    });

    this.subject2.subscribe({
      next: (s) => {
        this.number = s;
        console.log(s);
      }
    });

    // since a Subject is an Observer, this also means you may 
    // provide a Subject as the argument to the subscribe of any Observable
    this.observable.subscribe(this.subject2);

    // the BehaviorSubject is initialized with the value 0 which the first Observer 
    // receives when it subscribes. 
    // the second Observer receives the value 2 even though 
    // it subscribed after the value 2 was sent.
    this.subject3.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    this.subject3.next(1);
    this.subject3.next(2);

    this.subject3.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    this.subject3.next(3);
  }
  // BehaviorSubject logs:
  // observerA: 0
  // observerA: 1
  // observerA: 2
  // observerB: 2
  // observerA: 3
  // observerB: 3

  // if was plain Subject it would log:
  // observerA: 1
  // observerA: 2
  // observerA: 3
  // observerB: 3

  onDisplayUsername() {
    this.subject1.next("Alexandros");
    this.subject1.next("Giorgos");
  }

}
