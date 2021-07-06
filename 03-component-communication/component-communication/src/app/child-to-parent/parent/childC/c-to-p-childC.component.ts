import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-to-p-childC',
  templateUrl: './c-to-p-childC.component.html',
  styleUrls: ['./c-to-p-childC.component.scss']
})
export class CToPChildCComponent implements OnInit {

  public childCdata: string = "";

  constructor() { }

  ngOnInit(): void {
    this.childCdata = "ChildC";
  }

}
