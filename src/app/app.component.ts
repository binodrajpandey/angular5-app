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
 
  isLoggedIn: boolean=false;
   constructor(private appService:AppService){
   if( Cookie.check("access_token")){
     this.isLoggedIn=true;
   }
  }
  logOut(){
       this.appService.logout();
       location.reload();
  }
 
  
}


