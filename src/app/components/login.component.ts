
import {AuthService}        from '../services/auth.service';
import {User}               from '../domain/user';

import {Component, OnInit}  from '@angular/core';
import {NgForm}             from '@angular/forms';
import {Router}             from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html' ,
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user: User = new User;
  currentUser: User = new User;

  constructor(private router: Router,
              private authService: AuthService) {}

  onFormSubmit(form: NgForm) {
    this.authService.login(form.controls['username'].value, form.controls['password'].value)
      .subscribe(currentUser => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUser = currentUser;
        if (currentUser) {this.router.navigate([this.currentUser.role.name.toLowerCase()]);
        }
      });
  }
  ngOnInit(): void { console.log('Constructor initialised'); }
}
