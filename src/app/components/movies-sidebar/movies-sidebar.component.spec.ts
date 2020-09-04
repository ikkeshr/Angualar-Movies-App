import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSidebarComponent } from './movies-sidebar.component';

describe('MoviesSidebarComponent', () => {
  let component: MoviesSidebarComponent;
  let fixture: ComponentFixture<MoviesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
