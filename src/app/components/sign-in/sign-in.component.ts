import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AF} from "../../services/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(public afService: AF, private router: Router, private snackBar: MdSnackBar) {}

  signIn() {
    this.afService.loginWithGoogle().then((data) => {
      this.snackBar.open("Successfuly signed in", "", {
        duration: 2000,
      });
      this.router.navigate(['']);
    })
  }
}
