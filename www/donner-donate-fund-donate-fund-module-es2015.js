(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donate-fund-donate-fund-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donate-fund/donate-fund.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donate-fund/donate-fund.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Donate Fund</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"donateForm\">\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Provide Transaction Information</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-label position=\"floating\">Amount</ion-label>\n              <ion-input formControlName=\"amount\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Currency</ion-label>\n              <ion-select formControlName=\"currency\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <ion-select-option *ngFor=\"let item of currencies\" value=\"{{item}}\">{{item}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Card No</ion-label>\n              <ion-input formControlName=\"donner_card\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Expiry Date</ion-label>\n              <ion-datetime pickerFormat=\"YYYY MM DD\" formControlName=\"card_expiry_date\"></ion-datetime>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button size=\"large\" [disabled]=\"donateForm.invalid\" (click)=\"donateFund()\" color=\"primary\" type=\"submit\" expand=\"block\">Proceed</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.module.ts ***!
  \**********************************************************/
/*! exports provided: DonateFundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFundPageModule", function() { return DonateFundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_fund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-fund.page */ "./src/app/donner/donate-fund/donate-fund.page.ts");







const routes = [
    {
        path: '',
        component: _donate_fund_page__WEBPACK_IMPORTED_MODULE_6__["DonateFundPage"]
    }
];
let DonateFundPageModule = class DonateFundPageModule {
};
DonateFundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_donate_fund_page__WEBPACK_IMPORTED_MODULE_6__["DonateFundPage"]]
    })
], DonateFundPageModule);



/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9kb25hdGUtZnVuZC9kb25hdGUtZnVuZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donner/donate-fund/donate-fund.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donate-fund/donate-fund.page.ts ***!
  \********************************************************/
/*! exports provided: DonateFundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFundPage", function() { return DonateFundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let DonateFundPage = class DonateFundPage {
    constructor(route, http, service, formBuilder, router) {
        this.route = route;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.today = new Date();
        this.currencies = ['PKR', 'Dollar', 'rayal', 'denaar'];
    }
    ngOnInit() {
        this.formInitializer();
        this.route.paramMap.subscribe(paramMap => {
            console.log('charity-house', paramMap);
            this.charityHouse = paramMap.get('id');
        });
        // this.route.paramMap.subscribe(paramMap => {
        // const val = paramMap.get('id');
        // console.log('id', val);
        // const url  = `http://localhost:8095/charityHouses/getCharityHouse/${val}`;
        // this.data =  this.http.get(url);
        // console.log(this.data);
        // this.data.subscribe(data => {
        //   this.charityHouse = data;
        //   console.log(this.charityHouse);
        // });
        // console.log(this.charityHouse);
        // });
    }
    formInitializer() {
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        // console.log('current date', this.date);
        this.donateForm = this.formBuilder.group({
            amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            currency: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            donner_card: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            card_expiry_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    donateFund() {
        const test = this.donateForm.value;
        const dateFormat = test.card_expiry_date.split('T')[0];
        // This id will comes from the service, because when user will login, his ID will save to service
        // and retrieved at time of send data to server.
        const donner = JSON.parse(localStorage.getItem('donner'));
        const donnerID = donner.id;
        console.log('donner id ', donnerID);
        this.finalFundObject = '{"amount": "' + test.amount + '",' +
            '"currency": "' + test.currency + '",' +
            '"donnerCard": "' + test.donner_card + '",' +
            '"cardExpiryDate": "' + dateFormat + '",' +
            '"donation": { ' + '"date": "' + this.date + '",' +
            '"donner": { "id": ' + donnerID + '},' +
            '"charityHouse": { "id": ' + this.charityHouse + '}' + '}' + '}';
        console.log('full object', this.finalFundObject);
        const fundDonation = JSON.parse(this.finalFundObject);
        this.saveFoodDonation(fundDonation).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['charityList']);
        }, error => {
            console.log('error', error);
        });
    }
    saveFoodDonation(dataObj) {
        // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // This link is working coorectly.
        console.log('data recieved for put. ', dataObj);
        const url = `${this.service.homeUrl}/fundDonations/newFundDonation`;
        return this.http.post(url, dataObj);
    }
};
DonateFundPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DonateFundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donate-fund',
        template: __webpack_require__(/*! raw-loader!./donate-fund.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donate-fund/donate-fund.page.html"),
        styles: [__webpack_require__(/*! ./donate-fund.page.scss */ "./src/app/donner/donate-fund/donate-fund.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DonateFundPage);



/***/ })

}]);
//# sourceMappingURL=donner-donate-fund-donate-fund-module-es2015.js.map