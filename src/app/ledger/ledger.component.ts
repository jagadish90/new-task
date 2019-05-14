import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger:any;

  constructor(private ts:TaskService) { }

  ngOnInit() {
 var id = localStorage.getItem("CLIENT_ID")
this.ts.getledger(id).subscribe(data=>{
this.ledger = data[0];
console.log(this.ledger)
})
  }

}
