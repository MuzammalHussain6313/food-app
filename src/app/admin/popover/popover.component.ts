import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {ListPage} from '../list/list.page';
import {Observable} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController,
              private navParams: NavParams,
              private router: Router,
              private http: HttpClient,
              private route: ActivatedRoute) { }
  id;
  propertyList: any;
  data: Observable<any>;
  user;
  ngOnInit() {
    this.id = this.navParams.data.id;
    console.log('id ' + this.id);
    const val = this.id;
    console.log(val);
    const url  = `http://localhost:8095/users/getUser/${val}`;
    this.data =  this.http.get(url);
    console.log(this.data);
    this.data.subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    console.log(this.user);
  }

  deleteProperty() {
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
    alert('deleted successfully');
    this.router.navigate(['list']);
  }

  callAPI(student): Observable<any> {
    // delete code added and working correctly.
    const url = `http://localhost:8095/users/deleteUser/${student.id}`;
    console.log('link', url);
    return this.http.delete(url);
  }
  updateItem() {
    const id = this.user.id;
    const url = `update/${id}`;
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
