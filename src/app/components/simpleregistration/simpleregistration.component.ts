import { Component, OnInit } from '@angular/core';
import {SimpleRegistrationFirebaseService} from "../../services/simple-registration-firebase.service";
import {SimpleRegistration} from "../../models/SimpleRegistration";

@Component({
  selector: 'app-simpleregistration',
  templateUrl: 'simpleregistration.component.html',
  styleUrls: ['simpleregistration.component.css']
})
export class SimpleRegistrationComponent implements OnInit {

  registration : SimpleRegistration = null

  constructor(private regService : SimpleRegistrationFirebaseService) {
    this.initRegistration()
  }

  initRegistration(){
    this.registration = {fullName: "" , email: ""}
  }

  register(){
    this.regService.saveRegistration(this.registration)
    this.initRegistration()
  }

  ngOnInit() {
  }

}
