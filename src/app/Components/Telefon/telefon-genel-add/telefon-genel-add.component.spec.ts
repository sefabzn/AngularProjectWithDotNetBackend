import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonGenelAddComponent } from './telefon-genel-add.component';

describe('TelefonGenelAddComponent', () => {
  let component: TelefonGenelAddComponent;
  let fixture: ComponentFixture<TelefonGenelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonGenelAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonGenelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
