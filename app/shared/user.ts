export class User {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    salary: number;
    departmentId: number;
    departmentName: string;
    constructor( departmentId:number, departmentName: string){
        this.departmentId = departmentId;
        this.departmentName = departmentName;

    }
}
