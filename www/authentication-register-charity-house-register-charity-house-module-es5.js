(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-register-charity-house-register-charity-house-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/register-charity-house/register-charity-house.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/register-charity-house/register-charity-house.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registerCharityHouseForm\">\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Enter Charity House Details</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input placeholder=\"Charity House's Name\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.name.touched && registerFormControl.name.errors?.required\">First name required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('name').hasError('pattern')\">Enter only alphabets</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.first_name.errors?.required\">First name required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.email.touched && registerFormControl.email.errors?.required\">Email required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('email').hasError('pattern')\">You can enter alphabets numeric value and spacial character and dot</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.first_name.errors?.required\">Email required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Number of dependents\" formControlName=\"no_of_dependents\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.no_of_dependents.touched && registerFormControl.no_of_dependents.errors?.required\">Dependents required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('no_of_dependents').hasError('pattern')\">Enter only digits</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.no_of_dependents.errors?.required\">Dependents required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Contact\" formControlName=\"contact\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.contact.touched && registerFormControl.contact.errors?.required\">contact required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('contact').hasError('pattern')\">Enter only digits</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.contact.errors?.required\">contact is required.</span>\n            </div>\n            <ion-item>\n              <ion-label position=\"floating\">Type</ion-label>\n              <ion-select value=\"Donner\" formControlName=\"type\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Old House\">Old House</ion-select-option>\n                <ion-select-option value=\"Orphan House\">Orphan House</ion-select-option>\n                <ion-select-option value=\"Food Supplier\">Food Supplier</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.no_of_dependents.errors?.required\">Dependents required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Bank Name\" formControlName=\"bank_name\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.bank_name.touched && registerFormControl.bank_name.errors?.required\">bank name required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('bank_name').hasError('pattern')\">Enter only Alphabets</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.bank_name.errors?.required\">bank name required.</span>\n            </div>\n            <ion-item>\n              <ion-input placeholder=\"Account Number\" formControlName=\"account_no\"></ion-input>\n            </ion-item>\n            <div>\n              <span class=\"text-danger\" *ngIf=\"registerFormControl.account_no.touched && registerFormControl.account_no.errors?.required\">account number is required.</span>\n              <span class=\"text-danger\" *ngIf=\"registerCharityHouseForm.get('account_no').hasError('pattern')\">Enter only digits</span>\n              <span class=\"text-danger\" *ngIf=\"submitted && registerFormControl.account_no.errors?.required\">account number is required.</span>\n            </div>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button size=\"large\" (click)=\"save()\" color=\"primary\" type=\"submit\" expand=\"block\">Proceed</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/register-charity-house/register-charity-house.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/register-charity-house/register-charity-house.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RegisterCharityHousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCharityHousePageModule", function() { return RegisterCharityHousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_charity_house_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-charity-house.page */ "./src/app/authentication/register-charity-house/register-charity-house.page.ts");







var routes = [
    {
        path: '',
        component: _register_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["RegisterCharityHousePage"]
    }
];
var RegisterCharityHousePageModule = /** @class */ (function () {
    function RegisterCharityHousePageModule() {
    }
    RegisterCharityHousePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_register_charity_house_page__WEBPACK_IMPORTED_MODULE_6__["RegisterCharityHousePage"]]
        })
    ], RegisterCharityHousePageModule);
    return RegisterCharityHousePageModule;
}());



/***/ }),

/***/ "./src/app/authentication/register-charity-house/register-charity-house.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/authentication/register-charity-house/register-charity-house.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLWNoYXJpdHktaG91c2UvcmVnaXN0ZXItY2hhcml0eS1ob3VzZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/register-charity-house/register-charity-house.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/register-charity-house/register-charity-house.page.ts ***!
  \**************************************************************************************/
/*! exports provided: RegisterCharityHousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCharityHousePage", function() { return RegisterCharityHousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






var RegisterCharityHousePage = /** @class */ (function () {
    function RegisterCharityHousePage(route, router, http, service, formBuilder) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.service = service;
        this.formBuilder = formBuilder;
        this.today = new Date();
    }
    Object.defineProperty(RegisterCharityHousePage.prototype, "registerFormControl", {
        get: function () {
            return this.registerCharityHouseForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterCharityHousePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.testData = paramMap;
            // this.obj1 = paramMap.get('obj1');
            // this.obj2 = paramMap.get('obj2');
            // console.log('data reciving', this.first);
            // console.log('obj1', this.obj1);
            // console.log('obj2', this.obj2);
            // this.first = paramMap.get('first_name');
            // const user = paramMap;
            // this.last = paramMap.get('last_name');
            // console.log('first_name ' + this.first);
            // // this.tstUser = { '{"first_name" : " ' + paramMap.get('first_name') + ' " , "last_name: " ' + this.last};
            _this.user = '"user" : {"first_name" : "' + paramMap.get('first_name') +
                '" , "last_name" : "' + paramMap.get('last_name') +
                '" , "email" : "' + paramMap.get('email') +
                '" , "user_name" : "' + paramMap.get('user_name') +
                '" , "password" : "' + paramMap.get('password') +
                '" , "role"  : "' + paramMap.get('role') + '"}';
        });
        this.formInitializer();
    };
    RegisterCharityHousePage.prototype.formInitializer = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        // this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1 ) + '-' + this.today.getDate();
        // console.log('current date', this.date);
        this.registerCharityHouseForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(EMAILPATTERN)]],
            no_of_dependents: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            contact: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bank_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            account_no: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]]
        });
    };
    RegisterCharityHousePage.prototype.save = function () {
        if (this.registerCharityHouseForm.valid) {
            this.submitted = true;
            console.log('formData', this.registerCharityHouseForm.value);
            var formData = this.registerCharityHouseForm.value;
            this.charityHouse = '{"name" : " ' + formData.name +
                '" , "email" : "' + formData.email +
                '" , "no_of_dependents" : "' + formData.no_of_dependents +
                '" , "contact" : "' + formData.contact +
                '" , "type" : "' + formData.type +
                '" , "bank_name" : "' + formData.bank_name +
                '" , "account_no" : "' + formData.account_no +
                '" ,' + this.user +
                ',';
            console.log('data before parsing', this.charityHouse);
            // const chkObj = JSON.parse(this.first);
            // if (isJsonObject(chkObj)) {
            //   const newObject = Object.assign(this.first, formData);
            //   console.log('new merged Object', newObject);
            // } else {
            //   alert('not JSON');
            // }
            // const newObject = Object.assign(formData, chkObj);
            // console.log('new merged Object', newObject);
            // const readyToPost = JSON.parse(this.charityHouse);
            console.log('ready to post', this.charityHouse);
            var url = "register-charity-house/" + this.charityHouse;
            this.router.navigateByUrl(url);
        }
    };
    RegisterCharityHousePage.prototype.saveHttpReq = function (dataObj) {
        // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // This link is working coorectly.
        console.log(dataObj);
        var url = this.service.homeUrl + "/charityHouses/newCharityHouse";
        return this.http.post(url, dataObj);
    };
    RegisterCharityHousePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterCharityHousePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-charity-house',
            template: __webpack_require__(/*! raw-loader!./register-charity-house.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/register-charity-house/register-charity-house.page.html"),
            styles: [__webpack_require__(/*! ./register-charity-house.page.scss */ "./src/app/authentication/register-charity-house/register-charity-house.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterCharityHousePage);
    return RegisterCharityHousePage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-register-charity-house-register-charity-house-module-es5.js.map