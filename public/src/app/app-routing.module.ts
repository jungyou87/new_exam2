import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';


const routes: Routes = [
  {
    path :'', pathMatch : 'full' , redirectTo : '/login'
  },
  {
    path :'login' , component: LoginComponent
  },
  {
    path :'dashboard' , component: DashboardComponent
  },
  {
    path :'appointments/new' , component: NewAppointmentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
