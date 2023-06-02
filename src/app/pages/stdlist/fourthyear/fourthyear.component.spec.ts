import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthyearComponent } from './fourthyear.component';

describe('FourthyearComponent', () => {
  let component: FourthyearComponent;
  let fixture: ComponentFixture<FourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
