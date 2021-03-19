import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-to-p-child',
  templateUrl: './c-to-p-child.component.html',
  styleUrls: ['./c-to-p-child.component.scss']
})
export class CtoPChildComponent implements OnInit {

  // TODO: make an Event Emitter to send outwards

  @Output() messageToParentEvent = new EventEmitter<string>();

  messageData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMessageChange(message: string) {
    
    this.messageToParentEvent.emit(message);
  }

}
