webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n</div>\r\n<app-qa-form></app-qa-form>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qa_form_service_service__ = __webpack_require__("../../../../../src/app/qa-form-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qa_form_qa_form_component__ = __webpack_require__("../../../../../src/app/qa-form/qa-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__qa_form_qa_form_component__["a" /* QaFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* AlertModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__qa_form_service_service__["a" /* QaFormServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/qa-form-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaFormServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qa_template__ = __webpack_require__("../../../../../src/app/qa-template.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaFormServiceService = (function () {
    function QaFormServiceService() {
    }
    QaFormServiceService.prototype.buildModule = function (i, question) {
        this.qa = {};
        this.qa.QNumber = i;
        this.qa.Question = question.trim();
        this.qa.ExpectedAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Yes;
        this.qa.ResponseAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Undefined;
        return this.qa;
    };
    QaFormServiceService.prototype.BuildQA = function () {
        this.questAndAns = [];
        this.questAndAns.push(this.buildModule(1, "Does your child enjoy being swung, bounced on your knee, etc.?"));
        this.questAndAns.push(this.buildModule(2, "Does your child take an interest in other children?"));
        this.questAndAns[this.questAndAns.length - 1].ExpectedAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].No;
        this.questAndAns.push(this.buildModule(3, "Does your child like climbing on things, such as up stairs?"));
        this.questAndAns.push(this.buildModule(4, "Does your child enjoy playing peek-a-boo/hide-and-seek?"));
        this.questAndAns.push(this.buildModule(5, "Does your child ever pretend, for example, to talk on the phone or take care of a doll or pretend other things?  "));
        this.questAndAns[this.questAndAns.length - 1].ExpectedAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].No;
        this.questAndAns.push(this.buildModule(6, "Does your child ever use his/her index finger to point, to ask for something?  "));
        this.questAndAns.push(this.buildModule(7, "Does your child ever use his/her index finger to point, to indicate interest in something?  "));
        this.questAndAns.push(this.buildModule(8, "Can your child play properly with small toys (e.g. cars or blocks) without just mouthing, fiddling, or dropping them? "));
        this.questAndAns.push(this.buildModule(9, "Does your child ever bring objects over to you (parent) to show you something?  "));
        this.questAndAns.push(this.buildModule(10, "Does your child look you in the eye for more than a second or two?"));
        this.questAndAns.push(this.buildModule(11, "Does your child ever seem oversensitive to ise? (e.g., plugging ears)"));
        this.questAndAns.push(this.buildModule(12, "Does your child smile in response to your face or your smile?  "));
        this.questAndAns[this.questAndAns.length - 1].ExpectedAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].No;
        this.questAndAns.push(this.buildModule(13, "Does your child imitate you? (e.g., you make a face-will your child imitate it?)  "));
        this.questAndAns.push(this.buildModule(14, "Does your child respond to his/her name when you call?  "));
        this.questAndAns.push(this.buildModule(15, "If you point at a toy across the room, does your child look at it?  "));
        this.questAndAns.push(this.buildModule(16, "Does your child walk?  "));
        this.questAndAns.push(this.buildModule(17, "Does your child look at things you are looking at?  "));
        this.questAndAns.push(this.buildModule(18, "Does your child make unusual finger movements near his/her face?  "));
        this.questAndAns.push(this.buildModule(19, "Does your child try to attract your attention to his/her own activity?  "));
        this.questAndAns.push(this.buildModule(20, "Have you ever wondered if your child is deaf?  "));
        this.questAndAns.push(this.buildModule(21, "Does your child understand what people say?  "));
        this.questAndAns.push(this.buildModule(22, "Does your child sometimes stare at thing or wander with  purpose?  "));
        this.questAndAns.push(this.buildModule(23, "Does your child look at your face to check your reaction when faced with something  unfamiliar? "));
        return this.questAndAns;
    };
    QaFormServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QaFormServiceService);
    return QaFormServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/qa-form/qa-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".number-circle{\r\n    color: white;\r\n    background-color: #dd2476;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    height: 30px;\r\n    width:30px;\r\n    margin: auto;\r\n    line-height: 30px;\r\n}\r\n.vcenter {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    float: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa-form/qa-form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel panel-default\" style=\"overflow-y:auto;padding-left:0;padding-right:0;\">\r\n  <div class=\"panel-heading\">\r\n    <h4 class=\"panel-title\">\r\n      M-CHAT-R/F Screening\r\n    </h4>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Yes</th>\r\n            <th>No</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"medium\">\r\n          <tr *ngFor=\"let qa of questAndAns; let i=index;\">\r\n            <td>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-1\">\r\n                  <h5 class=\"number-circle\">{{i+1}}</h5>\r\n                </div>\r\n                <div class=\"col-xs-11\">\r\n                  <strong class=\"vcenter\">{{qa.Question}}</strong>\r\n                </div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <label>\r\n                <input class=\"radio\" type=\"radio\" name={{i}} id={{i}} value=\"1\" [checked]=\"qa.ResponseAnswer===1\" (change)=\"radioChangeHandler($event)\">\r\n              </label>\r\n            </td>\r\n            <td>\r\n              <label>\r\n                <input class=\"radio\" type=\"radio\" name={{i}} id={{i}} value=\"0\" [checked]=\"qa.ResponseAnswer===0\" (change)=\"radioChangeHandler($event)\">\r\n              </label>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <button [disabled]=\"answeredQuestions !== 23\" class=\"btn btn-xm pull-right\" style=\"background-color: #dd2476;color: white;\"\r\n      (click)=\"ToggleQuestions(); Evaluate()\">Submit\r\n    </button>\r\n    &nbsp;\r\n    <button class=\"btn btn-xm\" style=\"background-color: #6a52a2;color:white;\" (click)=\"clearInput()\">Clear\r\n    </button>\r\n    <!-- <button class=\"btn btn-primary btn-xm\" (click)=\"allGood()\">All Good\r\n      </button> -->\r\n    &nbsp;\r\n    <br/>\r\n    <br/>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"score >=0 && score <=2\" class=\"alert alert-success\">\r\n  <strong>Total Score is 0-2:</strong> A score between 0 and 2 indicates LOW risk. There's no need to take any further action at\r\n  the moment. If your child is younger than 24 months though, then recommend that you screen again after the second birthday.\r\n</div>\r\n<div *ngIf=\"score >=3 && score <=7\" class=\"alert alert-warning\">\r\n  <strong>Total Score is 3-7:</strong> A score between 3 and 7 indicates MEDIUM risk. We recommend that you contact your child's\r\n  pediatrician for diagnostic evaluation and eligibility evaluation for early intervention. ABA therapy and other interventions\r\n  have been shown to be incredibly effective when used early and can dramatically improve your child’s quality of life.\r\n</div>\r\n<div *ngIf=\"score >=8 && score <=20\" class=\"alert alert-danger\">\r\n  <strong>Total Score is 8-20:</strong> A score between 8 and 20 indicates HIGH risk. We recommend you to immediately contact your\r\n  child's pediatrician for diagnostic evaluation and eligibility evaluation for early intervention. ABA therapy and other\r\n  interventions have been shown to be incredibly effective when used early and can dramatically improve your child’s quality\r\n  of life.\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/qa-form/qa-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qa_form_service_service__ = __webpack_require__("../../../../../src/app/qa-form-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qa_template__ = __webpack_require__("../../../../../src/app/qa-template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QaFormComponent = (function () {
    function QaFormComponent(formService) {
        this.questAndAns = formService.BuildQA();
        this.answeredQuestions = 0;
        this.showAlert = false;
        this.showQuestions = 0;
        this.score = 23;
    }
    QaFormComponent.prototype.radioChangeHandler = function (event) {
        var id = event.target.id;
        this.score = 23;
        if (this.questAndAns[id].ResponseAnswer === __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Undefined) {
            this.answeredQuestions++;
        }
        if (event.target.value === "0") {
            this.questAndAns[id].ResponseAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].No;
        }
        else {
            this.questAndAns[id].ResponseAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Yes;
        }
    };
    QaFormComponent.prototype.Evaluate = function () {
        for (var i = 0; i < this.questAndAns.length; i++) {
            if (this.questAndAns[i].ExpectedAnswer === this.questAndAns[i].ResponseAnswer) {
                this.score--;
            }
        }
    };
    QaFormComponent.prototype.ToggleQuestions = function () {
        this.showQuestions = this.showQuestions === 0 ? 1 : 0;
        this.score = 23;
    };
    QaFormComponent.prototype.clearInput = function () {
        this.score = 23;
        for (var i = 0; i < this.questAndAns.length; i++) {
            this.questAndAns[i].ResponseAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Undefined;
        }
    };
    QaFormComponent.prototype.allGood = function () {
        this.score = 23;
        this.answeredQuestions = 0;
        for (var i = 0; i < this.questAndAns.length; i++) {
            this.questAndAns[i].ResponseAnswer = __WEBPACK_IMPORTED_MODULE_1__qa_template__["a" /* Answers */].Yes;
        }
        this.answeredQuestions = 23;
    };
    QaFormComponent.prototype.ngOnInit = function () {
    };
    QaFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-qa-form',
            template: __webpack_require__("../../../../../src/app/qa-form/qa-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/qa-form/qa-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__qa_form_service_service__["a" /* QaFormServiceService */]])
    ], QaFormComponent);
    return QaFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/qa-template.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answers; });
var Answers;
(function (Answers) {
    Answers[Answers["Yes"] = 1] = "Yes";
    Answers[Answers["No"] = 0] = "No";
    Answers[Answers["Undefined"] = -1] = "Undefined";
})(Answers || (Answers = {}));


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map