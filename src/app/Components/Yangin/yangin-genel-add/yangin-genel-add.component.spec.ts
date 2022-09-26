import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginGenelAddComponent } from './yangin-genel-add.component';

describe('YanginGenelAddComponent', () => {
  let component: YanginGenelAddComponent;
  let fixture: ComponentFixture<YanginGenelAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginGenelAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginGenelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
