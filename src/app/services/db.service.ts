import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

import { User } from '../models/user';

@Injectable()
export class DbService {
    constructor(private http: Http) {}

    storeUser(user: string) {
        let userObj = new User(user);
        return this.http.post('https://todoapp-2b701.firebaseio.com/data.json', userObj);
    }

    getUsers(): Promise<any> {
        var data = firebase.database().ref('/data/');
        let userArray: string[] = [];
        return new Promise<any>((resolve, reject) => {
            data.on('value', function(snapshot) {
                userArray = [];
                var userList = snapshot.val();

                for (let key in userList) {
                    userArray.push(userList[key].user);
                }
                resolve(userArray);
            });
        })
    }

    deleteUser(user: string) {
        //firebase.database().ref('/data/KsRezEyx7Do6ENfHM3r')
        var data = firebase.database().ref('/data/');
        data.once('value', function(snapshot) {
            var list = snapshot.val();

            for (let key in list) {
                if (list[key].user == user) {
                    firebase.database().ref('/data/' + key).remove();
                }
            };
            
        });

    }

    
}