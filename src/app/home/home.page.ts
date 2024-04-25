import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public url:any = 'https://www.learn2earnn.com';
  constructor( public platform: Platform, public sanitizer: DomSanitizer ) {
    localStorage.setItem('url', this.url);
    this.platform.ready().then(()=> {
      this.url = this.openURL();
      const x = localStorage.getItem("url");
      console.log(x);
    })
  }
  openURL(){
  
    return this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url"));
  
  }

}
