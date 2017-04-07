import { Component, OnInit } from '@angular/core';
import { AF } from "../../services/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-landingspage',
  templateUrl: './landingspage.component.html',
  styleUrls: ['./landingspage.component.css']
})
export class LandingspageComponent implements OnInit {
  public isSignedIn: boolean;

  constructor(public afService: AF, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          this.isSignedIn = false;
          this.router.navigate(['login']);
        } else {
          this.isSignedIn = true;
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }

  ngOnInit() {}
}
