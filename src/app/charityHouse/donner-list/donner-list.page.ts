import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-donner-list',
  templateUrl: './donner-list.page.html',
  styleUrls: ['./donner-list.page.scss'],
})
export class DonnerListPage implements OnInit {
  constructor(public router: Router,
              public http: HttpClient) {
  }
  result: any = [];
  data: Observable<any>;
  ngOnInit() {
    this.data = this.http.get('http://localhost:8095/donners/list');
    // this.loading = false;
    console.log('data', this.data);
    this.data.subscribe(data => {
      this.result = data.content;
    });
    console.log('result' + this.result);
  }
  review(item: any) {
  }

  feedBack(item: any) {
   this.router.navigate(['feedback']);
  }
}
