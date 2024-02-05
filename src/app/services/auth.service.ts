import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    console.log(credential);
    return new Promise((accept, reject) => {
      if(
        credential.email == "luis@gmail.com" && credential.password == "123456"
        
        ){
        accept("Autenticacion Exitosa");
      }else{
        reject("Login Incorrecto");
      }
    });
  }

  register(register_data: any){
    console.log(register_data);
    //Crear el servicio de registro
  }
}
