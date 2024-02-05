import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = [
    {
      text: 'Ir',
      handler: () => {
        this.router.navigateByUrl("/intro");
      }
    }
  ];
  event_list: any;
  categories: any;
  category: any;
  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}

    ionViewDidEnter(){
      this.events.getEvents().then(
        res => {
          this.event_list = res
          console.log("eventos desde el servidor",this.event_list);
        }
      )
      console.log("local events",this.events.getLocalEvents().events);
      this.events.getCategories().then(
        res => {
          this.categories = res
          console.log("categorias",this.categories);
        }
      )
      
      this.events.getCategoriesById(1).then(
        res => {
          this.category = res
          console.log("categoria por id",this.category);
        }
      )
    }

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl("/intro");
    this.storage.set("mostreLaIntro", true);
  }

  

}
