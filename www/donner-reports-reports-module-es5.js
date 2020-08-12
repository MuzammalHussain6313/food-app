(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donner-reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donner/reports/reports.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donner/reports/reports.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"loadDonnerList()\" *ngIf=\"admin\"></ion-back-button>\n      <ion-menu-button *ngIf=\"!admin\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isEmpty\">\n  <ion-list class=\"ion-no-padding\" no-lines *ngFor=\"let item of result\">\n    <ion-card class=\"ion-no-padding\">\n      <ion-card-header>\n        <ion-card-title>{{item?.type}}</ion-card-title>\n        <ion-card-subtitle>{{item?.message}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item no-lines>\n          <ion-label color=\"green\">Details</ion-label>\n          <ion-img *ngIf=\"!item?.show\" (click)=\"expandCLick(item)\" style=\"width: 20px; height: 20px;\" src=\"/assets/down-arrow.svg\"\n                   alt=\"down\" slot=\"end\"></ion-img>\n          <ion-img *ngIf=\"item?.show\" (click)=\"expandCLick(item)\" style=\"width: 20px; height: 20px;\" src=\"/assets/up-arrow.svg\"\n                   alt=\"up\" slot=\"end\"></ion-img>\n        </ion-item>\n        <ion-card-content class=\"ion-no-padding\" *ngIf=\"item?.show\">\n          <p>Sender: {{ item?.charityHouse?.email }}</p>\n          <p>receiver: {{ item?.donner?.user?.email }}</p>\n        </ion-card-content>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"isEmpty\">\n  <div class=\"fullheight xc\">\n    <div>\n      <h3 class=\"item-color\">No Report</h3>\n    </div>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/donner/reports/reports.module.ts":
/*!**************************************************!*\
  !*** ./src/app/donner/reports/reports.module.ts ***!
  \**************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/donner/reports/reports.page.ts");







var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]
    }
];
var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/donner/reports/reports.page.scss":
/*!**************************************************!*\
  !*** ./src/app/donner/reports/reports.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  box-shadow: none !important;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.xc {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.item-color {\n  color: #bababa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVyL3JlcG9ydHMvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXEdpdEh1YlxcZm9vZC1hcHAvc3JjXFxhcHBcXGRvbm5lclxccmVwb3J0c1xccmVwb3J0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rvbm5lci9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kb25uZXIvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mdWxsaGVpZ2h0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi54YyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5pdGVtLWNvbG9ye1xyXG4gIGNvbG9yOiAjYmFiYWJhO1xyXG59XHJcbiIsIi5ib3JkZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ueGMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0tY29sb3Ige1xuICBjb2xvcjogI2JhYmFiYTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/donner/reports/reports.page.ts":
/*!************************************************!*\
  !*** ./src/app/donner/reports/reports.page.ts ***!
  \************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ReportsPage = /** @class */ (function () {
    function ReportsPage(router, route, storage, service, http) {
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.service = service;
        this.http = http;
        this.reportList = [];
        this.result = [];
        this.isEmpty = false;
    }
    ReportsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.donnerID = paramMap.get('id');
            console.log('id', _this.donnerID);
        });
        console.log('id', this.donnerID);
        this.http.get(this.service.homeUrl + "/reports/findByDonner/" + this.donnerID, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200 || response.status === 201) {
                console.log('responce', response.body);
                _this.reportList = response.body;
                console.log('data loading from API');
                _this.result = _this.reportList.content;
                console.log('length', _this.result.length);
                if (_this.result.length === 0) {
                    _this.isEmpty = true;
                }
                console.log('result', _this.result);
                localStorage.removeItem('reportList');
                localStorage.setItem('reportList', JSON.stringify(_this.result));
                console.log('reportList : ', _this.reportList.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, function (error) {
            console.log('data loading from loadData function.');
            console.log('error', error);
        });
        console.log('result' + this.result);
        this.loadData();
    };
    ReportsPage.prototype.loadData = function () {
        // this.result = JSON.parse(localStorage.getItem('user'));
        this.user = localStorage.getItem('role');
        console.log('role', this.user);
        if (this.user === 'donner') {
            this.donner = true;
        }
        if (this.user === 'admin') {
            this.admin = true;
        }
        console.log('admin role', this.user);
        console.log('donner role', this.user);
    };
    ReportsPage.prototype.expandCLick = function (item) {
        item.show = !item.show;
    };
    ReportsPage.prototype.loadDonnerList = function () {
        if (this.admin) {
            this.router.navigate(['/tabs']);
        }
        else {
            this.router.navigate(['/profile']);
        }
    };
    ReportsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/donner/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/donner/reports/reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=donner-reports-reports-module-es5.js.map