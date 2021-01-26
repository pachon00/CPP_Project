/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TranslateHttpLoader = /** @class */ (function () {
    function TranslateHttpLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = "/assets/i18n/"; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     */
    /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    TranslateHttpLoader.prototype.getTranslation = /**
     * Gets the translations from the server
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return this.http.get("" + this.prefix + lang + this.suffix);
    };
    return TranslateHttpLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TranslateHttpLoader };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyYW5zbGF0ZS1odHRwLWxvYWRlci5qcyIsInNvdXJjZXMiOlsibmc6L0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyL2xpYi9odHRwLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUE7SUFDRSw2QkFBb0IsSUFBZ0IsRUFBUyxNQUFnQyxFQUFTLE1BQXdCO1FBQWpFLHVCQUFBLEVBQUEsd0JBQWdDO1FBQVMsdUJBQUEsRUFBQSxnQkFBd0I7UUFBMUYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQTBCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7S0FBSTs7Ozs7Ozs7O0lBSzNHLDRDQUFjOzs7OztJQUFyQixVQUFzQixJQUFZO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBUSxDQUFDLENBQUM7S0FDN0Q7SUFDSCwwQkFBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7VHJhbnNsYXRlTG9hZGVyfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZUh0dHBMb2FkZXIgaW1wbGVtZW50cyBUcmFuc2xhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBwcmVmaXg6IHN0cmluZyA9IFwiL2Fzc2V0cy9pMThuL1wiLCBwdWJsaWMgc3VmZml4OiBzdHJpbmcgPSBcIi5qc29uXCIpIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRyYW5zbGF0aW9ucyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucHJlZml4fSR7bGFuZ30ke3RoaXMuc3VmZml4fWApO1xuICB9XG59XG4iXX0=