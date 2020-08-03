(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-profile-picture-profile-picture-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/profile-picture/profile-picture.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/profile-picture/profile-picture.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-label>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button color=\"danger\" type=\"button\" expand=\"full\" shape=\"round\" size=\"large\" (click)=\"takePhoto()\">\n            <ion-icon name=\"camera\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"secondary\" type=\"button\" expand=\"full\" shape=\"round\" size=\"large\" (click)=\"selectPhoto()\">\n            <ion-icon name=\"image\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"error\">\n    <ion-label>\n      <strong>{{error}}</strong>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <img *ngIf=\"myPhoto\" [src]=\"myPhoto\"/>\n    </ion-label>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProfilePicturePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function() { return ProfilePicturePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-picture.page */ "./src/app/authentication/profile-picture/profile-picture.page.ts");







var routes = [
    {
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]
    }
];
var ProfilePicturePageModule = /** @class */ (function () {
    function ProfilePicturePageModule() {
    }
    ProfilePicturePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
        })
    ], ProfilePicturePageModule);
    return ProfilePicturePageModule;
}());



/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Byb2ZpbGUtcGljdHVyZS9wcm9maWxlLXBpY3R1cmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/profile-picture/profile-picture.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/profile-picture/profile-picture.page.ts ***!
  \************************************************************************/
/*! exports provided: ProfilePicturePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function() { return ProfilePicturePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../list.service */ "./src/app/list.service.ts");







var ProfilePicturePage = /** @class */ (function () {
    function ProfilePicturePage(http, loadingCtrl, toastCtrl, service, changeDetectorRef) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
    }
    ProfilePicturePage.prototype.takePhoto = function () {
        var _this = this;
        var camera = navigator['camera'];
        camera.getPicture(function (imageData) {
            _this.myPhoto = _this.convertFileSrc(imageData);
            _this.changeDetectorRef.detectChanges();
            _this.changeDetectorRef.markForCheck();
            _this.uploadPhoto(imageData);
        }, function (error) { return _this.error = JSON.stringify(error); }, {
            quality: 100,
            destinationType: camera.DestinationType.FILE_URI,
            sourceType: camera.PictureSourceType.CAMERA,
            encodingType: camera.EncodingType.JPEG
        });
    };
    ProfilePicturePage.prototype.selectPhoto = function () {
        var _this = this;
        var camera = navigator['camera'];
        camera.getPicture(function (imageData) {
            _this.myPhoto = _this.convertFileSrc(imageData);
            _this.uploadPhoto(imageData);
        }, function (error) { return _this.error = JSON.stringify(error); }, {
            sourceType: camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: camera.EncodingType.JPEG,
        });
    };
    ProfilePicturePage.prototype.convertFileSrc = function (url) {
        if (!url) {
            return url;
        }
        if (url.startsWith('/')) {
            return window['WEBVIEW_SERVER_URL'] + '/_app_file_' + url;
        }
        if (url.startsWith('file://')) {
            return window['WEBVIEW_SERVER_URL'] + url.replace('file://', '/_app_file_');
        }
        if (url.startsWith('content://')) {
            return window['WEBVIEW_SERVER_URL'] + url.replace('content:/', '/_app_content_');
        }
        return url;
    };
    ProfilePicturePage.prototype.uploadPhoto = function (imageFileUri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.error = null;
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Uploading...'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        window['resolveLocalFileSystemURL'](imageFileUri, function (entry) {
                            entry['file'](function (file) { return _this.readFile(file); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePicturePage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], { type: file.type });
            formData.append('file', imgBlob, file.name);
            _this.postData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    ProfilePicturePage.prototype.postData = function (formData) {
        var _this = this;
        this.http.post(this.service.homeUrl + "/upload", formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.loading.dismiss(); }))
            .subscribe(function (ok) { return _this.showToast(ok); });
    };
    ProfilePicturePage.prototype.showToast = function (ok) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ok === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Upload successful',
                                duration: 3000,
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Upload failed',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePicturePage.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message : error.toString();
        this.error = errMsg;
        this.changeDetectorRef.detectChanges();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errMsg);
    };
    ProfilePicturePage.prototype.ngOnInit = function () {
    };
    ProfilePicturePage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ProfilePicturePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-picture',
            template: __webpack_require__(/*! raw-loader!./profile-picture.page.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/profile-picture/profile-picture.page.html"),
            styles: [__webpack_require__(/*! ./profile-picture.page.scss */ "./src/app/authentication/profile-picture/profile-picture.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProfilePicturePage);
    return ProfilePicturePage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-profile-picture-profile-picture-module-es5.js.map