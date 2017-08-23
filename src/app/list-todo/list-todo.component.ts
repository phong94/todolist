import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

    currentUser: string;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (currentUser: string) => {
                this.currentUser = currentUser;
            }
        );
    }
}