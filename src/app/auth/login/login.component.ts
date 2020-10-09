import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  get email () {
    return this.loginForm.get('email');
  }

  get password () {
    return this.loginForm.get('password');
  }

  login() {
    const payload = {
      email: this.email.value,
      password: this.email.value,
    }
    this.loginService.SignInUser(payload).subscribe(
      success => {
        console.log('successfully login');
      },
       error => {
         console.log('error occurred', error)
       }
    )
  }

}
