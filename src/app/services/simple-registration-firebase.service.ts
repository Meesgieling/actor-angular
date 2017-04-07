import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {SimpleRegistration} from "../models/SimpleRegistration";



@Injectable()
export class SimpleRegistrationFirebaseService {


  PATH = "/simpleregistrations"

  constructor(private af: AngularFire) { }

  getRegistrations() : Observable<SimpleRegistration []>{
    const regObserver : Observable<SimpleRegistration []> = this.af.database.list(this.PATH)
    return regObserver;
  }

  saveRegistration(simpleRegistration : SimpleRegistration){
    this.af.database.list(this.PATH).push(simpleRegistration)
  }

  removeRegistration(simpleRegistration: SimpleRegistration){
    this.af.database.list(this.PATH).remove(simpleRegistration.$key);
  }

}
