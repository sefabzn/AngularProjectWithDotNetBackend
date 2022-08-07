import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakinelerComponent } from './makineler.component';

describe('MakinelerComponent', () => {
  let component: MakinelerComponent;
  let fixture: ComponentFixture<MakinelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakinelerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakinelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
