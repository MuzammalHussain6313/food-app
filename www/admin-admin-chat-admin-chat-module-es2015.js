(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-chat-admin-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-chat/admin-chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-chat/admin-chat.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Admin Chat</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row *ngFor=\"let message of messages\">\n            <ion-col size=\"9\" *ngIf=\"currentUser !== message?.sender\" class=\"message other-message\">\n                <b>{{message?.sender}}</b><br>\n                <span>{{message?.message}}</span>\n                <div class=\"time\" text-right><br>\n                    {{message.createdAt | date:'short'}}</div>\n            </ion-col>\n\n            <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sender\" class=\"message my-message\">\n                <b>{{message?.sender}}</b><br>\n                <span>{{message?.message}}</span>\n                <div class=\"time\" text-right><br>\n                    {{message.createdAt | date:'short'}}</div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color=\"light\">\n        <ion-row align-items-end no-padding>\n            <ion-col size=\"10\">\n                <textarea placeholder=\"Enter your message\" autosize [maxRows]=\"3\" [(ngModel)]=\"newMsg\"\n                          class=\"message-input\"></textarea>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-img (click)=\"sendMessage()\" style=\"width: 30px; height: 30px;\" src=\"/assets/send.svg\"\n                         alt=\"image\"></ion-img>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminChatPageModule", function() { return AdminChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-chat.page */ "./src/app/admin/admin-chat/admin-chat.page.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm2015/ngx-autosize.js");








const routes = [
    {
        path: '',
        component: _admin_chat_page__WEBPACK_IMPORTED_MODULE_6__["AdminChatPage"]
    }
];
let AdminChatPageModule = class AdminChatPageModule {
};
AdminChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"]
        ],
        declarations: [_admin_chat_page__WEBPACK_IMPORTED_MODULE_6__["AdminChatPage"]]
    })
], AdminChatPageModule);



/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-primary);\n  color: ghostwhite;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: white;\n}\n\n.time {\n  color: white;\n  float: right;\n}\n\n.message-input {\n  width: 100%;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 4px solid var(--ion-color-medium);\n  outline: none;\n  border-radius: 15px;\n}\n\n::-webkit-input-placeholder {\n  padding-top: 10px;\n  text-align: center;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tY2hhdC9DOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcR2l0SHViXFxmb29kLWFwcC9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLWNoYXRcXGFkbWluLWNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1jaGF0L2FkbWluLWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNoYXQvYWRtaW4tY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1lc3NhZ2V7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLm90aGVyLW1lc3NhZ2V7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcbi5teS1tZXNzYWdle1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4ubWVzc2FnZS1pbnB1dHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIC8vLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC8vLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1zZy1idG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcclxuICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcclxufVxyXG4iLCIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG59XG5cbi5teS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXNnLWJ0biB7XG4gIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-chat/admin-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/admin-chat/admin-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: AdminChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminChatPage", function() { return AdminChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");







let AdminChatPage = class AdminChatPage {
    constructor(route, http, service, db) {
        this.route = route;
        this.http = http;
        this.service = service;
        this.db = db;
        this.messages = [];
        this.recivedData = [];
        this.loadchannelName();
        console.log('channel Name', this.channel);
        this.db.list(`/channels/${this.channel}`).valueChanges().subscribe(data => {
            console.log('data', data);
            this.recivedData = data;
            this.messages = data;
            // this.messages = this.recivedData.filter(x => x.channelName === this.channel);
            console.log('messages after filter', this.messages);
        });
    }
    ngOnInit() {
    }
    loadchannelName() {
        this.username = JSON.parse(localStorage.getItem('chatUsername'));
        this.channel = this.username + '-admin';
        this.user = JSON.parse(localStorage.getItem('user'));
        this.currentUser = this.user.user_name.toLowerCase(); // + ' ' + this.user.last_name.toLowerCase();
        console.log('current user', this.currentUser);
    }
    sendMessage() {
        const url = `${this.service.homeUrl}/channels/exist-or-not/${this.channel}`;
        this.http.post(url, 1).subscribe(data => {
            console.log('I got this response -> ', data);
        }, error => {
            console.log('error', error);
        });
        this.db.list(`/channels/${this.channel}`).push({
            sender: this.currentUser,
            message: this.newMsg,
            createdAt: new Date().getTime(),
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(10);
        });
    }
};
AdminChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], AdminChatPage.prototype, "content", void 0);
AdminChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-chat',
        template: __webpack_require__(/*! raw-loader!./admin-chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-chat/admin-chat.page.html"),
        styles: [__webpack_require__(/*! ./admin-chat.page.scss */ "./src/app/admin/admin-chat/admin-chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
], AdminChatPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-chat-admin-chat-module-es2015.js.map