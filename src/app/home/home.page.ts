import { Component } from '@angular/core';
import {ListService} from '../list.service';
import {Router} from '@angular/router';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ListService,
              private push: Push,
              private plateForm: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              // private localNotifications: LocalNotifications,
              // private alertController: AlertController,
              private router: Router) {
    plateForm.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushNotification();
    });
  }

  data;

  clickSub: any;
  // async presentAlert(data) {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     message: data,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
  // unsub() {
  //   this.clickSub.unsubscribe();
  // }
  // simpleNotif() {
  //   this.clickSub = this.localNotifications.on('click').subscribe(data => {
  //     console.log(data);
  //     this.presentAlert('Your notifiations contains a secret = ' + data.data.secret);
  //     this.unsub();
  //   });
  //   this.localNotifications.schedule({
  //     id: 1,
  //     text: 'Single Local Notification',
  //     data: { secret: 'secret' }
  //   });
  // }

  pushNotification() {
    const options: PushOptions = {
      android: {
        senderID: '667628560401'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    }

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  }
  loadService() {
    this.data = this.service.getUser();
    console.log('data', this.data);
  }

    openPage() {
      this.router.navigate(['profile-picture']);
    }
}
