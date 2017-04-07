import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
import {Actor} from "../models/Actor";

@Injectable()
export class ProjectFirebaseService {

  PATH = "/projects"

  constructor(private af: AngularFire) { }

  getProject(key : string) : Observable<Project>{
    return this.af.database.object(this.PATH +"/" + key)
  }

  getActorsOfProject(key : string) : Observable<Actor []>{
    const actorsOfProjectObserver : Observable<Actor []> = this.af.database.list(this.PATH +"/" + key + "/actors")
    return actorsOfProjectObserver;
  }

  getProjects() : Observable<Project []>{
    const projectObserver : Observable<Project []> = this.af.database.list(this.PATH)
    return projectObserver;
  }

  addProject(project : Project){
    this.af.database.list(this.PATH).push(project)
  }

  saveProject(project : Project){
    this.af.database.list(this.PATH).update(project.$key, {title: project.title, description: project.description})
  }

  removeProject(project: Project){
    this.af.database.list(this.PATH).remove(project.$key);
  }
}
