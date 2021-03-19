import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PtoCParerntComponent  } from './parent-to-child/parent/p-to-c-parent.component';
import { PtoCChildComponent } from './parent-to-child/child/p-to-c-child.component';

import { CtoPChildComponent } from './child-to-parent/parent/child/c-to-p-child.component';
import { CtoPParerntComponent } from './child-to-parent/parent/c-to-p-parent.component';

import { SiblingToSiblingComponent } from './sibling-to-sibling/sibling-to-sibling.component';
import { UrlCommunicationComponent } from './url-communication/url-communication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    // Pair for Parent-to-Child Communication
    PtoCParerntComponent,
    PtoCChildComponent,

    // Pair for Child-to-Parent Communication
    CtoPChildComponent,
    CtoPParerntComponent,

    SiblingToSiblingComponent,
    UrlCommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
