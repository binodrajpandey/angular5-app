import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  constructor(){
    this.username='Binod';
    this.email='binodrajpandey@ioe.edu.np';
    this.address={
      country: 'Nepal',
      district: 'Nuwakot'
    },
    this.hobbies=['chess','football','cricket'];
    this.showHobbies=false;
  }
  showHobby(){
    this.showHobbies=true;
  }
}
interface Address{
country: string;
district: string;

}
