import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-source-reader',
  templateUrl: './html-source-reader.component.html',
  styleUrls: ['./html-source-reader.component.css']
})
export class HtmlSourceReaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public testCall(){
    alert("I am here..");
  }

}
