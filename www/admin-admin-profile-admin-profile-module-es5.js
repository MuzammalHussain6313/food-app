(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-profile-admin-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-profile/admin-profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-profile/admin-profile.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header xmlns=\"http://www.w3.org/1999/html\">\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row align-items-end no-padding>\n    <ion-col size=\"3\"></ion-col>\n    <ion-col style=\"padding-top: 30px\" size=\"6\">\n      <div class=\"profile\">\n        <img style=\"width: 145px; height: 145px\" [routerLink]=\"['profile-picture']\" class=\"profile-picture\" src=\"assets/20181028_231840.png\"/>\n      </div>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-card class=\"border\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-icon style=\"float: right;\" size=\"large\" name=\"Person\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item class=\"ion-no-padding\"><ion-card class=\"border ion-no-padding\">\n        <ion-card-header class=\"ion-no-padding\">\n          <ion-card-subtitle>Name</ion-card-subtitle>\n          <ion-card-title>{{user?.first_name}} {{user?.last_name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card></ion-item>\n    </ion-col>\n    <ion-col size=\"0\"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-card class=\"border\">\n        <ion-card-content class=\"ion-no-padding\">\n          <ion-icon style=\"float: right;\" size=\"large\" name=\"ios-call\"></ion-icon>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"9\">\n      <ion-item class=\"ion-no-padding\">\n        <ion-card class=\"border ion-no-padding\">\n          <ion-card-header class=\"ion-no-padding\">\n            <ion-card-title>Email</ion-card-title>\n            <ion-card-subtitle>{{user?.email}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"0\"></ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-img class=\"bottom-right\" (click)=\"updateProfile()\" style=\"width: 45px; height: 45px;\"\n         src=\"/assets/edit-admin.jpg\" alt=\"update\" slot=\"end\"></ion-img>\n\n"

/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePageModule", function() { return AdminProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-profile.page */ "./src/app/admin/admin-profile/admin-profile.page.ts");







var routes = [
    {
        path: '',
        component: _admin_profile_page__WEBPACK_IMPORTED_MODULE_6__["AdminProfilePage"]
    }
];
var AdminProfilePageModule = /** @class */ (function () {
    function AdminProfilePageModule() {
    }
    AdminProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_profile_page__WEBPACK_IMPORTED_MODULE_6__["AdminProfilePage"]]
        })
    ], AdminProfilePageModule);
    return AdminProfilePageModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-right {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n}\n\n.profile-picture {\n  border-radius: 50%;\n}\n\n.border {\n  box-shadow: none !important;\n}\n\n.star {\n  color: #a2a4ab;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLWFwcC9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLXByb2ZpbGVcXGFkbWluLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1wcm9maWxlL2FkbWluLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm90dG9tLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1JTtcclxuICByaWdodDogNSU7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYm9yZGVye1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXJ7XHJcbiAgY29sb3I6ICNhMmE0YWI7XHJcbn1cclxuXHJcbi5mdWxsaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi54YyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pdGVtLWNvbG9ye1xyXG4gIGNvbG9yOiAjYmFiYWJhO1xyXG59XHJcblxyXG4iLCIuYm90dG9tLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUlO1xuICByaWdodDogNSU7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ib3JkZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zdGFyIHtcbiAgY29sb3I6ICNhMmE0YWI7XG59XG5cbi5mdWxsaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ueGMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tY29sb3Ige1xuICBjb2xvcjogI2JhYmFiYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-profile/admin-profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: AdminProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePage", function() { return AdminProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");





var AdminProfilePage = /** @class */ (function () {
    function AdminProfilePage(route, router, http, service) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.service = service;
    }
    AdminProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var val = paramMap.get('id');
            console.log('parm', paramMap.get('id'));
            var url = _this.service.homeUrl + "/users/getUser/" + val;
            _this.data = _this.http.get(url);
            console.log(_this.data);
            _this.data.subscribe(function (data) {
                _this.user = data;
                console.log('user', _this.user);
            });
            console.log('user', _this.user);
        });
    };
    AdminProfilePage.prototype.updateProfile = function () {
        this.router.navigate(['/edit-profile', this.user]);
    };
    AdminProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] }
    ]; };
    AdminProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-profile',
            template: __webpack_require__(/*! raw-loader!./admin-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-profile/admin-profile.page.html"),
            styles: [__webpack_require__(/*! ./admin-profile.page.scss */ "./src/app/admin/admin-profile/admin-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]])
    ], AdminProfilePage);
    return AdminProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-profile-admin-profile-module-es5.js.map