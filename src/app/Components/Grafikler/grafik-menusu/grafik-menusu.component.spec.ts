import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafikMenusuComponent } from './grafik-menusu.component';

describe('GrafikMenusuComponent', () => {
  let component: GrafikMenusuComponent;
  let fixture: ComponentFixture<GrafikMenusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafikMenusuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafikMenusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
