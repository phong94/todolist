import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbService {
    constructor(private http: Http) {}

    storeUser(user: string) {
        let userJsonObj = {"user": user};
        return this.http.post('https://todoapp-2b701.firebaseio.com/data.json', JSON.stringify(user));
    }
}