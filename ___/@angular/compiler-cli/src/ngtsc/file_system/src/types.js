/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/file_system/src/types", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQSBgc3RyaW5nYCByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyB0eXBlIG9mIHBhdGgsIHdpdGggYSBwYXJ0aWN1bGFyIGJyYW5kIGBCYC5cbiAqXG4gKiBBIGBzdHJpbmdgIGlzIG5vdCBhc3NpZ25hYmxlIHRvIGEgYEJyYW5kZWRQYXRoYCwgYnV0IGEgYEJyYW5kZWRQYXRoYCBpcyBhc3NpZ25hYmxlIHRvIGEgYHN0cmluZ2AuXG4gKiBUd28gYEJyYW5kZWRQYXRoYHMgd2l0aCBkaWZmZXJlbnQgYnJhbmRzIGFyZSBub3QgbXV0dWFsbHkgYXNzaWduYWJsZS5cbiAqL1xuZXhwb3J0IHR5cGUgQnJhbmRlZFBhdGg8QiBleHRlbmRzIHN0cmluZz4gPSBzdHJpbmcgJiB7XG4gIF9icmFuZDogQjtcbn07XG5cbi8qKlxuICogQSBmdWxseSBxdWFsaWZpZWQgcGF0aCBpbiB0aGUgZmlsZSBzeXN0ZW0sIGluIFBPU0lYIGZvcm0uXG4gKi9cbmV4cG9ydCB0eXBlIEFic29sdXRlRnNQYXRoID0gQnJhbmRlZFBhdGg8J0Fic29sdXRlRnNQYXRoJz47XG5cbi8qKlxuICogQSBwYXRoIHRoYXQncyByZWxhdGl2ZSB0byBhbm90aGVyICh1bnNwZWNpZmllZCkgcm9vdC5cbiAqXG4gKiBUaGlzIGRvZXMgbm90IG5lY2Vzc2FyaWx5IGhhdmUgdG8gcmVmZXIgdG8gYSBwaHlzaWNhbCBmaWxlLlxuICovXG5leHBvcnQgdHlwZSBQYXRoU2VnbWVudCA9IEJyYW5kZWRQYXRoPCdQYXRoU2VnbWVudCc+O1xuXG4vKipcbiAqIEEgYmFzaWMgaW50ZXJmYWNlIHRvIGFic3RyYWN0IHRoZSB1bmRlcmx5aW5nIGZpbGUtc3lzdGVtLlxuICpcbiAqIFRoaXMgbWFrZXMgaXQgZWFzaWVyIHRvIHByb3ZpZGUgbW9jayBmaWxlLXN5c3RlbXMgaW4gdW5pdCB0ZXN0cyxcbiAqIGJ1dCBhbHNvIHRvIGNyZWF0ZSBjbGV2ZXIgZmlsZS1zeXN0ZW1zIHRoYXQgaGF2ZSBmZWF0dXJlcyBzdWNoIGFzIGNhY2hpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN5c3RlbSB7XG4gIGV4aXN0cyhwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW47XG4gIHJlYWRGaWxlKHBhdGg6IEFic29sdXRlRnNQYXRoKTogc3RyaW5nO1xuICB3cml0ZUZpbGUocGF0aDogQWJzb2x1dGVGc1BhdGgsIGRhdGE6IHN0cmluZywgZXhjbHVzaXZlPzogYm9vbGVhbik6IHZvaWQ7XG4gIHJlbW92ZUZpbGUocGF0aDogQWJzb2x1dGVGc1BhdGgpOiB2b2lkO1xuICBzeW1saW5rKHRhcmdldDogQWJzb2x1dGVGc1BhdGgsIHBhdGg6IEFic29sdXRlRnNQYXRoKTogdm9pZDtcbiAgcmVhZGRpcihwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IFBhdGhTZWdtZW50W107XG4gIGxzdGF0KHBhdGg6IEFic29sdXRlRnNQYXRoKTogRmlsZVN0YXRzO1xuICBzdGF0KHBhdGg6IEFic29sdXRlRnNQYXRoKTogRmlsZVN0YXRzO1xuICBwd2QoKTogQWJzb2x1dGVGc1BhdGg7XG4gIGNoZGlyKHBhdGg6IEFic29sdXRlRnNQYXRoKTogdm9pZDtcbiAgZXh0bmFtZShwYXRoOiBBYnNvbHV0ZUZzUGF0aHxQYXRoU2VnbWVudCk6IHN0cmluZztcbiAgY29weUZpbGUoZnJvbTogQWJzb2x1dGVGc1BhdGgsIHRvOiBBYnNvbHV0ZUZzUGF0aCk6IHZvaWQ7XG4gIG1vdmVGaWxlKGZyb206IEFic29sdXRlRnNQYXRoLCB0bzogQWJzb2x1dGVGc1BhdGgpOiB2b2lkO1xuICBlbnN1cmVEaXIocGF0aDogQWJzb2x1dGVGc1BhdGgpOiB2b2lkO1xuICByZW1vdmVEZWVwKHBhdGg6IEFic29sdXRlRnNQYXRoKTogdm9pZDtcbiAgaXNDYXNlU2Vuc2l0aXZlKCk6IGJvb2xlYW47XG4gIGlzUm9vdChwYXRoOiBBYnNvbHV0ZUZzUGF0aCk6IGJvb2xlYW47XG4gIGlzUm9vdGVkKHBhdGg6IHN0cmluZyk6IGJvb2xlYW47XG4gIHJlc29sdmUoLi4ucGF0aHM6IHN0cmluZ1tdKTogQWJzb2x1dGVGc1BhdGg7XG4gIGRpcm5hbWU8VCBleHRlbmRzIFBhdGhTdHJpbmc+KGZpbGU6IFQpOiBUO1xuICBqb2luPFQgZXh0ZW5kcyBQYXRoU3RyaW5nPihiYXNlUGF0aDogVCwgLi4ucGF0aHM6IHN0cmluZ1tdKTogVDtcbiAgcmVsYXRpdmU8VCBleHRlbmRzIFBhdGhTdHJpbmc+KGZyb206IFQsIHRvOiBUKTogUGF0aFNlZ21lbnQ7XG4gIGJhc2VuYW1lKGZpbGVQYXRoOiBzdHJpbmcsIGV4dGVuc2lvbj86IHN0cmluZyk6IFBhdGhTZWdtZW50O1xuICByZWFscGF0aChmaWxlUGF0aDogQWJzb2x1dGVGc1BhdGgpOiBBYnNvbHV0ZUZzUGF0aDtcbiAgZ2V0RGVmYXVsdExpYkxvY2F0aW9uKCk6IEFic29sdXRlRnNQYXRoO1xuICBub3JtYWxpemU8VCBleHRlbmRzIFBhdGhTdHJpbmc+KHBhdGg6IFQpOiBUO1xufVxuXG5leHBvcnQgdHlwZSBQYXRoU3RyaW5nID0gc3RyaW5nIHwgQWJzb2x1dGVGc1BhdGggfCBQYXRoU2VnbWVudDtcblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBhYm91dCBhbiBvYmplY3QgaW4gdGhlIEZpbGVTeXN0ZW0uXG4gKiBUaGlzIGlzIGFuYWxvZ291cyB0byB0aGUgYGZzLlN0YXRzYCBjbGFzcyBpbiBOb2RlLmpzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTdGF0cyB7XG4gIGlzRmlsZSgpOiBib29sZWFuO1xuICBpc0RpcmVjdG9yeSgpOiBib29sZWFuO1xuICBpc1N5bWJvbGljTGluaygpOiBib29sZWFuO1xufVxuIl19