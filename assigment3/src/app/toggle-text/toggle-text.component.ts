import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-text',
  templateUrl: './toggle-text.component.html',
  styleUrls: ['./toggle-text.component.css']
})
export class ToggleTextComponent implements OnInit {
  constructor() {
   }

  ngOnInit() {
  }

  password:string = 'tuna';
  toggle:boolean = false;
  clicksTime = [];
  niro:boolean  = false;

  addDetails(){
    this.niro = !this.niro;
  	this.toggle = this.toggle ? false : true ;
    this.clicksTime.push(new Date());
  }

  bgColor(element){
  	if(element>4){
  		return 'blue';
  	}else{
  		return 'transparent';
  	}
  }
  niroTestEvent(){
    console.log("clicked");
   // console.log(var);
  }
  hi(){
    return this.niro;
  }
}
