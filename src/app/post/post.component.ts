import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[];
  constructor(private postService:PostService) {
    this.postService.getPosts().subscribe(posts=>{
      console.log(posts);
      this.posts=posts;
    });
   }

  

}
interface Post{
  id: number;
  title:string;
  body:string;
  
   }
