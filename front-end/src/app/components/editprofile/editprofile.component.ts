import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {


  name: String;
  email: String ;
  username: String;
  password: String;

  user: any;

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.authService.getSiingleProfile(id).subscribe(response=>{
      this.user = response.data;
    })
  }

  onUpdate(user){


    //Required Fiels
    if(!this.validateService.validateRegister(user)){
      // this.flashMessages.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:300});
      // this.flashMessage.warning('Please fill in all fields',{delay:2000});
      this._flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger' } );

      return false;
    }

    //Validate Email
    if(!this.validateService.validateEmail(user.email)){
      // this.flashMessages.show('Please use a valid email',{cssClass: 'alert-danger',timeout:300});

      this._flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger' } );
      return false;
    }

    const id = this.route.snapshot.paramMap.get('id');

    this.authService.UpdateProfile(id,user)
      .subscribe( data =>{
        if(data.success) {
          this._flashMessagesService.show('You are now Registered.', {cssClass: 'alert-success'});
          this.router.navigate(['/profile']);
        }
        else {
          this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger'});
          this.router.navigate(['/register']);
        }
      })
  }

}
