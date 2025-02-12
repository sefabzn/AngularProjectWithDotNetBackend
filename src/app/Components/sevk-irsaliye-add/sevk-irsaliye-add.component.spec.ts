import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevkIrsaliyeAddComponent } from './sevk-irsaliye-add.component';

describe('SevkIrsaliyeAddComponent', () => {
  let component: SevkIrsaliyeAddComponent;
  let fixture: ComponentFixture<SevkIrsaliyeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevkIrsaliyeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevkIrsaliyeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
