(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donate-food-donate-food-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donate-food/donate-food.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donate-food/donate-food.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Donate Food</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"donateFoodForm\">\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Provide Food Information</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input placeholder=\"Enter Name\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-datetime placeholder=\"Expiry Date\" pickerFormat=\"YYYY MM DD\" formControlName=\"expiry_date\"></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Select Type</ion-label>\n              <ion-select formControlName=\"type\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"fast Food\">Fast Food</ion-select-option>\n                <ion-select-option value=\"rise\">Rise</ion-select-option>\n                <ion-select-option value=\"simple food\">Simple Food</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-input placeholder=\"Quantity\" formControlName=\"quantity\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Unit</ion-label>\n              <ion-select formControlName=\"unit\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <ion-select-option *ngFor=\"let item of units\" value=\"{{item}}\">{{item}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button size=\"default\" [disabled]=\"donateFoodForm.invalid\" (click)=\"donateFood()\" color=\"primary\" type=\"submit\" expand=\"block\">Donate Food</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.module.ts ***!
  \**********************************************************/
/*! exports provided: DonateFoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPageModule", function() { return DonateFoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donate_food_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donate-food.page */ "./src/app/donner/donate-food/donate-food.page.ts");







const routes = [
    {
        path: '',
        component: _donate_food_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPage"]
    }
];
let DonateFoodPageModule = class DonateFoodPageModule {
};
DonateFoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_donate_food_page__WEBPACK_IMPORTED_MODULE_6__["DonateFoodPage"]]
    })
], DonateFoodPageModule);



/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9kb25hdGUtZm9vZC9kb25hdGUtZm9vZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donner/donate-food/donate-food.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donate-food/donate-food.page.ts ***!
  \********************************************************/
/*! exports provided: DonateFoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateFoodPage", function() { return DonateFoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let DonateFoodPage = class DonateFoodPage {
    constructor(route, http, formBuilder, service, router) {
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.units = ['grams', 'kilo grams', 'dozen', 'pieces'];
        this.today = new Date();
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            console.log('charity-house', paramMap);
            this.charityID = paramMap.get('id');
            console.log('id', this.charityID);
        });
        this.formInitializer();
        // this.today.setDate(this.today.getDate() + 3);
        this.dateTill = this.today.toISOString().substr(0, 10);
    }
    formInitializer() {
        this.donateFoodForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            expiry_date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            unit: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    donateFood() {
        console.log('unit', this.donateFoodForm.value.unit);
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        console.log('current date', this.date);
        const test = this.donateFoodForm.value;
        // const dateFromForm = test.expiry_date.getFullYear() + '-' + (test.expiry_date.getMonth() + 1 ) + '-' + test.expiry_date.getDate();
        const dateFormat = test.expiry_date.split('T')[0];
        console.log('date after conversion', dateFormat);
        console.log('form data', test);
        // This id will comes from the service, because when user will login, his ID will save to service
        // and retrieved at time of send data to server.
        const donner = JSON.parse(localStorage.getItem('donner'));
        const donnerID = donner.id;
        console.log('donner id ', donnerID);
        this.finalDonationObject = '{"quantityValue" : "' + test.quantity + '",' +
            '"quantityUnit" : "' + test.unit + '",' +
            '"foodItem": {' +
            '"name": "' + test.name + '",' +
            '"expiry_date": "' + dateFormat + '",' +
            '"type": "' + test.type + '" },' +
            '"donation": {' + '"date": "' + this.date + '",' +
            '"donner": {' + '"id": ' + donnerID + ' },' +
            '"charityHouse": {' + '"id": ' + this.charityID + ' }}}';
        console.log('full object', this.finalDonationObject);
        const foodDonation = JSON.parse(this.finalDonationObject);
        this.saveFoodDonation(foodDonation).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['charityList']);
        }, error => {
            console.log('error', error);
        });
        // console.log('expiry date', test.expiry_date);
        // if (test.expiry_date < this.date) {
        //   alert('date is not valid');
        // }
        // if (test.expiry_date > this.date) {
        //   alert('date is valid');
        // }
        // console.log(this.donateFoodForm.value);
    }
    saveFoodDonation(dataObj) {
        // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // This link is working coorectly.
        console.log('data recieved for put. ', dataObj);
        const url = `${this.service.homeUrl}/foodDonationDetails/newFoodDonationDetails`;
        return this.http.post(url, dataObj);
    }
};
DonateFoodPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DonateFoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donate-food',
        template: __webpack_require__(/*! raw-loader!./donate-food.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donate-food/donate-food.page.html"),
        styles: [__webpack_require__(/*! ./donate-food.page.scss */ "./src/app/donner/donate-food/donate-food.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DonateFoodPage);



/***/ })

}]);
//# sourceMappingURL=donner-donate-food-donate-food-module-es2015.js.map