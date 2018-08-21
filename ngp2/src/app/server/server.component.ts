import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  getServerStatus(){
  	return this.serverStatus;
  }
  updateServerStatus(){
    this.serverStatus = Math.random()>0.5 ? 'online' : 'offline' ;
  }
  getColor(){
    var color = this.serverStatus === 'online' ? 'green' : 'red';
   // console.log("color is"+color);
     
    return color;
    
  }
  constructor() {
    this.updateServerStatus();
   }

  ngOnInit() {
  }

}
