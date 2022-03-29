import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from, of } from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
    this.subject1 = new Subject<String>();
    this.subject2 = new Subject<Number>();
    this.observable = from([1, 2, 3, 4]);

    this.subject1.subscribe({
      next: (s) => this.user1 = s
    });

    this.subject1.subscribe({
      next: (s) => this.user2 = s
    });

    this.subject2.subscribe({
      next: (s) => this.number = s
    });

    // Since a Subject is an Observer, this also means you may 
    // provide a Subject as the argument to the subscribe of any Observable
    this.observable.subscribe(this.subject2);
  }

  onDisplayUsername() {
    this.subject1.next("Alexandros");
    this.subject1.next("Giorgos");
  }

}
