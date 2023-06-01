import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacementsComponent } from './pacements.component';

describe('PacementsComponent', () => {
  let component: PacementsComponent;
  let fixture: ComponentFixture<PacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
