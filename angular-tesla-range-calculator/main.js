(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <img [src]=\"logo\">\n</header>\n<div class=\"wrapper\">\n  <app-tesla-battery></app-tesla-battery>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.header {\n  padding: 25px 0;\n  text-align: center;\n  background: #222; }\n\n.header img {\n    width: 100px;\n    height: 13px; }\n\n.wrapper {\n  margin: 100px 0 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSGxCO0lBS0ksWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTNweDtcbiAgICB9XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMTAwcHggMCAxNTBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.logo = 'assets/logo.svg';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tesla_battery_tesla_battery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tesla-battery/tesla-battery.module */ "./src/app/tesla-battery/tesla-battery.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _tesla_battery_tesla_battery_module__WEBPACK_IMPORTED_MODULE_3__["TeslaBatteryModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-car/tesla-car.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tesla-car\">\n  <div class=\"tesla-wheels\">\n    <div class=\"tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}\"></div>\n    <div class=\"tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-car/tesla-car.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-car {\n  width: 100%;\n  min-height: 350px;\n  background: #fff url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/tesla.jpg') no-repeat top center;\n  background-size: contain; }\n\n.tesla-wheels {\n  height: 247px;\n  width: 555px;\n  position: relative;\n  margin: 0 auto; }\n\n.tesla-wheel {\n  height: 80px;\n  width: 80px;\n  bottom: 0;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-size: cover; }\n\n.tesla-wheel--front {\n    left: 53px; }\n\n.tesla-wheel--rear {\n    right: 72px; }\n\n.tesla-wheel--19 {\n    background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/wheel-19.png');\n    -webkit-animation: infinite-spinning 250ms steps(6) infinite;\n    animation: infinite-spinning 250ms steps(6) infinite; }\n\n.tesla-wheel--21 {\n    background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/wheel-21.png');\n    -webkit-animation: infinite-spinning 480ms steps(12) infinite;\n    animation: infinite-spinning 480ms steps(12) infinite; }\n\n@keyframes infinite-spinning {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes infinite-spinning {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLWNhci90ZXNsYS1jYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlIQUE0RDtFQUM1RCx3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsc0JBQXNCLEVBQUE7O0FBQ3RCO0lBQ0UsVUFBVSxFQUFBOztBQUVaO0lBQ0UsV0FBVyxFQUFBOztBQUViO0lBQ0Usd0dBQTJDO0lBQzNDLDREQUE0RDtJQUc1RCxvREFBb0QsRUFBQTs7QUFFdEQ7SUFDRSx3R0FBMkM7SUFDM0MsNkRBQTZEO0lBRzdELHFEQUFxRCxFQUFBOztBQUl6RDtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rlc2xhLWJhdHRlcnkvY29tcG9uZW50cy90ZXNsYS1jYXIvdGVzbGEtY2FyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc2xhLWNhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoL2Fzc2V0cy90ZXNsYS5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxuICAudGVzbGEtd2hlZWxzIHtcbiAgICBoZWlnaHQ6IDI0N3B4O1xuICAgIHdpZHRoOiA1NTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnRlc2xhLXdoZWVsIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICYtLWZyb250IHtcbiAgICAgIGxlZnQ6IDUzcHg7XG4gICAgfVxuICAgICYtLXJlYXIge1xuICAgICAgcmlnaHQ6IDcycHg7XG4gICAgfVxuICAgICYtLTE5IHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3doZWVsLTE5LnBuZyk7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcgMjUwbXMgc3RlcHMoNikgaW5maW5pdGU7XG4gICAgICAtbW96LWFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcgMjUwbXMgc3RlcHMoNikgaW5maW5pdGU7XG4gICAgICAtby1hbmltYXRpb246IGluZmluaXRlLXNwaW5uaW5nIDI1MG1zIHN0ZXBzKDYpIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uOiBpbmZpbml0ZS1zcGlubmluZyAyNTBtcyBzdGVwcyg2KSBpbmZpbml0ZTtcbiAgICB9XG4gICAgJi0tMjEge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvd2hlZWwtMjEucG5nKTtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpbmZpbml0ZS1zcGlubmluZyA0ODBtcyBzdGVwcygxMikgaW5maW5pdGU7XG4gICAgICAtbW96LWFuaW1hdGlvbjogaW5maW5pdGUtc3Bpbm5pbmcgNDgwbXMgc3RlcHMoMTIpIGluZmluaXRlO1xuICAgICAgLW8tYW5pbWF0aW9uOiBpbmZpbml0ZS1zcGlubmluZyA0ODBtcyBzdGVwcygxMikgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb246IGluZmluaXRlLXNwaW5uaW5nIDQ4MG1zIHN0ZXBzKDEyKSBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgaW5maW5pdGUtc3Bpbm5pbmcge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGluZmluaXRlLXNwaW5uaW5nIHtcbiAgICBmcm9tIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-car/tesla-car.component.ts ***!
  \***************************************************************************/
/*! exports provided: TeslaCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaCarComponent", function() { return TeslaCarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeslaCarComponent = /** @class */ (function () {
    function TeslaCarComponent() {
    }
    TeslaCarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeslaCarComponent.prototype, "wheelsize", void 0);
    TeslaCarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-car',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./tesla-car.component.html */ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.html"),
            styles: [__webpack_require__(/*! ./tesla-car.component.scss */ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeslaCarComponent);
    return TeslaCarComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tesla-climate\">\n  <label\n    class=\"tesla-climate__item\"\n    [class.tesla-heat]=\"!limit\"\n    [class.tesla-climate__item--active]=\"value\"\n    [class.tesla-climate__item--focused]=\"focused === value\">\n    <p>{{ (limit ? 'ac' : 'heat') }} {{ value ? 'on' : 'off' }}</p>\n    <i class=\"tesla-climate__icon\"></i>\n  <input\n    type=\"checkbox\"\n    name=\"climate\"\n    [checked]=\"value\"\n    (change)=\"onChange(value)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\">\n</label>\n</div>"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-climate {\n  float: left; }\n  .tesla-climate__item {\n    cursor: pointer;\n    display: block;\n    width: 100px;\n    height: 100px;\n    border: 6px solid #f7f7f7;\n    border-radius: 50%;\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n    color: #666;\n    background: #fff; }\n  .tesla-climate__item--active {\n      color: #fff;\n      background: #33a0ff;\n      background: linear-gradient(to bottom, #33a0ff 0%, #388bff 100%); }\n  .tesla-climate__item--active.tesla-heat {\n        background: #d64800;\n        background: linear-gradient(to bottom, #d64800 0%, #d20200 100%); }\n  .tesla-climate__icon {\n    display: block;\n    width: 22px;\n    height: 22px;\n    margin: 8px auto 0;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/climate/ac-off.svg'); }\n  .tesla-heat .tesla-climate__icon {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/climate/heat-off.svg'); }\n  .tesla-climate__item--active .tesla-climate__icon {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/climate/ac-on.svg'); }\n  .tesla-climate__item--active.tesla-heat .tesla-climate__icon {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/climate/heat-on.svg'); }\n  .tesla-climate p {\n    margin: 14px 0 0;\n    text-align: center;\n    font-size: 10px;\n    text-transform: uppercase; }\n  .tesla-climate input[type=checkbox] {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLWNsaW1hdGUvdGVzbGEtY2xpbWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTtFQUNYO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQUNoQjtNQUNFLFdBQVc7TUFDWCxtQkFBbUI7TUFHbkIsZ0VBQWdFLEVBQUE7RUFMakU7UUFPRyxtQkFBbUI7UUFHbkIsZ0VBQWdFLEVBQUE7RUFJdEU7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw4R0FBaUQsRUFBQTtFQUNqRDtNQUNFLGdIQUFtRCxFQUFBO0VBRXJEO01BQ0UsNkdBQWdELEVBQUE7RUFFbEQ7TUFDRSwrR0FBa0QsRUFBQTtFQXpDMUQ7SUE2Q00sZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCLEVBQUE7RUFoRC9CO0lBbURNLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXNsYS1iYXR0ZXJ5L2NvbXBvbmVudHMvdGVzbGEtY2xpbWF0ZS90ZXNsYS1jbGltYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc2xhLWNsaW1hdGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICZfX2l0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyOiA2cHggc29saWQgI2Y3ZjdmNztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzNhMGZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzNhMGZmIDAlLCAjMzg4YmZmIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjMzNhMGZmIDAlLCMzODhiZmYgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjMzNhMGZmIDAlLCMzODhiZmYgMTAwJSk7XG4gICAgICAgICYudGVzbGEtaGVhdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q2NDgwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZDY0ODAwIDAlLCAjZDIwMjAwIDEwMCUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICNkNjQ4MDAgMCUsI2QyMDIwMCAxMDAlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgI2Q2NDgwMCAwJSwjZDIwMjAwIDEwMCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICZfX2ljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIG1hcmdpbjogOHB4IGF1dG8gMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jbGltYXRlL2FjLW9mZi5zdmcpO1xuICAgICAgLnRlc2xhLWhlYXQgJiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NsaW1hdGUvaGVhdC1vZmYuc3ZnKTtcbiAgICAgIH1cbiAgICAgIC50ZXNsYS1jbGltYXRlX19pdGVtLS1hY3RpdmUgJiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NsaW1hdGUvYWMtb24uc3ZnKTtcbiAgICAgIH1cbiAgICAgIC50ZXNsYS1jbGltYXRlX19pdGVtLS1hY3RpdmUudGVzbGEtaGVhdCAmIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY2xpbWF0ZS9oZWF0LW9uLnN2Zyk7XG4gICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luOiAxNHB4IDAgMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TeslaClimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaClimateComponent", function() { return TeslaClimateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TeslaClimateComponent; }),
    multi: true
};
var TeslaClimateComponent = /** @class */ (function () {
    function TeslaClimateComponent() {
    }
    TeslaClimateComponent.prototype.onChange = function (value) {
        this.value = !value;
        this.onModelChange(this.value);
    };
    TeslaClimateComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TeslaClimateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TeslaClimateComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TeslaClimateComponent.prototype.onBlur = function (value) {
        this.focused = false;
    };
    TeslaClimateComponent.prototype.onFocus = function (value) {
        this.focused = value;
        this.onTouch();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TeslaClimateComponent.prototype, "limit", void 0);
    TeslaClimateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-climate',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./tesla-climate.component.html */ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.html"),
            providers: [CHECKBOX_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./tesla-climate.component.scss */ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.scss")]
        })
    ], TeslaClimateComponent);
    return TeslaClimateComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tesla-counter\">\n  <p class=\"tesla-counter__title\">{{ title }}</p>\n  <div class=\"tesla-counter__container cf\">\n    <div\n      class=\"tesla-counter__item\"\n      (keydown)=\"onKeyUp($event)\"\n      (blur)=\"onBlur($event)\"\n      (focus)=\"onFocus($event)\"\n      tabindex=\"0\">\n      <p class=\"tesla-counter__number\">\n        {{ value }}\n        <span>{{ unit }}</span>\n      </p>\n      <div class=\"tesla-counter__controls\" tabindex=\"-1\">\n        <button tabindex=\"-1\" (click)=\"increment()\" [disabled]=\"value === max\"></button>\n        <button tabindex=\"-1\" (click)=\"decrement()\" [disabled]=\"value === min\"></button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-counter {\n  float: left;\n  width: 230px; }\n  .tesla-counter__title {\n    letter-spacing: 2px;\n    font-size: 16px; }\n  .tesla-counter__container {\n    margin: 10px 0 0;\n    padding-right: 40px; }\n  .tesla-counter__container input[type=number] {\n      border: 0;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px; }\n  .tesla-counter__number {\n    font-family: 'RobotoNormal';\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: 400;\n    position: relative; }\n  .tesla-counter__number span {\n      position: absolute;\n      top: 0;\n      left: 35px;\n      font-size: 15px;\n      text-transform: uppercase; }\n  .tesla-counter__item {\n    position: relative;\n    width: 100%;\n    height: 65px;\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 18px 0 0 30px;\n    margin: 0 8px 0 0;\n    background-color: #f7f7f7;\n    background-position: 24.21053% 9px;\n    background-repeat: no-repeat;\n    background-size: 44px; }\n  .tesla-counter__item:focus {\n      background-color: #f2f2f2;\n      outline: none; }\n  .tesla-counter__controls {\n    position: absolute;\n    right: 10px;\n    top: 7px; }\n  .tesla-counter__controls button {\n      outline: 0;\n      width: 30px;\n      color: #008dff;\n      cursor: pointer;\n      display: block;\n      padding: 11px 0;\n      vertical-align: middle;\n      border: 0;\n      background-size: 60%;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-color: transparent; }\n  .tesla-counter__controls button[disabled] {\n        opacity: 0.4;\n        cursor: not-allowed; }\n  .tesla-counter__controls button:first-child {\n        border-bottom: 1px solid #fff;\n        background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/counter/up.svg'); }\n  .tesla-counter__controls button:last-child {\n        border-top: 1px solid #ccc;\n        background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/counter/down.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLWNvdW50ZXIvdGVzbGEtY291bnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFDWjtJQUNFLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFGcEI7TUFJRyxTQUFTO01BQ1QsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0VBR2Q7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFMbkI7TUFPRyxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFVBQVU7TUFDVixlQUFlO01BQ2YseUJBQXlCLEVBQUE7RUFHN0I7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUJBQXFCLEVBQUE7RUFYdEI7TUFhRyx5QkFBeUI7TUFDekIsYUFBYSxFQUFBO0VBR2pCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRLEVBQUE7RUFIVDtNQUtHLFVBQVU7TUFDVixXQUFXO01BQ1gsY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjO01BQ2QsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixTQUFTO01BQ1Qsb0JBQW9CO01BQ3BCLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsNkJBQTZCLEVBQUE7RUFoQmhDO1FBa0JLLFlBQVk7UUFDWixtQkFBbUIsRUFBQTtFQW5CeEI7UUFzQkssNkJBQTZCO1FBQzdCLDBHQUE2QyxFQUFBO0VBdkJsRDtRQTBCSywwQkFBMEI7UUFDMUIsNEdBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXNsYS1iYXR0ZXJ5L2NvbXBvbmVudHMvdGVzbGEtY291bnRlci90ZXNsYS1jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc2xhLWNvdW50ZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICAmX190aXRsZSB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAmX19jb250YWluZXIge1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fbnVtYmVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTm9ybWFsJztcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6IDE4cHggMCAwIDMwcHg7XG4gICAgICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyNC4yMTA1MyUgOXB4O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNDRweDtcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19jb250cm9scyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjMDA4ZGZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMXB4IDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb3VudGVyL3VwLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jb3VudGVyL2Rvd24uc3ZnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TeslaCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaCounterComponent", function() { return TeslaCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var NUMBER_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TeslaCounterComponent; }),
    multi: true
};
var TeslaCounterComponent = /** @class */ (function () {
    function TeslaCounterComponent() {
        // step count, default of 1
        this.step = 1;
        // title to be passed to the control
        this.title = '';
        // unit to be used alongside the title (mph/degrees/anything)
        this.unit = '';
    }
    // our custom onChange method
    TeslaCounterComponent.prototype.onChange = function (value) {
        this.value = value;
        this.onModelChange(value);
    };
    // called by the reactive form control
    TeslaCounterComponent.prototype.registerOnChange = function (fn) {
        // assigns to our internal model change method
        this.onModelChange = fn;
    };
    // called by the reactive form control
    TeslaCounterComponent.prototype.registerOnTouched = function (fn) {
        // assigns our own "touched" method
        this.onTouch = fn;
    };
    // writes the value to the local component
    // that binds to the "value"
    TeslaCounterComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // increment function
    TeslaCounterComponent.prototype.increment = function () {
        if (this.value < this.max) {
            this.onChange(this.value + this.step);
        }
        this.onTouch();
    };
    // decrement function
    TeslaCounterComponent.prototype.decrement = function () {
        if (this.value > this.min) {
            this.onChange(this.value - this.step);
        }
        this.onTouch();
    };
    // our onBlur event, has effect on template
    TeslaCounterComponent.prototype.onBlur = function (event) {
        this.focused = false;
        event.preventDefault();
        event.stopPropagation();
    };
    // our onKeyup event, will respond to user
    // ArrowDown and ArrowUp keys and call
    // the relevant functions we need
    TeslaCounterComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        var handlers = {
            ArrowDown: function () { return _this.decrement(); },
            ArrowUp: function () { return _this.increment(); }
        };
        // events here stop the browser scrolling up
        // when using the keys, as well as preventing
        // event bubbling
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    // when we focus on our counter control
    TeslaCounterComponent.prototype.onFocus = function (event) {
        this.focused = true;
        event.preventDefault();
        event.stopPropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeslaCounterComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeslaCounterComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TeslaCounterComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TeslaCounterComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TeslaCounterComponent.prototype, "unit", void 0);
    TeslaCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-counter',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./tesla-counter.component.html */ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.html"),
            providers: [NUMBER_CONTROL_ACCESSOR],
            styles: [__webpack_require__(/*! ./tesla-counter.component.scss */ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.scss")]
        })
    ], TeslaCounterComponent);
    return TeslaCounterComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tesla-stats\">\n  <ul>\n    <li *ngFor=\"let stat of stats\">\n      <div class=\"tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}\"></div>\n      <p>{{ stat.miles }}</p>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-stats {\n  margin: -70px 0 30px; }\n  .tesla-stats ul {\n    text-align: center; }\n  .tesla-stats ul li {\n      display: inline-block;\n      width: 130px;\n      position: relative; }\n  .tesla-stats ul li p {\n        font-size: 40px;\n        font-weight: normal;\n        font-family: 'RobotoNormal';\n        display: block;\n        padding: 0 18px 0 0;\n        position: relative;\n        color: #008dff;\n        text-align: right; }\n  .tesla-stats ul li p:after {\n          font-size: 14px;\n          font-weight: normal;\n          font-family: 'RobotoNormal';\n          content: 'MI';\n          position: absolute;\n          top: 8px;\n          right: 0; }\n  .tesla-stats-icon {\n    height: 20px;\n    background-size: auto 13px;\n    background-position: top right;\n    background-repeat: no-repeat; }\n  .tesla-stats-icon--60 {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/60.svg'); }\n  .tesla-stats-icon--60d {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/60d.svg'); }\n  .tesla-stats-icon--75 {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/75.svg'); }\n  .tesla-stats-icon--75d {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/75d.svg'); }\n  .tesla-stats-icon--90d {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/90d.svg'); }\n  .tesla-stats-icon--p100d {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/models/p100d.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLXN0YXRzL3Rlc2xhLXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CLEVBQUE7RUFEeEI7SUFHTSxrQkFBa0IsRUFBQTtFQUh4QjtNQUtRLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUFQMUI7UUFTVSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsaUJBQWlCLEVBQUE7RUFoQjNCO1VBa0JZLGVBQWU7VUFDZixtQkFBbUI7VUFDbkIsMkJBQTJCO1VBQzNCLGFBQWE7VUFDYixrQkFBa0I7VUFDbEIsUUFBUTtVQUNSLFFBQVEsRUFBQTtFQUtoQjtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDRCQUE0QixFQUFBO0VBQzVCO01BQ0UseUdBQTRDLEVBQUE7RUFFOUM7TUFDRSwwR0FBNkMsRUFBQTtFQUUvQztNQUNFLHlHQUE0QyxFQUFBO0VBRTlDO01BQ0UsMEdBQTZDLEVBQUE7RUFFL0M7TUFDRSwwR0FBNkMsRUFBQTtFQUUvQztNQUNFLDRHQUErQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLXN0YXRzL3Rlc2xhLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc2xhLXN0YXRzIHtcbiAgICBtYXJnaW46IC03MHB4IDAgMzBweDtcbiAgICB1bCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTm9ybWFsJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDE4cHggMCAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjb2xvcjogIzAwOGRmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b05vcm1hbCc7XG4gICAgICAgICAgICBjb250ZW50OiAnTUknO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi1pY29uIHtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxM3B4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICYtLTYwIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvbW9kZWxzLzYwLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLS02MGQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9tb2RlbHMvNjBkLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLS03NSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL21vZGVscy83NS5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tNzVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvbW9kZWxzLzc1ZC5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tOTBkIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvbW9kZWxzLzkwZC5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tcDEwMGQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9tb2RlbHMvcDEwMGQuc3ZnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TeslaStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaStatsComponent", function() { return TeslaStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeslaStatsComponent = /** @class */ (function () {
    function TeslaStatsComponent() {
    }
    TeslaStatsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TeslaStatsComponent.prototype, "stats", void 0);
    TeslaStatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-stats',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./tesla-stats.component.html */ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.html"),
            styles: [__webpack_require__(/*! ./tesla-stats.component.scss */ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeslaStatsComponent);
    return TeslaStatsComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tesla-wheels\">\n  <p class=\"tesla-wheels__title\">Wheels</p>\n  <div class=\"tesla-wheels__container cf\">\n    <label\n      *ngFor=\"let size of sizes;\"\n      class=\"tesla-wheels__item tesla-wheels__item--{{ size }}\"\n      [class.tesla-wheels__item--active]=\"value === size\"\n      [class.tesla-wheels__item--focused]=\"focused === size\">\n      <input\n        type=\"radio\"\n        name=\"wheelsize\"\n        [attr.value]=\"size\"\n        (blur)=\"onBlur(size)\"\n        (change)=\"onChange(size)\"\n        (focus)=\"onFocus(size)\"\n        [checked]=\"value === size\">\n      <p>\n        {{ size }}\"\n      </p>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-wheels {\n  float: left;\n  width: 355px; }\n  .tesla-wheels__title {\n    letter-spacing: 2px;\n    font-size: 16px; }\n  .tesla-wheels__container {\n    margin: 10px 0 0; }\n  .tesla-wheels__item {\n    cursor: pointer;\n    width: 47%;\n    height: 65px;\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 20px 0 0 90px;\n    margin: 0 8px 0 0;\n    background-color: #f7f7f7;\n    background-position: 24.21053% 9px;\n    background-repeat: no-repeat;\n    background-size: 44px; }\n  .tesla-wheels__item--19 {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/wheels/19.svg'); }\n  .tesla-wheels__item--21 {\n      background-image: url('https://csekhar193.github.io/angular-tesla-range-calculator/assets/wheels/21.svg'); }\n  .tesla-wheels__item--focused {\n      background-color: #f2f2f2; }\n  .tesla-wheels__item--active {\n      border-color: #39f;\n      box-shadow: inset 0px 0px 0px 1px #39f; }\n  .tesla-wheels__item p {\n      font-family: 'RobotoNormal';\n      font-size: 16px;\n      font-weight: 400;\n      color: #333; }\n  .tesla-wheels__item input[type=radio] {\n      border: 0;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLXdoZWVscy90ZXNsYS13aGVlbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBQ1o7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIscUJBQXFCLEVBQUE7RUFDckI7TUFDRSx5R0FBNEMsRUFBQTtFQUU5QztNQUNFLHlHQUE0QyxFQUFBO0VBRTlDO01BQ0UseUJBQXlCLEVBQUE7RUFFM0I7TUFDRSxrQkFBa0I7TUFDbEIsc0NBQXNDLEVBQUE7RUF2QnpDO01BMEJHLDJCQUEyQjtNQUMzQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFdBQVcsRUFBQTtFQTdCZDtNQWdDRyxTQUFTO01BQ1QsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb21wb25lbnRzL3Rlc2xhLXdoZWVscy90ZXNsYS13aGVlbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzbGEtd2hlZWxzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMzU1cHg7XG4gICAgJl9fdGl0bGUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgfVxuICAgICZfX2l0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMCA5MHB4O1xuICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjQuMjEwNTMlIDlweDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0cHg7XG4gICAgICAmLS0xOSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3doZWVscy8xOS5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tMjEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy93aGVlbHMvMjEuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLWZvY3VzZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgfVxuICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzlmO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggIzM5ZjtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90b05vcm1hbCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TeslaWheelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaWheelsComponent", function() { return TeslaWheelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RADIO_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TeslaWheelsComponent; }),
    multi: true
};
var TeslaWheelsComponent = /** @class */ (function () {
    function TeslaWheelsComponent() {
        this.sizes = [19, 21];
    }
    TeslaWheelsComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TeslaWheelsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TeslaWheelsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TeslaWheelsComponent.prototype.onChange = function (value) {
        this.value = value;
        this.onModelChange(value);
    };
    TeslaWheelsComponent.prototype.onBlur = function (value) {
        this.focused = '';
    };
    TeslaWheelsComponent.prototype.onFocus = function (value) {
        this.focused = value;
        this.onTouch();
    };
    TeslaWheelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-wheels',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./tesla-wheels.component.html */ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.html"),
            providers: [RADIO_CONTROL_ACCESSOR],
            styles: [__webpack_require__(/*! ./tesla-wheels.component.scss */ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeslaWheelsComponent);
    return TeslaWheelsComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"tesla-battery\" [formGroup]=\"tesla\">\n  <h1>{{ title }}</h1>\n  <app-tesla-car [wheelsize]=\"tesla.get('config.wheels').value\"></app-tesla-car>\n  <app-tesla-stats [stats]=\"stats\"></app-tesla-stats>\n  <div class=\"tesla-controls cf\" formGroupName=\"config\">\n    <app-tesla-counter\n      [title]=\"'Speed'\"\n      [unit]=\"'mph'\"\n      [step]=\"5\"\n      [min]=\"45\"\n      [max]=\"70\"\n      formControlName=\"speed\">\n    </app-tesla-counter>\n    <div class=\"tesla-climate cf\">\n      <app-tesla-counter\n        [title]=\"'Outside Temperature'\"\n        [unit]=\"'°'\"\n        [step]=\"10\"\n        [min]=\"-10\"\n        [max]=\"40\"\n        formControlName=\"temperature\">\n      </app-tesla-counter>\n      <app-tesla-climate\n        [limit]=\"tesla.get('config.temperature').value > 10\"\n        formControlName=\"climate\">\n      </app-tesla-climate>\n    </div>\n    <app-tesla-wheels formControlName=\"wheels\"></app-tesla-wheels>\n  </div>\n  <div class=\"tesla-battery__notice\">\n    <p>\n      The actual amount of range that you experience will vary based\n      on your particular use conditions. See how particular use conditions\n      may affect your range in our simulation model.\n    </p>\n    <p>\n      Vehicle range may vary depending on the vehicle configuration,\n      battery age and condition, driving style and operating, environmental\n      and climate conditions.\n    </p>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tesla-battery {\n  width: 1050px;\n  margin: 0 auto; }\n  .tesla-battery h1 {\n    font-family: 'RobotoNormal';\n    font-weight: 100;\n    font-size: 38px;\n    text-align: center;\n    letter-spacing: 3px; }\n  .tesla-battery__notice {\n    margin: 20px 0;\n    font-size: 15px;\n    color: #666;\n    line-height: 20px; }\n  .tesla-climate {\n  float: left;\n  width: 420px;\n  padding: 0 40px;\n  margin: 0 40px 0 0;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .tesla-controls {\n  display: block;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lubm92YXRlL2FuZ3VsYXIvYW5ndWxhci10ZXNsYS1yYW5nZS1jYWxjdWxhdG9yL3NyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb250YWluZXJzL3Rlc2xhLWJhdHRlcnkvdGVzbGEtYmF0dGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFGbEI7SUFJTSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQUdyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7RUFFOUI7RUFDRSxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzbGEtYmF0dGVyeS9jb250YWluZXJzL3Rlc2xhLWJhdHRlcnkvdGVzbGEtYmF0dGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXNsYS1iYXR0ZXJ5IHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGgxIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvTm9ybWFsJztcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIH1cbiAgICAmX19ub3RpY2Uge1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuICAudGVzbGEtY2xpbWF0ZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBtYXJnaW46IDAgNDBweCAwIDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIH1cbiAgLnRlc2xhLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TeslaBatteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaBatteryComponent", function() { return TeslaBatteryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tesla_battery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tesla-battery.service */ "./src/app/tesla-battery/tesla-battery.service.ts");




var TeslaBatteryComponent = /** @class */ (function () {
    function TeslaBatteryComponent(fb, batteryService) {
        this.fb = fb;
        this.batteryService = batteryService;
        this.title = 'Range Per Charge';
        this.results = ['60', '60D', '75', '75D', '90D', 'P100D'];
    }
    TeslaBatteryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.models = this.batteryService.getModelData();
        this.tesla = this.fb.group({
            config: this.fb.group({
                speed: 55,
                temperature: 20,
                climate: true,
                wheels: 19
            })
        });
        this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
        this.tesla.controls['config'].valueChanges.subscribe(function (data) {
            _this.stats = _this.calculateStats(_this.results, data);
        });
    };
    TeslaBatteryComponent.prototype.calculateStats = function (models, value) {
        var _this = this;
        return models.map(function (model) {
            var speed = value.speed, temperature = value.temperature, climate = value.climate, wheels = value.wheels;
            var miles = _this.models[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
            return {
                model: model,
                miles: miles
            };
        });
    };
    TeslaBatteryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tesla-battery',
            template: __webpack_require__(/*! ./tesla-battery.component.html */ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.html"),
            styles: [__webpack_require__(/*! ./tesla-battery.component.scss */ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _tesla_battery_service__WEBPACK_IMPORTED_MODULE_3__["BatteryService"]])
    ], TeslaBatteryComponent);
    return TeslaBatteryComponent;
}());



/***/ }),

/***/ "./src/app/tesla-battery/tesla-battery.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tesla-battery/tesla-battery.module.ts ***!
  \*******************************************************/
/*! exports provided: TeslaBatteryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeslaBatteryModule", function() { return TeslaBatteryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tesla_battery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tesla-battery.service */ "./src/app/tesla-battery/tesla-battery.service.ts");
/* harmony import */ var _containers_tesla_battery_tesla_battery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/tesla-battery/tesla-battery.component */ "./src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.ts");
/* harmony import */ var _components_tesla_car_tesla_car_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tesla-car/tesla-car.component */ "./src/app/tesla-battery/components/tesla-car/tesla-car.component.ts");
/* harmony import */ var _components_tesla_stats_tesla_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tesla-stats/tesla-stats.component */ "./src/app/tesla-battery/components/tesla-stats/tesla-stats.component.ts");
/* harmony import */ var _components_tesla_counter_tesla_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tesla-counter/tesla-counter.component */ "./src/app/tesla-battery/components/tesla-counter/tesla-counter.component.ts");
/* harmony import */ var _components_tesla_climate_tesla_climate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tesla-climate/tesla-climate.component */ "./src/app/tesla-battery/components/tesla-climate/tesla-climate.component.ts");
/* harmony import */ var _components_tesla_wheels_tesla_wheels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tesla-wheels/tesla-wheels.component */ "./src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.ts");
/*
*   tesla-battery.module.ts
*/











var TeslaBatteryModule = /** @class */ (function () {
    function TeslaBatteryModule() {
    }
    TeslaBatteryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_containers_tesla_battery_tesla_battery_component__WEBPACK_IMPORTED_MODULE_5__["TeslaBatteryComponent"], _components_tesla_car_tesla_car_component__WEBPACK_IMPORTED_MODULE_6__["TeslaCarComponent"], _components_tesla_stats_tesla_stats_component__WEBPACK_IMPORTED_MODULE_7__["TeslaStatsComponent"], _components_tesla_counter_tesla_counter_component__WEBPACK_IMPORTED_MODULE_8__["TeslaCounterComponent"], _components_tesla_climate_tesla_climate_component__WEBPACK_IMPORTED_MODULE_9__["TeslaClimateComponent"], _components_tesla_wheels_tesla_wheels_component__WEBPACK_IMPORTED_MODULE_10__["TeslaWheelsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _tesla_battery_service__WEBPACK_IMPORTED_MODULE_4__["BatteryService"]
            ],
            exports: [_containers_tesla_battery_tesla_battery_component__WEBPACK_IMPORTED_MODULE_5__["TeslaBatteryComponent"]]
        })
    ], TeslaBatteryModule);
    return TeslaBatteryModule;
}());



/***/ }),

/***/ "./src/app/tesla-battery/tesla-battery.service.ts":
/*!********************************************************!*\
  !*** ./src/app/tesla-battery/tesla-battery.service.ts ***!
  \********************************************************/
/*! exports provided: BatteryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryService", function() { return BatteryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BatteryService = /** @class */ (function () {
    function BatteryService() {
    }
    BatteryService.prototype.getModelData = function () {
        return {
            '60': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 224,
                                '0': 255,
                                '10': 287,
                                '20': 289,
                                '30': 287,
                                '40': 258
                            },
                            50: {
                                '-10': 211,
                                '0': 238,
                                '10': 264,
                                '20': 267,
                                '30': 267,
                                '40': 244
                            },
                            55: {
                                '-10': 198,
                                '0': 221,
                                '10': 242,
                                '20': 246,
                                '30': 245,
                                '40': 228
                            },
                            60: {
                                '-10': 184,
                                '0': 204,
                                '10': 222,
                                '20': 225,
                                '30': 226,
                                '40': 212
                            },
                            65: {
                                '-10': 170,
                                '0': 187,
                                '10': 202,
                                '20': 206,
                                '30': 208,
                                '40': 195
                            },
                            70: {
                                '-10': 156,
                                '0': 172,
                                '10': 185,
                                '20': 189,
                                '30': 190,
                                '40': 179
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 297,
                                '0': 312,
                                '10': 318,
                                '20': 325,
                                '30': 329,
                                '40': 333
                            },
                            50: {
                                '-10': 269,
                                '0': 283,
                                '10': 288,
                                '20': 294,
                                '30': 298,
                                '40': 304
                            },
                            55: {
                                '-10': 245,
                                '0': 256,
                                '10': 261,
                                '20': 267,
                                '30': 269,
                                '40': 277
                            },
                            60: {
                                '-10': 221,
                                '0': 231,
                                '10': 236,
                                '20': 242,
                                '30': 243,
                                '40': 252
                            },
                            65: {
                                '-10': 200,
                                '0': 209,
                                '10': 214,
                                '20': 219,
                                '30': 222,
                                '40': 230
                            },
                            70: {
                                '-10': 181,
                                '0': 189,
                                '10': 194,
                                '20': 199,
                                '30': 202,
                                '40': 209
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 220,
                                '0': 251,
                                '10': 283,
                                '20': 285,
                                '30': 282,
                                '40': 284
                            },
                            50: {
                                '-10': 208,
                                '0': 234,
                                '10': 260,
                                '20': 262,
                                '30': 262,
                                '40': 240
                            },
                            55: {
                                '-10': 194,
                                '0': 216,
                                '10': 238,
                                '20': 241,
                                '30': 240,
                                '40': 224
                            },
                            60: {
                                '-10': 180,
                                '0': 199,
                                '10': 217,
                                '20': 220,
                                '30': 221,
                                '40': 208
                            },
                            65: {
                                '-10': 166,
                                '0': 183,
                                '10': 198,
                                '20': 202,
                                '30': 203,
                                '40': 191
                            },
                            70: {
                                '-10': 152,
                                '0': 167,
                                '10': 180,
                                '20': 184,
                                '30': 185,
                                '40': 174
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 292,
                                '0': 307,
                                '10': 314,
                                '20': 320,
                                '30': 324,
                                '40': 328
                            },
                            50: {
                                '-10': 265,
                                '0': 278,
                                '10': 283,
                                '20': 289,
                                '30': 293,
                                '40': 298
                            },
                            55: {
                                '-10': 240,
                                '0': 251,
                                '10': 256,
                                '20': 261,
                                '30': 264,
                                '40': 272
                            },
                            60: {
                                '-10': 217,
                                '0': 226,
                                '10': 231,
                                '20': 236,
                                '30': 238,
                                '40': 247
                            },
                            65: {
                                '-10': 196,
                                '0': 204,
                                '10': 209,
                                '20': 214,
                                '30': 217,
                                '40': 225
                            },
                            70: {
                                '-10': 177,
                                '0': 184,
                                '10': 189,
                                '20': 194,
                                '30': 197,
                                '40': 204
                            },
                        }
                    }
                }
            },
            '60D': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 227,
                                '0': 258,
                                '10': 291,
                                '20': 293,
                                '30': 292,
                                '40': 264
                            },
                            50: {
                                '-10': 215,
                                '0': 242,
                                '10': 269,
                                '20': 271,
                                '30': 272,
                                '40': 250
                            },
                            55: {
                                '-10': 201,
                                '0': 224,
                                '10': 247,
                                '20': 250,
                                '30': 251,
                                '40': 235
                            },
                            60: {
                                '-10': 187,
                                '0': 207,
                                '10': 226,
                                '20': 229,
                                '30': 232,
                                '40': 217
                            },
                            65: {
                                '-10': 172,
                                '0': 191,
                                '10': 207,
                                '20': 211,
                                '30': 213,
                                '40': 201
                            },
                            70: {
                                '-10': 158,
                                '0': 175,
                                '10': 189,
                                '20': 193,
                                '30': 195,
                                '40': 185
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 301,
                                '0': 317,
                                '10': 323,
                                '20': 330,
                                '30': 336,
                                '40': 339
                            },
                            50: {
                                '-10': 275,
                                '0': 288,
                                '10': 294,
                                '20': 301,
                                '30': 306,
                                '40': 311
                            },
                            55: {
                                '-10': 249,
                                '0': 260,
                                '10': 266,
                                '20': 273,
                                '30': 278,
                                '40': 283
                            },
                            60: {
                                '-10': 225,
                                '0': 236,
                                '10': 241,
                                '20': 248,
                                '30': 251,
                                '40': 258
                            },
                            65: {
                                '-10': 204,
                                '0': 214,
                                '10': 219,
                                '20': 225,
                                '30': 229,
                                '40': 236
                            },
                            70: {
                                '-10': 184,
                                '0': 193,
                                '10': 198,
                                '20': 205,
                                '30': 207,
                                '40': 215
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 223,
                                '0': 255,
                                '10': 287,
                                '20': 289,
                                '30': 288,
                                '40': 260
                            },
                            50: {
                                '-10': 211,
                                '0': 238,
                                '10': 264,
                                '20': 267,
                                '30': 267,
                                '40': 246
                            },
                            55: {
                                '-10': 197,
                                '0': 220,
                                '10': 242,
                                '20': 246,
                                '30': 246,
                                '40': 230
                            },
                            60: {
                                '-10': 183,
                                '0': 203,
                                '10': 221,
                                '20': 225,
                                '30': 227,
                                '40': 212
                            },
                            65: {
                                '-10': 168,
                                '0': 186,
                                '10': 202,
                                '20': 206,
                                '30': 208,
                                '40': 196
                            },
                            70: {
                                '-10': 155,
                                '0': 171,
                                '10': 184,
                                '20': 188,
                                '30': 190,
                                '40': 181
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 297,
                                '0': 312,
                                '10': 319,
                                '20': 326,
                                '30': 331,
                                '40': 335
                            },
                            50: {
                                '-10': 270,
                                '0': 283,
                                '10': 289,
                                '20': 296,
                                '30': 301,
                                '40': 306
                            },
                            55: {
                                '-10': 244,
                                '0': 256,
                                '10': 261,
                                '20': 268,
                                '30': 272,
                                '40': 278
                            },
                            60: {
                                '-10': 221,
                                '0': 231,
                                '10': 236,
                                '20': 242,
                                '30': 246,
                                '40': 253
                            },
                            65: {
                                '-10': 199,
                                '0': 209,
                                '10': 214,
                                '20': 220,
                                '30': 223,
                                '40': 231
                            },
                            70: {
                                '-10': 180,
                                '0': 188,
                                '10': 193,
                                '20': 200,
                                '30': 202,
                                '40': 210
                            },
                        }
                    }
                }
            },
            '75': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 271,
                                '0': 309,
                                '10': 347,
                                '20': 350,
                                '30': 347,
                                '40': 312
                            },
                            50: {
                                '-10': 256,
                                '0': 288,
                                '10': 320,
                                '20': 323,
                                '30': 323,
                                '40': 295
                            },
                            55: {
                                '-10': 240,
                                '0': 267,
                                '10': 293,
                                '20': 297,
                                '30': 297,
                                '40': 276
                            },
                            60: {
                                '-10': 222,
                                '0': 246,
                                '10': 268,
                                '20': 272,
                                '30': 273,
                                '40': 257
                            },
                            65: {
                                '-10': 205,
                                '0': 227,
                                '10': 245,
                                '20': 250,
                                '30': 252,
                                '40': 236
                            },
                            70: {
                                '-10': 189,
                                '0': 206,
                                '10': 224,
                                '20': 228,
                                '30': 230,
                                '40': 216
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 359,
                                '0': 377,
                                '10': 385,
                                '20': 393,
                                '30': 398,
                                '40': 403
                            },
                            50: {
                                '-10': 326,
                                '0': 342,
                                '10': 349,
                                '20': 356,
                                '30': 360,
                                '40': 368
                            },
                            55: {
                                '-10': 296,
                                '0': 309,
                                '10': 316,
                                '20': 323,
                                '30': 326,
                                '40': 335
                            },
                            60: {
                                '-10': 268,
                                '0': 280,
                                '10': 286,
                                '20': 292,
                                '30': 295,
                                '40': 305
                            },
                            65: {
                                '-10': 242,
                                '0': 253,
                                '10': 259,
                                '20': 265,
                                '30': 268,
                                '40': 278
                            },
                            70: {
                                '-10': 219,
                                '0': 229,
                                '10': 234,
                                '20': 241,
                                '30': 244,
                                '40': 253
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 267,
                                '0': 304,
                                '10': 342,
                                '20': 344,
                                '30': 342,
                                '40': 308
                            },
                            50: {
                                '-10': 251,
                                '0': 283,
                                '10': 314,
                                '20': 317,
                                '30': 317,
                                '40': 290
                            },
                            55: {
                                '-10': 235,
                                '0': 262,
                                '10': 287,
                                '20': 291,
                                '30': 291,
                                '40': 271
                            },
                            60: {
                                '-10': 218,
                                '0': 241,
                                '10': 262,
                                '20': 266,
                                '30': 267,
                                '40': 251
                            },
                            65: {
                                '-10': 201,
                                '0': 222,
                                '10': 239,
                                '20': 244,
                                '30': 246,
                                '40': 231
                            },
                            70: {
                                '-10': 184,
                                '0': 203,
                                '10': 218,
                                '20': 223,
                                '30': 224,
                                '40': 211
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 353,
                                '0': 372,
                                '10': 279,
                                '20': 387,
                                '30': 392,
                                '40': 397
                            },
                            50: {
                                '-10': 320,
                                '0': 336,
                                '10': 343,
                                '20': 350,
                                '30': 354,
                                '40': 361
                            },
                            55: {
                                '-10': 290,
                                '0': 303,
                                '10': 309,
                                '20': 316,
                                '30': 319,
                                '40': 329
                            },
                            60: {
                                '-10': 262,
                                '0': 274,
                                '10': 279,
                                '20': 286,
                                '30': 288,
                                '40': 299
                            },
                            65: {
                                '-10': 237,
                                '0': 247,
                                '10': 253,
                                '20': 259,
                                '30': 262,
                                '40': 272
                            },
                            70: {
                                '-10': 214,
                                '0': 223,
                                '10': 229,
                                '20': 235,
                                '30': 238,
                                '40': 247
                            },
                        }
                    }
                }
            },
            '75D': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 227,
                                '0': 316,
                                '10': 356,
                                '20': 358,
                                '30': 357,
                                '40': 323
                            },
                            50: {
                                '-10': 262,
                                '0': 296,
                                '10': 328,
                                '20': 332,
                                '30': 332,
                                '40': 305
                            },
                            55: {
                                '-10': 246,
                                '0': 274,
                                '10': 302,
                                '20': 306,
                                '30': 307,
                                '40': 287
                            },
                            60: {
                                '-10': 228,
                                '0': 253,
                                '10': 276,
                                '20': 280,
                                '30': 283,
                                '40': 265
                            },
                            65: {
                                '-10': 211,
                                '0': 233,
                                '10': 253,
                                '20': 257,
                                '30': 260,
                                '40': 246
                            },
                            70: {
                                '-10': 194,
                                '0': 214,
                                '10': 231,
                                '20': 236,
                                '30': 238,
                                '40': 226
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 368,
                                '0': 387,
                                '10': 395,
                                '20': 404,
                                '30': 410,
                                '40': 415
                            },
                            50: {
                                '-10': 335,
                                '0': 351,
                                '10': 359,
                                '20': 367,
                                '30': 374,
                                '40': 380
                            },
                            55: {
                                '-10': 304,
                                '0': 318,
                                '10': 325,
                                '20': 334,
                                '30': 339,
                                '40': 346
                            },
                            60: {
                                '-10': 275,
                                '0': 288,
                                '10': 294,
                                '20': 303,
                                '30': 307,
                                '40': 316
                            },
                            65: {
                                '-10': 249,
                                '0': 261,
                                '10': 267,
                                '20': 275,
                                '30': 279,
                                '40': 289
                            },
                            70: {
                                '-10': 225,
                                '0': 236,
                                '10': 242,
                                '20': 250,
                                '30': 253,
                                '40': 263
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 273,
                                '0': 311,
                                '10': 351,
                                '20': 354,
                                '30': 352,
                                '40': 318
                            },
                            50: {
                                '-10': 258,
                                '0': 291,
                                '10': 323,
                                '20': 326,
                                '30': 327,
                                '40': 300
                            },
                            55: {
                                '-10': 241,
                                '0': 269,
                                '10': 296,
                                '20': 300,
                                '30': 301,
                                '40': 281
                            },
                            60: {
                                '-10': 223,
                                '0': 248,
                                '10': 270,
                                '20': 275,
                                '30': 277,
                                '40': 259
                            },
                            65: {
                                '-10': 206,
                                '0': 228,
                                '10': 247,
                                '20': 252,
                                '30': 254,
                                '40': 240
                            },
                            70: {
                                '-10': 189,
                                '0': 209,
                                '10': 225,
                                '20': 230,
                                '30': 232,
                                '40': 221
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 363,
                                '0': 382,
                                '10': 390,
                                '20': 398,
                                '30': 405,
                                '40': 409
                            },
                            50: {
                                '-10': 330,
                                '0': 346,
                                '10': 353,
                                '20': 361,
                                '30': 368,
                                '40': 373
                            },
                            55: {
                                '-10': 299,
                                '0': 312,
                                '10': 319,
                                '20': 327,
                                '30': 333,
                                '40': 340
                            },
                            60: {
                                '-10': 270,
                                '0': 282,
                                '10': 288,
                                '20': 296,
                                '30': 301,
                                '40': 309
                            },
                            65: {
                                '-10': 244,
                                '0': 255,
                                '10': 261,
                                '20': 269,
                                '30': 273,
                                '40': 282
                            },
                            70: {
                                '-10': 219,
                                '0': 230,
                                '10': 236,
                                '20': 244,
                                '30': 247,
                                '40': 257
                            },
                        }
                    }
                }
            },
            '90D': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 308,
                                '0': 349,
                                '10': 392,
                                '20': 394,
                                '30': 392,
                                '40': 357
                            },
                            50: {
                                '-10': 292,
                                '0': 326,
                                '10': 362,
                                '20': 365,
                                '30': 365,
                                '40': 338
                            },
                            55: {
                                '-10': 273,
                                '0': 303,
                                '10': 332,
                                '20': 336,
                                '30': 337,
                                '40': 317
                            },
                            60: {
                                '-10': 254,
                                '0': 280,
                                '10': 305,
                                '20': 308,
                                '30': 310,
                                '40': 293
                            },
                            65: {
                                '-10': 235,
                                '0': 258,
                                '10': 279,
                                '20': 283,
                                '30': 285,
                                '40': 273
                            },
                            70: {
                                '-10': 216,
                                '0': 238,
                                '10': 256,
                                '20': 260,
                                '30': 263,
                                '40': 253
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 406,
                                '0': 426,
                                '10': 434,
                                '20': 443,
                                '30': 451,
                                '40': 455
                            },
                            50: {
                                '-10': 370,
                                '0': 386,
                                '10': 394,
                                '20': 403,
                                '30': 412,
                                '40': 416
                            },
                            55: {
                                '-10': 336,
                                '0': 350,
                                '10': 358,
                                '20': 366,
                                '30': 274,
                                '40': 380
                            },
                            60: {
                                '-10': 304,
                                '0': 317,
                                '10': 324,
                                '20': 332,
                                '30': 338,
                                '40': 347
                            },
                            65: {
                                '-10': 276,
                                '0': 288,
                                '10': 295,
                                '20': 302,
                                '30': 308,
                                '40': 317
                            },
                            70: {
                                '-10': 250,
                                '0': 261,
                                '10': 268,
                                '20': 275,
                                '30': 279,
                                '40': 290
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 304,
                                '0': 345,
                                '10': 386,
                                '20': 388,
                                '30': 387,
                                '40': 352
                            },
                            50: {
                                '-10': 287,
                                '0': 321,
                                '10': 356,
                                '20': 359,
                                '30': 360,
                                '40': 332
                            },
                            55: {
                                '-10': 268,
                                '0': 297,
                                '10': 326,
                                '20': 330,
                                '30': 330,
                                '40': 311
                            },
                            60: {
                                '-10': 249,
                                '0': 274,
                                '10': 299,
                                '20': 302,
                                '30': 303,
                                '40': 287
                            },
                            65: {
                                '-10': 230,
                                '0': 253,
                                '10': 273,
                                '20': 277,
                                '30': 279,
                                '40': 267
                            },
                            70: {
                                '-10': 211,
                                '0': 232,
                                '10': 250,
                                '20': 254,
                                '30': 257,
                                '40': 247
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 401,
                                '0': 420,
                                '10': 428,
                                '20': 437,
                                '30': 446,
                                '40': 449
                            },
                            50: {
                                '-10': 364,
                                '0': 380,
                                '10': 388,
                                '20': 397,
                                '30': 405,
                                '40': 410
                            },
                            55: {
                                '-10': 330,
                                '0': 344,
                                '10': 351,
                                '20': 359,
                                '30': 367,
                                '40': 373
                            },
                            60: {
                                '-10': 298,
                                '0': 311,
                                '10': 318,
                                '20': 325,
                                '30': 331,
                                '40': 340
                            },
                            65: {
                                '-10': 270,
                                '0': 282,
                                '10': 288,
                                '20': 296,
                                '30': 301,
                                '40': 310
                            },
                            70: {
                                '-10': 244,
                                '0': 255,
                                '10': 262,
                                '20': 269,
                                '30': 273,
                                '40': 284
                            },
                        }
                    }
                }
            },
            'P100D': {
                19: {
                    on: {
                        speed: {
                            45: {
                                '-10': 341,
                                '0': 390,
                                '10': 439,
                                '20': 442,
                                '30': 440,
                                '40': 401
                            },
                            50: {
                                '-10': 323,
                                '0': 365,
                                '10': 405,
                                '20': 409,
                                '30': 410,
                                '40': 380
                            },
                            55: {
                                '-10': 303,
                                '0': 339,
                                '10': 372,
                                '20': 376,
                                '30': 379,
                                '40': 353
                            },
                            60: {
                                '-10': 282,
                                '0': 313,
                                '10': 341,
                                '20': 345,
                                '30': 347,
                                '40': 329
                            },
                            65: {
                                '-10': 261,
                                '0': 289,
                                '10': 312,
                                '20': 317,
                                '30': 318,
                                '40': 306
                            },
                            70: {
                                '-10': 240,
                                '0': 265,
                                '10': 285,
                                '20': 290,
                                '30': 293,
                                '40': 283
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 447,
                                '0': 474,
                                '10': 485,
                                '20': 496,
                                '30': 505,
                                '40': 509
                            },
                            50: {
                                '-10': 408,
                                '0': 431,
                                '10': 441,
                                '20': 451,
                                '30': 461,
                                '40': 466
                            },
                            55: {
                                '-10': 372,
                                '0': 391,
                                '10': 400,
                                '20': 409,
                                '30': 419,
                                '40': 425
                            },
                            60: {
                                '-10': 337,
                                '0': 354,
                                '10': 362,
                                '20': 371,
                                '30': 377,
                                '40': 388
                            },
                            65: {
                                '-10': 306,
                                '0': 321,
                                '10': 329,
                                '20': 337,
                                '30': 341,
                                '40': 354
                            },
                            70: {
                                '-10': 277,
                                '0': 291,
                                '10': 299,
                                '20': 307,
                                '30': 311,
                                '40': 323
                            },
                        }
                    }
                },
                21: {
                    on: {
                        speed: {
                            45: {
                                '-10': 322,
                                '0': 369,
                                '10': 414,
                                '20': 417,
                                '30': 416,
                                '40': 379
                            },
                            50: {
                                '-10': 306,
                                '0': 347,
                                '10': 384,
                                '20': 388,
                                '30': 389,
                                '40': 360
                            },
                            55: {
                                '-10': 228,
                                '0': 323,
                                '10': 354,
                                '20': 358,
                                '30': 360,
                                '40': 336
                            },
                            60: {
                                '-10': 269,
                                '0': 299,
                                '10': 325,
                                '20': 329,
                                '30': 331,
                                '40': 313
                            },
                            65: {
                                '-10': 250,
                                '0': 276,
                                '10': 299,
                                '20': 303,
                                '30': 305,
                                '40': 292
                            },
                            70: {
                                '-10': 230,
                                '0': 254,
                                '10': 273,
                                '20': 278,
                                '30': 281,
                                '40': 271
                            },
                        }
                    },
                    off: {
                        speed: {
                            45: {
                                '-10': 422,
                                '0': 447,
                                '10': 458,
                                '20': 468,
                                '30': 477,
                                '40': 481
                            },
                            50: {
                                '-10': 387,
                                '0': 409,
                                '10': 418,
                                '20': 428,
                                '30': 437,
                                '40': 442
                            },
                            55: {
                                '-10': 353,
                                '0': 372,
                                '10': 380,
                                '20': 389,
                                '30': 398,
                                '40': 404
                            },
                            60: {
                                '-10': 322,
                                '0': 338,
                                '10': 345,
                                '20': 354,
                                '30': 359,
                                '40': 370
                            },
                            65: {
                                '-10': 293,
                                '0': 307,
                                '10': 315,
                                '20': 323,
                                '30': 326,
                                '40': 339
                            },
                            70: {
                                '-10': 265,
                                '0': 279,
                                '10': 286,
                                '20': 294,
                                '30': 298,
                                '40': 310
                            },
                        }
                    }
                }
            }
        };
    };
    BatteryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BatteryService);
    return BatteryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/innovate/angular/angular-tesla-range-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map