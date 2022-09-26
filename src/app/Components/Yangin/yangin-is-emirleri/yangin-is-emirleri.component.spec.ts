import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginIsEmirleriComponent } from './yangin-is-emirleri.component';

describe('YanginIsEmirleriComponent', () => {
  let component: YanginIsEmirleriComponent;
  let fixture: ComponentFixture<YanginIsEmirleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginIsEmirleriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginIsEmirleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
