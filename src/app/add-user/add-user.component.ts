import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/user.service';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
    userName: string;
    constructor(private userService: UserService) {}

    addNewUser() {
        if (this.userName == null || this.userName == '') {
            // Do nothing but later we need to have a message
            console.log("Username cannot be null or empty!")
        }

        else {
            this.userService.userArray.push(this.userName);
            this.userName = '';
        }
    }
}