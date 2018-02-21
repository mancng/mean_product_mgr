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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/list/list.component.ts");
var creation_component_1 = __webpack_require__("../../../../../src/app/creation/creation.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'products', component: list_component_1.ListComponent },
    { path: 'products/edit/:id', component: edit_component_1.EditComponent },
    { path: 'creation', component: creation_component_1.CreationComponent },
    { path: 'delete/:id', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\n    margin-right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>PPM - Project Product Management</h1>\n\n<a [routerLink]=\"['']\">Home</a>\n<a [routerLink]=\"['products']\">Product List</a>\n<a [routerLink]=\"['creation']\">Product Creation</a>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/list/list.component.ts");
var creation_component_1 = __webpack_require__("../../../../../src/app/creation/creation.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                list_component_1.ListComponent,
                creation_component_1.CreationComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/creation/creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 500px;\n    border: 1px solid black;\n    padding: 30px;\n    margin-top: 30px;\n    border-radius: 30px;\n}\n\nform{\n    margin-bottom: 60px;\n}\n\n.btn{\n    float: right;\n    margin: 5px 25px 5px 5px;\n    width: 60px;\n    height: 35px;\n    font-size: 11pt;\n}\n\n.content{\n    font-size: 13pt;\n}\n\n#title_text, #price_text, #imageUrl_text{\n    height: 20px;\n    font-size: 10pt;\n}\n\n#title_text{\n    margin-left: 80px;\n    margin-bottom: 10px;\n\n}\n\n#price_text{\n    margin-left: 75px;\n    margin-bottom: 10px;\n}\n\n#imageUrl_text{\n    margin-left: 30px;\n}\n\n#ptag{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/creation/creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Create a New Product</h1>\n  <form (submit)=\"addProduct()\">\n    <span class=\"content\">Title</span><input id=\"title_text\" type=\"text\" name=\"title\" [(ngModel)]=\"productTitle\"><br>\n    <span class=\"content\">Price</span><input id=\"price_text\" type=\"text\" name=\"price\" [(ngModel)]=\"productPrice\"><br>\n    <span class=\"content\">Image URL</span><input id=\"imageUrl_text\" type=\"text\" name=\"imageUrl\" [(ngModel)]=\"productImageUrl\"><br>\n    <button class=\"btn\" (submit)=\"addProduct()\">Create</button>\n    <button class=\"btn\" [routerLink]=\"['/products']\">Cancel</button>\n  </form>\n  <p id=\"ptag\" *ngIf=\"errorMessage != undefined\">\n    {{errorMessage}}\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/creation/creation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreationComponent = /** @class */ (function () {
    function CreationComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newProduct = { title: "", price: 0.00, imageUrl: "" };
    }
    CreationComponent.prototype.ngOnInit = function () {
    };
    CreationComponent.prototype.addProduct = function () {
        var _this = this;
        var productToAdd = { title: this.productTitle, price: this.productPrice, imageUrl: this.productImageUrl };
        this._httpService.addProduct(productToAdd)
            .subscribe(function (responseData) {
            if (responseData.error) {
                console.log(responseData);
                _this.errorMessage = responseData.error.message;
            }
            else {
                _this._router.navigate(['products']);
            }
        });
    };
    CreationComponent = __decorate([
        core_1.Component({
            selector: 'app-creation',
            template: __webpack_require__("../../../../../src/app/creation/creation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/creation/creation.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], CreationComponent);
    return CreationComponent;
}());
exports.CreationComponent = CreationComponent;


/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 500px;\n    border: 1px solid black;\n    padding: 30px;\n    margin-top: 30px;\n    border-radius: 30px;\n}\n\nform{\n    margin-bottom: 60px;\n}\n\n.btn{\n    float: right;\n    margin: 5px 25px 5px 5px;\n    width: 70px;\n    height: 35px;\n    font-size: 11pt;\n}\n\n.content{\n    font-size: 13pt;\n}\n\n#title_text, #price_text, #imageUrl_text{\n    height: 20px;\n    font-size: 10pt;\n}\n\n#title_text{\n    margin-left: 80px;\n    margin-bottom: 10px;\n\n}\n\n#price_text{\n    margin-left: 75px;\n    margin-bottom: 10px;\n}\n\n#imageUrl_text{\n    margin-left: 30px;\n}\n\n#ptag{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <h1>Edit Product</h1>\n    <form>\n      <span class=\"content\">Title</span><input id=\"title_text\" type=\"text\" name=\"title\" [(ngModel)]=\"productTitle\"><br>\n      <span class=\"content\">Price</span><input id=\"price_text\" type=\"text\" name=\"price\" [(ngModel)]=\"productPrice\"><br>\n      <span class=\"content\">Image URL</span><input id=\"imageUrl_text\" type=\"text\" name=\"imageUrl\" [(ngModel)]=\"productImageUrl\"><br>\n      <button class=\"btn\" (click)=\"updateProduct()\">Update</button>\n      <button class=\"btn\" (click)=\"deleteProduct()\">Delete</button>\n    </form>\n    <p id=\"ptag\" *ngIf=\"errorMessage != undefined\">\n      {{errorMessage}}\n    </p>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.productToEdit = { _id: "", title: "", imageUrl: "", createdAt: "", updatedAt: "" };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._httpService.getSingleProduct(params.get('id'))
                .subscribe(function (responseData) {
                _this.productToEdit = responseData;
                _this.productTitle = _this.productToEdit.title;
                _this.productPrice = _this.productToEdit.price;
                _this.productImageUrl = _this.productToEdit.imageUrl;
            });
            _this.productId = params.get('id');
            console.log(_this.productId);
        });
    };
    EditComponent.prototype.updateProduct = function () {
        var _this = this;
        var toEdit = { title: this.productTitle, price: this.productPrice, imageUrl: this.productImageUrl };
        console.log("I'm here");
        console.log(toEdit);
        this._httpService.updateSingleProduct(this.productId, toEdit)
            .subscribe(function (responseData) {
            console.log("ONE MORE STEP FURTHER");
            if (responseData.error) {
                console.log("Error editing product: " + responseData.error);
                _this.errorMessage = responseData.error.message;
                // this._router.navigate(['/products']);
            }
            else {
                console.log("Updated successfully");
                _this._router.navigate(['products']);
            }
        });
    };
    EditComponent.prototype.deleteProduct = function () {
        var _this = this;
        // console.log("Delete button pressed")
        this._httpService.deleteProduct(this.productId)
            .subscribe(function (responseData) {
            if (responseData.error) {
                console.log("Got error when deleting");
            }
            else {
                console.log("Deleted successfully");
                _this._router.navigate(['products']);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_service_1.HttpService, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 500px;\n    border: 1px solid black;\n    padding: 30px;\n    margin-top: 30px;\n    border-radius: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Home Page</h1>\n  <div style=\"text-align:center\">\n    <h3>Welcome to Project Product Management! Here we can manage a set of products. You are able to create products, remove old products, and edit products.</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getProducts = function () {
        return this._http.get('/api/products');
    };
    HttpService.prototype.getSingleProduct = function (id) {
        return this._http.get("/api/edit/" + id);
    };
    HttpService.prototype.addProduct = function (newProduct) {
        return this._http.post('/api/new', newProduct);
    };
    HttpService.prototype.updateSingleProduct = function (id, theProduct) {
        return this._http.put("/api/edit/" + id, theProduct);
    };
    HttpService.prototype.deleteProduct = function (id) {
        return this._http.delete("/api/edit/" + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 500px;\n    border: 1px solid black;\n    padding: 30px;\n    margin-top: 30px;\n    border-radius: 30px;\n}\n\n.image{\n    width: 130px;\n    height: 110px;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n#image_div{\n    width: 130px;\n    height: 110px;\n    margin-left: 25px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n#products_wrapper{\n    margin: 10px;\n    padding: 20px;\n    width: 180px;\n    height: 280px;\n    text-align: center;\n    border: 1px solid black;\n    display: inline-block;\n}\n\n.btn{\n    width: 60px;\n    height: 35px;\n    margin: 5px;\n    font-size: 11pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Products List</h1>\n  <div id=\"products_wrapper\" *ngFor=\"let x of products\">\n    <div id=\"image_div\">\n        <img class=\"image\" src=\"{{x.imageUrl}}\" alt=\"{{x.title}}\">\n    </div>\n    <h3>{{x.title}}</h3>\n    <h3>${{x.price}}</h3>\n    <button class=\"btn\" [routerLink]=\"['edit/', x._id]\">Edit</button>\n    <button class=\"btn\" (click)=\"deleteProduct(x._id)\">Delete</button>\n  </div>\n</div>\n\n<!-- http://www.tidalimpex.com/blog/wp-content/uploads/2017/01/Tidal-Impex-Cavendish-Banana-300x194.png -->"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var ListComponent = /** @class */ (function () {
    function ListComponent(_httpService) {
        this._httpService = _httpService;
        this.products = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getProductsFromService();
    };
    ListComponent.prototype.getProductsFromService = function () {
        var _this = this;
        var observable = this._httpService.getProducts();
        observable.subscribe(function (data) {
            _this.products = data;
        });
    };
    ListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this._httpService.deleteProduct(id)
            .subscribe(function (responseData) {
            if (responseData.error) {
                console.log("Got error when deleting");
            }
            else {
                console.log("Deleted successfully");
                _this.getProductsFromService();
            }
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map