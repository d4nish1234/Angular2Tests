import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSourceReaderComponent } from './html-source-reader.component';

describe('HtmlSourceReaderComponent', () => {
  let component: HtmlSourceReaderComponent;
  let fixture: ComponentFixture<HtmlSourceReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlSourceReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSourceReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
