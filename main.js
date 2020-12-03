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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav id=\"header\" class=\"navbar fixed-top navbar-expand-lg navbar-dark\">\r\n      <div id=\"header-container\" class=\"container navbar-containe\">\r\n          <a id=\"brand\" class=\"navbar-brand\" (click)=\"toggleClass('home')\" [scrollTo]=\"'#home'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">\r\n            Akhil\r\n          </a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n          </button>            \r\n          <div class=\"collapse navbar-collapse ml-auto\" id=\"navbarSupportedContent\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n              </ul>                    \r\n              <ul class=\"navbar-nav\">\r\n                  <li class=\"nav-item\" [ngClass]=\"{ 'active': link === 'home' }\">\r\n                      <a class=\"nav-link\" (click)=\"toggleClass('home')\" [scrollTo]=\"'#home'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">Home</a>\r\n                  </li>\r\n                  <li class=\"nav-item\" [ngClass]=\"{ 'active': link === 'about' }\">\r\n                      <a class=\"nav-link\" (click)=\"toggleClass('about')\" [scrollTo]=\"'#about'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">About</a>\r\n                  </li>    \r\n                  <li class=\"nav-item\" [ngClass]=\"{ 'active': link === 'portfolio' }\">\r\n                      <a class=\"nav-link\" (click)=\"toggleClass('portfolio')\" [scrollTo]=\"'#projects'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">Portfolio</a>\r\n                  </li>\r\n                  <li class=\"nav-item\" [ngClass]=\"{ 'active': link === 'contact' }\">\r\n                      <a class=\"nav-link\" (click)=\"toggleClass('contact')\" [scrollTo]=\"'#contact'\" [scrollDuration]=\"1000\" [scrollOffset]=\"-100\">Contact</a>\r\n                  </li> \r\n              </ul>                \r\n          </div>\r\n      </div>            \r\n  </nav> \r\n  <div id=\"home\" class=\"view\" style=\"background-image: url('assets/img/pic.jpg'); background-repeat: no-repeat; background-size: cover;\">\r\n    <div class=\"mask\">\r\n        <div class=\"banner text-left\">\r\n            <div class=\"container\">\r\n                <ul>\r\n                    <li>\r\n                        <h1>\r\n                            Hello!, I'am <span>Akhil</span>.<br>\r\n                            I'm a Front-end developer.\r\n                        </h1>\r\n                    </li>                        \r\n                    <li>\r\n                        <!--<a href=\"{{linkResume}}\" target=\"_blank\" class=\"btn btn-golden\">Resume</a>-->\r\n                        <a href=\"\" target=\"_blank\" class=\"btn btn-golden\">Resume</a>\r\n                    </li>\r\n                </ul>\r\n            </div>   \r\n        </div>\r\n        <div class=\"scroll-btn d-none d-md-block\">\r\n            <span class=\"mouse\">\r\n                <span>\r\n                </span>\r\n            </span>                \r\n        </div>\r\n    </div>      \r\n  </div>\r\n</header>\r\n<section id=\"about\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-5 d-none d-md-block\">\r\n              <img src=\"assets/img/photo.jpeg\" alt=\"akhil\" class=\"img-fluid float-right mr-5\" width=\"170\">\r\n          </div>\r\n          <div class=\"col-xs-12 col-md-7\">\r\n              <div class=\"text-center text-md-left\">\r\n                  <h2 class=\"about\">About me</h2>\r\n              </div>\r\n              <p>\r\n                I recently graduated from Dalhousie University, Halifax, NS. I have\r\n                worked as a web developer in the last years using both technologies\r\n                <span class=\"highlight\">Frontend</span> and <span class=\"highlight\">Backend</span>. \r\n                I highly motivated, fast learner, self-starter, eager to meet challenges and can quickly imbibe the latest technologies, skills, concepts, and ideas.\r\n              </p>              \r\n              <img src=\"assets/img/photo.jpeg\" alt=\"akhil\" class=\"img-fluid mx-auto d-block d-md-none\" width=\"170\">\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<section id=\"skills\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n              <h2 class=\"skills\">Skills</h2>\r\n          </div>\r\n      </div>    \r\n      <div class=\"row\">\r\n        <div class=\"offset-1 col-10 mb-5\">\r\n            <h5>Front-end</h5>\r\n            <span *ngFor=\"let frontend of skillsFrontend\" class=\"skill\">\r\n                {{frontend.name}}\r\n            </span>       \r\n        </div>\r\n        <div class=\"offset-1 col-10 mb-5\">                \r\n            <h5>Back-end</h5>\r\n            <span *ngFor=\"let backend of skillsBackend\" class=\"skill\">\r\n            {{backend.name}}\r\n            </span>            \r\n        </div>\r\n        <div class=\"offset-1 col-10\">\r\n            <h5>Others</h5>\r\n            <span *ngFor=\"let others of skillsOthers\" class=\"skill\">\r\n            {{others.name}}\r\n            </span>              \r\n        </div>                   \r\n      </div> \r\n  </div>\r\n</section>\r\n<!--\r\n<section id=\"projects\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n              <h2 class=\"projects\">Projects</h2>\r\n          </div>\r\n      </div>  \r\n      <div *ngFor=\"let project of projects; let i = index; let last = last\">\r\n          <div class=\"row project\">\r\n            <div class=\"offset-1 col-md-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <span class=\"number\">0{{i + 1}}</span>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <h4>{{project.name}}</h4>\r\n                        <p>\r\n                          {{project.description}}\r\n                        </p>\r\n                        <span *ngFor=\"let technology of project.technologies\" class=\"skill\">\r\n                          {{technology.name}}\r\n                        </span>\r\n                        <div class=\"mt-3\">\r\n                            <a *ngIf=\"project.name != 'Captive Portal'\" href=\"{{project.link}}\" target=\"_blank\" class=\"btn-visit\">\r\n                              Visit Site\r\n                            </a>\r\n                            <a *ngIf=\"project.name == 'Captive Portal'\" href=\"{{project.link}}\" target=\"_blank\" class=\"btn-visit\">\r\n                              View Demo\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 text-center\">\r\n                <a href=\"{{project.link}}\" target=\"_blank\">\r\n                <a href=\"{{project.link}}\" target=\"_blank\">\r\n                    <img class=\"img-fluid\" src=\"{{project.photo}}\" alt=\"{{project.name}}\" title=\"{{project.name}}\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <hr *ngIf=\"!last\" class=\"d-md-none\">\r\n      </div>                                \r\n  </div>\r\n</section>-->\r\n<footer id=\"contact\" class=\"footer\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col pl-5\">\r\n              <h3>Contact me</h3>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6 pl-5\">\r\n              <p>\r\n                    I would be glad if you contacted me. I am always looking for new challenges that allow me to improve my skills.\r\n              </p>\r\n          </div>\r\n          <div class=\"offset-md-1 col-md-5\">                    \r\n              <a href=\"\" target=\"_top\" class=\"mail\">\r\n                  <i class=\"mdi mdi-email\"></i>\r\n                  akhilgolla15@gmail.com\r\n              </a>\r\n              <div class=\"social ml-2 mt-4\">\r\n                  <a class=\"linkedin\" href=\"https://www.linkedin.com\" target=\"_blank\" title=\"Linkedin\">\r\n                      <i class=\"mdi mdi-linkedin\"></i>\r\n                  </a>\r\n                  <a class=\"github\" href=\"https://github.com\" target=\"_blank\" title=\"Github\">\r\n                      <i class=\"mdi mdi-github-box\"></i>\r\n                  </a>\r\n                  <a class=\"twitter\" href=\"https://twitter.com\" target=\"_blank\" title=\"Twitter\">\r\n                        <i class=\"mdi mdi-twitter\"></i>\r\n                    </a>\r\n                  <a class=\"google\" href=\"#\" target=\"_blank\" title=\"Google+\">\r\n                      <i class=\"mdi mdi-google\"></i>\r\n                  </a>                  \r\n              </div>\r\n          </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n              <span class=\"brand\">\r\n                  Akhil.\r\n              </span>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    //linkResume: string = `${environment.url}/assets/files/akhilresume.pdf`;
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.link = "home";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getSkills();
    };
    AppComponent.prototype.getProjects = function () {
        var _this = this;
        this.dataService.getProjects()
            .subscribe(function (data) {
            _this.projects = data['projects'];
        }, function (error) {
            console.log('Error Error to load projects!');
        });
    };
    AppComponent.prototype.getSkills = function () {
        var _this = this;
        this.dataService.getSkills()
            .subscribe(function (data) {
            _this.skillsBackend = data['backend'];
            _this.skillsFrontend = data['frontend'];
            _this.skillsOthers = data['others'];
        }, function (error) {
            console.log('Error Error to load skills!');
        });
    };
    AppComponent.prototype.toggleClass = function (value) {
        this.link = value;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-scroll-to-el */ "./node_modules/ng2-scroll-to-el/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_scroll_to_el__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot()
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.urlProjects = "assets/files/projects.json";
        this.urlSkills = "assets/files/skills.json";
    }
    DataService.prototype.getProjects = function () {
        return this.http.get(this.urlProjects);
    };
    DataService.prototype.getSkills = function () {
        return this.http.get(this.urlSkills);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    url: 'http://localhost:4200',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\personal-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map