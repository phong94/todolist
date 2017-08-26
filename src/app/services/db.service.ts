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
        //firebase.database().ref('/data/KsRezEyx7Do6ENfHM3r')
        var data = firebase.database().ref('/data/');
        data.once('value', function(snapshot) {
            var list = snapshot.val();
            for (let x in list) {
                if (list[x] == 'aaaaa') {
                    console.log("GOTEMLOL");
                }
            };
            //console.log(list['-KsRo8y3YpjmHxc0nteX']);
        });
        //firebase.database().ref('/data/-KsRezEyx7Do6ENfHM3r').remove();
        let userJsonObj = {"user": user};
        //return this.http.delete('https://todoapp-2b701.firebaseio.com/data.json', 'KsHospceD5lXXMLZFXx');
    }

    
}