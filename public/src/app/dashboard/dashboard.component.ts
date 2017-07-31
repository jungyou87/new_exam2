import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppointmentService } from '../appointment.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = {
    _id : ''
  }
  appointments = []

  constructor(
    private _userService: UserService,
    private _appointmentService : AppointmentService,
    private _router : Router
  ) { }
    

  ngOnInit() {
    this.user = this._userService.getCurrentUser()
    
    if (this.user == null){
      this._router.navigateByUrl('/login')
    }
    else{
      this._userService.setCurrentUser(this.user)
      this.getAppointments()
      console.log(this.user, 'Logged in ');
      console.log(this.user._id)
    }
    
  }
  logout(){
    this._userService.logout()
  }

  getAppointments (){
    this._appointmentService.index()
    .then(appointments => {
      this.appointments = appointments
    })
    .catch(err => console.log(err))
  }
  cancel(id, idx){
    
    return this._appointmentService.cancel(id)
    .then(data => {
      console.log(data)
      this.appointments.splice(idx, 1)
    })
    .catch(err => console.log(err))
    
  }
}
