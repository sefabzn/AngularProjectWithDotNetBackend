import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabloUretimUpdateComponent } from './kablo-uretim-update.component';

describe('KabloUretimUpdateComponent', () => {
  let component: KabloUretimUpdateComponent;
  let fixture: ComponentFixture<KabloUretimUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabloUretimUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabloUretimUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
