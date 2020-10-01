import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {
  acData: any
  NonAcData: any
  seatseleted: any = []

  constructor(private service: ServiceService) {
    this.getacdata();
    this.getnonacdata()
  }


  ngOnInit(): void {
  }

  getacdata() {
    this.service.getACData().subscribe(res => {
      console.log(res)
      this.acData = res
    })
  }

  getnonacdata() {
    this.service.getNonACData().subscribe(res => {
      console.log(res)
      this.NonAcData = res
    })
  }

  select(e) {
    console.log(e)
    if(this.seatseleted.length !=0){
      let find=this.seatseleted.filter(a=>a.id==this.acData[e].id)
      if(find.length!=0){
        let index=this.seatseleted.indexOf(find)
        this.seatseleted.splice(index,1)
        this.acData[e].selected=0
      }else{
        this.acData[e].selected=1
        this.seatseleted.push(this.acData[e])
      }
      
    }else{
      this.acData[e].selected=1
      this.seatseleted.push(this.acData[e])
    }
    console.log(this.seatseleted);
    
  }

  bookseat() {
    console.log(this.seatseleted);
    let gender = null
    for (let i of this.seatseleted) {
      if (i.id % 2 == 0) {
        gender = "male";
      } else {
        gender = "female";
      }
      this.service.updateacdata(i.id, gender).subscribe(res => {
        console.log(res);
        this.getacdata()
      })
    }

  }

}
