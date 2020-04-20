import { Component } from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ListService) {}

  data;
  loadService() {
    this.data = this.service.getUser();
    console.log('data', this.data);
  }
}
