import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonSecmeComponent } from './telefon-secme.component';

describe('TelefonSecmeComponent', () => {
  let component: TelefonSecmeComponent;
  let fixture: ComponentFixture<TelefonSecmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonSecmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonSecmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
