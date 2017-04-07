import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {

  message = ""
  frontendFrameworks : Array<string>= ["Angular", "React", "Cycle", "Ember", "Polymer"]

  constructor() {
    setInterval(() =>
        this.message = this.frontendFrameworks[Math.floor(Math.random()
                                                * this.frontendFrameworks.length)]
      ,
      2000
    )
  }
  ngOnInit() {

  }
}


