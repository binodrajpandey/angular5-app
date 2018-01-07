import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService,AppService]
})
export class DepartmentComponent  {
  successMessage: string="";
  department:Department={
    departmentId:null,
    departmentName:""
  }
  departments: Department[];

  constructor(private departmentService:DepartmentService,private appService:AppService) {
    this.appService.checkCredential();//
   }

  getDepartments(){
    this.departmentService.getDepartments().subscribe(response=>{
      console.log(response);
      this.departments=response;
    })

  }

  saveDepartment(data){
  this.departmentService.saveDepartment(data)
  .subscribe(res=>{
     this.department={
    departmentId:null,
    departmentName: ""
  }
  this.getDepartments();
//location.reload();
}
);
  }
  editForm(department){
    this.department=department;
  }
  deleteDepartment(departmentId){
this.departmentService.deleteDepartment(departmentId).subscribe(res=>{
  this.getDepartments();
 this.successMessage=res;
})
  }

}
interface Department{
  departmentId: number;
  departmentName: string;
}
