import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvGenelDizaynUpdateComponent } from './cctv-genel-dizayn-update.component';

describe('CctvGenelDizaynUpdateComponent', () => {
  let component: CctvGenelDizaynUpdateComponent;
  let fixture: ComponentFixture<CctvGenelDizaynUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvGenelDizaynUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvGenelDizaynUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
