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
var department_service_1 = require('../shared/department.service');
var router_1 = require('@angular/router');
var DepartmentDetail = (function () {
    function DepartmentDetail(departmentService, route, router) {
        this.departmentService = departmentService;
        this.route = route;
        this.router = router;
    }
    DepartmentDetail.prototype.getUsers = function (id) {
        var _this = this;
        this.departmentService.getUsers().then(function (users) { return _this.users = _this.findUserByDepartmentId(users, id); });
    };
    DepartmentDetail.prototype.findUserByDepartmentId = function (users, id) {
        var departmentUsers = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.departmentId == id) {
                departmentUsers.push(user);
            }
        }
        return departmentUsers;
    };
    DepartmentDetail.prototype.deleteUser = function (user) {
        var _this = this;
        this.departmentService
            .deleteUser(user.id)
            .then(function () {
            _this.users = _this.users.filter(function (u) { return u !== user; });
            if (_this.selectedUser === user) {
                _this.selectedUser = null;
            }
        });
    };
    DepartmentDetail.prototype.onSelectUser = function (user) {
        this.selectedUser = user;
    };
    DepartmentDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.getUsers(id);
        });
    };
    DepartmentDetail.prototype.goBack = function () {
        var link = ['/department-list'];
        this.router.navigate(link);
    };
    DepartmentDetail = __decorate([
        core_1.Component({
            selector: 'my-department-users',
            templateUrl: './app/department-detail/department-detail.html',
            styleUrls: ['./app/department-detail/department-detail.css']
        }), 
        __metadata('design:paramtypes', [department_service_1.DepartmentService, router_1.ActivatedRoute, router_1.Router])
    ], DepartmentDetail);
    return DepartmentDetail;
}());
exports.DepartmentDetail = DepartmentDetail;
//# sourceMappingURL=department-detail.js.map