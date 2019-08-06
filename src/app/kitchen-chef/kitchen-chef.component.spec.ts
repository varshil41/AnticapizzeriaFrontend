import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenChefComponent } from './kitchen-chef.component';

describe('KitchenChefComponent', () => {
  let component: KitchenChefComponent;
  let fixture: ComponentFixture<KitchenChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
