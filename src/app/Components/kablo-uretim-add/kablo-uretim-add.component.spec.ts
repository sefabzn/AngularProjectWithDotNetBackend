import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabloUretimAddComponent } from './kablo-uretim-add.component';

describe('KabloUretimAddComponent', () => {
  let component: KabloUretimAddComponent;
  let fixture: ComponentFixture<KabloUretimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabloUretimAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabloUretimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
