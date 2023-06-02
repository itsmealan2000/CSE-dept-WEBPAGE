import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdyearComponent } from './thirdyear.component';

describe('ThirdyearComponent', () => {
  let component: ThirdyearComponent;
  let fixture: ComponentFixture<ThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
