(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-charity-list-charity-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/charity-list/charity-list.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/charity-list/charity-list.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Charity Houses\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\n        <!--    <img src=\"/assets/quran-majeed.jpg\" alt=\"\" />-->\n        <ion-card-header>\n            <ion-card-title>{{item?.name}}</ion-card-title>\n            <ion-card-subtitle>{{item?.contact}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <p> {{item?.name}} is {{item?.type}} in {{item?.address.streetAddress}} {{item?.address.city}}.</p>\n            <p>{{item?.contact}} is Contact number and email is {{item?.email}}.</p>\n            <p>there are {{item?.no_of_members}} members in house.</p>\n            <p>{{item?.name}} have an account in {{item?.bank_name}} Bank where you can donate your funds\n                in {{item?.account_no}} account Number.</p>\n            <ion-button size=\"small\" (click)=\"donateFood(item)\" slot=\"start\" color=\"success\">Donate Food\n            </ion-button>\n            <ion-button size=\"small\" (click)=\"donateFund(item)\" slot=\"end\" color=\"primary\">Donate Money</ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-list.page */ "./src/app/donner/charity-list/charity-list.page.ts");







const routes = [
    {
        path: '',
        component: _charity_list_page__WEBPACK_IMPORTED_MODULE_6__["CharityListPage"]
    }
];
let CharityListPageModule = class CharityListPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let CharityListPage = class CharityListPage {
    constructor(router, storage, service, http) {
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.loading = true;
        this.result = [];
    }
    ngOnInit() {
        this.http.get(`${this.service.homeUrl}/charityHouses/list`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.charityList = response.body;
                console.log('data loading from API');
                this.result = this.charityList.content;
                localStorage.removeItem('charityHouses');
                localStorage.setItem('charityHouses', JSON.stringify(this.result));
                console.log('charityList : ', this.charityList.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('data loading from loadData function.');
            this.loadData();
            console.log('error', error);
        });
        console.log('result' + this.result);
        // this.data = this.http.get('http://localhost:8095/charityHouses/list');
        // // this.loading = false;
        // console.log('data', this.data);
        // this.data.subscribe(data => {
        //   this.result = data.content;
        // });
        // this.loading = false;
        // console.log('result' + this.result);
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('charityHouses'));
        // this.storage.get('charityHouses').then((val) => {
        //   console.log('Your charity houses list is', this.result);
        // });
    }
    donateFund(item) {
        this.router.navigate(['donate-fund', item]);
        // const url = `charityList/${item.id}`;
        // this.router.navigateByUrl(url);
    }
    donateFood(item) {
        this.router.navigate(['donate-food', item]);
    }
};
CharityListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
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



/***/ })

}]);
//# sourceMappingURL=donner-charity-list-charity-list-module-es2015.js.map