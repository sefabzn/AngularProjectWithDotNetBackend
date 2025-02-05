import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenelDizaynAddComponent } from './genel-dizayn-add.component';

describe('GenelDizaynAddComponent', () => {
  let component: GenelDizaynAddComponent;
  let fixture: ComponentFixture<GenelDizaynAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenelDizaynAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenelDizaynAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
