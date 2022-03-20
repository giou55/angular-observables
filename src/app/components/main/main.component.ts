import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user:string;
  password:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.subscribe(user => {
      this.user = user; 
    })

    this.userService.passwordSubject.subscribe(password => {
      this.password = password; 
    })
  }

}
