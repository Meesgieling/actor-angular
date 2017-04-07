import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AF} from "../../services/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(public afService: AF, private router: Router, private snackBar: MdSnackBar) {
    this.afService.af.auth.subscribe((auth) => {
        if(auth == null) this.router.navigate(['login']);
    });
 }

 logout() {
   this.afService.logout();
   this.snackBar.open("Successfuly signed out", "", { duration: 2000, });
 }

  ngOnInit() {}
}
