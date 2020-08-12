(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/edit-profile/edit-profile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Update Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card no-border no-padding>\n        <ion-grid class=\"ion-padding-top\">\n            <div [formGroup]=\"updateForm\">\n                <ion-input [hidden]=\"true\" value=\"{{user?.id}}\" formControlName=\"id\"></ion-input>\n                <ion-item>\n                    <ion-input placeholder=\"First Name\" value=\"{{user?.first_name}}\" formControlName=\"first_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder=\"Last Name\" value=\"{{user?.last_name}}\" formControlName=\"last_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder=\"Email\" value=\"{{user?.email}}\" formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder=\"User Name\" value=\"{{user?.user_name}}\" formControlName=\"user_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder=\"Password\" value=\"{{user?.password}}\" formControlName=\"password\"></ion-input>\n                </ion-item>\n\n                <ion-grid style=\"padding-top: 50px\" class=\"ion-padding-top\">\n                    <ion-row class=\"ion-justify-content-center\">\n                        <ion-button (click)=\"updateData()\" shape=\"square\" [disabled]=\"!updateForm.valid\">Save</ion-button>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </ion-grid>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/admin/edit-profile/edit-profile.page.ts");







var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(route, http, router, service, formBuilder) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    EditProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var val = paramMap.get('id');
            console.log('id', val);
            var url = _this.service.homeUrl + "/users/getUser/" + val;
            console.log('url', url);
            _this.data = _this.http.get(url);
            console.log('data', _this.data);
            _this.data.subscribe(function (data) {
                _this.user = data;
                console.log('user', _this.user);
            });
            console.log(_this.user);
        });
        this.formInitializer();
    };
    EditProfilePage.prototype.formInitializer = function () {
        console.log('formInitializer', this.user);
        this.updateForm = this.formBuilder.group({
            id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    };
    EditProfilePage.prototype.generateUser = function () {
        var data = this.updateForm.value;
        this.childUser = '{ "id" : "' + this.user.id +
            '" , \n"first_name" : "' + data.first_name +
            '" , \n"last_name" : "' + data.last_name +
            '" , \n"email" : "' + data.email +
            '" , \n"user_name" : "' + data.user_name +
            '" , \n"password" : "' + data.password +
            '" , \n"applicationStatus" : "' + this.user.applicationStatus +
            '" , \n"role" : "' + this.user.role + '"}';
        console.log('data before parsing', this.childUser);
        var completeUser = JSON.parse(this.childUser);
        console.log('complete Donner', completeUser);
        return completeUser;
    };
    EditProfilePage.prototype.updateData = function () {
        var _this = this;
        if (this.updateForm.valid) {
            console.log('formData', this.updateForm.value);
            var formData = this.updateForm.value;
            console.log('data', this.generateUser());
            this.saveHttpReq(this.generateUser()).subscribe(function (data) {
                console.log('I got this response -> ', data);
                var url = "/admin-profile/" + _this.user.id;
                _this.router.navigateByUrl(url);
                alert('user updated successfully');
            }, function (error) {
                console.log('error', error);
            });
        }
    };
    EditProfilePage.prototype.saveHttpReq = function (dataObj) {
        var url = this.service.homeUrl + "/users/updateUser";
        console.log('link', url);
        return this.http.put(url, dataObj);
    };
    EditProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/admin/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-edit-profile-edit-profile-module-es5.js.map