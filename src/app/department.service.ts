import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';

@Injectable()
export class DepartmentService {

  constructor(private http:Http) { }
  getDepartments(){
    
  return this.http.get('http://localhost:8086/departments')
   .map(response=>response.json())
  }

  saveDepartment(department:any){
    var body=JSON.stringify(department);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    const options=new RequestOptions({headers:headers});
  return  this.http.post('http://localhost:8086/departments',body,options)
  .map(res=>res.json());
  }
deleteDepartment(departmentId){
    return this.http.delete('http://localhost:8086/departments',{params:{departmentId:departmentId}})
    .map(res=>{
return res.text();
  });
}
  
}
