import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacestockComponent } from './placestock.component';

describe('PlacestockComponent', () => {
  let component: PlacestockComponent;
  let fixture: ComponentFixture<PlacestockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacestockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
