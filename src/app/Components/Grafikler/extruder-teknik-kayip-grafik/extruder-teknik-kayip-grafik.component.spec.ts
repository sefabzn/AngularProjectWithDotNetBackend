import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtruderTeknikKayipGrafikComponent } from './extruder-teknik-kayip-grafik.component';

describe('ExtruderTeknikKayipGrafikComponent', () => {
  let component: ExtruderTeknikKayipGrafikComponent;
  let fixture: ComponentFixture<ExtruderTeknikKayipGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtruderTeknikKayipGrafikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtruderTeknikKayipGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
