import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Http, HttpModule, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService
{
    getUrl: string = "http://localhost:55995/api/employees";

    constructor(private _http:Http)
    {
    }
    getEmployees()
    {
        return this._http.get(this.getUrl).map((res: Response) => res.json());
    }
}