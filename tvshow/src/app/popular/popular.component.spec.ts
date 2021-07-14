import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PopularComponent } from './popular.component';

describe('PopularComponent', () => {
  let component: PopularComponent;
  let fixture: ComponentFixture<PopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`testing listOfShows variable`, () => {
    expect(component.listOfShows).toEqual([]);
  });

  it(`testing showBasedOnGenres variable`, () => {
    expect(component.showBasedOnGenres).toEqual({});
  });

  it(`testing genres variable`, () => {
    expect(component.genres).toEqual([]);
  });

  it('testing getAllShows function', () => {
    expect(component.getAllShows()).toBe();
  });

  it('testing getShowsOnGenres function', () => {
    expect(component.getShowsOnGenres()).toBe();
  });
});
