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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newyear_newyear_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newyear/newyear.component */ "./src/app/newyear/newyear.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'newyear'
    },
    {
        path: 'newyear',
        component: _newyear_newyear_component__WEBPACK_IMPORTED_MODULE_3__["NYPageComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  display: flex;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmVwa2l5L3dvcmsvdmtyZXBraXkud2ViL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vk-app',
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
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm5/elements.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _newyear_newyear_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newyear/newyear.component */ "./src/app/newyear/newyear.component.ts");
/* harmony import */ var _newyear_nytree_simple_nytree_simple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newyear/nytree-simple/nytree-simple.component */ "./src/app/newyear/nytree-simple/nytree-simple.component.ts");
/* harmony import */ var _newyear_nytree_d3_nytree_d3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newyear/nytree-d3/nytree-d3.component */ "./src/app/newyear/nytree-d3/nytree-d3.component.ts");
/* harmony import */ var _newyear_pixi_pixi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newyear/pixi/pixi.component */ "./src/app/newyear/pixi/pixi.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule(_injector) {
        this._injector = _injector;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        var nySimpleTree = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_newyear_nytree_simple_nytree_simple_component__WEBPACK_IMPORTED_MODULE_8__["NYTreeSimpleComponent"], {
            injector: this._injector
        });
        customElements.define('vk-nysimple-tree', nySimpleTree);
    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _newyear_newyear_component__WEBPACK_IMPORTED_MODULE_7__["NYPageComponent"],
                _newyear_nytree_simple_nytree_simple_component__WEBPACK_IMPORTED_MODULE_8__["NYTreeSimpleComponent"],
                _newyear_nytree_d3_nytree_d3_component__WEBPACK_IMPORTED_MODULE_9__["NytreeD3Component"],
                _newyear_pixi_pixi_component__WEBPACK_IMPORTED_MODULE_10__["PixiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            entryComponents: [
                _newyear_nytree_simple_nytree_simple_component__WEBPACK_IMPORTED_MODULE_8__["NYTreeSimpleComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/newyear/newyear.component.html":
/*!************************************************!*\
  !*** ./src/app/newyear/newyear.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <vk-nytree-simple></vk-nytree-simple>\n<vk-nytree-d3></vk-nytree-d3> -->\n<vk-nyscene-pixi></vk-nyscene-pixi>\n"

/***/ }),

/***/ "./src/app/newyear/newyear.component.scss":
/*!************************************************!*\
  !*** ./src/app/newyear/newyear.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  display: flex;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmVwa2l5L3dvcmsvdmtyZXBraXkud2ViL3NyYy9hcHAvbmV3eWVhci9uZXd5ZWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9uZXd5ZWFyL25ld3llYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/newyear/newyear.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newyear/newyear.component.ts ***!
  \**********************************************/
/*! exports provided: NYPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NYPageComponent", function() { return NYPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NYPageComponent = /** @class */ (function () {
    function NYPageComponent() {
    }
    NYPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vk-newyear',
            template: __webpack_require__(/*! ./newyear.component.html */ "./src/app/newyear/newyear.component.html"),
            styles: [__webpack_require__(/*! ./newyear.component.scss */ "./src/app/newyear/newyear.component.scss")]
        })
    ], NYPageComponent);
    return NYPageComponent;
}());



/***/ }),

/***/ "./src/app/newyear/nytree-d3/nytree-d3.component.html":
/*!************************************************************!*\
  !*** ./src/app/newyear/nytree-d3/nytree-d3.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\n  [attr.width.px]  = \"treeWidth\"\n  [attr.height.px] = \"treeHeight\">\n  <g #tree>\n    <polygon points=\"0,25 100,25 50,0\"></polygon>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/newyear/nytree-d3/nytree-d3.component.scss":
/*!************************************************************!*\
  !*** ./src/app/newyear/nytree-d3/nytree-d3.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3llYXIvbnl0cmVlLWQzL255dHJlZS1kMy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/newyear/nytree-d3/nytree-d3.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/newyear/nytree-d3/nytree-d3.component.ts ***!
  \**********************************************************/
/*! exports provided: NytreeD3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NytreeD3Component", function() { return NytreeD3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var NytreeD3Component = /** @class */ (function () {
    function NytreeD3Component() {
        this.treeHeight = 100;
        this.treeWidth = 100;
    }
    NytreeD3Component.prototype.ngOnInit = function () {
        console.log(this._tree.nativeElement);
        Object(d3__WEBPACK_IMPORTED_MODULE_2__["symbol"])().type(function () { return d3__WEBPACK_IMPORTED_MODULE_2__["symbolTriangle"]; }).size(function () { return 100; }).context(this._tree.nativeElement);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NytreeD3Component.prototype, "_tree", void 0);
    NytreeD3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vk-nytree-d3',
            template: __webpack_require__(/*! ./nytree-d3.component.html */ "./src/app/newyear/nytree-d3/nytree-d3.component.html"),
            styles: [__webpack_require__(/*! ./nytree-d3.component.scss */ "./src/app/newyear/nytree-d3/nytree-d3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NytreeD3Component);
    return NytreeD3Component;
}());



/***/ }),

/***/ "./src/app/newyear/nytree-simple/nytree-simple.component.html":
/*!********************************************************************!*\
  !*** ./src/app/newyear/nytree-simple/nytree-simple.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree\">\n  <div class=\"treeTriangle top\"></div>\n  <div class=\"treeTriangle middle\"></div>\n  <div class=\"treeTriangle bottom\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/newyear/nytree-simple/nytree-simple.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/newyear/nytree-simple/nytree-simple.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  background: #222;\n  display: flex; }\n\n.tree {\n  flex: 1 1 auto;\n  margin: auto; }\n\n.treeTriangle {\n  display: block;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-right-style: solid;\n  border-bottom-color: #030;\n  border-left-color: transparent;\n  border-right-color: transparent; }\n\n.treeTriangle.top {\n  border-bottom-width: 33.33333333px;\n  border-left-width: 33.33333333px;\n  border-right-width: 33.33333333px;\n  margin-bottom: -16.66666667px; }\n\n.treeTriangle.middle {\n  border-bottom-width: 66.66666667px;\n  border-left-width: 66.66666667px;\n  border-right-width: 66.66666667px;\n  margin-bottom: -33.33333333px; }\n\n.treeTriangle.bottom {\n  border-bottom-width: 100px;\n  border-left-width: 100px;\n  border-right-width: 100px;\n  margin-bottom: -50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmVwa2l5L3dvcmsvdmtyZXBraXkud2ViL3NyYy9hcHAvbmV3eWVhci9ueXRyZWUtc2ltcGxlL255dHJlZS1zaW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGVBQWM7RUFDZCxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsU0FBUTtFQUNSLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsMkJBQTBCO0VBQzFCLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsMEJBcEJlO0VBcUJmLCtCQUE4QjtFQUM5QixnQ0FBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyw4QkFBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxtQ0FBcUM7RUFDckMsaUNBQW1DO0VBQ25DLGtDQUFvQztFQUNwQyw4QkFBK0IsRUFDaEM7O0FBQ0Q7RUFDRSwyQkFwQ2U7RUFxQ2YseUJBckNlO0VBc0NmLDBCQXRDZTtFQXVDZixxQkFBK0IsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC9uZXd5ZWFyL255dHJlZS1zaW1wbGUvbnl0cmVlLXNpbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0cmVlLWNvbG9yOiAjMDMwO1xuJHRyZWUtc2l6ZTogMTAwcHg7XG5cbjpob3N0IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udHJlZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG4udHJlZVRyaWFuZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAkdHJlZS1jb2xvcjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRyZWVUcmlhbmdsZS50b3Age1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAkdHJlZS1zaXplIC8gMztcbiAgYm9yZGVyLWxlZnQtd2lkdGg6ICR0cmVlLXNpemUgLyAzO1xuICBib3JkZXItcmlnaHQtd2lkdGg6ICR0cmVlLXNpemUgLyAzO1xuICBtYXJnaW4tYm90dG9tOiAtKCR0cmVlLXNpemUgLyA2KTtcbn1cbi50cmVlVHJpYW5nbGUubWlkZGxlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogJHRyZWUtc2l6ZSAvIDEuNTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6ICR0cmVlLXNpemUgLyAxLjU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogJHRyZWUtc2l6ZSAvIDEuNTtcbiAgbWFyZ2luLWJvdHRvbTogLSgkdHJlZS1zaXplIC8gMyk7XG59XG4udHJlZVRyaWFuZ2xlLmJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6ICR0cmVlLXNpemU7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAkdHJlZS1zaXplO1xuICBib3JkZXItcmlnaHQtd2lkdGg6ICR0cmVlLXNpemU7XG4gIG1hcmdpbi1ib3R0b206IC0oJHRyZWUtc2l6ZSAvIDIpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/newyear/nytree-simple/nytree-simple.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newyear/nytree-simple/nytree-simple.component.ts ***!
  \******************************************************************/
/*! exports provided: NYTreeSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NYTreeSimpleComponent", function() { return NYTreeSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NYTreeSimpleComponent = /** @class */ (function () {
    function NYTreeSimpleComponent() {
    }
    NYTreeSimpleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vk-nytree-simple',
            template: __webpack_require__(/*! ./nytree-simple.component.html */ "./src/app/newyear/nytree-simple/nytree-simple.component.html"),
            styles: [__webpack_require__(/*! ./nytree-simple.component.scss */ "./src/app/newyear/nytree-simple/nytree-simple.component.scss")]
        })
    ], NYTreeSimpleComponent);
    return NYTreeSimpleComponent;
}());



/***/ }),

/***/ "./src/app/newyear/pixi/pixi.component.css":
/*!*************************************************!*\
  !*** ./src/app/newyear/pixi/pixi.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3eWVhci9waXhpL3BpeGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9uZXd5ZWFyL3BpeGkvcGl4aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/newyear/pixi/pixi.component.html":
/*!**************************************************!*\
  !*** ./src/app/newyear/pixi/pixi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loaderProgress$ | async as progress\">\n  <progress *ngIf=\"progress < 100\"\n    max=100\n    [attr.value]=\"progress\">\n  </progress>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/newyear/pixi/pixi.component.ts":
/*!************************************************!*\
  !*** ./src/app/newyear/pixi/pixi.component.ts ***!
  \************************************************/
/*! exports provided: PixiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixiComponent", function() { return PixiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/dist/pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_utils_rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/rxjs */ "./src/utils/rxjs.ts");
/* harmony import */ var src_utils_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/utils/number */ "./src/utils/number.ts");







var T_CHRISTMASTREE = 'assets/sprites/christmastree.png';
var T_ROOM = 'assets/sprites/room.jpg';
var T_BALLOON = 'assets/sprites/balloon.png';
var BALLOONS_MAX = 10;
var BALLOON_SPAWN_TIME = 500;
var BALLOON_HEIGHT = 70;
var BALLOONS_SCREEN_SHIFT = BALLOON_HEIGHT;
var BALLOON_SPEED = 2;
var Sprite = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Sprite, _super);
    function Sprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vx = 0;
        _this.vy = 0;
        return _this;
    }
    return Sprite;
}(pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"]));
var PixiComponent = /** @class */ (function () {
    function PixiComponent(_hostRef, _renderer) {
        var _this = this;
        this._hostRef = _hostRef;
        this._renderer = _renderer;
        this.loaderProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this._domReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._keydown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keydown');
        this._keyup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keyup');
        this._keyEvent$ = Object(src_utils_rxjs__WEBPACK_IMPORTED_MODULE_5__["use"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this._keydown$, _this._keyup$); });
        this._pixiApp = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Application"]({
            antialias: true,
            transparent: true
        });
        this._resize$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this._texturesReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._loadTextures([
            T_CHRISTMASTREE,
            T_ROOM,
            T_BALLOON
        ]);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this._domReady$.pipe(Object(src_utils_rxjs__WEBPACK_IMPORTED_MODULE_5__["isTrue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)), this._texturesReady$.pipe(Object(src_utils_rxjs__WEBPACK_IMPORTED_MODULE_5__["isTrue"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(function () { return _this._setup(); });
    }
    PixiComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    PixiComponent.prototype.ngOnInit = function () {
        this._renderer.appendChild(this._hostRef.nativeElement, this._pixiApp.view);
        this._onResize();
        this._domReady$.next(true);
    };
    PixiComponent.prototype._applyBalloonsBehavior = function (container) {
        var _this = this;
        var spawnTimestamp = Date.now() - BALLOON_SPAWN_TIME;
        return function (d) {
            var balloons = container.children;
            // Destroy invisible balloons
            container.children.forEach(function (balloon, i) {
                balloon.y -= BALLOON_SPEED;
                if (BALLOON_HEIGHT < balloon.getGlobalPosition().y * -1) {
                    container.removeChild(balloon);
                    balloon.destroy();
                }
            });
            if (container.children.length >= BALLOONS_MAX) {
                return;
            }
            if (BALLOON_SPAWN_TIME > (Date.now() - spawnTimestamp)) {
                return;
            }
            var size = _this._getContainerSize();
            var newBalloon = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](_this._getTexture(T_BALLOON));
            var balloonProportions = newBalloon.height / newBalloon.width;
            newBalloon.height = BALLOON_HEIGHT;
            newBalloon.width = BALLOON_HEIGHT / balloonProportions;
            newBalloon.x = Math.round(Math.random() * (size.width - newBalloon.width));
            newBalloon.y = size.height;
            _this._applyTouchBehaviour(newBalloon, function (balloon) {
                newBalloon.destroy();
            });
            container.addChild(newBalloon);
            spawnTimestamp = Date.now();
        };
    };
    PixiComponent.prototype._applyTouchBehaviour = function (object, cb) {
        function fireCb(e) {
            cb(e.target, e);
        }
        object.interactive = true;
        object.on('pointerdown', fireCb);
        object.once('removed', function () { return object.off('pointerdown', fireCb); });
    };
    PixiComponent.prototype._applyVelocity = function (objects, delta) {
        var _this = this;
        objects.forEach(function (o) {
            o.x = Object(src_utils_number__WEBPACK_IMPORTED_MODULE_6__["limitNumber"])(o.x + o.vx, [0, _this._pixiApp.view.width]);
            o.y = Object(src_utils_number__WEBPACK_IMPORTED_MODULE_6__["limitNumber"])(o.y + o.vy, [0, _this._pixiApp.view.height]);
        });
    };
    PixiComponent.prototype._getContainerSize = function () {
        var el = this._hostRef.nativeElement;
        return {
            width: el.offsetWidth,
            height: el.offsetHeight
        };
    };
    PixiComponent.prototype._getTexture = function (key) {
        return pixi_js__WEBPACK_IMPORTED_MODULE_2__["loader"].resources[key].texture;
    };
    PixiComponent.prototype._handleKeyEvent = function (e, sprite) {
        var pressed = e.type === 'keydown';
        var accelerate = pressed && e.repeat;
        e.preventDefault();
        e.stopPropagation();
        switch (e.key) {
            case 'ArrowDown':
                sprite.vy = pressed ? sprite.vy || 1 : 0;
                if (accelerate) {
                    sprite.vy += 1;
                }
                break;
            case 'ArrowUp':
                sprite.vy = pressed ? sprite.vy || -1 : 0;
                if (accelerate) {
                    sprite.vy -= 1;
                }
                break;
            case 'ArrowLeft':
                sprite.vx = pressed ? sprite.vx || -1 : 0;
                if (accelerate) {
                    sprite.vx -= 1;
                }
                break;
            case 'ArrowRight':
                sprite.vx = (pressed ? sprite.vx || 1 : 0);
                if (accelerate) {
                    sprite.vx += 1;
                }
                break;
        }
    };
    PixiComponent.prototype._loadTextures = function () {
        var _this = this;
        var loaderParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            loaderParams[_i] = arguments[_i];
        }
        var _a;
        this._texturesReady$.next(false);
        (_a = pixi_js__WEBPACK_IMPORTED_MODULE_2__["loader"]).add.apply(_a, loaderParams).on('progress', function (loader, resource) { return _this.loaderProgress$.next(loader.progress); })
            .load(function () { return _this._texturesReady$.next(true); });
        return this._texturesReady$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (ready) { return ready === true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    PixiComponent.prototype._onResize = function () {
        var size = this._getContainerSize();
        this._pixiApp.renderer.resize(size.width, size.height);
        this._resize$.next(size);
    };
    PixiComponent.prototype._setup = function () {
        var containerSize = this._getContainerSize();
        var spriteChristmasTree = new Sprite(this._getTexture(T_CHRISTMASTREE));
        var spriteRoom = new Sprite(this._getTexture(T_ROOM));
        var balloons = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Container"]();
        spriteChristmasTree.anchor.x = 0.5;
        spriteChristmasTree.anchor.y = 0.5;
        spriteRoom.anchor.x = 0.5;
        this._resize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this._getContainerSize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(function (size) {
            var treeProportions = spriteChristmasTree.height / spriteChristmasTree.width;
            var treeHeight = spriteChristmasTree.height = size.height / 2;
            var roomProportions = spriteRoom.height / spriteRoom.width;
            var roomHeight = spriteRoom.height = size.height;
            spriteChristmasTree.width = Math.round(treeHeight / treeProportions);
            spriteChristmasTree.position.set(containerSize.width / 2, containerSize.height / 1.5);
            spriteRoom.width = Math.round(roomHeight / roomProportions);
            spriteRoom.position.set(size.width / 2, 0);
        });
        // this._keyEvent$.pipe(
        //   takeUntil(this._destroy$)
        // ).subscribe(e => this._handleKeyEvent(e, spriteChristmasTree));
        this._pixiApp.stage.addChild(spriteRoom);
        this._pixiApp.stage.addChild(spriteChristmasTree);
        this._pixiApp.stage.addChild(balloons);
        this._pixiApp.ticker.add(this._applyVelocity.bind(this, [
            spriteChristmasTree
        ]));
        this._pixiApp.ticker.add(this._applyBalloonsBehavior(balloons));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PixiComponent.prototype, "_onResize", null);
    PixiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vk-nyscene-pixi',
            template: __webpack_require__(/*! ./pixi.component.html */ "./src/app/newyear/pixi/pixi.component.html"),
            styles: [__webpack_require__(/*! ./pixi.component.css */ "./src/app/newyear/pixi/pixi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PixiComponent);
    return PixiComponent;
}());



/***/ }),

/***/ "./src/app/shared/settings.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/settings.service.ts ***!
  \********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
    }
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/shared/settings.service.ts");




var FALLBACK_TRANSLATION_KEY = 'en';
var SharedModule = /** @class */ (function () {
    function SharedModule(_t) {
        this._t = _t;
        this._t.setDefaultLang(FALLBACK_TRANSLATION_KEY);
        this._t.use(this._t.getBrowserLang());
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function (options) {
        return {
            ngModule: SharedModule_1,
            providers: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot().providers,
                _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SharedModule);
    return SharedModule;
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

/***/ "./src/utils/number.ts":
/*!*****************************!*\
  !*** ./src/utils/number.ts ***!
  \*****************************/
/*! exports provided: limitNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitNumber", function() { return limitNumber; });
function limitNumber(number, _a) {
    var min = _a[0], max = _a[1];
    if (number > max) {
        return max;
    }
    else if (number < min) {
        return min;
    }
    else {
        return number;
    }
}


/***/ }),

/***/ "./src/utils/rxjs.ts":
/*!***************************!*\
  !*** ./src/utils/rxjs.ts ***!
  \***************************/
/*! exports provided: isTrue, use */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function isTrue() {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (x) { return x === true; });
}
function use(fn) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(fn));
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krepkiy/work/vkrepkiy.web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map