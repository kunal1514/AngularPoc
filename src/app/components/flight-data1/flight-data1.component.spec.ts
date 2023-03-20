import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightData1Component } from './flight-data1.component';

describe('FlightData1Component', () => {
  let component: FlightData1Component;
  let fixture: ComponentFixture<FlightData1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightData1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
