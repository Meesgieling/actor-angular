import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleregistrationsComponent } from './simpleregistrations.component';

describe('SimpleregistrationsComponent', () => {
  let component: SimpleregistrationsComponent;
  let fixture: ComponentFixture<SimpleregistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleregistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleregistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
