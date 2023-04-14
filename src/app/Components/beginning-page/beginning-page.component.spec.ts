import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginningPageComponent } from './beginning-page.component';

describe('BeginningPageComponent', () => {
  let component: BeginningPageComponent;
  let fixture: ComponentFixture<BeginningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginningPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
