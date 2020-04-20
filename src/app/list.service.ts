import {Injectable} from '@angular/core';

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
    constructor() {
    }

    addUser(item: number) {
        this.user = item;
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
