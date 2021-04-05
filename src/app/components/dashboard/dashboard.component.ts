import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
