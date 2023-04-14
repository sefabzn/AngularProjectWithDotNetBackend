import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YanginSecmeComponent } from './yangin-secme.component';

describe('YanginSecmeComponent', () => {
  let component: YanginSecmeComponent;
  let fixture: ComponentFixture<YanginSecmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YanginSecmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YanginSecmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
