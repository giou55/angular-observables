import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  subject:ReplaySubject<Number>;

  constructor() { }

  ngOnInit(): void {
    this.subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
     
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);
     
    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
     
    this.subject.next(5);
     
    // ReplaySubject records 3 last values from the Observable execution 
    // and replays them to observer B.

    // it logs:
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4

    // observerB: 2
    // observerB: 3
    // observerB: 4
    
    // observerA: 5
    // observerB: 5
  }

}
