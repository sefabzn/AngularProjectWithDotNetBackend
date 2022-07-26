import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvDamarDizaynComponent } from './cctv-damar-dizayn.component';

describe('CctvDamarDizaynComponent', () => {
  let component: CctvDamarDizaynComponent;
  let fixture: ComponentFixture<CctvDamarDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvDamarDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvDamarDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
