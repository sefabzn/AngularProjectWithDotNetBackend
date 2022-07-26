import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakinaAddComponent } from './makina-add.component';

describe('MakinaAddComponent', () => {
  let component: MakinaAddComponent;
  let fixture: ComponentFixture<MakinaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakinaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakinaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
