import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class AppointmentService {

  constructor(private _http: Http) { }

  index (){
    return this._http.get('/appointments/index').map(data => data.json()).toPromise()
  }

  create (appointment) {
    return this._http.post('/appointments/create', appointment).map(data => data.json()).toPromise()
  }
  
  

  cancel(id){
    return this._http.delete(`/appointments/delete/${id}`).map(data => data.json()).toPromise()
  }
}
