import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private translate: TranslateService
  ) {
    this.initTranslationService();
  }

  initTranslationService(): void {

    // this Browser's language will be used as a fallback when a 
    // translation isn't found in the current language
    let browserLang = this.translate.getBrowserLang();

    if (localStorage.getItem("language") !== null) {
      browserLang = localStorage.getItem("language");
    }

    this.translate.setDefaultLang(browserLang);
    
  }



}
