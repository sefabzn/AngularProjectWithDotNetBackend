import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurecUpdateComponent } from './surec-update.component';

describe('SurecUpdateComponent', () => {
  let component: SurecUpdateComponent;
  let fixture: ComponentFixture<SurecUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurecUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurecUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
