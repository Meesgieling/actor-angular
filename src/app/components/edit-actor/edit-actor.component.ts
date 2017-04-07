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

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  projectKey : string
  actor : Actor
  persons : Array<Person> = []

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MdSnackBar, private actorService : ActorFirebaseService, private personService : PersonFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const key = params['key'];
        this.projectKey = key;
        const key2 = params['key2'];
        this.actorService.getActor(key, key2)
            .subscribe( a => {
             this.actor = a
            })
        })

    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.actorService.getPersonsOfActor(key, key2).subscribe(res => this.persons = res)
    })
  }

  saveActor(actor: Actor){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      this.actorService.saveActor(key, actor)
      this.snackBar.open("Successfuly saved actor", "", { duration: 2000, });
      this.router.navigate(['project-detail/'+ key]);
    })
  }

  removePerson(key : string, person: Person){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      const key2 = params['key2'];
      this.personService.removePerson(key, key2, person)
      this.snackBar.open("Successfuly removed person", "", { duration: 2000, });

    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
