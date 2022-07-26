import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvIsEmirleriComponent } from './cctv-is-emirleri.component';

describe('CctvIsEmirleriComponent', () => {
  let component: CctvIsEmirleriComponent;
  let fixture: ComponentFixture<CctvIsEmirleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvIsEmirleriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvIsEmirleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
