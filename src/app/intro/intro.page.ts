import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {


  slides = [
    {
      title: "PRE-INSCRIPCIONES VALIDA 1/4 DE MILLA BARRANQUILLA",
      description: "Pre-Inscripciones abiertas valida <b>COPA CARNAVAL</b>",
      image: "assets/IMAGENES/Moto1.jpg"  ,
      help_text: "PIQUES 1/4 DE MILLA, COPA CARNAVAL 2024",
      class: "slide-1"
    },
    {
    title: "INSCRIPCIONES MOTOS",
    description: "Inscripciones de motos TODA CATEGORIA",
    image: "assets/IMAGENES/Moto2.jpg" ,
    help_text: "Adquiere tu boleta de inscripcion para la Copa Carnaval 2024",
    class: "slide-2"
    },
    {
      title: "INSCRIPCIONES CARROS",
      description: "Inscripciones Categorias 9-11seg",
      image: "assets/IMAGENES/rs3.jpg" ,
      help_text: "PIQUES 1/4 DE MILLA, VALIDA NACIONAL Vol1",
      class:"slide-3"
    },
    {
      title: "INSCRIPCIONES CARROS",
      description: "Inscripciones Categorias 12-15seg",
      image: "assets/IMAGENES/Octava.jpg" ,
      help_text: "PIQUES 1/4 DE MILLA, VALIDA NACIONAL Vol1",
      class:"slide-4"
      }
  ]

  constructor(
    private storage: Storage,
    private router: Router
  ) {}

  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl("/home");
  }

  ionViewDidEnter() {
    console.log("Ya entre y vi la intro")
    this.storage.set("mostreLaIntro",true);
  }

}
