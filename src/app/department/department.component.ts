import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent  {
  departments: Department[];

  constructor(private departmentService:DepartmentService) { }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>{
      console.log(response);
      this.departments=response;
    })

  }

}
interface Department{
  departmentId: number;
  departmentName: string;
}
