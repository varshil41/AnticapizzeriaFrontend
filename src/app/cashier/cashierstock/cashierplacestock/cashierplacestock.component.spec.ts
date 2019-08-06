import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierplacestockComponent } from './cashierplacestock.component';

describe('CashierplacestockComponent', () => {
  let component: CashierplacestockComponent;
  let fixture: ComponentFixture<CashierplacestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierplacestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierplacestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
