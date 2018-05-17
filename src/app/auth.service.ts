import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap'
@Injectable()
export class AuthService {
user$:Observable<firebase.User>;

  constructor(
    private userService:UserService,
    private afAuth: AngularFireAuth,
    private route : ActivatedRoute
  ) {
     this.user$ = afAuth.authState;
     
   }
  logout(){
    this.afAuth.auth.signOut();
    }
    login(){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
      localStorage.setItem('returnUrl',returnUrl);
       this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    get appUser$ (): Observable<AppUser>{
      return  this.user$
      .switchMap(user => {
        if(user)return this.userService.get(user.uid);
        return Observable.of(null);
      })
    }
}
 