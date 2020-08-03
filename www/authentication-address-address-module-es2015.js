(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-address-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/address/address.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/address/address.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addressForm\">\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Enter Address Details</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input placeholder=\"Street address\" formControlName=\"streetAddress\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerAddressFormControl.streetAddress.touched && registerAddressFormControl.streetAddress.errors?.required\">street Address required.</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerAddressFormControl.streetAddress.errors?.required\">street Address required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"City\" formControlName=\"city\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerAddressFormControl.city.touched && registerAddressFormControl.city.errors?.required\">city required.</span>\n              <span class=\"text-danger\" *ngIf=\"addressForm.get('city').hasError('pattern')\">Enter only digits</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerAddressFormControl.city.errors?.required\">city required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"zip Code\" formControlName=\"zipCode\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerAddressFormControl.zipCode.touched && registerAddressFormControl.zipCode.errors?.required\">zip Code required.</span>\n              <span class=\"text-danger\" *ngIf=\"addressForm.get('zipCode').hasError('pattern')\">Enter only digits</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerAddressFormControl.zipCode.errors?.required\">zip Code required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"state\" formControlName=\"state\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerAddressFormControl.state.touched && registerAddressFormControl.state.errors?.required\">state required.</span>\n              <span class=\"text-danger\" *ngIf=\"addressForm.get('state').hasError('pattern')\">Enter only Alphabets</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerAddressFormControl.state.errors?.required\">state required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Country\" formControlName=\"country\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerAddressFormControl.country.touched && registerAddressFormControl.country.errors?.required\">country required.</span>\n              <span class=\"text-danger\" *ngIf=\"addressForm.get('country').hasError('pattern')\">Enter only Alphabets</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerAddressFormControl.country.errors?.required\">country required.</span>\n            </div>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button size=\"large\"(click)=\"registerCharityHouse()\" color=\"primary\" type=\"submit\" expand=\"block\">Register&nbsp;&nbsp;&nbsp;<ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner></ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/address/address.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/address/address.module.ts ***!
  \**********************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/authentication/address/address.page.ts");







const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]
    }
];
let AddressPageModule = class AddressPageModule {
};
AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/authentication/address/address.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/authentication/address/address.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/address/address.page.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication/address/address.page.ts ***!
  \********************************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let AddressPage = class AddressPage {
    constructor(route, router, http, service, formBuilder) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.obj = paramMap.get('id');
            console.log('reciving data', this.obj);
        });
        this.formInitializer();
    }
    formInitializer() {
        this.addressForm = this.formBuilder.group({
            streetAddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')]],
            zipCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*')]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z]*')]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*')]]
        });
    }
    get registerAddressFormControl() {
        return this.addressForm.controls;
    }
    registerCharityHouse() {
        this.submitted = true;
        this.loading = true;
        if (this.addressForm.valid) {
            console.log('formData', this.addressForm.value);
            const formData = this.addressForm.value;
            this.charity = '' + this.obj + '"address" : {"streetAddress" : "' + formData.streetAddress +
                '" , "city" : "' + formData.city +
                '" , "zipCode" : "' + formData.zipCode +
                '" , "state" : "' + formData.state +
                '" , "country" : "' + formData.country +
                '" } }';
            console.log('data befor parsing', this.charity);
            const completeCharityHouse = JSON.parse(this.charity);
            console.log('complete charity house', completeCharityHouse);
            this.saveHttpReq(completeCharityHouse).subscribe(data => {
                console.log('I got this response -> ', data);
                this.loading = false;
                alert('Please! check your email and verify your account.');
                this.router.navigate(['login']);
            }, error => {
                console.log('error', error);
            });
        }
        this.loading = false;
    }
    saveHttpReq(dataObj) {
        console.log('recieved data ', dataObj);
        const url = `${this.service.homeUrl}/charityHouses/newCharityHouse`;
        const test = this.http.post(url, dataObj);
        this.loading = false;
        return test;
    }
};
AddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: __webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/address/address.page.html"),
        styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/authentication/address/address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=authentication-address-address-module-es2015.js.map