import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DbService } from '../services/db.service';

@Component({
    selector: 'list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
    
})

export class ListUserComponent {
    firebaseUserArray: any[] = [];
    @Input() selectedUser: string;
    constructor(private userService: UserService, private dbService: DbService) {}

    ngOnInit() {
        this.displayUsers();
    }
    
    userArray:string[] = this.userService.userArray;
    
    displayUsers() {
        return this.dbService.getUsers().then(
            (result) => this.firebaseUserArray = result
        );
    }

    selectUser(event, user: string) {
        this.selectedUser = user;
        this.userService.currentUser.emit(this.selectedUser);
    }

    deleteUser(user: string) {
        this.dbService.deleteUser(user);
        this.displayUsers();
    }
}