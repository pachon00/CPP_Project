import { ModuleWithProviders, Provider } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './lib/translate.pipe';
import * as ɵngcc2 from './lib/translate.directive';
export * from "./lib/translate.loader";
export * from "./lib/translate.service";
export * from "./lib/missing-translation-handler";
export * from "./lib/translate.parser";
export * from "./lib/translate.compiler";
export * from "./lib/translate.directive";
export * from "./lib/translate.pipe";
export * from "./lib/translate.store";
export interface TranslateModuleConfig {
    loader?: Provider;
    compiler?: Provider;
    parser?: Provider;
    missingTranslationHandler?: Provider;
    isolate?: boolean;
    extend?: boolean;
    useDefaultLang?: boolean;
}
export declare class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     */
    static forRoot(config?: TranslateModuleConfig): ModuleWithProviders<TranslateModule>;
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    static forChild(config?: TranslateModuleConfig): ModuleWithProviders<TranslateModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TranslateModule, [typeof ɵngcc1.TranslatePipe, typeof ɵngcc2.TranslateDirective], never, [typeof ɵngcc1.TranslatePipe, typeof ɵngcc2.TranslateDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TranslateModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5kLnRzIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29EQXFCb0Qsb0NBQW1COzs7O3FEQUlsQixvQ0FBbUI7OztBQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUubG9hZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi90cmFuc2xhdGUucGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmNvbXBpbGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5waXBlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnN0b3JlXCI7XG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyB7XG4gICAgbG9hZGVyPzogUHJvdmlkZXI7XG4gICAgY29tcGlsZXI/OiBQcm92aWRlcjtcbiAgICBwYXJzZXI/OiBQcm92aWRlcjtcbiAgICBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyPzogUHJvdmlkZXI7XG4gICAgaXNvbGF0ZT86IGJvb2xlYW47XG4gICAgZXh0ZW5kPzogYm9vbGVhbjtcbiAgICB1c2VEZWZhdWx0TGFuZz86IGJvb2xlYW47XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmFuc2xhdGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBUcmFuc2xhdGVNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzO1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIG90aGVyIChub24gcm9vdCkgbW9kdWxlcyB0byBpbXBvcnQgdGhlIGRpcmVjdGl2ZS9waXBlXG4gICAgICovXG4gICAgc3RhdGljIGZvckNoaWxkKGNvbmZpZz86IFRyYW5zbGF0ZU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM7XG59XG4iXX0=