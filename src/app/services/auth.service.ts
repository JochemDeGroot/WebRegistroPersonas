import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public signedIn: Observable<any>;

  constructor(
    public auth: AngularFireAuth
  ) {
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }

  // Sign in function
  async signIn(email: string, password: string) {
    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Sign in failed', error);
      return false;
    }
  }

  // Sign Out function
  async signOut() {
    try {
      await this.auth.signOut();
      return true;
    } catch (error) {
      console.log('Sign out failed', error)
      return false;
    }
  }


  // Sign in with Google
  GoogleAuth() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


}
