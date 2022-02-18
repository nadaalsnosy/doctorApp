import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    gender: null,
    birthDate: null,
    mobile: null,
    admin: false,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('data created');
    this.isSuccessful = true;
    this.isSignUpFailed = false;
    // const { username, email, password } = this.form;
    // this.authService.register(username, email, password).subscribe({
    //   next: data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // });
  }
}
