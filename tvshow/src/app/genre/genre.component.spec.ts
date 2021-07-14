import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreComponent } from './genre.component';

describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`testing startIndex variable`, () => {
    expect(component.startIndex).toEqual(0);
  });

  it(`testing endIndex variable`, () => {
    expect(component.endIndex).toEqual(0);
  });

  it(`testing shows variable`, () => {
    expect(component.shows).toBeUndefined;
  });

  it(`testing genreName variable`, () => {
    expect(component.genreName).toEqual('');
  });

  it('testing prev function', () => {
    expect(component.prev()).toBe();
  });

  it('testing next function', () => {
    expect(component.next()).toBe();
  });
});
