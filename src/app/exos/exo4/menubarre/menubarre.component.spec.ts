import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarreComponent } from './menubarre.component';

describe('MenubarreComponent', () => {
  let component: MenubarreComponent;
  let fixture: ComponentFixture<MenubarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
