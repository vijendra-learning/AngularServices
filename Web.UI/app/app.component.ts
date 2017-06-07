import { Component } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './Employee.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers:[EmployeeService],
    moduleId: module.id
})
export class AppComponent
{
    name = 'Angular 2';
    MyEmployees: Employee[];
    constructor(EmpService: EmployeeService)
    {
        EmpService.getEmployees().subscribe(res => this.MyEmployees = res);
    }
}
