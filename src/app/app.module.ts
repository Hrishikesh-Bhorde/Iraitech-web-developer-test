import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Que4Component } from './que4/que4.component';

import { FormsModule } from '@angular/forms';
import { C1Component } from './que4/c1/c1.component';
import { C2Component } from './que4/c2/c2.component';
import { C3Component } from './que4/c3/c3.component';
import { C4Component } from './que4/c4/c4.component';
import { Que3Component } from './que3/que3.component';
import { Que1Component } from './que1/que1.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Que4Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    Que3Component,
    Que1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
