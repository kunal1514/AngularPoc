import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-fields',
  templateUrl: './flight-fields.component.html',
  styleUrls: ['./flight-fields.component.css']
})
export class FlightFieldsComponent implements OnInit {

  flightExportForm: FormGroup;

  numberRegex : any = "^[0-9]*";

  constructor() { }

  ngOnInit(): void {
    this.flightExportForm = new FormGroup({
      flightDate: new FormControl('', Validators.required),
      untilDate: new FormControl('', Validators.required),
      carrier: new FormControl('', Validators.required),
      flightNumber: new FormControl('', [Validators.required, Validators.pattern(this.numberRegex)]),
      registration: new FormControl('', Validators.required),
      aircraftType: new FormControl('', Validators.required),
    })
  }

  onFormSubmit() {
    console.log(this.flightExportForm.value);
  }

}
