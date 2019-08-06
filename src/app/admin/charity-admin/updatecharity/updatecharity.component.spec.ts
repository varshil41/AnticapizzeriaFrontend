import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecharityComponent } from './updatecharity.component';

describe('UpdatecharityComponent', () => {
  let component: UpdatecharityComponent;
  let fixture: ComponentFixture<UpdatecharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
