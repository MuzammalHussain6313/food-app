import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import {AutosizeModule} from 'ngx-autosize';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
const firebaseConfig = {
    apiKey: 'AIzaSyCkF4ALd5GXXPrtq5Xt496r0BW0Kb5Vpek',
    authDomain: 'chat-app-in-ionic.firebaseapp.com',
    databaseURL: 'https://chat-app-in-ionic.firebaseio.com',
    projectId: 'chat-app-in-ionic',
    storageBucket: 'chat-app-in-ionic.appspot.com',
    messagingSenderId: '1089372479322',
    appId: '1:1089372479322:web:4fcee22f158c2c8cfe9d63',
    measurementId: 'G-5ZMBVRH11V'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        AutosizeModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
  providers: [
    StatusBar, FCM,
    SplashScreen,
      // LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
