import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  code1 = `const observer = {
              next: x => console.log('Observer got a next value: ' + x),
              error: err => console.error('Observer got an error: ' + err),
              complete: () => console.log('Observer got a complete notification'),
          };`;

  code2 = `observable.subscribe(observer);`;

  code3 = `observable.subscribe(x => console.log('Observer got a next value: ' + x));`;
  
  constructor() { }

  ngOnInit(): void { }

}
