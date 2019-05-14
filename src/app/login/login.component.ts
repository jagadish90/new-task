import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 CLIENT_ID:string="";
 PAN_NO:string="";
  constructor(private ts:TaskService,private rt:Router) { }
  btnLoginClick(c,p){
    console.log(c,p)
    this.ts.CheckLogin(c,p).subscribe((data)=>{
      if(data.length>0){
        localStorage.setItem("CLIENT_ID",c)
        this.rt.navigate(['profile'])
      }
      else{
        alert('INvalid user')
      }
    })
  }

  ngOnInit() {
  }

}
