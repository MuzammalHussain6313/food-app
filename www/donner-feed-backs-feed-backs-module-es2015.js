(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-feed-backs-feed-backs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/feed-backs/feed-backs.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/feed-backs/feed-backs.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Feed Backs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\n    <ion-card-header>\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <ion-card-title>{{item?.donner?.user?.first_name}}</ion-card-title>\n      <ion-card-subtitle>{{item?.email}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-text color=\"primary\">\n        <h4>{{item?.subject}}</h4>\n      </ion-text>\n      <p>{{item?.feedbackMessage}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.module.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.module.ts ***!
  \********************************************************/
/*! exports provided: FeedBacksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBacksPageModule", function() { return FeedBacksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_backs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-backs.page */ "./src/app/donner/feed-backs/feed-backs.page.ts");







const routes = [
    {
        path: '',
        component: _feed_backs_page__WEBPACK_IMPORTED_MODULE_6__["FeedBacksPage"]
    }
];
let FeedBacksPageModule = class FeedBacksPageModule {
};
FeedBacksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_feed_backs_page__WEBPACK_IMPORTED_MODULE_6__["FeedBacksPage"]]
    })
], FeedBacksPageModule);



/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.page.scss":
/*!********************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9mZWVkLWJhY2tzL2ZlZWQtYmFja3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/donner/feed-backs/feed-backs.page.ts":
/*!******************************************************!*\
  !*** ./src/app/donner/feed-backs/feed-backs.page.ts ***!
  \******************************************************/
/*! exports provided: FeedBacksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBacksPage", function() { return FeedBacksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let FeedBacksPage = class FeedBacksPage {
    constructor(router, storage, service, http) {
        this.router = router;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.result = [];
        this.reviewsList = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        const id = this.user.id;
        this.http.get(`${this.service.homeUrl}/feedbacks/findByDonner/${id}`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.reviewsList = response.body;
                console.log('data loading from API');
                this.result = this.reviewsList.content;
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
    }
};
FeedBacksPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
FeedBacksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-backs',
        template: __webpack_require__(/*! raw-loader!./feed-backs.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/feed-backs/feed-backs.page.html"),
        styles: [__webpack_require__(/*! ./feed-backs.page.scss */ "./src/app/donner/feed-backs/feed-backs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
], FeedBacksPage);



/***/ })

}]);
//# sourceMappingURL=donner-feed-backs-feed-backs-module-es2015.js.map