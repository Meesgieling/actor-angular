import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from '@angular/material';
import "rxjs/add/operator/mergeMap";

import {ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project : Project
  actors : Array<Actor> = []

  private sub: Subscription;

  constructor(private snackBar: MdSnackBar, private route: ActivatedRoute, private projectService : ProjectFirebaseService, private actorService : ActorFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.mergeMap(params => this.projectService.getProject(params['key'])).subscribe(x => this.project = x)
    this.sub = this.route.params.mergeMap(params => this.projectService.getActorsOfProject(params['key'])).subscribe(x => this.actors = x)
  }

  removeActor(actor: Actor){
    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      this.actorService.removeActor(key, actor)
      this.snackBar.open("Successfuly removed actor", "", { duration: 2000, });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
