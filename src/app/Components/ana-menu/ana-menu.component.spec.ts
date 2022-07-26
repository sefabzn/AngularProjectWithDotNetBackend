import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaMenuComponent } from './ana-menu.component';

describe('AnaMenuComponent', () => {
  let component: AnaMenuComponent;
  let fixture: ComponentFixture<AnaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
