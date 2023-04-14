import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonGenelDizaynComponent } from './telefon-genel-dizayn.component';

describe('TelefonGenelDizaynComponent', () => {
  let component: TelefonGenelDizaynComponent;
  let fixture: ComponentFixture<TelefonGenelDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonGenelDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonGenelDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
