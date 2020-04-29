import { Component } from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ListService,
              private localNotifications: LocalNotifications,
              private alertController: AlertController,
              private router: Router) {}

  data;

  clickSub: any;
  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: data,
      buttons: ['OK']
    });
    await alert.present();
  }
  unsub() {
    this.clickSub.unsubscribe();
  }
  simpleNotif() {
    this.clickSub = this.localNotifications.on('click').subscribe(data => {
      console.log(data);
      this.presentAlert('Your notifiations contains a secret = ' + data.data.secret);
      this.unsub();
    });
    this.localNotifications.schedule({
      id: 1,
      text: 'Single Local Notification',
      data: { secret: 'secret' }
    });
  }

  loadService() {
    this.data = this.service.getUser();
    console.log('data', this.data);
  }

    openPage() {
      this.router.navigate(['profile-picture']);
    }
}
