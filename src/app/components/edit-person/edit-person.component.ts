import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from '@angular/material';
import "rxjs/add/operator/mergeMap";

import {Router, ActivatedRoute} from "@angular/router";
import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {PersonFirebaseService} from "../../services/person-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";
import {Person} from "../../models/Person";
import {PersonModel} from "../../models/PersonModel";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  projectKey : string
  person: Person
  personData : PersonModel

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MdSnackBar, private personService : PersonFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const key = params['key'];
        this.projectKey = key;
        const key2 = params['key2'];
        const key3 = params['key3'];
        this.personService.getPerson(key, key2, key3)
            .subscribe(a => {
             this.person = a
             this.personService.getPersonData(this.person.actorID)
               .subscribe(y => {
                 this.personData = y
             })
          })
      })
  }

  savePerson(person : Person){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.personService.savePerson(key, key2, person)
      this.snackBar.open("Successfuly saved person", "", { duration: 2000, });
      this.router.navigate(['actor-detail/'+ key + '/' + key2]);

    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
