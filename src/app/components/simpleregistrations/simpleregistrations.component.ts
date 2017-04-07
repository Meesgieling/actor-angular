import { Component, OnInit } from '@angular/core';
import {SimpleRegistrationFirebaseService} from "../../services/simple-registration-firebase.service";
import {SimpleRegistration} from "../../models/SimpleRegistration";

@Component({
  selector: 'app-simpleregistrations',
  templateUrl: './simpleregistrations.component.html',
  styleUrls: ['./simpleregistrations.component.css']
})
export class SimpleregistrationsComponent implements OnInit {

  registrations : Array<SimpleRegistration> = []

  constructor(private regService : SimpleRegistrationFirebaseService) { }

  ngOnInit() {
    this.regService.getRegistrations().subscribe(res => this.registrations = res)
  }

  removeRegistration(reg: SimpleRegistration){
    this.regService.removeRegistration(reg)
  }

}
