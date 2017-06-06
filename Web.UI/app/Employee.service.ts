import { Injectable } from '@angular/core';
import { Employee } from './Employee';


@Injectable()
export class EmployeeService
{
    MyEmployees: Employee[];
    getEmployees()
    {
        this.MyEmployees = Array<Employee>();
        this.MyEmployees.push(new Employee(1, "Vijendra"));
        this.MyEmployees.push(new Employee(2, "Karan"));
        this.MyEmployees.push(new Employee(3, "Sheila"));
        return this.MyEmployees;
    }
}