import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEmriAddComponent } from './is-emri-add.component';

describe('IsEmriAddComponent', () => {
  let component: IsEmriAddComponent;
  let fixture: ComponentFixture<IsEmriAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsEmriAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsEmriAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
