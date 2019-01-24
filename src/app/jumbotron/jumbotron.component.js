"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
        this.title = 'Welcome to Gees world';
        this.text = 'Its all about Gee';
        this.menuIsClosed = true;
        this.menuTitle = "closed";
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        this.name = 'bob ';
    };
    JumbotronComponent.prototype.showMenu = function () {
        this.menuIsClosed = !this.menuIsClosed;
        if (this.menuIsClosed == true) {
            this.menuTitle = "open";
        }
        else {
            this.menuTitle = "closed";
        }
    };
    JumbotronComponent = __decorate([
        core_1.Component({
            selector: 'app-jumbotron',
            templateUrl: './jumbotron.component.html',
            styleUrls: ['./jumbotron.component.css']
        })
    ], JumbotronComponent);
    return JumbotronComponent;
}());
exports.JumbotronComponent = JumbotronComponent;
