import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userSubject = new Subject<string>();

  passwordSubject = new BehaviorSubject<string>("12345678");
}
