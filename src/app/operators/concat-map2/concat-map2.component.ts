import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, concatMap, tap } from 'rxjs/operators';
import { SouvlakiServiceService } from '../../services/souvlaki-service.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.css']
})
export class ConcatMap2Component implements OnInit {
  order = new Subject<{ id: number }>();

  constructor(private souvlaki: SouvlakiServiceService) { }

  ngOnInit(): void {
    this.order
    .pipe(
      tap((order) => console.log("order: ", order.id)),
      concatMap((order) => this.souvlaki.makeSouvlaki(order.id))
    ).subscribe(console.log);
  }

}
