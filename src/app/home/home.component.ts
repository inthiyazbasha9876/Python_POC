import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user
  head: string = 'Dashboard'
  studentName
  constructor(private service: ServiceService) {
    this.setValue()
  }

  ngOnInit(): void {
  }


  setValue() {
    let id = localStorage.getItem('id')
    this.user = localStorage.getItem('role')
    this.getstuddeta(id)
  }

  headingset(e) {
    this.head = e
  }

  getstuddeta(e) {
    let data
    this.service.getstudentByid(e).subscribe(res => {
      console.log("student detials", res);
      data = res
      this.studentName = data.first_name + " " + data.last_name
    })
  }
}
