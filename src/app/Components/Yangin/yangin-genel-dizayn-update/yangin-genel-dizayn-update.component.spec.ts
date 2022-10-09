import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginGenelDizaynUpdateComponent } from './yangin-genel-dizayn-update.component';

describe('YanginGenelDizaynUpdateComponent', () => {
  let component: YanginGenelDizaynUpdateComponent;
  let fixture: ComponentFixture<YanginGenelDizaynUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginGenelDizaynUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginGenelDizaynUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
