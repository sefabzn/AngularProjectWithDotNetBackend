import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorIsEmriUpdateComponent } from './operator-is-emri-update.component';

describe('OperatorIsEmriUpdateComponent', () => {
  let component: OperatorIsEmriUpdateComponent;
  let fixture: ComponentFixture<OperatorIsEmriUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorIsEmriUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorIsEmriUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
