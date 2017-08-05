import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/user.service';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
    constructor(private userService: UserService) {}
    addNewUser() {
        this.userService.userArray.push("test");
    }
}