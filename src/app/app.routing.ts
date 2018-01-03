import { Routes,RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department/department.component";
import { StudentComponent } from "./student/student.component";
import { PostComponent } from "./post/post.component";
import { AppComponent } from "./app.component";
import { ModuleWithProviders } from "@angular/core";
import { UserComponent } from "./user/user.component";


const appRoutes: Routes=[
{
    path: '',
    component: UserComponent
},
{
    path: 'department',
    component: DepartmentComponent
},
{
    path: 'student',
    component: StudentComponent
},
{
    path: 'post',
    component: PostComponent
}

];
 export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);