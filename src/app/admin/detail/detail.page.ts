import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ListService} from '../../list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor(private route: ActivatedRoute,
                private http: HttpClient, private router: Router
    ) {
    }

    result: any = [];
    data: Observable<any>;
    user;

    ngOnInit() {

        this.route.paramMap.subscribe(paramMap => {
            const val = paramMap.get('id');
            // const test = JSON.parse(val);
            // console.log(val);
            // console.log('obj', test);
            const url  = `http://localhost:8095/users/getUser/${1}`;
            this.data =  this.http.get(url);
            console.log(this.data);
            this.data.subscribe(data => {
                this.user = data;
                console.log(this.user);
            });
            console.log(this.user);
            });
    }

    deleteStudent() {
        console.log('formData ' + this.user.id);
        this.callAPI(this.user).subscribe(
            data => {
                console.log('I got this response -> ', data);
                this.router.navigate(['list']);
            },
            error => {
                console.log('error', error);
            }
        );
        this.router.navigate(['list']);
    }

    callAPI(student): Observable<any> {
        const url = `http://localhost:8095/users/deleteUser/${this.user.id}`;
        console.log('link', url);
        return this.http.delete(url);
    }

    updateItem() {
        const id = this.user.id;
        const url = `update/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }

    contactDealer(contactNumber: any) {
        alert('You can contactwith owner via ' + contactNumber + ' Number.');
    }

    donateFund() {

    }

    donateFood() {

    }
}
