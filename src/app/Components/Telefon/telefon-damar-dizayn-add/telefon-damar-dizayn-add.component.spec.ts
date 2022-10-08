import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonDamarDizaynAddComponent } from './telefon-damar-dizayn-add.component';

describe('TelefonDamarDizaynAddComponent', () => {
  let component: TelefonDamarDizaynAddComponent;
  let fixture: ComponentFixture<TelefonDamarDizaynAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonDamarDizaynAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonDamarDizaynAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
