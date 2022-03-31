import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  counter: Number = 0;
  obs:Observable<any>;

  constructor() { }

  @ViewChild('btn') button: ElementRef;

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.obs = fromEvent(this.button.nativeElement, 'click').pipe(
      switchMap(() => interval(500))
    );

    this.obs.subscribe(x => this.counter = x);
  }
}
