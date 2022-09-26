import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanlamaComponent } from './planlama.component';

describe('PlanlamaComponent', () => {
  let component: PlanlamaComponent;
  let fixture: ComponentFixture<PlanlamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanlamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
