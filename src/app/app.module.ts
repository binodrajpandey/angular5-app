import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PostComponent,
    StudentComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
