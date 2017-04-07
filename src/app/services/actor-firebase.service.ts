import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/Project";
import {Actor} from "../models/Actor";
import {Person} from "../models/Person";

@Injectable()
export class ActorFirebaseService {

  PATH = "/projects"

  constructor(private af: AngularFire) { }

  getActor(key : string, key2: string) : Observable<Actor>{
    return this.af.database.object(this.PATH +"/" + key + "/actors/" + key2)
  }

  getPersonsOfActor(key : string, key2 : string) : Observable<Person []>{
    const personsOfActorObserver : Observable<Person []> = this.af.database.list(this.PATH +"/" + key + "/actors/" + key2 + "/persons")
    return personsOfActorObserver;
  }

  getActors(key : string) : Observable<Actor []>{
    const actorObserver : Observable<Actor []> = this.af.database.list(this.PATH + "/" + key + "/actors")
    return actorObserver;
  }

  addActor(key : string, actor : Actor){
    this.af.database.list(this.PATH + "/" + key + "/actors").push(actor)
  }

  saveActor(key: string, actor : Actor){
    this.af.database.list(this.PATH + "/" + key + "/actors").update(actor.$key, {title: actor.title, description: actor.description})
  }

  removeActor(key : string, actor : Actor){
    this.af.database.list(this.PATH + "/" + key + "/actors").remove(actor.$key);
  }
}
