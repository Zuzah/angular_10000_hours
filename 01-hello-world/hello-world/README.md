


# "Hello World" Notes

## Background
- Angular is an opinionated framework (with exception of state management) for building client applications in HTML and TypeScripts
- Written in typescript
- Angular 2.0 was release Sept 2016 using the custom component design and Unidirectional Binding (Only Parent could update child)
- Angular 1.0 (orig by Misko Hevery) which was re-branded as AngularJS and used Bidirectional Binding (Child could update Parent)
- Every 6 months a new version is released. As of righting, Angular8 is to be released

## Angular Features

- Router/HTTP Libraries/ Forms / rxjs (for async data)
- One-Way Binding / Unidirectional Data Flow used for change detection (previously was Two-Way Binding from original AngularJS)
- Dependancy Injection: object creation taken away from the component that uses the object. Angular components consume services
  via the @Injectable() decorator
- Uniformity of look when making an Angular App
- Suports Server Side Rendering (for when you want SEO or performance improvement)
- ngUgrade for file-by-file upgrading

## Angular Components

- *@Component()* decorator identifies the class immediately below
- Components defines the *views* seen on screen; and uses *services* to provide functionalities (which are injected)
- every component consists of 4 files: a components.css ('The Style'), component.html ('The View'), component.ts ('The Class') and component.spec.ts ('The test')
- Angular Component = Template (HTML) + Class (typescript, Data & Model) + Metadata (decorators)

![][ng-architecture]

- When defining components, the 'selector' defines your custom html tag; templateURL defines what View is rendered with the
custom tag; and styleUrls defines the style of the rendered page
- a selector does not necessary have to be a custom tag. It can also be a custom class or custom attribute
i.e
**selector**: 'hello-world' //custom tag
    **selector**: '.hello-world' //custom html class: div class="hello-world"
    **selector**: [hello-world] //custom html attribute:  div hello-world
```typescript

import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'hello-world',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
  //template: '<div>Some </div>'      //alternative to templateUrl
  //styles: ['./hello.component.css'] //alternative to styleUrls
})

```


# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9 developed in Angular 6

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





[ng-architecture]: https://angular.io/generated/images/guide/architecture/overview2.png
