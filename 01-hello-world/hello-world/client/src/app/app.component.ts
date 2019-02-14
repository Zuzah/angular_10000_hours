import { Component } from '@angular/core';

//@Component is a decorator which is attached to the class 'AppComponent' below
//This decorator tells Angular that tells angular that this is not just a plain class, but a Component

@Component({
  selector: 'app-root', //Selector is a custom html tag which Angular renders
  templateUrl: './app.component.html', //Template is the 'View' that angular renders when seeing the custom tag
  styleUrls: ['./app.component.css'] //Is the styling of the tempalte view that Angular renders
})
export class AppComponent {
  title = 'hello-world';
}
