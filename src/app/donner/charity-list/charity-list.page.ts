import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../list.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.page.html',
  styleUrls: ['./charity-list.page.scss'],
})
export class CharityListPage implements OnInit {
  loading = true;
  charityList;
  constructor(public router: Router,
              private storage: Storage,
              private service: ListService,
              public http: HttpClient) {
  }
  result: any = [];
  data: Observable<any>;
  ngOnInit() {
    this.http.get(`${this.service.homeUrl}/charityHouses/list`,
        {observe: 'response'}).subscribe(response => {
      if (response.status === 200 || response.status === 201) {
        this.charityList = response.body;
        console.log('data loading from API');
        this.result = this.charityList.content;
        localStorage.removeItem('charityHouses');
        localStorage.setItem('charityHouses', JSON.stringify(this.result));
        console.log('charityList : ', this.charityList.content);
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
    // this.data = this.http.get('http://localhost:8095/charityHouses/list');
    // // this.loading = false;
    // console.log('data', this.data);
    // this.data.subscribe(data => {
    //   this.result = data.content;
    // });
    // this.loading = false;
    // console.log('result' + this.result);
  }

  loadData() {
    this.result = JSON.parse(localStorage.getItem('charityHouses'));
    // this.storage.get('charityHouses').then((val) => {
    //   console.log('Your charity houses list is', this.result);
    // });
  }
  donateFund(item) {
    this.router.navigate(['donate-fund', item]);
    // const url = `charityList/${item.id}`;
    // this.router.navigateByUrl(url);
  }

  donateFood(item) {
    this.router.navigate(['donate-food', item]);
  }
}
