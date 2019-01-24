"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var jumbotron_component_1 = require("./jumbotron/jumbotron.component");
var card_component_1 = require("./card/card.component");
var gee_component_1 = require("./gee/gee.component");
var me_component_1 = require("./me/me.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var form_component_1 = require("./form/form.component");
var routes = [
    { path: 'gee', component: gee_component_1.GeeComponent },
    { path: 'me', component: me_component_1.MeComponent },
    { path: '', component: home_component_1.HomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                jumbotron_component_1.JumbotronComponent,
                card_component_1.CardComponent,
                gee_component_1.GeeComponent,
                me_component_1.MeComponent,
                home_component_1.HomeComponent,
                form_component_1.FormComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
