import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-to-c-child',
  templateUrl: './p-to-c-child.component.html',
  styleUrls: ['./p-to-c-child.component.scss']
})
export class PtoCChildComponent implements OnInit {

  // The @Input() indicates the data will be supplied by a Parent component
  @Input() messageData: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
