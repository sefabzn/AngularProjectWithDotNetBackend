import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenelDizaynListComponent } from './genel-dizayn-list.component';

describe('GenelDizaynListComponent', () => {
  let component: GenelDizaynListComponent;
  let fixture: ComponentFixture<GenelDizaynListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenelDizaynListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenelDizaynListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
