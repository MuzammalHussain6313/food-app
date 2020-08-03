(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/register/register.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/register/register.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"registerForm\">\n        <ion-grid>\n            <ion-row color=\"justify-content-center\">\n                <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                    <div class=\"ion-text-center\">\n                        <h3>Create your account!</h3>\n                    </div>\n                    <div class=\"ion-padding\">\n                        <ion-item>\n                            <ion-input name=\"firstName\" formControlName=\"first_name\" type=\"text\" placeholder=\"First Name\"></ion-input>\n                        </ion-item>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"registerFormControl.first_name.touched && registerFormControl.first_name.errors?.required\">First name required.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerFormControl.first_name.touched && registerFormControl.first_name.errors?.pattern\">Enter only Alphabets.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('first_name').hasError('minlength')\">Enter at least 3 charecters.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('first_name').hasError('maxlength')\">Enter 20 charecters maximum.</span>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.first_name.errors?.required\">First name required.</span>\n                        </div>\n                        <ion-item>\n                            <ion-input name=\"lastName\" formControlName=\"last_name\" type=\"text\" placeholder=\"Last Name\"></ion-input>\n                        </ion-item>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"registerFormControl.last_name.touched && registerFormControl.last_name.errors?.required\">First name required.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerFormControl.last_name.touched && registerFormControl.last_name.errors?.pattern\">Enter only Alphabets.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('last_name').hasError('minlength')\">Enter at least 3 charecters.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('last_name').hasError('maxlength')\">Enter 20 charecters maximum.</span>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.last_name.errors?.required\">Last name required.</span>\n                        </div>\n                        <ion-item>\n                            <ion-input (focusout)=\"onFoucusOut()\" (keyup)=\"removeError()\" (change)=\"checkEmail()\" name=\"email\" formControlName=\"email\" type=\"email\" placeholder=\"your@email.com\"></ion-input>\n                            <ion-spinner color=\"secondary\" name=\"lines\" *ngIf=\"mailloading\"></ion-spinner>\n                        </ion-item>\n                        <div *ngIf=\"emailVerification\">\n                            <span class=\"text-danger\">User with that email is already exists.<br> Enter another email</span>\n                        </div>\n                        <div *ngIf=\"emailEmptyCheck\">\n                            <span class=\"text-danger\">You can't enter only white space.</span>\n                        </div>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.email.errors?.required\">Email is required.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('email').hasError('pattern')\">You can enter alphabets numeric value and spacial character and dot.</span>\n                        </div>\n                        <ion-item>\n                            <ion-input (focusout)=\"onFoucusOutUsername()\" (keyup)=\"removeErrorUsername()\" (change)=\"checkUsername()\" name=\"username\" formControlName=\"user_name\" type=\"text\" placeholder=\"username\"></ion-input>\n                        </ion-item>\n                        <div *ngIf=\"usernameVerification\">\n                            <span class=\"text-danger\">User with that username is already exists.<br> Enter another username</span>\n                        </div>\n                        <div *ngIf=\"usernameEmptyCheck\">\n                            <span class=\"text-danger\">You can't enter only white space.</span>\n                        </div>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.user_name.errors?.required\">username is required.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('user_name').hasError('pattern')\">You can enter alphabets numeric value for username.</span>\n                        </div>\n                        <ion-item>\n                            <ion-input placeholder=\"Password\" formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n                        </ion-item>\n                        <div>\n                            <ion-label class=\"text-danger\" *ngIf=\"submitted && registerFormControl.password.errors?.required\">password is required.</ion-label>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('password').hasError('minlength')\">Minimum length of password should 5.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerForm.get('password').hasError('pattern')\">Enter alpha numeric value for password.</span>\n                        </div>\n                        <ion-item>\n                            <ion-input (keyup)=\"removePasswordMatchError()\" (focusout)=\"matchPasswords()\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n                            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n                        </ion-item>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.confirm_password.errors?.required\">confirm password is required.</span>\n                            <span class=\"text-danger\" *ngIf=\"registerFormControl.confirm_password.touched && registerForm.get('confirm_password').hasError('mismatchedPasswords')\">Password and confirm password should match.</span>\n                        </div>\n                        <div *ngIf=\"passwordMatch\">\n                            <span class=\"text-danger\">Password and confirm password should match.</span>\n                        </div>\n                        <ion-item>\n                            <ion-label position=\"floating\">User Role</ion-label>\n                            <ion-select value=\"Donner\" formControlName=\"role\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                                <ion-select-option value=\"donner\">Donner</ion-select-option>\n                                <ion-select-option value=\"charity house\">Charity House</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <div>\n                            <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.role.errors?.required\">Please ! select your user role.</span>\n                        </div>\n                    </div>\n                    <div class=\"ion-padding\">\n                        <ion-button size=\"large\" (click)=\"loadForm()\" color=\"primary\" type=\"submit\" expand=\"block\">Proceed  &nbsp;&nbsp;&nbsp;<ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner></ion-button>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/register/register.module.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/register/register.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/authentication/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.page.scss":
/*!************************************************************!*\
  !*** ./src/app/authentication/register/register.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1hcHAvc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N3b3JkSWNvbntcclxuICBmb250LXNpemU6MnJlbSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iLCIucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/register/register.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/register/register.page.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, http, service, formBuilder) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.submitted = false;
        this.usernameVerification = false;
        this.usernameEmptyCheck = false;
        this.emailVerification = false;
        this.emailEmptyCheck = false;
        this.passwordMatch = false;
    }
    Object.defineProperty(RegisterPage.prototype, "registerFormControl", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.ngOnInit = function () {
        this.formInitializer();
        // this.loading = true;
    };
    RegisterPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    RegisterPage.prototype.formInitializer = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = this.formBuilder.group({
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(EMAILPATTERN)]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
            role: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])],
            confirm_password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ]
        });
    };
    RegisterPage.prototype.mismatchedPasswords = function (otherControlName) {
        return function (control) {
            var otherControl = control.root.get(otherControlName);
            if (otherControl) {
                var subscription_1 = otherControl.valueChanges.subscribe(function () {
                    control.updateValueAndValidity();
                    subscription_1.unsubscribe();
                });
            }
            return otherControl && control.value !== otherControl.value
                ? { match: true }
                : null;
        };
    };
    RegisterPage.prototype.loadForm = function () {
        this.submitted = true;
        this.loading = true;
        if (!this.registerForm.valid) {
            alert('Please provide all the required valid values!');
            return false;
        }
        else {
            var data = this.registerForm.value;
            if (data.role === 'donner') {
                console.log('formData', this.registerForm.value);
                var userData = this.registerForm.value;
                alert(userData.role);
                this.loading = false;
                this.router.navigate(['register-donner', userData]);
            }
            if (data.role === 'charity house') {
                console.log('formData', this.registerForm.value);
                var userData = this.registerForm.value;
                this.loading = false;
                this.router.navigate(['register-charity-house', userData]);
                // alert(formData.role);
                // this.obj1 = '1';
                // this.obj2 = '2';
                // const fullID = '{ "obj2" : "' + this.obj2 + '", "obj1" : "' + this.obj1 + '" } ';
                // const t = JSON.parse(fullID);
                // console.log('full Object', t);
            }
        }
    };
    RegisterPage.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.valid) {
            alert('Form Submitted succesfully!!!\n Check the values in browser console.');
            console.table(this.registerForm.value);
        }
    };
    RegisterPage.prototype.checkEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.mailloading = true;
                test = this.registerForm.value;
                item = test.email;
                console.log('test', test);
                console.log('email', item);
                if (item) {
                    this.http.get(this.service.homeUrl + "/users/email/" + item, { observe: 'response' }).subscribe(function (response) {
                        if (response.status === 200 || response.status === 201) {
                            console.log('response', response);
                            var tester = response.body;
                            console.log('tester', tester.toString());
                            if (tester.toString() === 'false') {
                                _this.emailVerification = true;
                                _this.mailloading = false;
                            }
                            _this.mailloading = false;
                            // this.donnerList = response.body;
                            // console.log('content', this.donnerList);
                            // this.results = this.donnerList.content;
                        }
                    }, function (error) {
                        console.log('error.', error);
                    });
                    this.mailloading = false;
                }
                this.mailloading = false;
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.onFoucusOut = function () {
        var test = this.registerForm.value;
        var item = test.email;
        console.log('test', test);
        console.log('email', item);
        var str = '    ';
        if (!str.replace(/\s/g, '').length) {
            // alert('str contains spaces.');
        }
        if (item === '' || item == null) {
            this.emailEmptyCheck = true;
        }
    };
    RegisterPage.prototype.removeError = function () {
        this.emailVerification = false;
        this.emailEmptyCheck = false;
    };
    RegisterPage.prototype.checkUsername = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var test, item;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                test = this.registerForm.value;
                item = test.user_name;
                console.log('test', test);
                console.log('username', item);
                if (item) {
                    this.http.get(this.service.homeUrl + "/users/username/" + item, { observe: 'response' }).subscribe(function (response) {
                        if (response.status === 200 || response.status === 201) {
                            console.log('response', response);
                            var tester = response.body;
                            console.log('tester', tester.toString());
                            if (tester.toString() === 'false') {
                                _this.usernameVerification = true;
                                _this.loading = false;
                            }
                            _this.loading = false;
                            // this.donnerList = response.body;
                            // console.log('content', this.donnerList);
                            // this.results = this.donnerList.content;
                        }
                    }, function (error) {
                        console.log('error.', error);
                    });
                    this.loading = false;
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.onFoucusOutUsername = function () {
        var test = this.registerForm.value;
        var item = test.user_name;
        console.log('test', test);
        console.log('username', item);
        var str = '    ';
        if (!str.replace(/\s/g, '').length) {
            // alert('str contains spaces.');
        }
        if (item === '' || item == null) {
            this.usernameEmptyCheck = true;
        }
    };
    RegisterPage.prototype.removeErrorUsername = function () {
        this.usernameVerification = false;
        this.usernameEmptyCheck = false;
    };
    RegisterPage.prototype.matchPasswords = function () {
        var data = this.registerForm.value;
        if (data.password === data.confirm_password) {
            this.passwordMatch = false;
        }
        else {
            this.passwordMatch = true;
        }
    };
    RegisterPage.prototype.removePasswordMatchError = function () {
        this.passwordMatch = false;
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/authentication/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-register-register-module-es5.js.map