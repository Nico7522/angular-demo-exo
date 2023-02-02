import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooklistComponent } from './blooklist.component';

describe('BlooklistComponent', () => {
  let component: BlooklistComponent;
  let fixture: ComponentFixture<BlooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
