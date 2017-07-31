import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppointmentService } from '../appointment.service'
import { Router } from '@angular/router'
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  user = {
    _id : ''
  }

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
      this.appointment._user = this.user._id
      // console.log(this.user, 'Logged in ');
      // console.log(this.appointment);
      // console.log(this.today.toISOString().split(10));
      
    }
    
  }
  logout(){
    this._userService.logout()
  }
  today = new Date()
  today_date = this.today.toISOString().split('T')[0]
  errors = []

  appointment = {
    _user : ''
  }

  time_min = '08:00:00'
  time_max = '17:00:00'


  addAppointment(appointment){
    console.log(appointment)
    appointment._user = this.user._id
    this._appointmentService.create(appointment)
    .then(appointment => {
      this.errors = []
      if (appointment.errors){
        for (let key in appointment.errors){
          let error = appointment.errors[key].message
          this.errors.push(error)
        }
      }
      else{
        this._router.navigateByUrl('/dashboard')
      }
    })
    .catch(err => console.log(err))
    
    
  
  }

  
}
