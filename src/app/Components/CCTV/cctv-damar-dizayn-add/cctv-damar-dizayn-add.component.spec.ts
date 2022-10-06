import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvDamarDizaynAddComponent } from './cctv-damar-dizayn-add.component';

describe('CctvDamarDizaynAddComponent', () => {
  let component: CctvDamarDizaynAddComponent;
  let fixture: ComponentFixture<CctvDamarDizaynAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvDamarDizaynAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvDamarDizaynAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
