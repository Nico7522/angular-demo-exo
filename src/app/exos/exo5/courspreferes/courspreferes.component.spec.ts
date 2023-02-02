import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourspreferesComponent } from './courspreferes.component';

describe('CourspreferesComponent', () => {
  let component: CourspreferesComponent;
  let fixture: ComponentFixture<CourspreferesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourspreferesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourspreferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
