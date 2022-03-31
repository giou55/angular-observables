import { Component, OnInit } from '@angular/core';
import { zip, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let ages = of(27, 25, 29);
    let names = of('Foo', 'Bar', 'Beer');
    let isDev = of(true, true, false);

    zip(ages, names, isDev)
      .subscribe(x => console.log(x));

    // Outputs
    // [ 27, 'Foo', true ]
    // [ 25, 'Bar', true ]
    // [ 29, 'Beer', false ]
  }

}
