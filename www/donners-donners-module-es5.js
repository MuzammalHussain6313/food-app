(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donners-donners-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/donners/donners.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/donners/donners.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of result\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <p (click)=\"showSingleItem(item?.id)\">{{item?.user.first_name}} {{item?.user.last_name}}</p>\n      <ion-img (click)=\"updateItem(item?.id)\" style=\"width: 20px; height: 20px;\" src=\"/assets/pencil-sharp.svg\"\n               alt=\"update\" slot=\"end\"></ion-img>\n      <ion-icon (click)=\"deleteDonner(item?.id)\" size=\"default\" name=\"trash\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/admin/donners/donners.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/donners/donners.module.ts ***!
  \*************************************************/
/*! exports provided: DonnersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnersPageModule", function() { return DonnersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donners.page */ "./src/app/admin/donners/donners.page.ts");







var routes = [
    {
        path: '',
        component: _donners_page__WEBPACK_IMPORTED_MODULE_6__["DonnersPage"]
    }
];
var DonnersPageModule = /** @class */ (function () {
    function DonnersPageModule() {
    }
    DonnersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_donners_page__WEBPACK_IMPORTED_MODULE_6__["DonnersPage"]]
        })
    ], DonnersPageModule);
    return DonnersPageModule;
}());



/***/ }),

/***/ "./src/app/admin/donners/donners.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin/donners/donners.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rvbm5lcnMvZG9ubmVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/donners/donners.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/donners/donners.page.ts ***!
  \***********************************************/
/*! exports provided: DonnersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnersPage", function() { return DonnersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var DonnersPage = /** @class */ (function () {
    function DonnersPage(router, storage, http, alertController, service) {
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.alertController = alertController;
        this.service = service;
        this.result = [];
        this.listActive = true;
        this.updateActive = false;
    }
    DonnersPage.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.service.homeUrl + '/donners/list';
        this.http.get(url, { observe: 'response' }).subscribe(function (response) {
            if (response.status === 200 || response.status === 201) {
                _this.t = response.body;
                console.log('data loading from API');
                _this.result = _this.t.content;
                localStorage.removeItem('donners');
                localStorage.setItem('donners', JSON.stringify(_this.t.content));
                console.log('data : ', _this.t.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, function (error) {
            console.log('data loading from loadData function.');
            _this.loadData();
            console.log('error', error);
        });
        console.log('result' + this.result);
    };
    DonnersPage.prototype.loadData = function () {
        this.result = JSON.parse(localStorage.getItem('donners'));
    };
    DonnersPage.prototype.showSingleItem = function (item) {
        var url = "detail/" + item;
        this.router.navigateByUrl(url);
    };
    DonnersPage.prototype.updateItem = function (id) {
        // this.listActive = false;
        // this.updateActive = true;
        var url = "update/" + id;
        this.router.navigateByUrl(url);
    };
    DonnersPage.prototype.deleteDonner = function (item) {
        console.log('id ' + item);
        // this.callAPI(item).subscribe(
        //     data => {
        //       console.log('I got this response -> ', data);
        //       // this.router.navigate(['donners']);
        //     },
        //     error => {
        //       console.log('error', error);
        //     }
        // );
        // alert('can\'t deleted. Please! contact with supper admin using hmuzammal015@gmail.com');
        this.presentAlertConfirm();
        this.router.navigate(['tabs/donners']);
    };
    DonnersPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Message <strong>can\'t deleted.Please! contact with supper admin using hmuzammal015@gmail.com</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DonnersPage.prototype.callAPI = function (studentId) {
        // delete code added and working correctly.
        console.log('data received.', studentId);
        var url = this.service.homeUrl + "/donners/deleteDonner/" + studentId;
        console.log('link', url);
        return this.http.delete(url);
    };
    DonnersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"] }
    ]; };
    DonnersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donners',
            template: __webpack_require__(/*! raw-loader!./donners.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/donners/donners.page.html"),
            styles: [__webpack_require__(/*! ./donners.page.scss */ "./src/app/admin/donners/donners.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _list_service__WEBPACK_IMPORTED_MODULE_5__["ListService"]])
    ], DonnersPage);
    return DonnersPage;
}());



/***/ })

}]);
//# sourceMappingURL=donners-donners-module-es5.js.map