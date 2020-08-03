(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-update-update-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/update/update.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/update/update.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      <!-- <ion-menu-button></ion-menu-button> -->\r\n    </ion-buttons>\r\n    <ion-title>Update</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-padding-top\">\r\n    <ion-text>Update field</ion-text>\r\n    <div [formGroup]=\"signupForm\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">ID</ion-label>\r\n        <ion-input formControlName=\"id\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n\r\n        <ion-label position=\"floating\">First Name</ion-label>\r\n        <ion-input formControlName=\"first_name\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n\r\n      <ion-label position=\"floating\">Last Name</ion-label>\r\n      <ion-input formControlName=\"last_name\" ></ion-input>\r\n    </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">email</ion-label>\r\n        <ion-input formControlName=\"email\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">User Name</ion-label>\r\n        <ion-input formControlName=\"user_name\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input formControlName=\"password\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Role</ion-label>\r\n        <ion-input formControlName=\"password\" ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-grid class=\"ion-padding-top\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n\r\n          <ion-button (click)=\"updateData()\" shape=\"square\" [disabled]=\"!signupForm.valid\">Save</ion-button>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/update/update.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/update/update.module.ts ***!
  \***********************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/admin/update/update.page.ts");







const routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
    }
];
let UpdatePageModule = class UpdatePageModule {
};
UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
    })
], UpdatePageModule);



/***/ }),

/***/ "./src/app/admin/update/update.page.scss":
/*!***********************************************!*\
  !*** ./src/app/admin/update/update.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/update/update.page.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/update/update.page.ts ***!
  \*********************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let UpdatePage = class UpdatePage {
    constructor(route, http, router, service, formBuilder) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.formInitializer();
        this.route.paramMap.subscribe(paramMap => {
            const val = paramMap.get('id');
            console.log('id', val);
            const url = `${this.service.homeUrl}/users/getUser/${val}`;
            console.log('url', url);
            this.data = this.http.get(url);
            console.log(this.data);
            this.data.subscribe(data => {
                this.user = data;
                this.signupForm.patchValue(this.user);
                console.log(this.user);
            });
            console.log(this.user);
        });
    }
    formInitializer() {
        console.log('formInitializer', this.user);
        this.signupForm = this.formBuilder.group({
            id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            first_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            last_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            role: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    updateData() {
        if (this.signupForm.valid) {
            console.log('formData', this.signupForm.value);
            const formData = this.signupForm.value;
            this.saveHttpReq(formData).subscribe(data => {
                console.log('I got this response -> ', data);
                this.router.navigate(['list']);
            }, error => {
                console.log('error', error);
            });
        }
    }
    saveHttpReq(dataObj) {
        const url = `${this.service.homeUrl}/users/updateUser`;
        console.log('link', url);
        return this.http.put(url, dataObj);
    }
};
UpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: __webpack_require__(/*! raw-loader!./update.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/update/update.page.html"),
        styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/admin/update/update.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], UpdatePage);



/***/ })

}]);
//# sourceMappingURL=admin-update-update-module-es2015.js.map