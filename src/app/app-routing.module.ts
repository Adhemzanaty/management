import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { GoalsComponent } from './goals/goals.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '' , redirectTo: '/login' , pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'nav' , component: NavbarComponent},
  {path: 'projects' , component: ProjectsComponent},
  {path: 'goals' , component: GoalsComponent},
  {path: 'tasks' , component: TasksComponent},
  {path: 'dash' , component: DashboardComponent},
  {path: '**' , component: LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
