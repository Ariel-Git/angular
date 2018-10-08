import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = ''; 
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string }>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameinput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameinput.value, // from local refrence
      serverContent : this.serverContentInput.nativeElement.value
    });
  } 

  onAddBlueprint(serverNameinput:HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: serverNameinput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

}
