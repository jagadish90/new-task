import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {Router} from '@angular/router'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
b:any[]=[]
otp:any;
mobile:any;
email:any;
clientid:any;
  display: boolean;

  constructor(private ts:TaskService,private acr:ActivatedRoute,private rt:Router) { 
     let i= localStorage.getItem('CLIENT_ID')
  
   this.ts.getProfile(i).subscribe((data)=>{
    
    this.b=data[0];
    console.log(this.b)
 })
}
  
btnEditClick(id){
this.display = true;
}
  
  btnclk(regfrm){
    // console.log(JSON.stringify(this.b))
    // this.ts.update(this.b).subscribe((data)=>{
    //   console.log(data)
    // })
    
    console.log(regfrm.value);
    this.otp = Math.floor(1000 + Math.random()* 9000);
    this.mobile = parseInt(regfrm.value["mobile_no"])
    this.email = regfrm.value["client_email"]
    this.clientid=localStorage.getItem("CLIENT_ID")

    console.log(this.otp,this.clientid);
    this.ts.postotp(this.clientid,this.otp).subscribe(data=>{

    })


  }
logout(){
  localStorage.removeItem("CLIENT_ID")
  this.rt.navigate(['/login'])
}
  ngOnInit() {
    // let i= localStorage.getItem('CLIENT_ID')
    // this.ts.getAllProfiles(i).subscribe((data) => {
    //   console.log(data)
    //   this.b = data[0]
    // })
  }

}
