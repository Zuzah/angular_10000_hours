import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-to-p-childB',
  templateUrl: './c-to-p-childB.component.html',
  styleUrls: ['./c-to-p-childB.component.scss']
})
export class CtoPChildBComponent implements OnInit {

  messageData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
