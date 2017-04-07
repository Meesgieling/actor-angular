import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingspageComponent } from './landingspage.component';

describe('LandingspageComponent', () => {
  let component: LandingspageComponent;
  let fixture: ComponentFixture<LandingspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
