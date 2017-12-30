import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  name:string;
  email:string;
  address:object;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
 constructor(private postService:PostService){
   this.name='Binod';
   this.email='binodrajpandey@ioe.edu.np';
   this.address={
     district: 'Nuwakot',
     country: 'Nepal'
   };
   this.hobbies=['chess','football','cricket','programming'];
   this.showHobbies=false;
   this.postService.getPosts().subscribe(posts=>{
     console.log(posts);
     this.posts=posts;
   });
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
interface Post{
id: number;
title:string;
body:string;

 }
