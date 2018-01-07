import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private router: Router,private http: Http) { }

  getAccessToken(username,password){

    let params=new URLSearchParams();
    params.append('username',username);
    params.append('password',password);
    params.append('grant_type','password');


    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+btoa("my-trusted-client:secret")});
    let options=new RequestOptions({headers: headers});
    console.log(params.toString());
    return this.http.post('http://localhost:8086/oauth/token',params.toString(),options)
    .map(response=>

     {
        this.saveToken(response.json());
           return response.json()
          });

}
saveToken(token){
    var expireDate=new Date().getTime()+token.expires_in;
  Cookie.set("access_token",token.access_token,expireDate);
  console.log('token saved to cookies'+Cookie.get('access_token'));
  this.router.navigate(['/']);

}
checkCredential(){
  if(!Cookie.check('access_token')){
    this.router.navigate(['/']);
    
  }
}
logout(){
   Cookie.delete('access_token');
  this.router.navigate(['/']);
}

}
