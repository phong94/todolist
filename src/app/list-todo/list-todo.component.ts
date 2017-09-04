import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DbService } from '../services/db.service';

@Component({
    selector: 'list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

    currentUser: string;
    taskTitle: string;
    taskDescription: string;

    constructor(private userService: UserService, private dbService: DbService) {}

    ngOnInit() {
        this.userService.currentUser.subscribe(
            (currentUser: string) => {
                this.currentUser = currentUser;
            }
        );
    }

    addNewTask() {
        console.log(this.taskTitle);
        this.dbService.storeTask(this.currentUser, this.taskTitle).then(
            (result) => console.log(result)
        );
    }
}