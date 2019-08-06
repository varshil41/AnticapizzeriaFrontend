
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu1Component } from './menu1.component';

describe('Menu1Component', () => {
  let component: Menu1Component;
  let fixture: ComponentFixture<Menu1Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [Menu1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
