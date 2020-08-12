(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-send-report-send-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/send-report/send-report.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/send-report/send-report.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Send Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"reportForm\" >\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Please report the Donner!</h3>\n          </div>\n          <div>\n            <ion-item style=\"padding-left: 25px; padding-right: 25px\">\n              <ion-label position=\"floating\">Types</ion-label>\n              <ion-select formControlName=\"type\" placeholder=\"--Select--\" okText=\"Okay\" cancelText=\"Dismiss\">\n                <ion-select-option *ngFor=\"let item of types\" value={{item}}>{{item}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-textarea rows=\"1\" style=\"height: 50px\" class=\"message-input\" formControlName=\"email\" placeholder=\"Email\"></ion-textarea>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-textarea rows=\"7\" style=\"height: 150px\" class=\"message-input\" formControlName=\"reportMessage\" placeholder=\"Enter Report message here...\"></ion-textarea>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button shape=\"round\" (click)=\"sendReport()\" color=\"primary\" type=\"submit\" expand=\"block\">Send Report</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.module.ts ***!
  \****************************************************************/
/*! exports provided: SendReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportPageModule", function() { return SendReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-report.page */ "./src/app/charityHouse/send-report/send-report.page.ts");







const routes = [
    {
        path: '',
        component: _send_report_page__WEBPACK_IMPORTED_MODULE_6__["SendReportPage"]
    }
];
let SendReportPageModule = class SendReportPageModule {
};
SendReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_send_report_page__WEBPACK_IMPORTED_MODULE_6__["SendReportPage"]]
    })
], SendReportPageModule);



/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  border-style: inset;\n  border-width: 2px;\n}\n\n.message-input {\n  width: 95%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  border-color: #4c8dff;\n  outline: none;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0eUhvdXNlL3NlbmQtcmVwb3J0L0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXGZvb2QtYXBwL3NyY1xcYXBwXFxjaGFyaXR5SG91c2VcXHNlbmQtcmVwb3J0XFxzZW5kLXJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXJpdHlIb3VzZS9zZW5kLXJlcG9ydC9zZW5kLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jaGFyaXR5SG91c2Uvc2VuZC1yZXBvcnQvc2VuZC1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLm1lc3NhZ2UtaW5wdXR7XHJcbiAgd2lkdGg6IDk1JTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGM4ZGZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcbiIsInRleHRhcmVhIHtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDk1JTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItY29sb3I6ICM0YzhkZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/charityHouse/send-report/send-report.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/charityHouse/send-report/send-report.page.ts ***!
  \**************************************************************/
/*! exports provided: SendReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendReportPage", function() { return SendReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let SendReportPage = class SendReportPage {
    constructor(route, http, formBuilder, service, router) {
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.types = ['Spam', 'Harassment', 'nudity', 'violence', 'other'];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.reportID = paramMap.get('id');
            console.log('data coming from donner list.', paramMap.get('id'));
        });
        this.formInitializer();
    }
    formInitializer() {
        this.reportForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            reportMessage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    sendReport() {
        const test = this.reportForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('user'));
        console.log('ch', charityHouse);
        const charityID = charityHouse.id;
        console.log('charity id ', charityID);
        this.finalReportObject = '{"email": "' + test.email + '",' +
            ' "type": "' + test.type + '",' +
            ' "message": "' + test.reportMessage + '",' +
            ' "donner": { "id": ' + this.reportID + '},' +
            ' "charityHouse": { "id": ' + charityID + '}' + '}';
        console.log('full object', this.finalReportObject);
        const feedback = JSON.parse(this.finalReportObject);
        this.saveFeedback(feedback).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['donner-list']);
        }, error => {
            console.log('error', error);
        });
    }
    saveFeedback(dataObj) {
        console.log('data recieved for put. ', dataObj);
        const url = `${this.service.homeUrl}/reports/add`;
        return this.http.post(url, dataObj);
        alert('Thanks for reporting a donner. Admin will send you an email in short.');
    }
};
SendReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SendReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-report',
        template: __webpack_require__(/*! raw-loader!./send-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/send-report/send-report.page.html"),
        styles: [__webpack_require__(/*! ./send-report.page.scss */ "./src/app/charityHouse/send-report/send-report.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SendReportPage);



/***/ })

}]);
//# sourceMappingURL=charityHouse-send-report-send-report-module-es2015.js.map