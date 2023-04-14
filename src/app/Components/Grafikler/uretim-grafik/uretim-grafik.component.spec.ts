import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UretimGrafikComponent } from './uretim-grafik.component';

describe('UretimGrafikComponent', () => {
  let component: UretimGrafikComponent;
  let fixture: ComponentFixture<UretimGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UretimGrafikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UretimGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
