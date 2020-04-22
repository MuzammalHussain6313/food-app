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
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
