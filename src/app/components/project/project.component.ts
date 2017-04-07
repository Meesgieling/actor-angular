import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ProjectFirebaseService} from "../../services/project-firebase.service";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects : Array<Project> = []

  constructor(private snackBar: MdSnackBar, private projectService : ProjectFirebaseService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => this.projects = res)
  }

  removeProject(project: Project){
    this.projectService.removeProject(project)
    this.snackBar.open("Successfuly remove project", "", { duration: 2000, });
  }
}
