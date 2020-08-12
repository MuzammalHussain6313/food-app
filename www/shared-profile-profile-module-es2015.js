(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/profile/profile.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/profile/profile.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header xmlns=\"http://www.w3.org/1999/html\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"admin\"></ion-menu-button>\n      <ion-back-button *ngIf=\"!admin\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row align-items-end no-padding>\n    <ion-col size=\"3\"></ion-col>\n    <ion-col style=\"padding-top: 30px\" size=\"6\">\n      <div class=\"profile\">\n        <img style=\"width: 145px; height: 145px\" [routerLink]=\"['profile-picture']\" class=\"profile-picture\" src=\"assets/20181028_231840.png\"/>\n      </div>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-card class=\"border\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-icon style=\"float: right;\" size=\"large\" name=\"Person\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item class=\"ion-no-padding\"><ion-card class=\"border ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-card-subtitle>Name</ion-card-subtitle>\n          <ion-card-title>{{user?.user?.first_name}} {{user?.user?.last_name}}</ion-card-title>\n          <ion-card-title>{{user?.first_name}} {{user?.last_name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card></ion-item>\n    </ion-col>\n    <ion-col size=\"0\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-card class=\"border\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-icon style=\"float: right;\" size=\"large\" name=\"ios-call\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item class=\"ion-no-padding\">\n        <ion-card class=\"border ion-no-padding\">\n          <ion-card-header class=\"ion-no-padding\">\n            <ion-card-subtitle *ngIf=\"admin\">Email</ion-card-subtitle>\n            <ion-card-title *ngIf=\"admin\">{{user?.user_name}}</ion-card-title>\n            <ion-card-subtitle *ngIf=\"!admin\">Phone</ion-card-subtitle>\n            <ion-card-title>{{user?.contact}}</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"0\"></ion-col>\n  </ion-row>\n\n  <ion-card *ngIf=\"donner\" class=\"ion-no-padding\">\n    <ion-item no-lines>\n      <ion-label color=\"green\">Reviews</ion-label>\n      <ion-img *ngIf=\"close\" (click)=\"expandCLick()\" style=\"width: 20px; height: 20px;\" src=\"/assets/down-arrow.svg\"\n               alt=\"down\" slot=\"end\"></ion-img>\n      <ion-img *ngIf=\"open\" (click)=\"expandCLick()\" style=\"width: 20px; height: 20px;\" src=\"/assets/up-arrow.svg\"\n               alt=\"up\" slot=\"end\"></ion-img>\n    </ion-item>\n    <ion-card-content class=\"ion-no-padding\" *ngIf=\"open\">\n      <ion-card no-border *ngFor=\"let review of result\">\n        <ion-card-header>\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n        <ion-card-title>{{review?.charityHouse?.user?.first_name}}</ion-card-title>\n        <ion-card-subtitle>{{review?.charityHouse?.contact}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-text color=\"primary\">\n            <h4>{{review?.title}}.</h4>\n          </ion-text>\n          <div *ngIf=\"review?.star ==1\">\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-label>{{review?.star}}</ion-label><br>\n          </div>\n          <div *ngIf=\"review?.star ==2\">\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-label>{{review?.star}}</ion-label><br>\n          </div>\n          <div *ngIf=\"review?.star ==3\">\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-label>{{review?.star}}</ion-label><br>\n          </div>\n          <div *ngIf=\"review?.star ==4\">\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" class=\"star\" name=\"star\"></ion-icon>\n            <ion-label>{{review?.star}}</ion-label><br>\n          </div>\n          <div *ngIf=\"review?.star ==5\">\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-icon style=\"width: 20px; height: 20px;\" color=\"dark\" name=\"star\"></ion-icon>\n            <ion-label>{{review?.star}}</ion-label><br>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <h4 *ngIf=\"isEmpty\">No Review Found.</h4>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared/profile/profile.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/profile/profile.module.ts ***!
  \**************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/shared/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/shared/profile/profile.page.scss":
/*!**************************************************!*\
  !*** ./src/app/shared/profile/profile.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  border-radius: 50%;\n}\n\n.border {\n  box-shadow: none !important;\n}\n\n.star {\n  color: #a2a4ab;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1hcHAvc3JjXFxhcHBcXHNoYXJlZFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5ib3JkZXJ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhcntcclxuICBjb2xvcjogI2EyYTRhYjtcclxufVxyXG5cclxuLmZ1bGxoZWlnaHQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnhjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLml0ZW0tY29sb3J7XHJcbiAgY29sb3I6ICNiYWJhYmE7XHJcbn1cclxuIiwiLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN0YXIge1xuICBjb2xvcjogI2EyYTRhYjtcbn1cblxuLmZ1bGxoZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi54YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaXRlbS1jb2xvciB7XG4gIGNvbG9yOiAjYmFiYWJhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/profile/profile.page.ts":
/*!************************************************!*\
  !*** ./src/app/shared/profile/profile.page.ts ***!
  \************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ProfilePage = class ProfilePage {
    constructor(router, storage, service, http) {
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.result = [];
        this.reviewsList = [];
        this.close = true;
        this.open = false;
        this.isEmpty = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        const id = this.user.id;
        this.http.get(`${this.service.homeUrl}/reviews/findByDonner/${id}`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.reviewsList = response.body;
                console.log('data loading from API');
                this.result = this.reviewsList.content;
                if (this.result.length === 0) {
                    this.isEmpty = true;
                }
                localStorage.removeItem('reviewsList');
                localStorage.setItem('reviewsList', JSON.stringify(this.result));
                console.log('reviewsList : ', this.reviewsList.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('data loading from loadData function.');
            console.log('error', error);
        });
        console.log('result' + this.result);
        this.loadUser();
    }
    expandCLick() {
        this.temp = this.close;
        this.close = this.open;
        this.open = this.temp;
    }
    loadUser() {
        this.role = localStorage.getItem('role');
        console.log('role', this.role);
        if (this.role === 'donner') {
            this.donner = true;
        }
        if (this.role === 'admin') {
            this.admin = true;
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/shared/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/shared/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=shared-profile-profile-module-es2015.js.map