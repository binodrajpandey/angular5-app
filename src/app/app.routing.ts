import { Routes,RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { AboutComponent } from "./about/about.component";
import { DepartmentComponent } from "./department/department.component";
import { ModuleWithProviders } from "@angular/core";
import { StudentComponent } from "./student/student.component";
import { PostComponent } from "./post/post.component";

const appRoutes:Routes=[
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
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