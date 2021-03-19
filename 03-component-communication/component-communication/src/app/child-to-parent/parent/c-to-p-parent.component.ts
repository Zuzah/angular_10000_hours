import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-to-p-parent',
  templateUrl: './c-to-p-parent.component.html',
  styleUrls: ['./c-to-p-parent.component.scss']
})
export class CtoPParerntComponent implements OnInit {
  
  public messageFromChild = '';
  
  // The Parent Class has to handle the value provided by its children

  messageEventHandler($event: any) {
    this.messageFromChild = $event; // we get the $event object pulled from the child html template
  }

  constructor() { }

  ngOnInit(): void {
  }

}
