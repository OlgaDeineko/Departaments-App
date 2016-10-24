import { Component } from '@angular/core';
import { User }    from '../shared/user';
import { DepartmentService } from '../shared/department.service';
import { DepartmentDetail } from '../department-detail/department-detail';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls:['./user-form.component.css']

})

export class UserFormComponent {

    constructor(private departmentService:DepartmentService,
                private departmentDetail: DepartmentDetail,
                private route:ActivatedRoute) {
    }

    departmentId:number;
    departmentName:string;
    model;
    active = true;

    addUser() {
        this.departmentService.addUser(this.model).then(result=> this.departmentDetail.users.push(result));
        this.model = new User(this.departmentId, this.departmentName);
        this.active = false;

        setTimeout(() => this.active = true, 0);
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.departmentId = id;
            this.model = new User(this.departmentId, this.departmentName);
            this.departmentService.getDepartment(id).then(department => {
                this.departmentName = department.name;
                this.model.departmentName = department.name
            });

        });
    }
}