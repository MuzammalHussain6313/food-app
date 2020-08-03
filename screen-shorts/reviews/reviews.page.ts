import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ListService} from '../../src/app/list.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(public router: Router,
              private storage: Storage,
              private service: ListService,
              public http: HttpClient) { }

  result: any = [];
  reviewsList: any = [];
  star: number[];
  stars: number[][];
  data: Observable<any>;
  counter = 0;
  ngOnInit() {
    this.http.get(`${this.service.homeUrl}/reviews/list`,
        {observe: 'response'}).subscribe(response => {
      if (response.status === 200 || response.status === 201) {
        this.reviewsList = response.body;
        console.log('data loading from API');
        this.result = this.reviewsList.content;
        localStorage.removeItem('reviewsList');
        localStorage.setItem('reviewsList', JSON.stringify(this.result));
        console.log('reviewsList : ', this.reviewsList.content);
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

  loadStar(item: any) {
    this.star = Array(item).fill(0).map((x, i) => i);
  }
  // loadStars() {
  //   console.log('in function');
  //   let count = 0;
  //   for (const item of this.result) {
  //     this.star = Array(item.star).fill(0).map((x, i) => i);
  //     this.stars[count] = this.star;
  //     console.log('data', item);
  //     count = count + 1;
  //   }
  //   // for (const item of this.result) {
  //   //   this.star = Array(item.star).fill(0).map((x, i) => i);
  //   //   this.stars.push(this.star);
  //   //   console.log('data', item);
  //   // }
  //   console.log('stars', this.stars);
  //   // this.reviewsList.forEach((value) => {
  //   //   console.log('data', value);
  //   // });
  //
  //   // console.log('stars', this.stars);
  // }
  loadData() {
    this.result = JSON.parse(localStorage.getItem('reviewsList'));
  }

}
