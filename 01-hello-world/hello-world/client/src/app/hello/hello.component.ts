import { Component, OnInit } from '@angular/core';

@Component({
  /*
    Selector can be specified in 3 ways:
        1. As a custom html tag via single quote. i.e selector: 'hello-world' --> Used as <hello-world></hello-world>
        2. As an HTML Classs  via '.'             i.e selector: '.hello-world' --> Used as <p class='hello-world'></p>
        3. As an HTML attribute via square bracket & using 'template' with html code instead of 'templateUrl' i.e selector: '[app-test]' template = '<div>'
  */
  selector: 'hello-world',
  templateUrl: './hello.component.html',
  //template: '<div>Some </div>'
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
