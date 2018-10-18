import { 
  Component,
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated /*Native - like emulated but not supported by all browsers, None don't emulate*/
})
export class ServerElementComponent implements OnInit,
 OnChanges,
 DoCheck, 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
	//@Input() element: {type:string, name:string, content:string};
	@Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name:string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { //1
  	console.log("constractor called!");

  }
  ngOnChanges(changes:SimpleChanges){ //2 on any time changes have been made (not for primitive varibles) 
  	console.log("ngOnchanges Called!");
    console.log(changes);

  }

  ngOnInit() { //3 every time angular called
  	console.log("ngOnInit called!");
    console.log("Text content of paragraph:" + this.paragraph.nativeElement.textContent);

  }
   ngDoCheck(){ //4 called on any change/action (every time angular checks what to do with na action) 
     console.log('ngDocheck called!');
   }
   ngAfterContentInit(){ //5 after the componet content is embeded in app 
     console.log("ngAfterContentInit called!");
    console.log("Text content of paragraph:" + this.paragraph.nativeElement.textContent);

   }
   ngAfterContentChecked(){ //6 after any content change changed detaction
     console.log("ngAfterContentChecked called!");

   }
   ngAfterViewInit(){ //7 after the componet content is viewable 
     console.log("ngAfterViewInit called!");
    console.log("header content: "+this.header.nativeElement.textContent);
     
   }
   ngAfterViewChecked(){ //8 after the componet content is viewable and checked
     console.log("ngAfterViewChecked called!");
   }
   ngOnDestroy(){ //9 after! the component destroyed
     console.log("ngOnDestroy called!");
   }
}
