import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFieldsComponent } from './flight-fields.component';

describe('FlightFieldsComponent', () => {
  let component: FlightFieldsComponent;
  let fixture: ComponentFixture<FlightFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
