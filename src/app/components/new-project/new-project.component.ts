import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";
import {Actor} from "../../models/Actor";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project : Project = null

  constructor(private snackBar: MdSnackBar, private projectService : ProjectFirebaseService) {
    this.init()
  }

  init(){
    this.project = {title: "" , description: "", actors: []}
  }

  addProject(){
    this.projectService.addProject(this.project)
    this.snackBar.open("Successfuly added project", "", { duration: 2000, });
    this.init()
  }

  ngOnInit() {}
}
