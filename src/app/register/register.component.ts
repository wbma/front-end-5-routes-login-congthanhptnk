import { Component, OnInit } from '@angular/core';
import {User} from '../interface/user';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: ''
  };

  constructor(public mediaService: MediaService) { }

  register() {
    console.log(this.user);
    this.mediaService.register(this.user).subscribe(response => {
      console.log(response);
      this.mediaService.username = this.user.username;
      this.mediaService.password = this.user.password;
      this.mediaService.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }

  ngOnInit() {
  }

}