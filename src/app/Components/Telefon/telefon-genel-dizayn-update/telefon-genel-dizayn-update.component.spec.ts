import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonGenelDizaynUpdateComponent } from './telefon-genel-dizayn-update.component';

describe('TelefonGenelDizaynUpdateComponent', () => {
  let component: TelefonGenelDizaynUpdateComponent;
  let fixture: ComponentFixture<TelefonGenelDizaynUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonGenelDizaynUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonGenelDizaynUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
