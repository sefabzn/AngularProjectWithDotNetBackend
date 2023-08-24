import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurecAddComponent } from './surec-add.component';

describe('SurecAddComponent', () => {
  let component: SurecAddComponent;
  let fixture: ComponentFixture<SurecAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurecAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurecAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
