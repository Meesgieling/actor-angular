import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from "angularfire2";
import { MaterialModule} from "@angular/material";
import { RouterModule} from "@angular/router";

import {AF} from "./services/af";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';

import { LandingspageComponent } from './components/landingspage/landingspage.component';
import { ProjectComponent } from './components/project/project.component';

import { ProjectFirebaseService} from "./services/project-firebase.service";
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';

import { ActorFirebaseService} from "./services/actor-firebase.service";
import { NewActorComponent } from './components/new-actor/new-actor.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';

import { PersonFirebaseService} from "./services/person-firebase.service";
import { NewPersonComponent } from './components/new-person/new-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "at-app-7f7e4.firebaseapp.com",
  databaseURL: "https://at-app-7f7e4.firebaseio.com",
  storageBucket: "at-app-7f7e4.appspot.com",
  messagingSenderId: "973845504281"
};

const routes = [
  {path:'', component: ProjectComponent},
  {path:'login', component: SignInComponent},

  {path:'project-detail/:key', component: ProjectDetailComponent},
  {path:'project/edit/:key', component: EditProjectComponent},

  {path:'actor-detail/:key/:key2', component: ActorDetailComponent},
  {path:'actor/edit/:key/:key2', component: EditActorComponent},

  {path:'person-detail/add/:key/:key2/:key3', component: NewPersonComponent},
  {path:'person/edit/:key/:key2/:key3', component: EditPersonComponent},

  {path:'profile/edit', component: EditProfileComponent},
]

@NgModule({
  declarations: [
    SignOutComponent,
    SignInComponent,

    LandingspageComponent,
    ProjectComponent,

    NewProjectComponent,
    ProjectDetailComponent,
    EditProjectComponent,

    NewActorComponent,
    ActorDetailComponent,
    EditActorComponent,

    NewPersonComponent,
    EditPersonComponent,

    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    //MaterialModule,
    MaterialModule.forRoot(),
  ],
  providers: [AF, ProjectFirebaseService, ActorFirebaseService, PersonFirebaseService],
  bootstrap: [LandingspageComponent]
})
export class AppModule { }
