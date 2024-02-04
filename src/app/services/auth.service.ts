import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == "luis@gmail.com" && credential.password == "123456"
        ){
        accept("Login Correcto");
      }else{
        reject("Login Incorrecto");
      }
    });
  }
}
