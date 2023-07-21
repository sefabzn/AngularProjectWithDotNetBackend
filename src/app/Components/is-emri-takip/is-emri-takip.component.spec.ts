import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEmriTakipComponent } from './is-emri-takip.component';

describe('IsEmriTakipComponent', () => {
  let component: IsEmriTakipComponent;
  let fixture: ComponentFixture<IsEmriTakipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsEmriTakipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsEmriTakipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
