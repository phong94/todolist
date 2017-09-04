import { Component, Input, OnInit } from '@angular/core';
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
    
    userName: string;
    userArray:string[] = this.userService.userArray;
    firebaseUserArray: string[] = [];

    ngOnInit() {
        this.displayUsers();
    }

    displayUsers() {
        return this.dbService.getUsers().then(
            (result) => this.firebaseUserArray = result
        );
    }

    selectUser(event, user: string) {
        this.selectedUser = user;
        this.userService.currentUser.emit(this.selectedUser);
        this.dbService.getCurrentUserKey(this.selectedUser);
    }

    deleteUser(user: string) {
        this.dbService.deleteUser(user);
        this.userService.currentUser.emit(null);
        this.displayUsers();
    }

    addNewUser(){
		if(this.userName == null || this.userName == ""){
			//Do nothing
		}
		else{
			this.dbService.storeUser(this.userName).subscribe(
				(response) => console.log("added user: ", response),
				(error) => console.log(error)
			);

			this.userName = "";
		}	

        setTimeout(() => {
            this.displayUsers();
        }, 500);
	}
}