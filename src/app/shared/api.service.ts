import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{map} from 'rxjs/operators'
import { EmployeeModel, IEmployee } from './employee-dashboard.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

 employees: IEmployee[] = []


  postEmployee(data :EmployeeModel){

    this.employees.push(data)
    return of(data)
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getEmployee(){

    return of(this.employees)
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  
  updateEmployee(data :any,id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;

    }))

  }
  deleteEmployee(id : any){

    this.employees = this.employees.filter(emp => emp.id !== id)
    return of(this.employees)

    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

  }

