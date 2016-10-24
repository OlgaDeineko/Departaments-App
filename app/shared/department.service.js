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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DepartmentService = (function () {
    function DepartmentService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DepartmentService.prototype.getUsers = function () {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    DepartmentService.prototype.getUser = function (departmentId) {
        return this.getUsers()
            .then(function (users) { return users.find(function (user) { return user.departmentId === departmentId; }); });
    };
    DepartmentService.prototype.addUser = function (user) {
        console.log(JSON.stringify(user));
        return this.http
            .post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees', JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DepartmentService.prototype.deleteUser = function (id) {
        return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees/' + id, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DepartmentService.prototype.getDepartments = function () {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    DepartmentService.prototype.getDepartment = function (id) {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    DepartmentService.prototype.deleteDepartment = function (id) {
        return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    DepartmentService.prototype.createDepartment = function (name) {
        return this.http
            .post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments', JSON.stringify({
            name: name,
            description: name
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DepartmentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DepartmentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DepartmentService);
    return DepartmentService;
}());
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map