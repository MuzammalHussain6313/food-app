import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListService} from '../../list.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    constructor(private route: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private service: ListService,
                private router: Router) {
    }

    test = false;
    loginForm: FormGroup;
    data: Observable<any>;
    passwordType = 'password';
    passwordIcon = 'eye-off';
    isSubmitted = false;

    ngOnInit() {
        this.formInitializer();
    }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    formInitializer() {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required]],
            role: [null, [Validators.required]]
        });
    }

    login() {
        this.isSubmitted = true;
        if (this.loginForm.valid) {
            const loginData = this.loginForm.value;
            if (loginData.role === 'donner') {
                // this.service.addDonner(loginData);
                this.saveHttpReq(loginData).subscribe(d => {
                        console.log('I got this response -> ', d);
                        console.log('data.emailStatus', d.emailStatus);
                        if (d.emailStatus && d.loginStatus) {
                            this.service.addUser(d.userID);
                            this.router.navigate(['home']);
                        } else if (d.emailStatus || d.loginStatus) {
                            this.test = true;
                        }
                        // this.router.navigate(['home']);
                    },
                    error => {
                        console.log('error', error);
                    }
                );
            }
            if (loginData.role === 'charity house') {
                this.service.addUser(4);
                this.router.navigate(['home']);
            }
        } else {
            return false;
            // comment
        }
    }

    get errorControl() {
        return this.loginForm.controls;
    }

    saveHttpReq(dataObj): Observable<any> {
        console.log('recieved data ', dataObj);
        const url = `${this.service.homeUrl}/users/login`;
        const test = this.http.post(url, dataObj);
        return test;
    }
}
