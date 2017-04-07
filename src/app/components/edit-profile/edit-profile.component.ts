import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AF} from "../../services/af";
import {Router} from "@angular/router";

import {ActorFirebaseService} from "../../services/actor-firebase.service";
import {PersonFirebaseService} from "../../services/person-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";
import {Person} from "../../models/Person";
import {PersonModel} from "../../models/PersonModel";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  person : PersonModel
  persons: Array<Person> = []

  constructor(public afService: AF, private router: Router, private snackBar: MdSnackBar, private personService: PersonFirebaseService) {
    this.afService.af.auth.subscribe((auth) => {
        if(auth == null) this.router.navigate(['login']);

        this.personService.getPersonsOfPersons().subscribe(p => {
            this.persons = p;
            for (var i = 0; i < this.persons.length; i++) {
              if(this.persons[i].key === auth.uid) {
                this.personService.getPersonData(this.persons[i].$key).subscribe(y => { this.person = y })
              }
            }
        });

        this.person = { actorID: "", canEdit: false, email: "dsads", profilePhoto: "", sidenote: "", name: "test", phonenumber: "5039285"}
    });
  }

  saveProfile(person : PersonModel) {
    this.personService.saveProfile(person);
    this.snackBar.open("Successfuly saved", "", { duration: 2000, });
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
