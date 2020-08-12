(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-donner-chat-donner-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/donner-chat/donner-chat.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/donner-chat/donner-chat.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Message</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages\">\n      <ion-col size=\"9\" *ngIf=\"currentUser !== message?.sender\" class=\"message other-message\">\n        <b>{{message?.sender}}</b><br>\n        <span>{{message?.message}}</span>\n        <div class=\"time\" text-right><br>\n          {{message.createdAt | date:'short'}}</div>\n      </ion-col>\n\n      <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sender\" class=\"message my-message\">\n        <b>{{message?.sender}}</b><br>\n        <span>{{message?.message}}</span>\n        <div class=\"time\" text-right><br>\n          {{message.createdAt | date:'short'}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row align-items-end no-padding>\n      <ion-col size=\"10\">\n        <textarea placeholder=\"Enter your message\" autosize [maxRows]=\"3\" [(ngModel)]=\"newMsg\" class=\"message-input\"></textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-img (click)=\"sendMessage()\" style=\"width: 30px; height: 30px;\" src=\"/assets/send.svg\" alt=\"image\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.module.ts ***!
  \**********************************************************/
/*! exports provided: DonnerChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerChatPageModule", function() { return DonnerChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donner_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donner-chat.page */ "./src/app/donner/donner-chat/donner-chat.page.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");








var routes = [
    {
        path: '',
        component: _donner_chat_page__WEBPACK_IMPORTED_MODULE_6__["DonnerChatPage"]
    }
];
var DonnerChatPageModule = /** @class */ (function () {
    function DonnerChatPageModule() {
    }
    DonnerChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]
            ],
            declarations: [_donner_chat_page__WEBPACK_IMPORTED_MODULE_6__["DonnerChatPage"]]
        })
    ], DonnerChatPageModule);
    return DonnerChatPageModule;
}());



/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-primary);\n  color: ghostwhite;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: white;\n}\n\n.time {\n  color: white;\n  float: right;\n}\n\n.message-input {\n  width: 100%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  outline: none;\n  border-radius: 15px;\n}\n\n::-webkit-input-placeholder {\n  padding-top: 10px;\n  text-align: center;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL2Rvbm5lci1jaGF0L0M6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxHaXRIdWJcXGZvb2QtYXBwL3NyY1xcYXBwXFxkb25uZXJcXGRvbm5lci1jaGF0XFxkb25uZXItY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rvbm5lci9kb25uZXItY2hhdC9kb25uZXItY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZG9ubmVyL2Rvbm5lci1jaGF0L2Rvbm5lci1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWVzc2FnZXtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4ub3RoZXItbWVzc2FnZXtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IGdob3N0d2hpdGU7XHJcbn1cclxuLm15LW1lc3NhZ2V7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5tZXNzYWdlLWlucHV0e1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgLy8td2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLy8tbW96LWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXNnLWJ0bntcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xyXG59XHJcbiIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tc2ctYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/donner/donner-chat/donner-chat.page.ts":
/*!********************************************************!*\
  !*** ./src/app/donner/donner-chat/donner-chat.page.ts ***!
  \********************************************************/
/*! exports provided: DonnerChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerChatPage", function() { return DonnerChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");







var DonnerChatPage = /** @class */ (function () {
    function DonnerChatPage(route, http, service, db) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.service = service;
        this.db = db;
        this.messages = [];
        this.recivedData = [];
        this.loadchannelName();
        console.log('channel Name', this.channel);
        this.db.list("/channels/" + this.channel).valueChanges().subscribe(function (data) {
            console.log('data', data);
            _this.recivedData = data;
            _this.messages = data;
            // this.messages = this.recivedData.filter(x => x.channelName === this.channel);
            console.log('messages after filter', _this.messages);
        });
    }
    DonnerChatPage.prototype.ngOnInit = function () {
    };
    DonnerChatPage.prototype.loadchannelName = function () {
        this.channel = JSON.parse(localStorage.getItem('channelName'));
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user.user_name.toLowerCase(); // + ' ' + this.user.user.last_name.toLowerCase();
        console.log('current user', this.currentUser);
    };
    DonnerChatPage.prototype.sendMessage = function () {
        var _this = this;
        var url = this.service.homeUrl + "/channels/exist-or-not/" + this.channel;
        this.http.post(url, 1).subscribe(function (data) {
            console.log('I got this response -> ', data);
        }, function (error) {
            console.log('error', error);
        });
        this.db.list("/channels/" + this.channel).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(function () {
            _this.content.scrollToBottom(10);
        });
    };
    DonnerChatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], DonnerChatPage.prototype, "content", void 0);
    DonnerChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donner-chat',
            template: __webpack_require__(/*! raw-loader!./donner-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/donner-chat/donner-chat.page.html"),
            styles: [__webpack_require__(/*! ./donner-chat.page.scss */ "./src/app/donner/donner-chat/donner-chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], DonnerChatPage);
    return DonnerChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-donner-chat-donner-chat-module-es5.js.map