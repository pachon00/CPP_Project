import { EventEmitter, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { MissingTranslationHandler } from "./missing-translation-handler";
import { TranslateCompiler } from "./translate.compiler";
import { TranslateLoader } from "./translate.loader";
import { TranslateParser } from "./translate.parser";
import { TranslateStore } from "./translate.store";
import * as ɵngcc0 from '@angular/core';
export declare const USE_STORE: InjectionToken<string>;
export declare const USE_DEFAULT_LANG: InjectionToken<string>;
export declare const USE_EXTEND: InjectionToken<string>;
export interface TranslationChangeEvent {
    translations: any;
    lang: string;
}
export interface LangChangeEvent {
    lang: string;
    translations: any;
}
export interface DefaultLangChangeEvent {
    lang: string;
    translations: any;
}
export declare class TranslateService {
    store: TranslateStore;
    currentLoader: TranslateLoader;
    compiler: TranslateCompiler;
    parser: TranslateParser;
    missingTranslationHandler: MissingTranslationHandler;
    private useDefaultLang;
    private isolate;
    private extend;
    private loadingTranslations;
    private pending;
    private _onTranslationChange;
    private _onLangChange;
    private _onDefaultLangChange;
    private _defaultLang;
    private _currentLang;
    private _langs;
    private _translations;
    private _translationRequests;
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    readonly onTranslationChange: EventEmitter<TranslationChangeEvent>;
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    readonly onLangChange: EventEmitter<LangChangeEvent>;
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    readonly onDefaultLangChange: EventEmitter<DefaultLangChangeEvent>;
    /**
     * The default lang to fallback when translations are missing on the current lang
     */
    defaultLang: string;
    /**
     * The lang currently used
     */
    currentLang: string;
    /**
     * an array of langs
     */
    langs: string[];
    /**
     * a list of translations per lang
     */
    translations: any;
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     */
    constructor(store: TranslateStore, currentLoader: TranslateLoader, compiler: TranslateCompiler, parser: TranslateParser, missingTranslationHandler: MissingTranslationHandler, useDefaultLang?: boolean, isolate?: boolean, extend?: boolean);
    /**
     * Sets the default language to use as a fallback
     */
    setDefaultLang(lang: string): void;
    /**
     * Gets the default language used
     */
    getDefaultLang(): string;
    /**
     * Changes the lang currently used
     */
    use(lang: string): Observable<any>;
    /**
     * Retrieves the given translations
     */
    private retrieveTranslations;
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     */
    getTranslation(lang: string): Observable<any>;
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    setTranslation(lang: string, translations: Object, shouldMerge?: boolean): void;
    /**
     * Returns an array of currently available langs
     */
    getLangs(): Array<string>;
    /**
     * Add available langs
     */
    addLangs(langs: Array<string>): void;
    /**
     * Update the list of available langs
     */
    private updateLangs;
    /**
     * Returns the parsed result of the translations
     */
    getParsedResult(translations: any, key: any, interpolateParams?: Object): any;
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any>;
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    getStreamOnTranslationChange(key: string | Array<string>, interpolateParams?: Object): Observable<string | any>;
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    stream(key: string | Array<string>, interpolateParams?: Object): Observable<string | any>;
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     */
    instant(key: string | Array<string>, interpolateParams?: Object): string | any;
    /**
     * Sets the translated value of a key, after compiling it
     */
    set(key: string, value: string, lang?: string): void;
    /**
     * Changes the current lang
     */
    private changeLang;
    /**
     * Changes the default lang
     */
    private changeDefaultLang;
    /**
     * Allows to reload the lang file from the file
     */
    reloadLang(lang: string): Observable<any>;
    /**
     * Deletes inner translation
     */
    resetLang(lang: string): void;
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    getBrowserLang(): string;
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    getBrowserCultureLang(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslateService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TranslateService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidHJhbnNsYXRlLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4S0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gXCIuL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlQ29tcGlsZXIgfSBmcm9tIFwiLi90cmFuc2xhdGUuY29tcGlsZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gXCIuL3RyYW5zbGF0ZS5sb2FkZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBhcnNlciB9IGZyb20gXCIuL3RyYW5zbGF0ZS5wYXJzZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVN0b3JlIH0gZnJvbSBcIi4vdHJhbnNsYXRlLnN0b3JlXCI7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBVU0VfU1RPUkU6IEluamVjdGlvblRva2VuPHN0cmluZz47XG5leHBvcnQgZGVjbGFyZSBjb25zdCBVU0VfREVGQVVMVF9MQU5HOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgVVNFX0VYVEVORDogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCB7XG4gICAgdHJhbnNsYXRpb25zOiBhbnk7XG4gICAgbGFuZzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW5nQ2hhbmdlRXZlbnQge1xuICAgIGxhbmc6IHN0cmluZztcbiAgICB0cmFuc2xhdGlvbnM6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdExhbmdDaGFuZ2VFdmVudCB7XG4gICAgbGFuZzogc3RyaW5nO1xuICAgIHRyYW5zbGF0aW9uczogYW55O1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gICAgc3RvcmU6IFRyYW5zbGF0ZVN0b3JlO1xuICAgIGN1cnJlbnRMb2FkZXI6IFRyYW5zbGF0ZUxvYWRlcjtcbiAgICBjb21waWxlcjogVHJhbnNsYXRlQ29tcGlsZXI7XG4gICAgcGFyc2VyOiBUcmFuc2xhdGVQYXJzZXI7XG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbiAgICBwcml2YXRlIHVzZURlZmF1bHRMYW5nO1xuICAgIHByaXZhdGUgaXNvbGF0ZTtcbiAgICBwcml2YXRlIGV4dGVuZDtcbiAgICBwcml2YXRlIGxvYWRpbmdUcmFuc2xhdGlvbnM7XG4gICAgcHJpdmF0ZSBwZW5kaW5nO1xuICAgIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U7XG4gICAgcHJpdmF0ZSBfb25MYW5nQ2hhbmdlO1xuICAgIHByaXZhdGUgX29uRGVmYXVsdExhbmdDaGFuZ2U7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdExhbmc7XG4gICAgcHJpdmF0ZSBfY3VycmVudExhbmc7XG4gICAgcHJpdmF0ZSBfbGFuZ3M7XG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRpb25zO1xuICAgIHByaXZhdGUgX3RyYW5zbGF0aW9uUmVxdWVzdHM7XG4gICAgLyoqXG4gICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICogfSk7XG4gICAgICovXG4gICAgcmVhZG9ubHkgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+O1xuICAgIC8qKlxuICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXG4gICAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAqIH0pO1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG9uTGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD47XG4gICAgLyoqXG4gICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAqIH0pO1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG9uRGVmYXVsdExhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBsYW5nIHRvIGZhbGxiYWNrIHdoZW4gdHJhbnNsYXRpb25zIGFyZSBtaXNzaW5nIG9uIHRoZSBjdXJyZW50IGxhbmdcbiAgICAgKi9cbiAgICBkZWZhdWx0TGFuZzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICovXG4gICAgY3VycmVudExhbmc6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgICAqL1xuICAgIGxhbmdzOiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zOiBhbnk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN0b3JlICh0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHVuaXF1ZSlcbiAgICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIGNvbXBpbGVyIEFuIGluc3RhbmNlIG9mIHRoZSBjb21waWxlciBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBwYXJzZXIgQW4gaW5zdGFuY2Ugb2YgdGhlIHBhcnNlciBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXG4gICAgICogQHBhcmFtIGlzb2xhdGUgd2hldGhlciB0aGlzIHNlcnZpY2Ugc2hvdWxkIHVzZSB0aGUgc3RvcmUgb3Igbm90XG4gICAgICogQHBhcmFtIHVzZURlZmF1bHRMYW5nIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBkZWZhdWx0IGxhbmd1YWdlIHRyYW5zbGF0aW9uIHdoZW4gY3VycmVudCBsYW5ndWFnZSB0cmFuc2xhdGlvbiBpcyBtaXNzaW5nLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBUcmFuc2xhdGVTdG9yZSwgY3VycmVudExvYWRlcjogVHJhbnNsYXRlTG9hZGVyLCBjb21waWxlcjogVHJhbnNsYXRlQ29tcGlsZXIsIHBhcnNlcjogVHJhbnNsYXRlUGFyc2VyLCBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB1c2VEZWZhdWx0TGFuZz86IGJvb2xlYW4sIGlzb2xhdGU/OiBib29sZWFuLCBleHRlbmQ/OiBib29sZWFuKTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAgICovXG4gICAgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzZWRcbiAgICAgKi9cbiAgICBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAqL1xuICAgIHVzZShsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHJldHJpZXZlVHJhbnNsYXRpb25zO1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZSB3aXRoIHRoZSBjdXJyZW50IGxvYWRlclxuICAgICAqIGFuZCBwYXNzZXMgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcbiAgICAgKi9cbiAgICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlXG4gICAgICogYWZ0ZXIgcGFzc2luZyBpdCB0aHJvdWdoIHRoZSBjb21waWxlclxuICAgICAqL1xuICAgIHNldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZywgdHJhbnNsYXRpb25zOiBPYmplY3QsIHNob3VsZE1lcmdlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgZ2V0TGFuZ3MoKTogQXJyYXk8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBBZGQgYXZhaWxhYmxlIGxhbmdzXG4gICAgICovXG4gICAgYWRkTGFuZ3MobGFuZ3M6IEFycmF5PHN0cmluZz4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUxhbmdzO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhcnNlZCByZXN1bHQgb2YgdGhlIHRyYW5zbGF0aW9uc1xuICAgICAqL1xuICAgIGdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnM6IGFueSwga2V5OiBhbnksIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogYW55O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXkgKG9yIGFuIGFycmF5IG9mIGtleXMpXG4gICAgICogQHJldHVybnMgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgZ2V0KGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xuICAgICAqIHdoZW5ldmVyIHRoZSB0cmFuc2xhdGlvbiBjaGFuZ2VzLlxuICAgICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xuICAgICAqL1xuICAgIGdldFN0cmVhbU9uVHJhbnNsYXRpb25DaGFuZ2Uoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIHRyYW5zbGF0ZWQgdmFsdWVzIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKSB3aGljaCB1cGRhdGVzXG4gICAgICogd2hlbmV2ZXIgdGhlIGxhbmd1YWdlIGNoYW5nZXMuXG4gICAgICogQHJldHVybnMgQSBzdHJlYW0gb2YgdGhlIHRyYW5zbGF0ZWQga2V5LCBvciBhbiBvYmplY3Qgb2YgdHJhbnNsYXRlZCBrZXlzXG4gICAgICovXG4gICAgc3RyZWFtKGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXG4gICAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgICAqL1xuICAgIGluc3RhbnQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IHN0cmluZyB8IGFueTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5LCBhZnRlciBjb21waWxpbmcgaXRcbiAgICAgKi9cbiAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGxhbmc/OiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xuICAgICAqL1xuICAgIHByaXZhdGUgY2hhbmdlTGFuZztcbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSBkZWZhdWx0IGxhbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIGNoYW5nZURlZmF1bHRMYW5nO1xuICAgIC8qKlxuICAgICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXG4gICAgICovXG4gICAgcmVsb2FkTGFuZyhsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBpbm5lciB0cmFuc2xhdGlvblxuICAgICAqL1xuICAgIHJlc2V0TGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxuICAgICAqL1xuICAgIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGUtREVcIlxuICAgICAqL1xuICAgIGdldEJyb3dzZXJDdWx0dXJlTGFuZygpOiBzdHJpbmc7XG59XG4iXX0=