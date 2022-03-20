import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onDisplayUser() {
    this.userService.userSubject.next("George");
  }

}
