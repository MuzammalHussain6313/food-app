import {Component, OnInit} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {ListService} from './list.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    // public appPages = [
    //   {
    //     title: 'Home',
    //     url: '/home',
    //     icon: 'home'
    //   },
    //   {
    //     title: 'Users',
    //     url: '/list',
    //     icon: 'list'
    //   },
    //   {
    //     title: 'Setting',
    //     url: '/setting',
    //     icon: 'settings'
    //   },
    //   {
    //     title: 'Charity Houses',
    //     url: '/charityList',
    //     icon: 'home'
    //   },
    //   {
    //     title: 'Donner List',
    //     url: '/donner-list',
    //     icon: 'list'
    //   },
    //   {
    //     title: 'Login',
    //     url: '/login',
    //     icon: 'log-in'
    //   },
    //   {
    //     title: 'Register',
    //     url: '/register',
    //     icon: 'person-add'
    //   }
    // ];
    role: any;
    user: any;

    constructor(
        private platform: Platform,
        private router: Router,
        private splashScreen: SplashScreen,
        private service: ListService,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    appPages = [];

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.service.currentMessage.subscribe(data => {
            console.log('role coming', data);
            if (data === false) {
                this.role = localStorage.getItem('role');
                console.log('role', this.role);
                this.loadUserAndPages(this.role);
            } else if (data) {
                this.role = data;
                this.role = this.role.role;
                console.log('test', this.role);
                this.loadUserAndPages(this.role);
            }
        });
    }

    loadUserAndPages(role: any) {
        this.appPages = JSON.parse(localStorage.getItem('appPages'));
        if (role === 'admin') {
            this.user = JSON.parse(localStorage.getItem('adminUser'));
            console.log('admin', this.user);
        } else if (role === 'donner') {
            this.user = JSON.parse(localStorage.getItem('donner'));
            console.log('donner', this.user);
        } else if (role === 'charity house') {
            this.user = JSON.parse(localStorage.getItem('charity house'));
            console.log('charity house', this.user);
        }
    }
    logOut() {
        alert('Are you sure to logout application.');
        localStorage.removeItem('role');
        localStorage.removeItem('appPages');
        this.router.navigate(['']);
    }
}

