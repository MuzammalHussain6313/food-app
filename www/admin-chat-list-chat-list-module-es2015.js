(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-chat-list-chat-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/chat-list/chat-list.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/chat-list/chat-list.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Help Conversation\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item (click)=\"openChat(item?.user_name)\" *ngFor=\"let item of users\">\n            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n            <p>{{item?.first_name}} {{item?.last_name}}</p>\n            <ion-img *ngIf=\"item?.role == 'charity house'\" style=\"width: 40px; height: 40px;\" src=\"/assets/charity.jpg\"\n                     alt=\"update\" slot=\"end\"></ion-img>\n            <ion-img *ngIf=\"item?.role == 'donner'\" style=\"width: 40px; height: 40px;\" src=\"/assets/restaurant.ico\"\n                     alt=\"update\" slot=\"end\"></ion-img>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-list.page */ "./src/app/admin/chat-list/chat-list.page.ts");







const routes = [
    {
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]
    }
];
let ChatListPageModule = class ChatListPageModule {
};
ChatListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
    })
], ChatListPageModule);



/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYXQtbGlzdC9jaGF0LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/chat-list/chat-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/chat-list/chat-list.page.ts ***!
  \***************************************************/
/*! exports provided: ChatListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPage", function() { return ChatListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");






let ChatListPage = class ChatListPage {
    constructor(db, router, http, service) {
        this.db = db;
        this.router = router;
        this.http = http;
        this.service = service;
        this.users = [];
        this.http.get(`${this.service.homeUrl}/channels/conversation-user-list`, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.recivedData = response.body;
                this.users = this.recivedData;
            }
            console.log('status code', response.status);
            console.log('channels', this.users);
            console.log('complete content', response.body);
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('error', error);
        });
    }
    ngOnInit() {
    }
    openChat(item) {
        localStorage.setItem('chatUsername', JSON.stringify(item));
        console.log('sending item: ', item);
        this.router.navigate(['admin-chat']);
    }
};
ChatListPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] }
];
ChatListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-list',
        template: __webpack_require__(/*! raw-loader!./chat-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/chat-list/chat-list.page.html"),
        styles: [__webpack_require__(/*! ./chat-list.page.scss */ "./src/app/admin/chat-list/chat-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
], ChatListPage);



/***/ })

}]);
//# sourceMappingURL=admin-chat-list-chat-list-module-es2015.js.map