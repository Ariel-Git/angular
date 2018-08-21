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
  toggle: boolean = false;
  clicks = [];
  i = 1;
  addDetails(){
  	this.toggle = this.toggle ? false : true ;
  	this.clicks.push(this.i);
    this.i++;

  }

  bgColor(element){
  	if(element>4){
  		return 'blue';
  	}else{
  		return 'transparent';
  	}
  }
}
