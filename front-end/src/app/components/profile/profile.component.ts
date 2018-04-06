import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: object;

  constructor(private authService: AuthService, private router: Router) {
    this.users = [];
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(response =>{
        this.users = response.data;
        console.log(this.users);
      });
  }

}
