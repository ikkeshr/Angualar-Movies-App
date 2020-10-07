import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePicturesComponent } from './movie-pictures.component';

describe('MoviePicturesComponent', () => {
  let component: MoviePicturesComponent;
  let fixture: ComponentFixture<MoviePicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
