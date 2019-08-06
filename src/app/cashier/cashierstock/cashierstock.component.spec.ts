import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierstockComponent } from './cashierstock.component';

describe('CashierstockComponent', () => {
  let component: CashierstockComponent;
  let fixture: ComponentFixture<CashierstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
