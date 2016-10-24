import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department } from '../shared/department';
import { DepartmentService } from '../shared/department.service';

@Component({
    selector: 'my-departments',
    templateUrl: './app/department-list/department-list.html',
    styleUrls: ['./app/department-list/department-list.css']
})
export class DepartmentList implements OnInit {
    departments: Department[];
    selectedDepartment: Department;

    constructor(
        private departmentService: DepartmentService,
        private router: Router) {
    }

    getDepartments(): void {
        this.departmentService.getDepartments().then(departments => this.departments = departments);
    }

    addDepartment(name: string, description:string): void {
        name = name.trim();
        if (!name) { return; }
        this.departmentService.createDepartment(name)
            .then(department => {
                this.departments.push(department);
                this.selectedDepartment = null;
            });
    }


    deleteDepartment(department: Department): void {
        this.departmentService
            .deleteDepartment(department.id)
            .then(() => {
                this.departments = this.departments.filter(d => d !== department);
                if (this.selectedDepartment === department) { this.selectedDepartment = null; }
            });
    }

    ngOnInit(): void {
        this.getDepartments();
    }

    onSelect(department: Department): void {
        this.selectedDepartment = department;
    }

    gotoDetail(department: Department): void {
        let link = ['/department-detail/'+department.id];
        this.router.navigate(link);
    }
}
