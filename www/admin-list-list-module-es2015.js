(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/list/list.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/list/list.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Users\r\n        </ion-title>\r\n        <ion-button shape=\"circle\" slot=\"end\" (click)=\"addUser()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"top\">\r\n            <ion-tab-button (click)=\"activateCharityHouse()\">\r\n                <ion-label color=\"primary\">Charity Houses</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button (click)=\"activateDonner()\">\r\n                <ion-label color=\"primary\">Donners</ion-label>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n\r\n    </ion-tabs>\r\n\r\n<!--    <div *ngIf=\"donnerActive\">-->\r\n<!--        <app-donners></app-donners>-->\r\n<!--    </div>-->\r\n<!--    <div *ngIf=\"charityHouseActive\">-->\r\n<!--        <app-charity-houses></app-charity-houses>-->\r\n<!--    </div>-->\r\n<!--    <ion-list no-lines>-->\r\n<!--        <ion-item *ngFor=\"let item of result\" detail-push>-->\r\n<!--            <ion-icon slot=\"start\" name=\"person\"></ion-icon>-->\r\n<!--            <p (click)=\"showSingleItem(item)\">{{item?.first_name}} {{item?.last_name}}</p>-->\r\n<!--            <ion-img (click)=\"updateItem(item?.id)\" style=\"width: 20px; height: 20px;\" src=\"/assets/pencil-sharp.svg\" alt=\"update\" slot=\"end\"></ion-img>-->\r\n<!--            <ion-icon (click)=\"deleteProperty(item?.id)\" size=\"default\" name=\"trash\" slot=\"end\"></ion-icon>-->\r\n<!--        </ion-item>-->\r\n<!--    </ion-list>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/catch.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/catch.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var catch_1 = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/operator/catch.js");
rxjs_1.Observable.prototype.catch = catch_1._catch;
rxjs_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/map.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var map_1 = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/operator/map.js");
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/catch.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/catch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return operators_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/map.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/map.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return operators_1.map(project, thisArg)(this);
}
exports.map = map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/admin/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/admin/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
            ])
        ],
        entryComponents: [],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/admin/list/list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/admin/list/list.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/list/list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_8__);









let ListPage = class ListPage {
    constructor(router, storage, http, service, popoverController) {
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.service = service;
        this.popoverController = popoverController;
        this.result = [];
        this.charityHouseActive = true;
    }
    loadData() {
        this.result = JSON.parse(localStorage.getItem('users'));
    }
    ngOnInit() {
        const url = this.service.homeUrl + '/users/list';
        this.http.get(url, { observe: 'response' }).subscribe(response => {
            if (response.status === 200 || response.status === 201) {
                this.t = response.body;
                console.log('data loading from API');
                this.result = this.t.content;
                localStorage.removeItem('users');
                localStorage.setItem('users', JSON.stringify(this.t.content));
                console.log('data : ', this.t.content);
            }
            // You can access status:
            console.log('status code', response.status);
            console.log('complete content', response.body);
            // Or any other header:
            console.log('X-Custom-Header', response.headers.get('X-Custom-Header'));
        }, (error) => {
            console.log('data loading from loadData function.');
            this.loadData();
            console.log('error', error);
        });
        // this.data = this.http.get('http://localhost:8095/users/list');
        // this.data.subscribe(data => {
        //   // if (data.status === 200) {
        //   console.log('code', data.status);
        //   console.log('data', this.data);
        //   this.result = data.content;
        // //   this.storage.set('users', this.result);
        //   // } else {
        //   //   this.loadData();
        //   // }
        //  });
        // // if (!this.result) {
        // //   this.loadData();
        // // } else if (this.result) {
        // //   this.storage.set('users', this.result);
        // // }
        // this.loadData();
        console.log('result' + this.result);
    }
    addUser() {
        this.router.navigate(['addUser']);
    }
    showSingleItem(item) {
        // const id = '{' +
        //     '"id": 1,' +
        //     '"streetAddress": "Home 2 steet 1",' +
        //     '"city": "Lahore",' +
        //     '"zipCode": 54500,' +
        //     '"state": "punjab",' +
        //     '"country": "Pakistan"' +
        //     '}';
        const id = item.id;
        const url = `list/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }
    updateItem(item) {
        const id = item;
        const url = `update/${id}`;
        console.log(url);
        this.router.navigateByUrl(url);
    }
    deleteProperty(item) {
        console.log('id ' + item);
        this.callAPI(item).subscribe(data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['list']);
        }, error => {
            console.log('error', error);
        });
        alert('deleted successfully');
        this.router.navigate(['list']);
    }
    callAPI(student) {
        // delete code added and working correctly.
        console.log('data received.', student);
        const url = `${this.service.homeUrl}/users/deleteUser/${student}`;
        console.log('link', url);
        return this.http.delete(url);
    }
    activateDonner() {
        this.donnerActive = true;
        this.charityHouseActive = false;
    }
    activateCharityHouse() {
        this.donnerActive = false;
        this.charityHouseActive = true;
    }
};
ListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/admin/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=admin-list-list-module-es2015.js.map