(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-chat-channels-chat-channels-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/chat-channels/chat-channels.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/chat-channels/chat-channels.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Donner Conversation\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"welcome-card\" *ngFor=\"let item of channels\">\n    <ion-item (click)=\"openChat(item?.name)\">\n      <ion-label>{{changeValue(item?.name)}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.module.ts ***!
  \**************************************************************/
/*! exports provided: ChatChannelsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChannelsPageModule", function() { return ChatChannelsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_channels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-channels.page */ "./src/app/donner/chat-channels/chat-channels.page.ts");







const routes = [
    {
        path: '',
        component: _chat_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChatChannelsPage"]
    }
];
let ChatChannelsPageModule = class ChatChannelsPageModule {
};
ChatChannelsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_channels_page__WEBPACK_IMPORTED_MODULE_6__["ChatChannelsPage"]]
    })
], ChatChannelsPageModule);



/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lci9jaGF0LWNoYW5uZWxzL2NoYXQtY2hhbm5lbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/donner/chat-channels/chat-channels.page.ts":
/*!************************************************************!*\
  !*** ./src/app/donner/chat-channels/chat-channels.page.ts ***!
  \************************************************************/
/*! exports provided: ChatChannelsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChannelsPage", function() { return ChatChannelsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let ChatChannelsPage = class ChatChannelsPage {
    constructor(db, router, http, service) {
        this.db = db;
        this.router = router;
        this.http = http;
        this.service = service;
        this.channels = [];
        this.loadUser();
        this.http.get(`${this.service.homeUrl}/channels/list/${this.compareUser}`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.recivedData = response.body;
                this.channels = this.recivedData;
            }
            console.log('status code', response.status);
            console.log('channels', this.channels);
            console.log('complete content', response.body);
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('error', error);
        });
    }
    ngOnInit() {
        this.loadUser();
    }
    loadUser() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        console.log('donner', this.currentUser);
        this.compareUser = this.currentUser.user.first_name.toLowerCase() + '-' + this.currentUser.user.last_name.toLowerCase();
    }
    openChat(item) {
        localStorage.setItem('channelName', JSON.stringify(item));
        console.log('sending item: ', item);
        this.router.navigate(['donner-chat']);
    }
    changeValue(channelName) {
        const trimString = channelName.replace(this.currentUser.user.first_name.toLowerCase(), '')
            .replace(this.currentUser.user.last_name.toLowerCase(), '')
            .split('-').join(' ');
        console.log('trim', trimString);
        return trimString;
    }
};
ChatChannelsPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] }
];
ChatChannelsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-channels',
        template: __webpack_require__(/*! raw-loader!./chat-channels.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/chat-channels/chat-channels.page.html"),
        styles: [__webpack_require__(/*! ./chat-channels.page.scss */ "./src/app/donner/chat-channels/chat-channels.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
], ChatChannelsPage);



/***/ })

}]);
//# sourceMappingURL=donner-chat-channels-chat-channels-module-es2015.js.map