import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClientModule} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';






@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){

    let headers = new Headers();

    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:3000/user',user,{headers: headers})
      .map(res => res.json())
  }


  // authenticateUser(user){
  //
  //   let headers = new Headers();
  //   headers.append('Content-type','application/json');
  //   return this.http.post('http://localhost:3000/authenticate' ,user ,{headers:headers})
  //     .map( res => res.json());
  //
  // }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:3000/auth/login',user,{headers: headers})
      .map( res => res.json());
  }


  getSiingleProfile(loginId){

    let headers = new Headers();
    this.loadToken();

    headers.append('Content-type','application/json');
    return this.http.get(`http://localhost:3000/user/${loginId}` ,{headers:headers})
      .map( res => res.json());

  }

  UpdateProfile(loginId, User){

    let headers = new Headers();
    this.loadToken();

    headers.append('Content-type','application/json');
    return this.http.patch(`http://localhost:3000/user/${loginId}` ,User,{headers:headers})
      .map( res => res.json());

  }

  getProfile(){
    let headers = new Headers();

    this.loadToken();

    // console.log('Token '+this.authToken);

    headers.append('authorization',this.authToken);

    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:3000/user',{headers:headers})
      .map( res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }


  storeUserDatta(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){

    return tokenNotExpired('id_token');
  }

}
