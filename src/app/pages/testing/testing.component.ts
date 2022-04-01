import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, range, Observable } from 'rxjs';
import { delay, mergeMap, concatMap, switchMap, exhaustMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  post: any;
  postObs: Observable<any>;
  commentsObs: Observable<any>;
  postUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  commentsUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postObs = this.http.get<any>(this.postUrl);
    this.commentsObs = this.http.get<any>(this.commentsUrl);

    // this.commentsObs
    //   .pipe(
    //     switchMap(comments => {
    //       return this.postObs
    //         .pipe(
    //           map(post => {
    //             post.comments = comments;
    //             return post;
    //           })
    //         )
    //     })
    //   )
    //   .subscribe(
    //     (newpost) => {
    //       console.log(newpost);
    //       this.post = newpost
    //     }
    //   )

      range(1,5)
      .pipe(
        delay(500),
        concatMap(number => {
          return this.postObs
            .pipe(
              delay(3000),
              map(post => {
                post.number = number;
                return post;
              })
            )
        })
      )
      .subscribe((post) => console.log(post.number))
  }

}
