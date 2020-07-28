import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {IonContent} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
messages = [
        // {
        //     user: 'umar',
        //     createdAt: 1554090856000,
        //     msg: 'Hi ! how are you !'
        // },
        // {
        //     user: 'muzammal',
        //     createdAt: 1554090756000,
        //     msg: 'Hi ! i am fine!'
        // },
        // {
        //     user: 'osama',
        //     createdAt: 1554090656000,
        //     msg: 'what about you guys !'
        // }
        ];

    items: Observable<any[]>;
    currentUser = '';
    newMsg = '';
    s;
    role;
    user;
    donnerName;
    recivedData = [];
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;
    constructor(public db: AngularFireDatabase,
                private route: ActivatedRoute,
                private firestore: AngularFirestore) {
        this.s = this.db.list('/messages').valueChanges().subscribe( data => {
            console.log('data', data);
            this.recivedData = data;
            this.messages = this.recivedData.filter(x => x.user === this.donnerName || x.user === this.currentUser);
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.donnerName = paramMap.get('donnerName');
            console.log('donner name: ', this.donnerName);
            console.log('params : ', paramMap);
            this.loadUser();
            console.log('current user:', this.currentUser);
        });
    }

    loadUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.role = localStorage.getItem('role');
        console.log('role', this.role);
        console.log('user', this.user);
        if (this.role === 'donner') {
            this.currentUser = this.user.user.first_name + ' ' + this.user.user.last_name;
        }
        if (this.role === 'admin') {
            this.currentUser = this.user.first_name + ' ' + this.user.last_name;
        }
        if (this.role === 'charity house') {
            this.currentUser = this.user.user.first_name + ' ' + this.user.user.last_name;
        }
    }
    sendMessage() {
        this.db.list('/messages').push({
            user: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(() => {
                this.content.scrollToBottom(10);
            });

        // this.messages.push({
        //     msg: this.newMsg,
        //     user: 'umar',
        //     createdAt: new Date().getTime(),
        // });
        // this.newMsg = '';
        // setTimeout(() => {
        //     this.content.scrollToBottom(200);
        // });
    }
}
