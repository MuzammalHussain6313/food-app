import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../list.service';


@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.page.html',
  styleUrls: ['./charity-list.page.scss'],
})
export class CharityListPage implements OnInit {
  loading = true;
  constructor(public router: Router,
              public http: HttpClient) {
  }
  result: any = [];
  data: Observable<any>;
  ngOnInit() {
    this.data = this.http.get('http://localhost:8095/charityHouses/list');
    // this.loading = false;
    console.log('data', this.data);
    this.data.subscribe(data => {
      this.result = data.content;
    });
    this.loading = false;
    console.log('result' + this.result);
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
