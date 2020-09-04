import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopBarComponent } from './movies-top-bar.component';

describe('MoviesTopBarComponent', () => {
  let component: MoviesTopBarComponent;
  let fixture: ComponentFixture<MoviesTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
