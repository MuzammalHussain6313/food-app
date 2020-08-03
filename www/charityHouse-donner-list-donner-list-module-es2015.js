(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-donner-list-donner-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/donner-list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/donner-list/donner-list.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Donner List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\" *ngFor=\"let item of result\">\n    <ion-card-header>\n      <ion-card-title>{{item?.user.first_name}}</ion-card-title>\n      <ion-card-subtitle>{{item?.contact}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p> {{item?.user.first_name}} {{item?.user.last_name}} locate in {{item?.address}}. {{item?.contact}} is\n        Contact number and email is {{item?.user.email}}. You can\n        <ion-label (click)=\"review($event, item)\" slot=\"start\" color=\"success\">Review</ion-label>\n        them OR send <ion-label (click)=\"feedBack(item)\" position=\"end\" color=\"primary\">Feedback</ion-label>.</p>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let item of itration\" size=\"large\" color=\"primary\" name=\"star\"></ion-icon>\n          <ion-icon size=\"large\" color=\"primary\" name=\"star-half\"></ion-icon>\n          <ion-label>4.5</ion-label><br>\n        </ion-col>\n        <ion-col align-items-start size=\"2\">\n          <ion-icon class=\"msg-btn\" (click)=\"openChat(item)\" size=\"large\" ios=\"ios-chatboxes\" md=\"md-chatboxes\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/review/review.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/donner-list/review/review.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <form [formGroup]=\"reviewForm\">\n    <ion-grid>\n        <ion-row color=\"justify-content-center\">\n            <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                    <div>\n                        <ion-icon size=\"large\" color=\"{{c1}}\" (click)=\" clickFirst(1)\" name=\"{{n1}}\"></ion-icon>\n                        <ion-icon size=\"large\" color=\"{{c2}}\" (click)=\" clickSecond(2)\" name=\"{{n2}}\"></ion-icon>\n                        <ion-icon size=\"large\" color=\"{{c3}}\" (click)=\" clickThird(3)\" name=\"{{n3}}\"></ion-icon>\n                        <ion-icon size=\"large\" color=\"{{c4}}\" (click)=\" clickForth(4)\" name=\"{{n4}}\"></ion-icon>\n                        <ion-icon size=\"large\" color=\"{{c5}}\" (click)=\" clickFifth(5)\" name=\"{{n5}}\"></ion-icon>\n                    </div>\n                    <ion-item>\n                        <ion-input placeholder=\"I Like That Donner\" formControlName=\"title\"></ion-input>\n                    </ion-item>\n                    <div class=\"ion-padding\">\n                        <ion-button size=\"default\" (click)=\"addReview()\" color=\"secondary\" type=\"submit\" expand=\"block\">SUBMIT\n                        </ion-button>\n                    </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.module.ts ***!
  \****************************************************************/
/*! exports provided: DonnerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerListPageModule", function() { return DonnerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donner_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donner-list.page */ "./src/app/charityHouse/donner-list/donner-list.page.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/charityHouse/donner-list/review/review.component.ts");







// import {ReviewComponent} from './review/review.component';

const routes = [
    {
        path: '',
        component: _donner_list_page__WEBPACK_IMPORTED_MODULE_6__["DonnerListPage"]
    }
];
let DonnerListPageModule = class DonnerListPageModule {
};
DonnerListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        entryComponents: [_review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"]],
        declarations: [_donner_list_page__WEBPACK_IMPORTED_MODULE_6__["DonnerListPage"], _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"]]
    })
], DonnerListPageModule);



/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.msg-btn {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUhvdXNlL2Rvbm5lci1saXN0L0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXGZvb2QtYXBwL3NyY1xcYXBwXFxjaGFyaXR5SG91c2VcXGRvbm5lci1saXN0XFxkb25uZXItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXJpdHlIb3VzZS9kb25uZXItbGlzdC9kb25uZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2hhcml0eUhvdXNlL2Rvbm5lci1saXN0L2Rvbm5lci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0e1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubXNnLWJ0bntcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiIsIi50ZXN0IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubXNnLWJ0biB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/donner-list.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/donner-list.page.ts ***!
  \**************************************************************/
/*! exports provided: DonnerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerListPage", function() { return DonnerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/charityHouse/donner-list/review/review.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");








let DonnerListPage = class DonnerListPage {
    constructor(router, popoverController, storage, service, http) {
        this.router = router;
        this.popoverController = popoverController;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.result = [];
        this.itration = [1, 2, 3, 4];
    }
    ngOnInit() {
        this.http.get(`${this.service.homeUrl}/donners/list`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.donnerList = response.body;
                console.log('data loading from API');
                this.result = this.donnerList.content;
                localStorage.removeItem('donners');
                localStorage.setItem('donners', JSON.stringify(this.result));
                console.log('donnerList : ', this.donnerList.content);
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
        // this.data = this.http.get('http://localhost:8095/donners/list');
        // // this.loading = false;
        // console.log('data', this.data);
        // this.data.subscribe(data => {
        //   this.result = data.content;
        // });
        // console.log('result' + this.result);
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('donners'));
        // this.storage.get('donners').then((val) => {
        //     this.result = val;
        //     console.log('Your data is', val);
        // });
    }
    review(myEvent, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const review = yield this.popoverController.create({
                component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"],
                componentProps: { id: item.id }
            });
            return yield review.present();
        });
    }
    feedBack(item) {
        // const url = `feedback/${item.id}`;
        this.router.navigate(['feedback', item]);
    }
    active($event) {
    }
    openChat(item) {
        this.router.navigate(['chat']);
    }
};
DonnerListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DonnerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donner-list',
        template: __webpack_require__(/*! raw-loader!./donner-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/donner-list.page.html"),
        styles: [__webpack_require__(/*! ./donner-list.page.scss */ "./src/app/charityHouse/donner-list/donner-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], DonnerListPage);



/***/ }),

/***/ "./src/app/charityHouse/donner-list/review/review.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/review/review.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlIb3VzZS9kb25uZXItbGlzdC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/charityHouse/donner-list/review/review.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charityHouse/donner-list/review/review.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../list.service */ "./src/app/list.service.ts");







let ReviewComponent = class ReviewComponent {
    constructor(popoverController, navParams, router, http, service, formBuilder) {
        this.popoverController = popoverController;
        this.navParams = navParams;
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
    }
    ngOnInit() {
        this.id = this.navParams.data.id;
        console.log('id ' + this.id);
        this.donnerID = this.id;
        this.formInitializer();
    }
    formInitializer() {
        this.reviewForm = this.formBuilder.group({
            stars: [this.star, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    clickFirst(item) {
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.n1 = 'star';
    }
    clickSecond(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
    }
    clickThird(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
    }
    clickForth(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
    }
    clickFifth(item) {
        this.n1 = 'star-outline';
        this.n2 = 'star-outline';
        this.n3 = 'star-outline';
        this.n4 = 'star-outline';
        this.n5 = 'star-outline';
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.star = item;
        console.log('this.stars', this.star);
        this.c1 = 'primary';
        this.c2 = 'primary';
        this.c3 = 'primary';
        this.c4 = 'primary';
        this.c5 = 'primary';
        this.n1 = 'star';
        this.n2 = 'star';
        this.n3 = 'star';
        this.n4 = 'star';
        this.n5 = 'star';
    }
    addReview() {
        const test = this.reviewForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('charity house'));
        const charityID = charityHouse.id;
        console.log('charity id ', charityID);
        this.finalReviewObject = '{"star": ' + this.star + ',' +
            '"title": "' + test.title + '",' +
            '"donner": { "id": ' + this.donnerID + '},' +
            '"charityHouse": { "id": ' + charityID + '}' + '}';
        // This id will comes from the service, because when user will login, his ID will save to service
        // and retrieved at time of send data to server.
        console.log('full object', this.finalReviewObject);
        const review = JSON.parse(this.finalReviewObject);
        this.saveReview(review).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['donner-list']);
        }, error => {
            console.log('error', error);
        });
    }
    saveReview(dataObj) {
        console.log('data received for post. ', dataObj);
        const url = `${this.service.homeUrl}/reviews/newReview`;
        return this.http.post(url, dataObj);
    }
};
ReviewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/donner-list/review/review.component.html"),
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/charityHouse/donner-list/review/review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], ReviewComponent);



/***/ })

}]);
//# sourceMappingURL=charityHouse-donner-list-donner-list-module-es2015.js.map