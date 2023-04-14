import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarfiyatComponent } from './sarfiyat.component';

describe('SarfiyatComponent', () => {
  let component: SarfiyatComponent;
  let fixture: ComponentFixture<SarfiyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarfiyatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarfiyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
