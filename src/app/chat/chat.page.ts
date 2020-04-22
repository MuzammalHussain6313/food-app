import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    messages = [
        {
            user: 'umar',
            createdAt: 1554090856000,
            msg: 'Hi ! how are you !'
        },
        {
            user: 'muzammal',
            createdAt: 1554090756000,
            msg: 'Hi ! i am fine!'
        },
        {
            user: 'osama',
            createdAt: 1554090656000,
            msg: 'what about you guys !'
        }];
    constructor() {
    }

    currentUser = 'umar';
    newMsg = '';
    @ViewChild(IonContent, {static: false}) content: IonContent;
    ngOnInit() {
    }

  sendMessage() {
      this.messages.push( {
        msg: this.newMsg,
        user: 'umar',
        createdAt: new Date().getTime(),
      });
      this.newMsg = '';
      setTimeout(() => {
        this.content.scrollToBottom(200);
      });
  }
}
