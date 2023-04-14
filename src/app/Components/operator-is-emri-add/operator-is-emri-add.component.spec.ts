import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorIsEmriAddComponent } from './operator-is-emri-add.component';

describe('OperatorIsEmriAddComponent', () => {
  let component: OperatorIsEmriAddComponent;
  let fixture: ComponentFixture<OperatorIsEmriAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorIsEmriAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorIsEmriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
