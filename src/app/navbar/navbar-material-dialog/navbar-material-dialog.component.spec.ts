import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMaterialDialogComponent } from './navbar-material-dialog.component';

describe('NavbarMaterialDialogComponent', () => {
  let component: NavbarMaterialDialogComponent;
  let fixture: ComponentFixture<NavbarMaterialDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMaterialDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
