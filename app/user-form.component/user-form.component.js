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
var core_1 = require('@angular/core');
var user_1 = require('../shared/user');
var department_service_1 = require('../shared/department.service');
var department_detail_1 = require('../department-detail/department-detail');
var router_1 = require('@angular/router');
var UserFormComponent = (function () {
    function UserFormComponent(departmentService, departmentDetail, route) {
        this.departmentService = departmentService;
        this.departmentDetail = departmentDetail;
        this.route = route;
        this.active = true;
    }
    UserFormComponent.prototype.addUser = function () {
        var _this = this;
        this.departmentService.addUser(this.model).then(function (result) { return _this.departmentDetail.users.push(result); });
        this.model = new user_1.User(this.departmentId, this.departmentName);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.departmentId = id;
            _this.model = new user_1.User(_this.departmentId, _this.departmentName);
            _this.departmentService.getDepartment(id).then(function (department) {
                _this.departmentName = department.name;
                _this.model.departmentName = department.name;
            });
        });
    };
    UserFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-form',
            templateUrl: './user-form.component.html',
            styleUrls: ['./user-form.component.css']
        }), 
        __metadata('design:paramtypes', [department_service_1.DepartmentService, department_detail_1.DepartmentDetail, router_1.ActivatedRoute])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map