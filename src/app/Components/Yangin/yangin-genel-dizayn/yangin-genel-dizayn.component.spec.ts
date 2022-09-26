import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginGenelDizaynComponent } from './yangin-genel-dizayn.component';

describe('YanginGenelDizaynComponent', () => {
  let component: YanginGenelDizaynComponent;
  let fixture: ComponentFixture<YanginGenelDizaynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginGenelDizaynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginGenelDizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
