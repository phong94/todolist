import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

import { User } from '../models/user';
import { Chore } from '../models/chore';

@Injectable()
export class DbService {
    constructor(private http: Http) {}

    currentUserKey: string = "";

    storeUser(user: string) {
        return this.http.post('https://todoapp-2b701.firebaseio.com/data.json', new User(user, new Chore(null, null)));
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

    storeTask(user: string, taskTitle: string) {
        // Create post object
        var postData = {
            user: user,
            chore: {
                title: taskTitle,
                description: "test"
            }
        };

        var updates = {};
        updates['/data/' + this.currentUserKey] = postData;
        return firebase.database().ref().update(updates);
    }

    getCurrentUserKey(user: string) {
        var data = firebase.database().ref('/data/');

        data.once('value', (snapshot) => {
            var list = snapshot.val();

            for (let key in list) {
                if (list[key].user == user) {
                    this.currentUserKey = key;
                }
            }
        });
    }

    
}