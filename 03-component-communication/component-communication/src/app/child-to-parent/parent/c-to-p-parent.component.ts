import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CToPChildCComponent } from './childC/c-to-p-childC.component';

@Component({
  selector: 'app-c-to-p-parent',
  templateUrl: './c-to-p-parent.component.html',
  styleUrls: ['./c-to-p-parent.component.scss']
})
export class CtoPParerntComponent implements OnInit, AfterViewInit {
 
  @ViewChild("CToPChildCComponent", { read: CToPChildCComponent, static: true}) childC: CToPChildCComponent;

  public messageFromChild = '';
    
  // The Parent Class has to handle the value provided by its children

  messageEventHandler($event: any) {
    this.messageFromChild = $event; // we get the $event object pulled from the child html template
  }

  constructor() { }

  // ViewChild would appear OnInit if static set to true
  ngOnInit(): void {
    console.log("ChildC has value of" + this.childC);
   
  }

  ngAfterViewInit() {
    //console.log("ChildC has value of" + this.childC.childCdata);
  }

}
