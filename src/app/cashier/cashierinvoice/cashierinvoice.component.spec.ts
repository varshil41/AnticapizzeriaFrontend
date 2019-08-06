import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierinvoiceComponent } from './cashierinvoice.component';

describe('CashierinvoiceComponent', () => {
  let component: CashierinvoiceComponent;
  let fixture: ComponentFixture<CashierinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
