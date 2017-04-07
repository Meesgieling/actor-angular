import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletwowaybindingformComponent } from './simpleregistration.component';

describe('SimpletwowaybindingformComponent', () => {
  let component: SimpletwowaybindingformComponent;
  let fixture: ComponentFixture<SimpletwowaybindingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletwowaybindingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletwowaybindingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
