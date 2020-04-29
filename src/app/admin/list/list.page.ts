import {Component, OnInit} from '@angular/core';
import {ListService} from '../../list.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PopoverController} from '@ionic/angular';
import {PopoverComponent} from '../popover/popover.component';
import {Storage} from '@ionic/storage';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    t;
    constructor(public router: Router,
                private storage: Storage,
                public http: HttpClient,
                private service: ListService,
                public popoverController: PopoverController) {
    }
    result: any = [];
    data: Observable<any>;

    loadData() {
        this.storage.get('users').then((val) => {
            this.result = val;
            console.log('Your age is', val);
        });
    }

    ngOnInit(): void {
        const url = this.service.homeUrl + '/users/list';
        this.http.get(url, {observe: 'response'}).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                console.log('data loading from API');
                this.result = this.t.content;
                this.storage.clear();
                this.storage.set('users', this.result);
                console.log('t : ', this.t.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('data loading from loadData function.');
            this.loadData();
            console.log('error', error);
        });
        // this.data = this.http.get('http://localhost:8095/users/list');
        // this.data.subscribe(data => {
        //   // if (data.status === 200) {
        //   console.log('code', data.status);
        //   console.log('data', this.data);
        //   this.result = data.content;
        // //   this.storage.set('users', this.result);
        //   // } else {
        //   //   this.loadData();
        //   // }
        //  });
        // // if (!this.result) {
        // //   this.loadData();
        // // } else if (this.result) {
        // //   this.storage.set('users', this.result);
        // // }
        // this.loadData();
        console.log('result' + this.result);
    }

    addUser() {
        this.router.navigate(['addUser']);
    }

    showSingleItem(item: any) {
        // const id = '{' +
        //     '"id": 1,' +
        //     '"streetAddress": "Home 2 steet 1",' +
        //     '"city": "Lahore",' +
        //     '"zipCode": 54500,' +
        //     '"state": "punjab",' +
        //     '"country": "Pakistan"' +
        //     '}';
        const id = item.id;
        const url = `list/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }

    async presentPopover(myEvent, item: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            componentProps: {id: item.id}
        });
        return await popover.present();
    }

    updateItem(item: any) {
        const id = item;
        const url = `update/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }

    deleteProperty(item: any) {
        console.log('id ' + item);
        this.callAPI(item).subscribe(
            data => {
                console.log('I got this response -> ', data);
                this.router.navigate(['list']);
            },
            error => {
                console.log('error', error);
            }
        );
        alert('deleted successfully');
        this.router.navigate(['list']);
    }
    callAPI(student): Observable<any> {
        // delete code added and working correctly.
        const url = `${this.service.homeUrl}/users/deleteUser/${student.id}`;
        console.log('link', url);
        return this.http.delete(url);
    }
}
