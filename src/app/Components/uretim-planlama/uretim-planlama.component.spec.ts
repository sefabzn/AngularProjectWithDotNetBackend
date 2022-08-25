import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UretimPlanlamaComponent } from './uretim-planlama.component';

describe('UretimPlanlamaComponent', () => {
  let component: UretimPlanlamaComponent;
  let fixture: ComponentFixture<UretimPlanlamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UretimPlanlamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UretimPlanlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
