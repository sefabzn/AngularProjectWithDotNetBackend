import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorIsEmriComponent } from './operator-is-emri.component';

describe('OperatorIsEmriComponent', () => {
  let component: OperatorIsEmriComponent;
  let fixture: ComponentFixture<OperatorIsEmriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorIsEmriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorIsEmriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
