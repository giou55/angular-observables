import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit, AfterViewInit {
  obs1:Observable<any>;
  obs2:Observable<any>;

  constructor() { }

  @ViewChild('input1') input1: ElementRef;
  @ViewChild('input2') input2: ElementRef;
  @ViewChild('span') span: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.obs1 = fromEvent(this.input1.nativeElement, 'input');
    this.obs2 = fromEvent(this.input2.nativeElement, 'input');

  //   this.obs1.subscribe(
  //     (event:any) => {
  //     this.span.nativeElement.innerHTML = event.target.value;
  //   });

  //   this.obs2.subscribe(
  //     (event:any) => {
  //     this.span.nativeElement.innerHTML = event.target.value;
  //   });
  // }

    this.obs1.pipe(
      mergeMap(event1 => this.obs2.pipe(
        map(event2 => event1.target.value + " " + event2.target.value)
      ).subscribe(
      combinedValue => this.span.nativeElement.innerHTML = combinedValue
      );

  }

}
