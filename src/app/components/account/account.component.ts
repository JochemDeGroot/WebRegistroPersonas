import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public userAuth: Subscription;

  constructor(public authService: AuthService, public router: Router, public ngZone: NgZone) {
    this.userAuth = this.authService.signedIn.subscribe((user) => {
      if (user) {
        console.log('Signed in and ready to display sensitive data')
      } else {
        this.ngZone.run(() => this.router.navigate(['sign-in']));
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.userAuth) this.userAuth.unsubscribe();
  }

  signOut() {
    this.authService.signOut();
  }

}
