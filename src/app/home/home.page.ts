import {Component} from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private service: ListService,
                private router: Router) {
    }

    data;

    clickSub: any;

    loadService() {
        this.data = this.service.getUser();
        console.log('data', this.data);
    }

    openPage() {
        this.router.navigate(['profile-picture']);
    }
}
