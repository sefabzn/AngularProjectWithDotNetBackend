import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KesitYapisiComponent } from './kesit-yapisi.component';

describe('KesitYapisiComponent', () => {
  let component: KesitYapisiComponent;
  let fixture: ComponentFixture<KesitYapisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KesitYapisiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KesitYapisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
