import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenelDizaynUpdateComponent } from './genel-dizayn-update.component';

describe('GenelDizaynUpdateComponent', () => {
  let component: GenelDizaynUpdateComponent;
  let fixture: ComponentFixture<GenelDizaynUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenelDizaynUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenelDizaynUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
