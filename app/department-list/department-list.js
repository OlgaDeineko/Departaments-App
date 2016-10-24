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
var router_1 = require('@angular/router');
var department_service_1 = require('../shared/department.service');
var DepartmentList = (function () {
    function DepartmentList(departmentService, router) {
        this.departmentService = departmentService;
        this.router = router;
    }
    DepartmentList.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments().then(function (departments) { return _this.departments = departments; });
    };
    DepartmentList.prototype.addDepartment = function (name, description) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.departmentService.createDepartment(name)
            .then(function (department) {
            _this.departments.push(department);
            _this.selectedDepartment = null;
        });
    };
    DepartmentList.prototype.deleteDepartment = function (department) {
        var _this = this;
        this.departmentService
            .deleteDepartment(department.id)
            .then(function () {
            _this.departments = _this.departments.filter(function (d) { return d !== department; });
            if (_this.selectedDepartment === department) {
                _this.selectedDepartment = null;
            }
        });
    };
    DepartmentList.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentList.prototype.onSelect = function (department) {
        this.selectedDepartment = department;
    };
    DepartmentList.prototype.gotoDetail = function (department) {
        var link = ['/department-detail/' + department.id];
        this.router.navigate(link);
    };
    DepartmentList = __decorate([
        core_1.Component({
            selector: 'my-departments',
            templateUrl: './app/department-list/department-list.html',
            styleUrls: ['./app/department-list/department-list.css']
        }), 
        __metadata('design:paramtypes', [department_service_1.DepartmentService, router_1.Router])
    ], DepartmentList);
    return DepartmentList;
}());
exports.DepartmentList = DepartmentList;
//# sourceMappingURL=department-list.js.map