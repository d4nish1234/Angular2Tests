import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HtmlSourceReaderComponent } from './html-source-reader/html-source-reader.component';
import { MovieSiteReaderComponent } from './movie-site-reader/movie-site-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormTestComponent,
    AppComponent,
    HtmlSourceReaderComponent,
    MovieSiteReaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
