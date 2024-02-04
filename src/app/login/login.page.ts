import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          )
        ])
      )
    })
    password: new FormControl(
      "",
      Validators.compose([
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
      )
    ])
    )
   }

  ngOnInit() {
  }

  login(login_data: any){
    console.log(login_data);
  }

}
