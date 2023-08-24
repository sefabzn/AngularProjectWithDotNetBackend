import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureclerComponent } from './surecler.component';

describe('SureclerComponent', () => {
  let component: SureclerComponent;
  let fixture: ComponentFixture<SureclerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SureclerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SureclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
