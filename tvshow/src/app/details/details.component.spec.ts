import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [DetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`testing showDetails variable`, () => {
    expect(component.showDetails).toBeUndefined();
  });

  it(`testing showId variable`, () => {
    expect(component.showId).toEqual('1');
  });

  it('testing getShowDetails function', () => {
    expect(component.getShowDetails(1)).toBe();
  });

  it('testing back function', () => {
    expect(component.back()).toBe();
  });

  it('testing home function', () => {
    expect(component.home()).toBe();
  });
});
