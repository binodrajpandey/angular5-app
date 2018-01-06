import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class DepartmentService {

  constructor(private http:Http) { }
  getDepartments(){
    var headers=new Headers({'Content-Type':'application/json','Authorization':'Bearer '+Cookie.get('access_token')});
    var options=new RequestOptions({headers:headers})
    return this.http.get('http://localhost:8086/departments',options)
   .map(response=>response.json())
  }

  saveDepartment(department:any){
    var body=JSON.stringify(department);
    const headers=new Headers({'Authorization':'Bearer'+Cookie.get('access_token')});
    headers.append('Content-Type','application/json');
    const options=new RequestOptions({headers:headers});
  return  this.http.post('http://localhost:8086/departments',body,options)
  .map(res=>res.json());
  }

  deleteDepartment(departmentId){
    const headers=new Headers({'Authorization':'Bearer'+Cookie.get('access_token')});
    headers.append('Content-Type','application/json');
    const options=new RequestOptions({headers:headers,params:{departmentId:departmentId}});
   return this.http.delete('http://localhost:8086/departments',
    options)
    .map(res=>res.text());
  }
  
}
