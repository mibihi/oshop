import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
@Injectable()
export class AdminAuthGuard implements CanActivate{
  constructor(private auth:AuthService,private userService:UserService) { 
      }
  canActivate():Observable<boolean>{
   return  this.auth.appUser$
    .map(appuser => appuser.isAdmin);
    
  }

  

} 
