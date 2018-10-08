import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	userName: string = "";
	lastUser: string = "";
	helloMsg: string = "";
	enableBtn: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  enableButton(event: any){
  	this.userName = event.target.value;
  	if(this.userName!=""){
  		this.enableBtn = true;
  	}else{
  		this.enableBtn = false;

  	}
  }
  onAddUserName(){
  	this.lastUser = this.userName;
  	this.helloMsg = "Hello user:"+this.userName+"!";
  	this.userName = "";
  	this.enableBtn = false;
  }

}
