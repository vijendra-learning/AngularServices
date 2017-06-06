import { Component } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './Employee.service';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

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
        this.MyEmployees = EmpService.getEmployees().map(res=> res);
    }
}
