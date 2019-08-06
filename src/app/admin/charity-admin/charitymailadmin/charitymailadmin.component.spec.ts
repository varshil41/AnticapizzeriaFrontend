import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitymailadminComponent } from './charitymailadmin.component';

describe('CharitymailadminComponent', () => {
  let component: CharitymailadminComponent;
  let fixture: ComponentFixture<CharitymailadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitymailadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitymailadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
