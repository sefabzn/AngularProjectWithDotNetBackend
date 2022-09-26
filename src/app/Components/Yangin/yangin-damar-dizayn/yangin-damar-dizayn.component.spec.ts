import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginDamarDizaynComponent } from './yangin-damar-dizayn.component';

describe('YanginDamarDizaynComponent', () => {
  let component: YanginDamarDizaynComponent;
  let fixture: ComponentFixture<YanginDamarDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginDamarDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginDamarDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
