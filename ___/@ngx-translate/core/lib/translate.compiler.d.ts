import * as ɵngcc0 from '@angular/core';
export declare abstract class TranslateCompiler {
    abstract compile(value: string, lang: string): string | Function;
    abstract compileTranslations(translations: any, lang: string): any;
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
export declare class TranslateFakeCompiler extends TranslateCompiler {
    compile(value: string, lang: string): string | Function;
    compileTranslations(translations: any, lang: string): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslateFakeCompiler>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TranslateFakeCompiler>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBpbGVyLmQudHMiLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS5jb21waWxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGVDb21waWxlciB7XG4gICAgYWJzdHJhY3QgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBzdHJpbmcgfCBGdW5jdGlvbjtcbiAgICBhYnN0cmFjdCBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnk7XG59XG4vKipcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYW5zbGF0ZUZha2VDb21waWxlciBleHRlbmRzIFRyYW5zbGF0ZUNvbXBpbGVyIHtcbiAgICBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uO1xuICAgIGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueTtcbn1cbiJdfQ==