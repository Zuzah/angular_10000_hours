import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-to-c-parent',
  templateUrl: './p-to-c-parent.component.html',
  styleUrls: ['./p-to-c-parent.component.scss']
})
export class PtoCParerntComponent implements OnInit {
  
  public messageToChild = '';
  
  // The Parent Class has to handle the value provided by its children

  messageEventHandler($event: any) {
    this.messageToChild = $event; // we get the $event object pulled from the child html template
  }

  constructor() { }

  ngOnInit(): void {
  }

}
