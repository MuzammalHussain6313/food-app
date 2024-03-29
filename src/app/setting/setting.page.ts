import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    manageNotification() {
    }

  helpUser() {
    this.router.navigate(['help']);
  }

  changePassword() {
    this.router.navigate(['change-password']);
  }

  openProfilePage() {
    this.router.navigate(['profile']);
  }
}
