import { Component } from '@angular/core';
import { PostService } from './post.service';
import { AppService } from './app.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  showForm:boolean=false;
  isLoggedIn: boolean=false;
  username: string='';
  password: string=''
  constructor(private appService:AppService){
   if( Cookie.check("access_token")){
     this.isLoggedIn=true;
   }
  }
  logOut(){
       this.appService.logout();
       location.reload();
  }
  login(username,password){
    
this.appService.getAccessToken(username,password).subscribe(res=>{
  location.reload();
})
  }
  showLoginForm(){
    this.showForm=true;
  }
}


