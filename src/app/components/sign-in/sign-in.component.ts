import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public signInFailed: boolean;
  public userAuth: Subscription;
  hide = true;

  constructor(public authService: AuthService, public fb: FormBuilder, public router: Router, public ngZone: NgZone) {
    this.signInFailed = false;
    this.signInForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    this.userAuth = this.authService.signedIn.subscribe((user) => {
      if (user) console.log('User remains Signed IN')//this.router.navigate(['dashboard'])
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.userAuth) this.userAuth.unsubscribe();
    console.log('ngOnDestroy has run')
  }


  async signIn(fg: FormGroup) {
    try {
      this.signInFailed = false;
      if (!fg.valid) throw new Error('Invalid sign-in credentials');
      const result = await this.authService.signIn(fg.value.email, fg.value.password);
      console.log('User Signed IN', result);
      // this.ngZone.run(()=>this.navigateTo('/')); ---- this.router.navigate(['home']);
      if (result) this.ngZone.run(() => this.router.navigate(['home']))
      else throw new Error('Sign-in failed');
    } catch (error) {
      // TO DO Incluir alert aquí 
      console.log(error);
      this.signInFailed = true;
    }
  }

  async login() {
    try {
      this.signInFailed = false;
      const result = await this.authService.GoogleAuth();
      if (result) this.ngZone.run(() => this.router.navigate(['home']))
      console.log('User signed in with Google:', result);
    } catch (error) {
      console.log(error)
      this.signInFailed = true;
    }
  }



  signOut() {
    this.authService.signOut();
    console.log('User signed OUT')
  }


}
