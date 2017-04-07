import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MdSnackBar} from '@angular/material';
import "rxjs/add/operator/mergeMap";

import {Router, ActivatedRoute} from "@angular/router";
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project : Project
  actors : Array<Actor> = []

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private snackBar: MdSnackBar, private projectService : ProjectFirebaseService, private actorService : ActorFirebaseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        const key = params['key'];
        this.projectService.getProject(key)
              .subscribe( p => {
               this.project = p
              })
        })

    this.sub = this.route.params.subscribe(params => {
      const key = params['key'];
      this.projectService.getActorsOfProject(key).subscribe(res => this.actors = res)
    })
  }

  saveProject(project: Project){
    this.sub = this.route.params.subscribe(params => {
      this.projectService.saveProject(project)
      this.snackBar.open("Successfuly saved project", "", { duration: 2000, });
      this.router.navigate(['']);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
