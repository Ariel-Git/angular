import { 
  Component,
  OnInit, 
  Input, 
  ViewEncapsulation, 
  ngOnChanges,
  SipleChanges
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated /*Native - like emulated but not supported by all browsers, None don't emulate*/

})
export class ServerElementComponent implements OnInit, ngOnChanges {
	//@Input() element: {type:string, name:string, content:string};
	@Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name:string;
  constructor() { 
  	console.log("constractor called!");

  }
  ngOnChanges(changes:SipleChanges){
  	console.log("ngOnchanges Called!");
    console.log(changes);

  }

  ngOnInit() {
  	console.log("ngOnInit called!");
  	
  }

}
