import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  user
  studentdata
  studentName
  sid
  acData: any
  NonAcData: any
  seatseleted: any = []
  constructor(private service: ServiceService) {

  }


  ngOnInit(): void {
    this.getacdata();
    this.getnonacdata()

    this.getrole()
  }

  getrole() {
     this.sid = localStorage.getItem('id')
    console.log(this.sid);
    
    this.user = localStorage.getItem('role')
    if(this.user=='student'){
      this.getstudentbyid(this.sid)

    }
   
  }

  getstudentbyid(e){
    console.log(e);
    let data
    this.service.getstudentByid(e).subscribe(res=>{
          console.log("student detials",res); 
          data=res
          this.studentdata=data
          this.studentName=data.first_name +" "+ data.last_name
    })
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
    for (let i of this.seatseleted) {
      this.service.updateacdata(i.id,this.studentdata.gender,this.sid).subscribe(res => {
        console.log(res);
        this.getacdata()
      })
    }

  }

}
