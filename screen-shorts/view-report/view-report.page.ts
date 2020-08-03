import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../src/app/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.page.html',
  styleUrls: ['./view-report.page.scss'],
})
export class ViewReportPage implements OnInit {
  constructor(public router: Router,
              private storage: Storage,
              private service: ListService,
              public http: HttpClient) {
  }
  temp;
  close = true;
  open = false;
  donner; id;
  reportList;
  result: any = [];
  data: Observable<any>;
  ngOnInit() {
    const donner = JSON.parse(localStorage.getItem('user'));
    const donnerID = donner.id;
    console.log('donner', donnerID);
    this.http.get(`${this.service.homeUrl}/reports/list`,
        {observe: 'response'}).subscribe(response => {
      if (response.status === 200 || response.status === 201) {
        this.reportList = response.body;
        console.log('data loading from API');
        this.result = this.reportList.content;
        localStorage.removeItem('reportList');
        localStorage.setItem('reportList', JSON.stringify(this.result));
        console.log('reportList : ', this.reportList.content);
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
    console.log('result' + this.result);
  }

  loadData() {
    this.result = JSON.parse(localStorage.getItem('reportList'));
  }
  expandCLick(item) {
    item.show = !item.show;
    // this.temp = this.close;
    // this.close = this.open;
    // this.open = this.temp;
  }
}
