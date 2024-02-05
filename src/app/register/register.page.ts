import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages ={
    last_name: [
      {type: "required", message: "Se requiere ingresar un apellido"},
      {type: "minLength", message: "Ingresa al menos 5 caracteres"}
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group ({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      //Crear validaciones para el password, confirmation_password, name y last_name
      password: new FormControl(
        "",
        Validators.compose([

        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([

        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([

        ])
      ),
      last_name: new FormControl([
        "",
        Validators.compose([

        ])
      ])
    })
   }

  ngOnInit() {
  }

  register(register_data: any){
    console.log(register_data);
    //Crear el servicio de registro
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

}
