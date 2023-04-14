import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginDamarDizaynAddComponent } from './yangin-damar-dizayn-add.component';

describe('YanginDamarDizaynAddComponent', () => {
  let component: YanginDamarDizaynAddComponent;
  let fixture: ComponentFixture<YanginDamarDizaynAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginDamarDizaynAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginDamarDizaynAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
