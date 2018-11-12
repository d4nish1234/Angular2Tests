import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HtmlSourceReaderComponent } from '../html-source-reader/html-source-reader.component';

@Component({
  providers:[HtmlSourceReaderComponent],
  selector: 'app-movie-site-reader',
  templateUrl: './movie-site-reader.component.html',
  styleUrls: ['./movie-site-reader.component.css']
})
export class MovieSiteReaderComponent implements OnInit {
  movieFromURLForm = this.formBuilder.group({
    URL: ['']
  })
  constructor(public formBuilder: FormBuilder, public htmlSourceReader: HtmlSourceReaderComponent) { }

  ngOnInit() {
  }
  private findMovie()
  {
    const URL = this.movieFromURLForm.getRawValue().URL
    console.log(URL);
    this.htmlSourceReader.testCall();
  }
}
