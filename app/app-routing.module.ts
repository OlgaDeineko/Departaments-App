import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentList }  from './department-list/department-list';
import { DepartmentDetail } from './department-detail/department-detail';




const routes: Routes = [
    { path: '', redirectTo: '/department-list', pathMatch: 'full' },
    { path: 'department-list',  component: DepartmentList },
    { path: 'department-detail/:id',  component: DepartmentDetail}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}