import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from '@angular/material';
import "rxjs/add/operator/mergeMap";

import {ActivatedRoute} from "@angular/router";
import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";
import {Person} from "../../models/Person";

@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css']
})
export class NewActorComponent implements OnInit {

  actor : Actor = null

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private snackBar: MdSnackBar, private actorService : ActorFirebaseService) {
    this.init()
  }

  init(){
    this.actor = {title: "" , description: "", persons: []}
  }

  addActor(){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      this.actorService.addActor(key, this.actor)
      this.snackBar.open("Successfuly added actor", "", { duration: 2000, });
      this.init()
    })
  }

  ngOnInit() {}
}
