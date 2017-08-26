import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { DbService } from '../services/db.service';

@Component({
    selector: 'list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
    
})

export class ListUserComponent {
    @Input() selectedUser: string;
    constructor(private userService: UserService, private dbService: DbService) {}
    
    userArray:string[] = this.userService.userArray;
    
    selectUser(event, user: string) {
        this.selectedUser = user;
        this.userService.currentUser.emit(this.selectedUser);
    }

    deleteUser(user: string) {
        this.dbService.deleteUser(user);
    }
}