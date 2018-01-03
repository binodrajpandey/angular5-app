import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  name:string;
  email:string;
  address:object;
  hobbies: string[];
  showHobbies: boolean;
  constructor(){
   this.name='Binod';
   this.email='binodrajpandey@ioe.edu.np';
   this.address={
     district: 'Nuwakot',
     country: 'Nepal'
   };
   this.hobbies=['chess','football','cricket','programming'];
   this.showHobbies=false;
  
 }
 toggleHobby(){
   if(this.showHobbies==true){
this.showHobbies=false;
   }
   else{
    this.showHobbies=true;
   }
   
 }
 addHobby(hobby){
this.hobbies.push(hobby);
 }
 deleteHobby(index){
   this.hobbies.splice(index,1); 
 }

}
