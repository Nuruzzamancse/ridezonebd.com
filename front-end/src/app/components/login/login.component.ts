import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : String;
  password: string;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  onLoginSubmit(){

    const user ={
      email: this.email,
      password: this.password
    }


    this.authService.authenticateUser(user).subscribe(res =>{

      //console.log(user.email);


      if(res.success){

        console.log(res.data);
        this.authService.storeUserDatta(res.token, res.data);


        this.flashMessage.show('You are now Logged In!', { cssClass: 'alert-success' } );
        this.router.navigate(['/dashboard']);
      }
      else{
        this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger' } );
        this.router.navigate(['/login']);
      }
    })

  }

}
