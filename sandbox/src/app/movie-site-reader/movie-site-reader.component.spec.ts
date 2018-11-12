import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSiteReaderComponent } from './movie-site-reader.component';

describe('MovieSiteReaderComponent', () => {
  let component: MovieSiteReaderComponent;
  let fixture: ComponentFixture<MovieSiteReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSiteReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSiteReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
