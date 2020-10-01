import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getACData(){
    return this.http.get("http://localhost:3000/Ac-Classes")
  }

  getNonACData(){
    return this.http.get("http://localhost:3000/non-ac")
  }

  updateacdata(e,gen){
    return this.http.patch("http://localhost:3000/Ac-Classes/"+e,{
      "gender":gen,
      "selected":1,
      "Booked":true
    })
  }
}
