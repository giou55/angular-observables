import { Component, OnInit } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-combine-latest2',
  templateUrl: './combine-latest2.component.html',
  styleUrls: ['./combine-latest2.component.css']
})
export class CombineLatest2Component implements OnInit {

  users: User[];
  posts: Post[];
  usersSub = new Subject<User[]>();
  postsSub = new Subject<Post[]>();
  users$ = this.usersSub.asObservable();
  posts$ = this.postsSub.asObservable();

  constructor(
    private userService: UserService,
    private postService: PostService
  )
  {
    this.userService.getUsers().subscribe(
      (users) => {
        this.usersSub.next(users);
      }
    )

    this.postService.getPosts().subscribe(
      (posts) => {
        const slicedPosts = posts.slice(0, 3);
        this.postsSub.next(slicedPosts);
      }
    )

    combineLatest([
      this.users$,
      this.posts$
    ]).subscribe(([users, posts]) =>{
      console.log([users, posts]);
    })
  }

  ngOnInit(): void {
    this.usersSub.next(this.users);
    this.postsSub.next(this.posts);
    console.log(this.users$);
  }

}