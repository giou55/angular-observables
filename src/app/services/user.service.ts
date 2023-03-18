import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map} from "rxjs/operators";
import { User } from "../models/user";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
    users:User[] = [];
    private usersSource = new BehaviorSubject<User[] | null>(null);
    users$ = this.usersSource.asObservable();
    activatedEmitter = new EventEmitter<any>();

    constructor(private http: HttpClient) { }

    getUsersWithMap() {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .pipe(
                map((users: User[]) => {
                        users.map(user => user.email = "gggg@gmail.com");
                        this.usersSource.next(users);
                    }
                )
            )
            .subscribe(
                () => console.log("Getting Users")
            )
    }

    getUsers() {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/');
    }

    getUser(id: string) {
        return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
    }
}