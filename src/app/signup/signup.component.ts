import { Component, OnInit } from '@angular/core';
import {signup} from '../model/signup';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
pav:signup;
  constructor(private ts:TaskService,private rt:Router) {

    this.pav=new signup()
   }

       
  btnclk(regfrm){
    console.log(this.pav)
   
    if(regfrm.valid){
      
      this.ts.registermember(this.pav).subscribe((data) => {
        console.log(data); 
       alert(JSON.stringify(data))
    console.log("Registration Completed")
      this.rt.navigate(['']);
      location.reload();
    })}
  
  else{
    alert('Not inserted');
  }
    }

  ngOnInit() {
  }

}
