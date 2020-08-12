(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charityHouse-feedback-feedback-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charityHouse/feedback/feedback.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charityHouse/feedback/feedback.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"feedbackForm\">\n    <ion-grid>\n      <ion-row color=\"justify-content-center\">\n        <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h3>Please! provide feedback</h3>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-item>\n              <ion-input placeholder=\"Email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input placeholder=\"subject\" formControlName=\"subject\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea placeholder=\"Feedback Message\" formControlName=\"feedback_message\"></ion-textarea>\n            </ion-item>\n          </div>\n          <div class=\"ion-padding\">\n            <ion-button size=\"default\" [disabled]=\"feedbackForm.invalid\" (click)=\"sendFeedback()\" color=\"primary\" type=\"submit\" expand=\"block\">Send Feedback</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.module.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/charityHouse/feedback/feedback.page.ts");







const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJpdHlIb3VzZS9mZWVkYmFjay9mZWVkYmFjay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/charityHouse/feedback/feedback.page.ts":
/*!********************************************************!*\
  !*** ./src/app/charityHouse/feedback/feedback.page.ts ***!
  \********************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let FeedbackPage = class FeedbackPage {
    constructor(route, http, router, service, alertController, formBuilder) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.donnerID = paramMap.get('id');
            console.log('data coming from donner list.', paramMap.get('id'));
        });
        this.formInitializer();
    }
    formInitializer() {
        this.feedbackForm = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            subject: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            feedback_message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    sendFeedback() {
        const test = this.feedbackForm.value;
        const charityHouse = JSON.parse(localStorage.getItem('user'));
        const charityID = charityHouse.id;
        console.log('charity id ', charityID);
        this.finalFeedbackObject = '{"email": "' + test.email + '",' +
            ' "subject": "' + test.subject + '",' +
            ' "feedbackMessage": "' + test.feedback_message + '",' +
            ' "donner": { "id": ' + this.donnerID + '},' +
            ' "charityHouse": { "id": ' + charityID + '}' + '}';
        console.log('full object', this.finalFeedbackObject);
        const feedback = JSON.parse(this.finalFeedbackObject);
        this.saveFeedback(feedback).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['donner-list']);
        }, error => {
            console.log('error', error);
        });
    }
    saveFeedback(dataObj) {
        console.log('data recieved for put. ', dataObj);
        const url = `${this.service.homeUrl}/feedbacks/newFeedback`;
        // this.presentAlertConfirm();
        return this.http.post(url, dataObj);
        alert('Feedback is recorded. Thanks you for sending feedback.');
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: __webpack_require__(/*! raw-loader!./feedback.page.html */ "./node_modules/raw-loader/index.js!./src/app/charityHouse/feedback/feedback.page.html"),
        styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/charityHouse/feedback/feedback.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FeedbackPage);



/***/ })

}]);
//# sourceMappingURL=charityHouse-feedback-feedback-module-es2015.js.map