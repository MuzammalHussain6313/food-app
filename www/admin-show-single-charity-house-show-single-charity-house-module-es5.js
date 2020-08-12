(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-show-single-charity-house-show-single-charity-house-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{user?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <!--    <img src=\"/assets/quran-majeed.jpg\" alt=\"\" />-->\n    <ion-card-header>\n      <ion-card-title>{{user?.name}}</ion-card-title>\n      <ion-card-subtitle>{{user?.email}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p> {{user?.name}} is {{user?.type}} in {{user?.address.streetAddress}} {{user?.address.city}}.</p>\n      <p>{{user?.contact}} is Contact number and email is {{user?.email}}.</p>\n      <p>there are {{user?.no_of_members}} members in house.</p>\n      <p>{{user?.name}} have an account in {{user?.bank_name}} Bank where you can donate your funds\n        in {{user?.account_no}} account Number.</p>\n      <ion-icon size=\"large\" slot=\"end\" name=\"ios-call\" (click)=\"contactDealer(user?.email)\"></ion-icon>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowSingleCharityHousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSingleCharityHousePageModule", function() { return ShowSingleCharityHousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-single-charity-house.page */ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts");







var routes = [
    {
        path: '',
        component: _show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["ShowSingleCharityHousePage"]
    }
];
var ShowSingleCharityHousePageModule = /** @class */ (function () {
    function ShowSingleCharityHousePageModule() {
    }
    ShowSingleCharityHousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_show_single_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["ShowSingleCharityHousePage"]]
        })
    ], ShowSingleCharityHousePageModule);
    return ShowSingleCharityHousePageModule;
}());



/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Nob3ctc2luZ2xlLWNoYXJpdHktaG91c2Uvc2hvdy1zaW5nbGUtY2hhcml0eS1ob3VzZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/show-single-charity-house/show-single-charity-house.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ShowSingleCharityHousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSingleCharityHousePage", function() { return ShowSingleCharityHousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ShowSingleCharityHousePage = /** @class */ (function () {
    function ShowSingleCharityHousePage(route, service, http, router) {
        this.route = route;
        this.service = service;
        this.http = http;
        this.router = router;
        this.result = [];
    }
    ShowSingleCharityHousePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var val = paramMap.get('id');
            var url = _this.service.homeUrl + "/charityHouses/getCharityHouse/" + val;
            _this.data = _this.http.get(url);
            console.log(_this.data);
            _this.data.subscribe(function (data) {
                _this.user = data;
                // this.result = this.user.content;
                console.log('user', _this.user);
            });
            console.log(_this.user);
        });
    };
    ShowSingleCharityHousePage.prototype.contactDealer = function (contactNumber) {
        alert('You can contactwith owner via ' + contactNumber + ' Number.');
    };
    ShowSingleCharityHousePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ShowSingleCharityHousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-single-charity-house',
            template: __webpack_require__(/*! raw-loader!./show-single-charity-house.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/show-single-charity-house/show-single-charity-house.page.html"),
            styles: [__webpack_require__(/*! ./show-single-charity-house.page.scss */ "./src/app/admin/show-single-charity-house/show-single-charity-house.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowSingleCharityHousePage);
    return ShowSingleCharityHousePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-show-single-charity-house-show-single-charity-house-module-es5.js.map