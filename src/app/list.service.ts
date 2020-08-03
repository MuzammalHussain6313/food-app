import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
    providedIn: 'root'
})
export class ListService {
    charityHouse: any[];
    surahList: Array<{ id: any; name: string }> = [
        {id: '001', name: 'fatiha'},
        {id: '002', name: 'Baqarah'},
        {id: '003', name: 'Imran'}
    ];

    user: number;
    doner: number [] = [];
    private messageSource = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();
    constructor() {
    }
    role: any;
    homeUrl = 'http://localhost:8095';
    // homeUrl = 'https://food-distribution-app.herokuapp.com';
    addUser(item: number) {
        this.user = item;
    }

    changeMessage(message) {
        this.messageSource.next(message);
    }
    setRole(item: string) {
        this.role = item;
    }

    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    //
    // addDonner(item: any) {
    //     this.doner.push(item);
    // }
    // getDonner() {
    //     return this.doner;
    // }
    // addCharityHouse(item: any) {
    //     this.charityHouse = item;
    // }
    //
    // getCharityHouse() {
    //     return this.charityHouse;
    // }

    getSUrahList() {
        return this.surahList;
    }
    addSurah(surahForm: any) {
        console.log('form data' + surahForm);

        this.surahList.push(
            surahForm
        );
    }
}
