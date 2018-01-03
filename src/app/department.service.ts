import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DepartmentService {

  constructor(private http:Http) { }
  getDepartments(){
  return this.http.get('http://192.168.1.130:8080/departments')
   .map(response=>response.json())
  }

}
