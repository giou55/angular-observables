import { Component, OnInit } from '@angular/core';
import { from, interval, Observable } from 'rxjs';
import { take, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
  numbers: Observable<number>;
  letters: Observable<string>;
  project: any;

  constructor() { }

  ngOnInit(): void {
    this.numbers = interval(1000).pipe(take(3));

    this.letters = from(["a", "b", "c"]);

    //this.project = number => this.letters.pipe(map(letter => [number, letter]));


    // we put two nested subscribe
    this.numbers.pipe(
      map(number => this.letters.pipe(map(letter => [number, letter])))
    )
      .subscribe((val: any) => {
        val.subscribe((val: any) => {
          console.log(val);
        });
      });


    // we put mergeAll operator
    this.numbers.pipe(
      map(number => this.letters.pipe(map(letter => [number, letter]))),
      mergeAll()
    )
    .subscribe((val: any) => {
      console.log(val);
    });
    
    
    // we put mergeMap operator
    this.numbers.pipe(
      mergeMap(number => this.letters.pipe(map(letter => [number, letter]))),
    )
    .subscribe((val: any) => {
      console.log(val);
    });
  }

}


// All three cases output the same:
// after 1 second
// [0, 'a']
// [0, 'b']
// [0, 'c']
// after 2 seconds
// [1, 'a']
// [1, 'b']
// [1, 'c']
// after 3 seconds
// [2, 'a']
// [2, 'b']
// [2, 'c']