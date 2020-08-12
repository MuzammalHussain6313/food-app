(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/tabs/tabs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/tabs/tabs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"donners\">\n        <h4>Donners</h4>\n      </ion-tab-button>\n      <ion-tab-button tab=\"charity-houses\">\n        <h4>Charity Houses</h4>\n      </ion-tab-button>\n      <!--    <ion-tab-button tab=\"tab3\">-->\n      <!--      <ion-label>Tab 3</ion-label>-->\n      <!--    </ion-tab-button>-->\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/admin/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'donners',
                loadChildren: () => __webpack_require__.e(/*! import() | donners-donners-module */ "donners-donners-module").then(__webpack_require__.bind(null, /*! ../donners/donners.module */ "./src/app/admin/donners/donners.module.ts")).then(m => m.DonnersPageModule)
            },
            {
                path: 'charity-houses',
                loadChildren: () => __webpack_require__.e(/*! import() | charity-houses-charity-houses-module */ "charity-houses-charity-houses-module").then(__webpack_require__.bind(null, /*! ../charity-houses/charity-houses.module */ "./src/app/admin/charity-houses/charity-houses.module.ts")).then(m => m.CharityHousesPageModule)
            },
            // {
            //   path: 'tab3',
            //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
            // },
            {
                path: '',
                redirectTo: '/tabs/donners',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/donners',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/admin/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/admin/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/admin/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/admin/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/admin/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=admin-tabs-tabs-module-es2015.js.map