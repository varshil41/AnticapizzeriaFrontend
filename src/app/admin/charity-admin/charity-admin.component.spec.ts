import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityAdminComponent } from './charity-admin.component';

describe('CharityAdminComponent', () => {
  let component: CharityAdminComponent;
  let fixture: ComponentFixture<CharityAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
