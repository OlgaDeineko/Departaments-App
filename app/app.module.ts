import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DepartmentList }  from './department-list/department-list';
import { DepartmentDetail } from './department-detail/department-detail';
import { UserFormComponent } from './user-form.component/user-form.component';
import { DepartmentService }          from './shared/department.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DepartmentList,
        DepartmentDetail,
        UserFormComponent
    ],
    providers: [ DepartmentService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }