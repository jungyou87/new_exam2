import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (
    private _userService:UserService,
    private _router : Router
  ) {}

  user = {}
  errors = []

  login(user){
    console.log(user);
    return this._userService.login(user)
    .then(user => {
      this.errors = []
      if (user.errors){
        
        for (let key in user.errors){
          let error = user.errors[key].message
          this.errors.push(error)
        }
      }
      else{
        this._userService.setCurrentUser(user)
        this._router.navigateByUrl('/dashboard')
      }
    })
    .catch(err => console.log(err)
    )
  }

  ngOnInit() {

  }

}
