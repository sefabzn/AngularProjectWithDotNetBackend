import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarfiyatGrafikComponent } from './sarfiyat-grafik.component';

describe('SarfiyatGrafikComponent', () => {
  let component: SarfiyatGrafikComponent;
  let fixture: ComponentFixture<SarfiyatGrafikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarfiyatGrafikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarfiyatGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
