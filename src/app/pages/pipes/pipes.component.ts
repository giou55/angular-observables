import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  // after 2 secs the pageStatus property will take "Loaded" value
  pageStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Loaded");
    }, 3000);
  });

  constructor() { }

  ngOnInit(): void {
  }

}
