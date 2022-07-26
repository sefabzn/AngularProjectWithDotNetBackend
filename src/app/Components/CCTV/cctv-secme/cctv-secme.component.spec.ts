import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvSecmeComponent } from './cctv-secme.component';

describe('CctvSecmeComponent', () => {
  let component: CctvSecmeComponent;
  let fixture: ComponentFixture<CctvSecmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvSecmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvSecmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
