import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharityComponent } from './addcharity.component';

describe('AddcharityComponent', () => {
  let component: AddcharityComponent;
  let fixture: ComponentFixture<AddcharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
