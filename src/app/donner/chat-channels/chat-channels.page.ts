import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {IonContent} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../list.service';

@Component({
  selector: 'app-chat-channels',
  templateUrl: './chat-channels.page.html',
  styleUrls: ['./chat-channels.page.scss'],
})
export class ChatChannelsPage implements OnInit {
  channels = [];
  currentUser;
  recivedData;
  compareUser;
  constructor(public db: AngularFireDatabase,
              public router: Router,
              public http: HttpClient,
              private service: ListService) {
    this.loadUser();
    this.http.get(`${this.service.homeUrl}/channels/list/${this.compareUser}`,
        {observe: 'response'}).subscribe(response => {
      if (response.status === 200 || response.status === 201) {
        this.recivedData = response.body;
        this.channels = this.recivedData;
      }
      console.log('status code', response.status);
      console.log('channels', this.channels);
      console.log('complete content', response.body);
      console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
    }, (error) => {
      console.log('error', error);
    });
  }
  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log('donner', this.currentUser);
    this.compareUser = this.currentUser.user.first_name.toLowerCase() + '-' + this.currentUser.user.last_name.toLowerCase();
  }

  openChat(item: any) {
    localStorage.setItem('channelName', JSON.stringify(item));
    console.log('sending item: ', item);
    this.router.navigate(['donner-chat']);
  }

  changeValue(channelName: any) {
    const trimString = channelName.replace(this.currentUser.user.first_name.toLowerCase(), '')
        .replace(this.currentUser.user.last_name.toLowerCase(), '')
        .split('-').join(' ');
    console.log('trim', trimString);
    return trimString;
  }
}
