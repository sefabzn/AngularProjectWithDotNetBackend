import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevkIrsaliyeDetailComponent } from './sevk-irsaliye-detail.component';

describe('SevkIrsaliyeDetailComponent', () => {
  let component: SevkIrsaliyeDetailComponent;
  let fixture: ComponentFixture<SevkIrsaliyeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevkIrsaliyeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevkIrsaliyeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
