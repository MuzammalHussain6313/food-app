import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../popover/popover.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(public router: Router,
              public http: HttpClient,
              public popoverController: PopoverController) {
    this.data = this.http.get('http://localhost:8095/users/list');
    this.data.subscribe(data => {
      this.result = data.content;
    });
    console.log('result' + this.result);
  }

  // test
  result: any = [];
  data: Observable<any>;
  ngOnInit(): void {
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
      componentProps: {id: item.id }
    });
    return await popover.present();
  }
}
