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
  apiKey: 'AIzaSyBmQgRPtxBmoCx7yspH4X877x2lFiBCOag',
  authDomain: 'food-distribution-app-fb350.firebaseapp.com',
  databaseURL: 'https://food-distribution-app-fb350.firebaseio.com',
  projectId: 'food-distribution-app-fb350',
  storageBucket: 'food-distribution-app-fb350.appspot.com',
  messagingSenderId: '929354685211',
  appId: '1:929354685211:web:3780621a28f01b84a1d1be',
  measurementId: 'G-NKFBGSVN9C'
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
