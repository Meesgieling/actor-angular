import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from '@angular/material';
import "rxjs/add/operator/mergeMap";

import {ActivatedRoute} from "@angular/router";
import {PersonFirebaseService} from "../../services/person-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";
import {Person} from "../../models/Person";

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  person : Person = null
  allPersons : Array<Person> = []

  private sub: Subscription;

  constructor(private route: ActivatedRoute,  private snackBar: MdSnackBar, private personService : PersonFirebaseService) {
    this.init()
  }

  init(){
    this.person = {actorID : "", canEdit: false}
    this.personService.getPersonsOfPersons().subscribe(res => this.allPersons = res)
  }

  addPerson(){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.personService.addPerson(key, key2, this.person)
      this.snackBar.open("Successfuly added person", "", { duration: 2000, });
      this.init()
    })
  }

  ngOnInit() {}
}
