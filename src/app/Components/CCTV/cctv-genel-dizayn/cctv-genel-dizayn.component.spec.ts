import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvGenelDizaynComponent } from './cctv-genel-dizayn.component';

describe('CctvGenelDizaynComponent', () => {
  let component: CctvGenelDizaynComponent;
  let fixture: ComponentFixture<CctvGenelDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvGenelDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvGenelDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
