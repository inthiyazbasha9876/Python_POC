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

  updateacdata(e,gen,id){
    return this.http.patch("http://localhost:3000/Ac-Classes/"+e,{
      "gender":gen,
      "selected":1,
      "Booked":true,
      "sid":id
    })
  }


  loginStudent(reqobj){
    return this.http.post("http://192.168.2.10:8000/admin/api/studentlogin/",reqobj)
  }

  loginAdmin(reqobj){
    return this.http.post("http://192.168.2.10:8000/admin/api/adminlogin/",reqobj)
  }

  getstudentByid(id){
    return this.http.get("http://192.168.2.10:8000/admin/api/studentregister/"+id)
  }

  getBranchlist(){
    return this.http.get("http://192.168.2.10:8000/admin/api/branch");
  }
  getStudentList(){
    return this.http.get("http://192.168.2.10:8000/admin/api/studentregister");
  }
}
