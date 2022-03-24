import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinancialComponent } from './info-financial.component';

describe('InfoFinancialComponent', () => {
  let component: InfoFinancialComponent;
  let fixture: ComponentFixture<InfoFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
