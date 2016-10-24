import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Department } from './department';
import { User } from './user';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class DepartmentService {
    user:User;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
    }

    getUsers():Promise<User[]> {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees')
            .toPromise()
            .then(res=>res.json());
    }

    getUser(departmentId:number):Promise<User> {
        return this.getUsers()
            .then(users => users.find(user => user.departmentId === departmentId));
    }

    addUser(user:User):Promise<User> {
        console.log(JSON.stringify(user));
        return this.http
            .post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees', JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteUser(id:number):Promise<void> {
        return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees/' + id, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getDepartments():Promise<Department[]> {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/')
            .toPromise()
            .then(res=>res.json());
    }

    getDepartment(id:number):Promise<Department> {
        return this.http.get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/'+id)
            .toPromise()
            .then(res=>res.json());
    }

    deleteDepartment(id:number):Promise<void> {
        return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + id, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    createDepartment(name:string):Promise<Department> {
        return this.http
            .post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments', JSON.stringify({
                name: name,
                description: name
            }), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}