(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/change-password/change-password.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/change-password/change-password.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"changePasswordForm\" >\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Change your password!</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input formControlName=\"oldPassword\" type=\"text\" placeholder=\"Old Password\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input placeholder=\"Password\" formControlName=\"newPassword\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n              <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n            </ion-item>\n            <ion-item>\n              <ion-input (keyup)=\"removePasswordMatchError()\" (focusout)=\"matchPasswords()\" placeholder=\"Repeat Password\" formControlName=\"repeatPassword\" [type]=\"passwordType\" clearOnEdit=\"false\"></ion-input>\n              <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n            </ion-item>\n            <div *ngIf=\"passwordMatch\">\n              <span class=\"text-danger\">Password and confirm password should match.</span>\n            </div>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button [disabled]=\"changePasswordForm.invalid\" (click)=\"changePassword()\" color=\"primary\" type=\"submit\" expand=\"block\">Change Password</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/change-password/change-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/shared/change-password/change-password.page.ts");







var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/shared/change-password/change-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 0px !important;\n  margin: 0 auto !important;\n}\n\n.register-icon {\n  width: 35px;\n  height: 35px;\n  padding-right: 5px;\n}\n\n.forgot-password {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYW5nZS1wYXNzd29yZC9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLWFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N3b3JkSWNvbntcclxuICBmb250LXNpemU6MnJlbSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4ucmVnaXN0ZXItaWNvbntcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmR7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIC8vY29sb3I6IGRhcmtyZWQ7XHJcbiAgLy90ZXh0LXVuZGVybGluZTogIzAwNzA2OTtcclxufVxyXG4iLCIucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucmVnaXN0ZXItaWNvbiB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/change-password/change-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/change-password/change-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(route, http, formBuilder, service, router) {
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.passwordMatch = false;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
        this.formInitializer();
    };
    ChangePasswordPage.prototype.loadUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('Complete Object', this.user);
        console.log('user', this.user.user);
        return this.user.user;
    };
    ChangePasswordPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    ChangePasswordPage.prototype.formInitializer = function () {
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            repeatPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    ChangePasswordPage.prototype.matchPasswords = function () {
        var data = this.changePasswordForm.value;
        if (data.newPassword === data.repeatPassword) {
            this.passwordMatch = false;
        }
        else {
            this.passwordMatch = true;
        }
    };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('Complete Object', this.user);
        console.log('user', this.user.user);
        this.formData = this.changePasswordForm.value;
        this.user.user.password = this.formData.newPassword;
        console.log('user user', this.user.user);
        this.object = '{"id" : ' + this.user.user.id +
            ' , "first_name" : "' + this.user.user.first_name +
            '" , "last_name" : "' + this.user.user.last_name +
            '" , "email" : "' + this.user.user.email +
            '" , "user_name" : "' + this.user.user.user_name +
            '" , "password" : "' + this.formData.newPassword +
            '" , "applicationStatus" : "' + this.user.user.applicationStatus +
            '" , "role"  : "' + this.user.user.role + '"}';
        console.log('object', this.object);
        var finalObject = JSON.parse(this.object);
        this.saveHttpReq(finalObject).subscribe(function (data) {
            _this.router.navigate(['/setting']);
        }, function (error) {
            console.log('error', error);
        });
    };
    ChangePasswordPage.prototype.saveHttpReq = function (dataObj) {
        console.log('recieved data ', dataObj);
        var url = this.service.homeUrl + "/users/changePassword";
        var test = this.http.post(url, dataObj);
        // alert(test);
        return test;
    };
    ChangePasswordPage.prototype.removePasswordMatchError = function () {
        this.passwordMatch = false;
    };
    ChangePasswordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/shared/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/shared/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=shared-change-password-change-password-module-es5.js.map