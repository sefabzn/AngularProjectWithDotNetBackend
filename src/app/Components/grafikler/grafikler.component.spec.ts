import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiklerComponent } from './grafikler.component';

describe('GrafiklerComponent', () => {
  let component: GrafiklerComponent;
  let fixture: ComponentFixture<GrafiklerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafiklerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafiklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
