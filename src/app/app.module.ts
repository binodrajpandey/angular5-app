import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { StudentComponent } from './student/student.component';
import { PostComponent } from './post/post.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentComponent,
    PostComponent,
    DepartmentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
