import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-to-c-child',
  templateUrl: './p-to-c-child.component.html',
  styleUrls: ['./p-to-c-child.component.scss']
})
export class PtoCChildComponent implements OnInit {

  // TODO: make an Event Emitter to send outwards


  messageData: string = '';

  constructor() { }

  ngOnInit(): void {
  }



}
