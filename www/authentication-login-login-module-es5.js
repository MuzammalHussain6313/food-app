(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginForm\" >\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Login to your account!</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Email\"></ion-input>\n            </ion-item>\n            <span class=\"error-message\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">email is required.</span>\n            <ion-item>\n              <ion-input placeholder=\"Password\" formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n              <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n            </ion-item>\n            <span class=\"error-message\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">Password is required.</span>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button shape=\"round\" size=\"large\" (click)=\"login()\" color=\"primary\" type=\"submit\" expand=\"block\">Login</ion-button>\n          </div>\n          <div>\n            <ion-label *ngIf=\"test\">Invalid email OR password. Please Enter correct details.</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-text (click)=\"forgotPassword()\" color=\"danger\">\n    <h4 style=\"padding-left: 30px\">Forgot Password?</h4>\n  </ion-text>\n  <ion-label>\n  </ion-label>\n  <ion-footer style=\"padding-top: 40px\">\n    <ion-button (click)=\"registerUser()\" size=\"large\" expand=\"block\" color=\"secondary\">\n      <ion-img class=\"register-icon\" src=\"/assets/person-add-sharp.svg\"></ion-img>\n      REGISTER A NEW USER</ion-button>\n  </ion-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/authentication/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/authentication/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.page.scss":
/*!******************************************************!*\
  !*** ./src/app/authentication/login/login.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n\n.register-icon {\n  width: 35px;\n  height: 35px;\n  padding-right: 5px;\n}\n\n.forgot-password {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1hcHAvc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZEljb257XHJcbiAgZm9udC1zaXplOjJyZW0gIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlZ2lzdGVyLWljb257XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uZm9yZ290LXBhc3N3b3Jke1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAvL2NvbG9yOiBkYXJrcmVkO1xyXG4gIC8vdGV4dC11bmRlcmxpbmU6ICMwMDcwNjk7XHJcbn1cclxuIiwiLnBhc3N3b3JkSWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZ2lzdGVyLWljb24ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/authentication/login/login.page.ts":
/*!****************************************************!*\
  !*** ./src/app/authentication/login/login.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(route, http, formBuilder, service, router) {
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.test = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.isSubmitted = false;
        this.appPages = [];
    }
    LoginPage.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.formInitializer = function () {
        this.loginForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.loginForm.valid) {
            var loginData = this.loginForm.value;
            this.saveHttpReq(loginData).subscribe(function (d) {
                console.log('I got this response -> ', d);
                console.log('data.emailStatus', d.emailStatus);
                console.log('response', d);
                if (d.emailStatus && d.loginStatus && d.applicationStatus === 'approved' && d.role != null) {
                    if (d.role === 'donner') {
                        _this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'charity Houses', url: '/charityList', icon: 'list' },
                            { title: 'Open Chat', url: '/chat-channels', icon: 'ios-chatboxes' },
                            { title: 'Reports', url: "/reports/" + d.donner.id, icon: 'list' },
                            { title: 'Settings', url: '/setting', icon: 'settings' },
                            { title: 'Feedbacks', url: '/feed-backs', icon: 'list' }];
                        _this.service.setRole(d.role);
                        console.log('donner coming from API', d.donner);
                        localStorage.setItem('user', JSON.stringify(d.donner));
                        localStorage.setItem('appPages', JSON.stringify(_this.appPages));
                        localStorage.setItem('role', d.role); // store role in local storage
                        _this.service.changeMessage({ role: d.role });
                        _this.router.navigate(['home']);
                    }
                    if (d.role === 'charity house') {
                        _this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'Donner List', url: '/donner-list', icon: 'list', },
                            { title: 'Setting', url: '/setting', icon: 'settings' },
                        ];
                        _this.service.setRole(d.role);
                        localStorage.setItem('appPages', JSON.stringify(_this.appPages));
                        localStorage.setItem('user', JSON.stringify(d.charityHouse));
                        localStorage.setItem('role', d.role); // store role in local storage
                        _this.service.changeMessage({ role: d.role });
                        _this.router.navigate(['home']);
                    }
                    if (d.role === 'admin') {
                        _this.appPages = [{ title: 'Home', url: '/home', icon: 'home' },
                            { title: 'Manage Users', url: '/tabs', icon: 'list', },
                            { title: 'Message', url: '/chat-list', icon: 'ios-chatboxes' },
                            { title: 'Profile', url: "/admin-profile/" + d.user.id, icon: 'person' }];
                        console.log('user', d.role);
                        _this.service.setRole(d.role);
                        localStorage.setItem('user', JSON.stringify(d.user));
                        localStorage.setItem('appPages', JSON.stringify(_this.appPages));
                        localStorage.setItem('role', d.role); // store role in local storage
                        _this.service.changeMessage({ role: d.role });
                        _this.router.navigate(['home']);
                    }
                }
                else if (d.emailStatus && d.loginStatus && d.applicationStatus === null) {
                    alert('Your email and password is correct but Application status is disapproved. ' +
                        'Now you hve to check confirmation Email and approve your application status. Thank you!');
                }
                else if (d.emailStatus || d.loginStatus) {
                    alert('Invalid Email, password. Try again latter !');
                }
                else if (d.emailStatus === false) {
                    alert('Sorry ! User with that email, password does not exist');
                }
                // this.router.navigate(['home']);
            }, function (error) {
                alert(':( OOPS ! Server Error. Confirm your internet connection.');
                console.log('error', error);
            });
            // if (loginData.role === 'donner') {
            //     this.service.setRole(loginData.role);
            //     localStorage.setItem('role', loginData.role); // store role in local storage
            //     this.service.changeMessage({role: loginData.role});
            //     // this.service.addDonner(loginData);
            // }
            // if (loginData.role === 'charity house') {
            //     this.service.addUser(4);
            //     this.service.setRole(loginData.role);
            //     localStorage.setItem('role', loginData.role); // store role in local storage
            //     this.service.changeMessage({role: loginData.role});
            //     this.router.navigate(['home']);
            // }
            // if (loginData.role === 'admin') {
            //     this.service.addUser(4);
            //     this.service.setRole(loginData.role);
            //     localStorage.setItem('role', loginData.role); // store role in local storage
            //     this.service.changeMessage({role: loginData.role});
            //     this.router.navigate(['home']);
            // }
        }
        else {
            return false;
            // comment
        }
    };
    Object.defineProperty(LoginPage.prototype, "errorControl", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.saveHttpReq = function (dataObj) {
        console.log('recieved data ', dataObj);
        var url = this.service.homeUrl + "/users/login";
        console.log('url', url);
        var test = this.http.post(url, dataObj);
        return test;
    };
    LoginPage.prototype.registerUser = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/authentication/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-login-login-module-es5.js.map