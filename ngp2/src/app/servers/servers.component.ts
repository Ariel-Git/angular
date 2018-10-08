import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  //serverCreationStatus : string = " no server has been created";
  serverCreationStatus: boolean = false;
  serverName ='testServer';
  servers = ["server1","server2"];
  constructor() {
  	setTimeout(()=>{
  		this.allowNewServer = true;
  	},2000);
   }
   onServerCreation(){
   this.servers.push(this.serverName);

     this.serverCreationStatus = true;
   	//this.serverCreationStatus = "server has been created - server name is:"+this.serverName;
   }
   onUpdateServerName(event: any){
   	this.serverName = (<HTMLInputElement>event.target).value ;
   	console.log(event);
   }
  ngOnInit() {
  }
}
