import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`testing searchResult variable`, () => {
    expect(component.searchResult).toEqual([]);
  });

  it('testing search function', () => {
    expect(component.search('')).toBe();
  });

  it('testing setShowDetails function', () => {
    expect(component.setShowDetails('')).toBe();
  });

  it('testing home function', () => {
    expect(component.home()).toBe();
  });
});
