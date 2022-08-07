import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabitVerilerMenuComponent } from './sabit-veriler-menu.component';

describe('SabitVerilerMenuComponent', () => {
  let component: SabitVerilerMenuComponent;
  let fixture: ComponentFixture<SabitVerilerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabitVerilerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabitVerilerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
