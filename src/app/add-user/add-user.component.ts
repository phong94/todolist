import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/user.service';
import { DbService } from '../services/db.service';

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
    userName: string;
    constructor(private userService: UserService, private dbService: DbService) {}

    addNewUser(){
		if(this.userName == null || this.userName == ""){
			//Do nothing
		}
		else{
			this.dbService.storeUser(this.userName).subscribe(
				(response) => console.log(response),
				(error) => console.log(error)
			);
			this.userService.userArray.push(this.userName);
			this.userName = "";
		}	
	}
}