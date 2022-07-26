import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakinaComponent } from './makina.component';

describe('MakinaComponent', () => {
  let component: MakinaComponent;
  let fixture: ComponentFixture<MakinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
