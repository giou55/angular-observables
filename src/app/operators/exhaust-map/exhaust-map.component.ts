import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, exhaustMap, tap } from 'rxjs/operators';
import { SouvlakiServiceService } from '../../services/souvlaki-service.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit {
  order = new Subject<{ id: number }>();

  constructor(private souvlaki: SouvlakiServiceService) { }

  ngOnInit(): void {
    this.order
    .pipe(
      tap((order) => console.log("order: ", order.id)),
      exhaustMap((order) => this.souvlaki.makeSouvlaki(order.id))
    ).subscribe(console.log);
  }

}
