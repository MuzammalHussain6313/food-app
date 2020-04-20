import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    constructor(
        private router: Router,
        private http: HttpClient,
        private formBuilder: FormBuilder
    ) {
    }

    registerForm: FormGroup;
    passwordType = 'password';
    passwordIcon = 'eye-off';
    loading: true;
    submitted = false;
    obj1;
    obj2;

    ngOnInit() {
        this.formInitializer();
    }

    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    formInitializer() {
        const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = this.formBuilder.group({
            first_name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(20)]],
            last_name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(20)]],
            email: [null, [Validators.required, Validators.pattern(EMAILPATTERN)]],
            user_name: [null, [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
            role: [null, [Validators.required]],
            password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            confirm_password: [
                '',
                [
                    Validators.required,
                    this.mismatchedPasswords('password')
                ]
            ]
        });
    }

    mismatchedPasswords(otherControlName: string) {
        return (control: AbstractControl): { [key: string]: any } => {
            const otherControl: AbstractControl = control.root.get(otherControlName);

            if (otherControl) {
                const subscription: Subscription = otherControl.valueChanges.subscribe(
                    () => {
                        control.updateValueAndValidity();
                        subscription.unsubscribe();
                    }
                );
            }
            return otherControl && control.value !== otherControl.value
                ? {match: true}
                : null;
        };
    }

    loadForm() {
        this.submitted = true;
        if (!this.registerForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        } else {
            const data = this.registerForm.value;
            if (data.role === 'donner') {
                console.log('formData', this.registerForm.value);
                const userData = this.registerForm.value;
                alert(userData.role);
                this.router.navigate(['register-donner', userData]);
            }
            if (data.role === 'charity house') {
                console.log('formData', this.registerForm.value);
                const userData = this.registerForm.value;
                this.router.navigate(['register-charity-house', userData]);
                // alert(formData.role);
                // this.obj1 = '1';
                // this.obj2 = '2';
                // const fullID = '{ "obj2" : "' + this.obj2 + '", "obj1" : "' + this.obj1 + '" } ';
                // const t = JSON.parse(fullID);
                // console.log('full Object', t);
            }
        }
    }

    get registerFormControl() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.valid) {
            alert('Form Submitted succesfully!!!\n Check the values in browser console.');
            console.table(this.registerForm.value);
        }
    }
}
