import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';

@Injectable()
export class DepartmentService {

  constructor(private http:Http) { }
  getDepartments(){
    
  return this.http.get('http://localhost:8086/departments')
   .map(response=>response.json())
  }
  saveDepartment(data:any){
    var body=JSON.stringify(data);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({ headers: headers });
   return this.http.post('http://localhost:8086/departments',body,options).map(response=>response.json());
  }

}
