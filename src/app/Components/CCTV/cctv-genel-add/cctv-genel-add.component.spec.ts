import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvGenelAddComponent } from './cctv-genel-add.component';

describe('CctvGenelAddComponent', () => {
  let component: CctvGenelAddComponent;
  let fixture: ComponentFixture<CctvGenelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvGenelAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvGenelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
