import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopsoComponent } from './peopso.component';

describe('PeopsoComponent', () => {
  let component: PeopsoComponent;
  let fixture: ComponentFixture<PeopsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
