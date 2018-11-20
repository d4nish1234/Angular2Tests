import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-bootstrap.module'

@NgModule({
  declarations: [
    DynamicFormTestComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
