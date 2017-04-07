import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Observable, Subscription} from "rxjs";
import "rxjs/add/operator/mergeMap";

import {ActivatedRoute} from "@angular/router";
import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {PersonFirebaseService} from "../../services/person-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";
import {Person} from "../../models/Person";
import {PersonModel} from "../../models/PersonModel";

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  projectKey : string
  actor : Actor
  persons : Array<Person> = []
  personModels : Array<PersonModel> = []

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private snackBar: MdSnackBar, private actorService : ActorFirebaseService, private personService : PersonFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const key = params['key'];
        this.projectKey = key;
        const key2 = params['key2'];
        this.actorService.getActor(key, key2)
            .subscribe(a => {
             this.actor = a
            })
        })

    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.actorService.getPersonsOfActor(key, key2).subscribe(res => {
        this.persons = res;
        this.mergePersonModel();
      });
    })
  }

  mergePersonModel() {
    this.personModels = [];

    var count = 0;
    for (var i = 0; i < this.persons.length; i++) {
      this.personService.getPersonData(this.persons[i].actorID)
        .subscribe(y => {
          let personModel : PersonModel = {
            $key: this.persons[count].$key,
            actorID: this.persons[count].actorID,
            canEdit: this.persons[count].canEdit,
            name : y.name,
            email: y.email,
            phonenumber: y.phonenumber,
            profilePhoto: y.profilePhoto,
            sidenote: y.sidenote
          }
          this.personModels.push(personModel);
          count++;
      })
    }
  }

  removePerson(person: Person){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.personService.removePerson(key, key2, person);
      this.snackBar.open("Successfuly removed person", "", { duration: 2000, });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
