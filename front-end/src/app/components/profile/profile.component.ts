import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: any;
  singleUser: object;


  constructor(private authService: AuthService, private router: Router) {
    this.users = [];
    this.singleUser = null;
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(response =>{
        this.users = response.data;
        //console.log(this.users);
      });

    //console.log("Here " + localStorage.getItem('loginId'));

    this.authService.getSiingleProfile(localStorage.getItem('loginId'))
      .subscribe(response=>{
        this.singleUser = response.data;
        //console.log(this.singleUser);
      })
  }

  editProfile(id){
    this.router.navigate([`/editprofile/${id}`])
  }


  deleteProfile(user){

    this.users.splice(this.users.indexOf(user), 1);
    this.authService.deleteProfile(user._id).subscribe(respnse=>{

    });

  }

}
