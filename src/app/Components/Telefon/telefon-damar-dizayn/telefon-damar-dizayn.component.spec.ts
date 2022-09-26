import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonDamarDizaynComponent } from './telefon-damar-dizayn.component';

describe('TelefonDamarDizaynComponent', () => {
  let component: TelefonDamarDizaynComponent;
  let fixture: ComponentFixture<TelefonDamarDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonDamarDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonDamarDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
