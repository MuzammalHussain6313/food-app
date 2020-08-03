import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';
import {AutosizeModule} from 'ngx-autosize';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];
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
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosizeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
