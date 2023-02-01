import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilbambiComponent } from './spoilbambi.component';

describe('SpoilbambiComponent', () => {
  let component: SpoilbambiComponent;
  let fixture: ComponentFixture<SpoilbambiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoilbambiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpoilbambiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
