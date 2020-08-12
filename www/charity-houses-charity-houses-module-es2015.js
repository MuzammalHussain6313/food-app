(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charity-houses-charity-houses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/charity-houses/charity-houses.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/charity-houses/charity-houses.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item *ngFor=\"let item of result\">\n      <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n      <p (click)=\"showSingleItem(item?.id)\">{{item?.name}} {{item?.contact}}</p>\n      <ion-img (click)=\"updateItem(item?.id)\" style=\"width: 20px; height: 20px;\" src=\"/assets/pencil-sharp.svg\"\n               alt=\"update\" slot=\"end\"></ion-img>\n      <ion-icon (click)=\"deleteCharityHouse(item?.id)\" size=\"default\" name=\"trash\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.module.ts ***!
  \***************************************************************/
/*! exports provided: CharityHousesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityHousesPageModule", function() { return CharityHousesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charity-houses.page */ "./src/app/admin/charity-houses/charity-houses.page.ts");







const routes = [
    {
        path: '',
        component: _charity_houses_page__WEBPACK_IMPORTED_MODULE_6__["CharityHousesPage"]
    }
];
let CharityHousesPageModule = class CharityHousesPageModule {
};
CharityHousesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_charity_houses_page__WEBPACK_IMPORTED_MODULE_6__["CharityHousesPage"]]
    })
], CharityHousesPageModule);



/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXJpdHktaG91c2VzL2NoYXJpdHktaG91c2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/charity-houses/charity-houses.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/charity-houses/charity-houses.page.ts ***!
  \*************************************************************/
/*! exports provided: CharityHousesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharityHousesPage", function() { return CharityHousesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");





let CharityHousesPage = class CharityHousesPage {
    constructor(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.result = [];
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('charity houses'));
    }
    ngOnInit() {
        const url = this.service.homeUrl + '/charityHouses/list';
        this.http.get(url, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                console.log('data loading from API');
                this.result = this.t.content;
                localStorage.removeItem('charity Houses');
                localStorage.setItem('charity Houses', JSON.stringify(this.t.content));
                console.log('data : ', this.t.content);
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
        // this.data = this.http.get('http://localhost:8095/users/list');
        // this.data.subscribe(data => {
        //   // if (data.status === 200) {
        //   console.log('code', data.status);
        //   console.log('data', this.data);
        //   this.result = data.content;
        // //   this.storage.set('users', this.result);
        //   // } else {
        //   //   this.loadData();
        //   // }
        //  });
        // // if (!this.result) {
        // //   this.loadData();
        // // } else if (this.result) {
        // //   this.storage.set('users', this.result);
        // // }
        // this.loadData();
        console.log('result' + this.result);
    }
    showSingleItem(item) {
        const url = `show-single-charity-house/${item}`;
        this.router.navigateByUrl(url);
    }
    updateItem(id) {
        const url = `update-charity-house/${id}`;
        this.router.navigateByUrl(url);
    }
    deleteCharityHouse(item) {
        console.log('id ' + item);
        // this.callAPI(item).subscribe(
        //     data => {
        //       console.log('I got this response -> ', data);
        //       // this.router.navigate(['donners']);
        //     },
        //     error => {
        //       console.log('error', error);
        //     }
        // );
        alert('can\'t deleted. Please! contact with supper admin using hmuzammal015@gmail.com');
        this.router.navigate(['tabs/charity-houses']);
    }
};
CharityHousesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] }
];
CharityHousesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charity-houses',
        template: __webpack_require__(/*! raw-loader!./charity-houses.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/charity-houses/charity-houses.page.html"),
        styles: [__webpack_require__(/*! ./charity-houses.page.scss */ "./src/app/admin/charity-houses/charity-houses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]])
], CharityHousesPage);



/***/ })

}]);
//# sourceMappingURL=charity-houses-charity-houses-module-es2015.js.map