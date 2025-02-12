import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevkIrsaliyeListComponent } from './sevk-irsaliye-list.component';

describe('SevkIrsaliyeListComponent', () => {
  let component: SevkIrsaliyeListComponent;
  let fixture: ComponentFixture<SevkIrsaliyeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevkIrsaliyeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevkIrsaliyeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
