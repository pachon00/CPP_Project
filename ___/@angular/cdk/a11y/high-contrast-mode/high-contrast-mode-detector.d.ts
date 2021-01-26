/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
/** Set of possible high-contrast mode backgrounds. */
import * as ɵngcc0 from '@angular/core';
export declare const enum HighContrastMode {
    NONE = 0,
    BLACK_ON_WHITE = 1,
    WHITE_ON_BLACK = 2
}
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
export declare const BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
export declare const WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
/** CSS class applied to the document body when in high-contrast mode. */
export declare const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
/**
 * Service to determine whether the browser is currently in a high-constrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
export declare class HighContrastModeDetector {
    private _platform;
    private _document;
    constructor(_platform: Platform, document: any);
    /** Gets the current high-constrast-mode for the page. */
    getHighContrastMode(): HighContrastMode;
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    _applyBodyHighContrastModeCssClasses(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HighContrastModeDetector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaC1jb250cmFzdC1tb2RlLWRldGVjdG9yLmQudHMiLCJzb3VyY2VzIjpbImhpZ2gtY29udHJhc3QtbW9kZS1kZXRlY3Rvci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbi8qKiBTZXQgb2YgcG9zc2libGUgaGlnaC1jb250cmFzdCBtb2RlIGJhY2tncm91bmRzLiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBIaWdoQ29udHJhc3RNb2RlIHtcbiAgICBOT05FID0gMCxcbiAgICBCTEFDS19PTl9XSElURSA9IDEsXG4gICAgV0hJVEVfT05fQkxBQ0sgPSAyXG59XG4vKiogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBpbiBibGFjay1vbi13aGl0ZSBoaWdoLWNvbnRyYXN0IG1vZGUuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBCTEFDS19PTl9XSElURV9DU1NfQ0xBU1MgPSBcImNkay1oaWdoLWNvbnRyYXN0LWJsYWNrLW9uLXdoaXRlXCI7XG4vKiogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBpbiB3aGl0ZS1vbi1ibGFjayBoaWdoLWNvbnRyYXN0IG1vZGUuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBXSElURV9PTl9CTEFDS19DU1NfQ0xBU1MgPSBcImNkay1oaWdoLWNvbnRyYXN0LXdoaXRlLW9uLWJsYWNrXCI7XG4vKiogQ1NTIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkgd2hlbiBpbiBoaWdoLWNvbnRyYXN0IG1vZGUuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBISUdIX0NPTlRSQVNUX01PREVfQUNUSVZFX0NTU19DTEFTUyA9IFwiY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlXCI7XG4vKipcbiAqIFNlcnZpY2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGJyb3dzZXIgaXMgY3VycmVudGx5IGluIGEgaGlnaC1jb25zdHJhc3QtbW9kZSBlbnZpcm9ubWVudC5cbiAqXG4gKiBNaWNyb3NvZnQgV2luZG93cyBzdXBwb3J0cyBhbiBhY2Nlc3NpYmlsaXR5IGZlYXR1cmUgY2FsbGVkIFwiSGlnaCBDb250cmFzdCBNb2RlXCIuIFRoaXMgbW9kZVxuICogY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiBhbGwgYXBwbGljYXRpb25zLCBpbmNsdWRpbmcgd2ViIGFwcGxpY2F0aW9ucywgdG8gZHJhbWF0aWNhbGx5IGluY3JlYXNlXG4gKiBjb250cmFzdC5cbiAqXG4gKiBJRSwgRWRnZSwgYW5kIEZpcmVmb3ggY3VycmVudGx5IHN1cHBvcnQgdGhpcyBtb2RlLiBDaHJvbWUgZG9lcyBub3Qgc3VwcG9ydCBXaW5kb3dzIEhpZ2ggQ29udHJhc3RcbiAqIE1vZGUuIFRoaXMgc2VydmljZSBkb2VzIG5vdCBkZXRlY3QgaGlnaC1jb250cmFzdCBtb2RlIGFzIGFkZGVkIGJ5IHRoZSBDaHJvbWUgXCJIaWdoIENvbnRyYXN0XCJcbiAqIGJyb3dzZXIgZXh0ZW5zaW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBIaWdoQ29udHJhc3RNb2RlRGV0ZWN0b3Ige1xuICAgIHByaXZhdGUgX3BsYXRmb3JtO1xuICAgIHByaXZhdGUgX2RvY3VtZW50O1xuICAgIGNvbnN0cnVjdG9yKF9wbGF0Zm9ybTogUGxhdGZvcm0sIGRvY3VtZW50OiBhbnkpO1xuICAgIC8qKiBHZXRzIHRoZSBjdXJyZW50IGhpZ2gtY29uc3RyYXN0LW1vZGUgZm9yIHRoZSBwYWdlLiAqL1xuICAgIGdldEhpZ2hDb250cmFzdE1vZGUoKTogSGlnaENvbnRyYXN0TW9kZTtcbiAgICAvKiogQXBwbGllcyBDU1MgY2xhc3NlcyBpbmRpY2F0aW5nIGhpZ2gtY29udHJhc3QgbW9kZSB0byBkb2N1bWVudCBib2R5IChicm93c2VyLW9ubHkpLiAqL1xuICAgIF9hcHBseUJvZHlIaWdoQ29udHJhc3RNb2RlQ3NzQ2xhc3NlcygpOiB2b2lkO1xufVxuIl19