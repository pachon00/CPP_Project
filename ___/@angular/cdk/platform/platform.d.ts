/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Platform {
    private _platformId?;
    /** Whether the Angular application is being rendered in the browser. */
    isBrowser: boolean;
    /** Whether the current browser is Microsoft Edge. */
    EDGE: boolean;
    /** Whether the current rendering engine is Microsoft Trident. */
    TRIDENT: boolean;
    /** Whether the current rendering engine is Blink. */
    BLINK: boolean;
    /** Whether the current rendering engine is WebKit. */
    WEBKIT: boolean;
    /** Whether the current platform is Apple iOS. */
    IOS: boolean;
    /** Whether the current browser is Firefox. */
    FIREFOX: boolean;
    /** Whether the current platform is Android. */
    ANDROID: boolean;
    /** Whether the current browser is Safari. */
    SAFARI: boolean;
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    constructor(_platformId?: Object | undefined);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Platform>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZC50cyIsInNvdXJjZXMiOlsicGxhdGZvcm0uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBsYXRmb3JtIHtcbiAgICBwcml2YXRlIF9wbGF0Zm9ybUlkPztcbiAgICAvKiogV2hldGhlciB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBpcyBiZWluZyByZW5kZXJlZCBpbiB0aGUgYnJvd3Nlci4gKi9cbiAgICBpc0Jyb3dzZXI6IGJvb2xlYW47XG4gICAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBNaWNyb3NvZnQgRWRnZS4gKi9cbiAgICBFREdFOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgTWljcm9zb2Z0IFRyaWRlbnQuICovXG4gICAgVFJJREVOVDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgY3VycmVudCByZW5kZXJpbmcgZW5naW5lIGlzIEJsaW5rLiAqL1xuICAgIEJMSU5LOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgV2ViS2l0LiAqL1xuICAgIFdFQktJVDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBpcyBBcHBsZSBpT1MuICovXG4gICAgSU9TOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgRmlyZWZveC4gKi9cbiAgICBGSVJFRk9YOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlzIEFuZHJvaWQuICovXG4gICAgQU5EUk9JRDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIGlzIFNhZmFyaS4gKi9cbiAgICBTQUZBUkk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMCByZW1vdmUgb3B0aW9uYWwgZGVjb3JhdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtSWQ/OiBPYmplY3QgfCB1bmRlZmluZWQpO1xufVxuIl19