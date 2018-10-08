import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated /*Native - like emulated but not supported by all browsers, None don't emulate*/

})
export class ServerElementComponent implements OnInit {
	//@Input() element: {type:string, name:string, content:string};
	@Input('srvElement') element: {type:string, name:string, content:string};
  constructor() { }

  ngOnInit() {
  }

}
