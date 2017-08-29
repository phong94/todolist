import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

@Injectable()
export class DbService {
    constructor(private http: Http) {}

    storeUser(user: string) {
        let userJsonObj = {"user": user};
        return this.http.post('https://todoapp-2b701.firebaseio.com/data.json', JSON.stringify(user));
    }

    deleteUser(user: string) {
        // Get a reference to the firebase database
        var data = firebase.database().ref('/data/');

        // Read data once
        data.once('value', function(snapshot) {

            // Get a snapshot of the data
            var userList = snapshot.val();

            // Loop through the keys and find user to remove
            for (let key in userList) {
                if (userList[key] == user) {
                    firebase.database().ref('/data/' + key).remove();
                }
            };
            //console.log(list['-KsRo8y3YpjmHxc0nteX']);
        });
        //firebase.database().ref('/data/-KsRezEyx7Do6ENfHM3r').remove();
    }

    getUsers(): Promise<any> {
        let userArray: string[] = [];
        var data = firebase.database().ref('/data/');

        return new Promise<any>((resolve, reject) => {
            data.on('value', function(snapshot) {
                userArray = [];
                var userList = snapshot.val();

                for (let key in userList) {
                    userArray.push(userList[key]);
                }

                resolve(userArray);
            });
        })
        

       
    }

    
}