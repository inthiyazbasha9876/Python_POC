import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  person: string = "Student"
  constructor(private service: ServiceService,private router:Router) { }

  username: any
  password: any
  studentdata:any
  ngOnInit(): void {
  }

  personselect(e) {
    this.person = e
  }

  login() {
    let reqobj
    let data
    if (this.person == "Student") {
      reqobj = {
        "password": this.password,
        "role": "student",
        "email": this.username

      }
      this.service.loginStudent(reqobj).subscribe(res => {
        console.log(res);
        data=res
        this.studentdata=data.data
        localStorage.setItem('id',this.studentdata[0].user_id)
        localStorage.setItem('role','student')
        this.router.navigate(['/home'])
      })
    }
    else {

      reqobj = {
        "name": this.username,
        "role": "admin",
        "password": this.password
      }
      this.service. loginAdmin(reqobj).subscribe(res => {
        console.log(res);
        data=res
        localStorage.setItem('id',data[0].branch_id)
        localStorage.setItem('role','admin')
        this.router.navigate(['/home'])
      })
    }
  }
}
