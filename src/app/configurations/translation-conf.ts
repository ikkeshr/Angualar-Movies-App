export class TranslationConf {

    private _defaultLanguage: string = "en";
    private _languages: string[] = ['en', 'fr', 'it'];

    constructor() {}

    public getDefaultLanguage(): string {
        return this._defaultLanguage;
    }

    public getLanguages(): string[] {
        return this._languages;
    }
}
