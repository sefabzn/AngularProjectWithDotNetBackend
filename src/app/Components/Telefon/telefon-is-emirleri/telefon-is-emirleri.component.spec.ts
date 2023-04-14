import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonIsEmirleriComponent } from './telefon-is-emirleri.component';

describe('TelefonIsEmirleriComponent', () => {
  let component: TelefonIsEmirleriComponent;
  let fixture: ComponentFixture<TelefonIsEmirleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonIsEmirleriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonIsEmirleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
