(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-charity-list-charity-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/charity-list/charity-list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/charity-list/charity-list.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Charity Houses\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\n        <ion-card-header>\n            <ion-card-title>{{item?.name}}</ion-card-title>\n            <ion-card-subtitle>{{item?.contact}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <p>{{item?.name}} is {{item?.type}} in {{item?.address.streetAddress}} {{item?.address.city}}.</p>\n            <p>{{item?.contact}} is Contact number and email is {{item?.email}}.</p>\n            <p>there are {{item?.no_of_members}} members in house.</p>\n            <p>{{item?.name}} have an account in {{item?.bank_name}} Bank where you can donate your funds\n                in {{item?.account_no}} account Number.</p>\n            <ion-button size=\"small\" (click)=\"donateFood(item)\" slot=\"start\" color=\"success\">Donate Food\n            </ion-button>\n            <ion-button size=\"small\" (click)=\"donateFund(item)\" slot=\"end\" color=\"primary\">Donate Money</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.module.ts":
/*!************************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.module.ts ***!
  \************************************************************/
/*! exports provided: CharityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityListPageModule", function() { return CharityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-list.page */ "./src/app/donner/charity-list/charity-list.page.ts");







var routes = [
    {
        path: '',
        component: _charity_list_page__WEBPACK_IMPORTED_MODULE_6__["CharityListPage"]
    }
];
var CharityListPageModule = /** @class */ (function () {
    function CharityListPageModule() {
    }
    CharityListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_charity_list_page__WEBPACK_IMPORTED_MODULE_6__["CharityListPage"]]
        })
    ], CharityListPageModule);
    return CharityListPageModule;
}());



/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.page.scss":
/*!************************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9jaGFyaXR5LWxpc3QvY2hhcml0eS1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/donner/charity-list/charity-list.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/charity-list/charity-list.page.ts ***!
  \**********************************************************/
/*! exports provided: CharityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityListPage", function() { return CharityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var CharityListPage = /** @class */ (function () {
    function CharityListPage(router, storage, service, http) {
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.loading = true;
        this.result = [];
    }
    CharityListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.service.homeUrl + "/charityHouses/list", { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200 || response.status === 201) {
                _this.charityList = response.body;
                console.log('data loading from API');
                _this.result = _this.charityList.content;
                localStorage.removeItem('charityHouses');
                localStorage.setItem('charityHouses', JSON.stringify(_this.result));
                console.log('charityList : ', _this.charityList.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, function (error) {
            console.log('data loading from loadData function.');
            _this.loadData();
            console.log('error', error);
        });
        console.log('result' + this.result);
    };
    CharityListPage.prototype.loadData = function () {
        this.result = JSON.parse(localStorage.getItem('charityHouses'));
    };
    CharityListPage.prototype.donateFund = function (item) {
        this.router.navigate(['donate-fund', item]);
    };
    CharityListPage.prototype.donateFood = function (item) {
        this.router.navigate(['donate-food', item]);
    };
    CharityListPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CharityListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charity-list',
            template: __webpack_require__(/*! raw-loader!./charity-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/charity-list/charity-list.page.html"),
            styles: [__webpack_require__(/*! ./charity-list.page.scss */ "./src/app/donner/charity-list/charity-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CharityListPage);
    return CharityListPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-charity-list-charity-list-module-es5.js.map