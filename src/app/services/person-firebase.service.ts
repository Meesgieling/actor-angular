import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {Project} from "../models/Project";
import {Actor} from "../models/Actor";
import {Person} from "../models/Person";
import {PersonModel} from "../models/PersonModel";

@Injectable()
export class PersonFirebaseService {

  PATH = "/projects"

  constructor(private af: AngularFire) { }

  getPerson(key : string, key2: string, key3 : string) : Observable<Person>{
    return this.af.database.object(this.PATH +"/" + key + "/actors/" + key2 + "/persons/" + key3)
  }

  getPersonData(key : string) : Observable<PersonModel>{
    return this.af.database.object("/persons/" + key)
  }

  getPersonsOfPersons() : Observable<Person []>{
    const personsOfPersonsObserver : Observable<Person []> = this.af.database.list("/persons")
    return personsOfPersonsObserver;
  }

  saveProfile(person : PersonModel) {
    this.af.database.list("/persons").update(person.$key, {name : person.name, phonenumber: person.phonenumber})
  }

  savePerson(key : string, key2 : string, person : Person){
    this.af.database.list(this.PATH + "/" + key + "/actors/" + key2 + "/persons").update(person.$key, {actorID: person.actorID, canEdit: person.canEdit})
  }

  addPerson(key : string, key2 : string, person : Person){
    this.af.database.list(this.PATH + "/" + key + "/actors/" + key2 + "/persons").push(person)
  }

  removePerson(key : string, key2 : string, person : Person){
    this.af.database.list(this.PATH + "/" + key + "/actors/" + key2 + "/persons").remove(person.$key);
  }
}
