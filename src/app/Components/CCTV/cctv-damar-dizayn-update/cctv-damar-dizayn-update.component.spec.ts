import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvDamarDizaynUpdateComponent } from './cctv-damar-dizayn-update.component';

describe('CctvDamarDizaynUpdateComponent', () => {
  let component: CctvDamarDizaynUpdateComponent;
  let fixture: ComponentFixture<CctvDamarDizaynUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvDamarDizaynUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvDamarDizaynUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
