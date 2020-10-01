import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  navbar:string="Admin DashBoard"
  ngOnInit(): void {
  }

  setvalue(e){
    this.navbar=e
  }
}
