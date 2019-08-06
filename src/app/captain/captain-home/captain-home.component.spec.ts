import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainHomeComponent } from './captain-home.component';

describe('CaptainHomeComponent', () => {
  let component: CaptainHomeComponent;
  let fixture: ComponentFixture<CaptainHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
