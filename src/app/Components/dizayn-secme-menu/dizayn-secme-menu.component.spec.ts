import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizaynSecmeMenuComponent } from './dizayn-secme-menu.component';

describe('DizaynSecmeMenuComponent', () => {
  let component: DizaynSecmeMenuComponent;
  let fixture: ComponentFixture<DizaynSecmeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DizaynSecmeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DizaynSecmeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
