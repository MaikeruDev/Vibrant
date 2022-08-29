import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, public authService: AuthServiceService) { }

  email;
  username;
  password;
  passwordRepeat;

  ngOnInit(){
    
  }

  register(){
    this.authService.createUserWithEmailAndPassword(this.email, this.password, this.password, this.username);
  }

  toLogin(){
    this.router.navigateByUrl('login');
  }

}
