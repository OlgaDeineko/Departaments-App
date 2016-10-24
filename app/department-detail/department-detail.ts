import { Component,OnInit  } from '@angular/core';
import { User } from '../shared/user';
import { DepartmentService } from '../shared/department.service';
import { Router, ActivatedRoute, Params }   from '@angular/router';

@Component({
    selector: 'my-department-users',
    templateUrl: './app/department-detail/department-detail.html',
    styleUrls: ['./app/department-detail/department-detail.css']
})
export class DepartmentDetail implements OnInit{
    users: User[];
    user: User;
    selectedUser: User;


    constructor(
        private departmentService: DepartmentService,
        private route: ActivatedRoute,
        private router: Router

    ) {}

    getUsers(id): void {
        this.departmentService.getUsers().then(users => this.users = this.findUserByDepartmentId(users, id));
    }

    findUserByDepartmentId(users, id): User[]{
        let departmentUsers =[];
        for (let user of users) {
            if(user.departmentId==id){
                departmentUsers.push(user);
            }
        }
        return departmentUsers;

    }

    deleteUser(user: User): void {
        this.departmentService
            .deleteUser(user.id)
            .then(() => {
                this.users = this.users.filter(u => u !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            });
    }

    onSelectUser(user: User): void {
        this.selectedUser = user;
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getUsers(id);
        });
    }

    goBack(): void {
        let link = ['/department-list'];
        this.router.navigate(link);
    }
}
