import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public authService: AuthServiceService) { }

  email: any;
  password: any;

  ngOnInit() {
    
  }

  login(){
    this.authService.signInWithEmailAndPassword(this.email, this.password)
  }

  toRegister(){
    this.router.navigateByUrl('register');
  }

}
