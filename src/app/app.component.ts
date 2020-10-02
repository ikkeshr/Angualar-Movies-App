import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationConf } from './configurations/translation-conf';

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
    const translationConf: TranslationConf = new TranslationConf();

    // this Browser's language will be used as a fallback when a 
    // translation isn't found in the current language
    let defaultLang = this.translate.getBrowserLang();

    if (localStorage.getItem("language") !== null) {
      defaultLang = localStorage.getItem("language");
    } else if (!translationConf.getLanguages().includes(defaultLang)) {
      defaultLang = translationConf.getDefaultLanguage();
    }
    
    this.translate.setDefaultLang(defaultLang);
    
  }



}
