import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users : Object;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.users = [];
  }

  ngOnInit() {

    this.authService.getProfile().subscribe( profile=>{
        this.users = profile.data;
        console.log(this.users);
    },
      err=>{
      console.log(err);
      return false;
      })
  }

}
