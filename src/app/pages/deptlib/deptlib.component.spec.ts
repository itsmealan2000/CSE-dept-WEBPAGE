import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptlibComponent } from './deptlib.component';

describe('DeptlibComponent', () => {
  let component: DeptlibComponent;
  let fixture: ComponentFixture<DeptlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptlibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
