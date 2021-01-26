/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, NgZone, InjectionToken } from '@angular/core';
import { Clipboard } from './clipboard';
/** Object that can be used to configure the default options for `CdkCopyToClipboard`. */
import * as ɵngcc0 from '@angular/core';
export interface CdkCopyToClipboardConfig {
    /** Default number of attempts to make when copying text to the clipboard. */
    attempts?: number;
}
/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
export declare const CKD_COPY_TO_CLIPBOARD_CONFIG: InjectionToken<CdkCopyToClipboardConfig>;
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
export declare class CdkCopyToClipboard {
    private _clipboard;
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    private _ngZone?;
    /** Content to be copied. */
    text: string;
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */
    attempts: number;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */
    copied: EventEmitter<boolean>;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     * @deprecated Use `cdkCopyToClipboardCopied` instead.
     * @breaking-change 10.0.0
     */
    _deprecatedCopied: EventEmitter<boolean>;
    constructor(_clipboard: Clipboard, 
    /**
     * @deprecated _ngZone parameter to become required.
     * @breaking-change 10.0.0
     */
    _ngZone?: NgZone | undefined, config?: CdkCopyToClipboardConfig);
    /** Copies the current text to the clipboard. */
    copy(attempts?: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkCopyToClipboard>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkCopyToClipboard, "[cdkCopyToClipboard]", never, {
    "text": "cdkCopyToClipboard";
    "attempts": "cdkCopyToClipboardAttempts";
}, {
    "copied": "cdkCopyToClipboardCopied";
    "_deprecatedCopied": "copied";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10by1jbGlwYm9hcmQuZC50cyIsInNvdXJjZXMiOlsiY29weS10by1jbGlwYm9hcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICcuL2NsaXBib2FyZCc7XG4vKiogT2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGBDZGtDb3B5VG9DbGlwYm9hcmRgLiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtDb3B5VG9DbGlwYm9hcmRDb25maWcge1xuICAgIC8qKiBEZWZhdWx0IG51bWJlciBvZiBhdHRlbXB0cyB0byBtYWtlIHdoZW4gY29weWluZyB0ZXh0IHRvIHRoZSBjbGlwYm9hcmQuICovXG4gICAgYXR0ZW1wdHM/OiBudW1iZXI7XG59XG4vKiogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zIHRvIGBDZGtDb3B5VG9DbGlwYm9hcmRgLiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ0tEX0NPUFlfVE9fQ0xJUEJPQVJEX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48Q2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnPjtcbi8qKlxuICogUHJvdmlkZXMgYmVoYXZpb3IgZm9yIGEgYnV0dG9uIHRoYXQgd2hlbiBjbGlja2VkIGNvcGllcyBjb250ZW50IGludG8gdXNlcidzXG4gKiBjbGlwYm9hcmQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka0NvcHlUb0NsaXBib2FyZCB7XG4gICAgcHJpdmF0ZSBfY2xpcGJvYXJkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIF9uZ1pvbmUgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByaXZhdGUgX25nWm9uZT87XG4gICAgLyoqIENvbnRlbnQgdG8gYmUgY29waWVkLiAqL1xuICAgIHRleHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSB0aW1lcyB0byBhdHRlbXB0IHRvIGNvcHkgdGhlIHRleHQuIFRoaXMgbWF5IGJlIG5lY2Vzc2FyeSBmb3IgbG9uZ2VyIHRleHQsIGJlY2F1c2VcbiAgICAgKiB0aGUgYnJvd3NlciBuZWVkcyB0aW1lIHRvIGZpbGwgYW4gaW50ZXJtZWRpYXRlIHRleHRhcmVhIGVsZW1lbnQgYW5kIGNvcHkgdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgYXR0ZW1wdHM6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyB3aGVuIHNvbWUgdGV4dCBpcyBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZC4gVGhlXG4gICAgICogZW1pdHRlZCB2YWx1ZSBpbmRpY2F0ZXMgd2hldGhlciBjb3B5aW5nIHdhcyBzdWNjZXNzZnVsLlxuICAgICAqL1xuICAgIGNvcGllZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEVtaXRzIHdoZW4gc29tZSB0ZXh0IGlzIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkLiBUaGVcbiAgICAgKiBlbWl0dGVkIHZhbHVlIGluZGljYXRlcyB3aGV0aGVyIGNvcHlpbmcgd2FzIHN1Y2Nlc3NmdWwuXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIGBjZGtDb3B5VG9DbGlwYm9hcmRDb3BpZWRgIGluc3RlYWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBfZGVwcmVjYXRlZENvcGllZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIGNvbnN0cnVjdG9yKF9jbGlwYm9hcmQ6IENsaXBib2FyZCwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgX25nWm9uZSBwYXJhbWV0ZXIgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTAuMC4wXG4gICAgICovXG4gICAgX25nWm9uZT86IE5nWm9uZSB8IHVuZGVmaW5lZCwgY29uZmlnPzogQ2RrQ29weVRvQ2xpcGJvYXJkQ29uZmlnKTtcbiAgICAvKiogQ29waWVzIHRoZSBjdXJyZW50IHRleHQgdG8gdGhlIGNsaXBib2FyZC4gKi9cbiAgICBjb3B5KGF0dGVtcHRzPzogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==