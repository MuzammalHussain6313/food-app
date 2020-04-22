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
              public http: HttpClient) {
    this.http.get('http://localhost:8095/charityHouses/list',
        {observe: 'response'}).subscribe(response => {
      if (response.status === 200 || response.status === 201) {
        this.charityList = response.body;
        console.log('data loading from API');
        this.result = this.charityList.content;
        // this.storage.clear();
        this.storage.set('charityHouses', this.result);
        this.storage.get('charityHouses').then((val) => {
          this.result = val;
          console.log('Your charity houses list saved in database is', val);
        });
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
  }
  result: any = [];
  data: Observable<any>;
  ngOnInit() {
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
    this.storage.get('charityHouses').then((val) => {
      this.result = val;
      console.log('Your charity houses list is', val);
    });
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
