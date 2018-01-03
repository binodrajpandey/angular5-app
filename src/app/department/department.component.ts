import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent  {
  department: Department={
    departmentId: null,
    departmentName: ''
  }
  departments: Department[];

  constructor(private departmentService:DepartmentService) { }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>{
      console.log(response);
      this.departments=response;
    })

  }
  saveDepartment(data){
    this.departmentService.saveDepartment(data).subscribe(response=>{
    console.log(response);
     this.departments.push(response);
     this.department={
       departmentId:null,
       departmentName:null
     }
    })

  }

}
interface Department{
  departmentId: number;
  departmentName: string;
}
