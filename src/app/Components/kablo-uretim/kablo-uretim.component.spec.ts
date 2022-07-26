import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabloUretimComponent } from './kablo-uretim.component';

describe('KabloUretimComponent', () => {
  let component: KabloUretimComponent;
  let fixture: ComponentFixture<KabloUretimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabloUretimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabloUretimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
