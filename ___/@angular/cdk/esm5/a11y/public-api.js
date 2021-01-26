/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export * from './aria-describer/aria-describer';
export * from './key-manager/activedescendant-key-manager';
export * from './key-manager/focus-key-manager';
export * from './key-manager/list-key-manager';
export * from './focus-trap/focus-trap';
export * from './interactivity-checker/interactivity-checker';
export * from './live-announcer/live-announcer';
export * from './live-announcer/live-announcer-tokens';
export * from './focus-monitor/focus-monitor';
export * from './fake-mousedown';
export * from './a11y-module';
export { HighContrastModeDetector, } from './high-contrast-mode/high-contrast-mode-detector';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvYTExeS9wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILGNBQWMsaUNBQWlDLENBQUM7QUFDaEQsY0FBYyw0Q0FBNEMsQ0FBQztBQUMzRCxjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGNBQWMsZ0NBQWdDLENBQUM7QUFDL0MsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLCtDQUErQyxDQUFDO0FBQzlELGNBQWMsaUNBQWlDLENBQUM7QUFDaEQsY0FBYyx3Q0FBd0MsQ0FBQztBQUN2RCxjQUFjLCtCQUErQixDQUFDO0FBQzlDLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyxlQUFlLENBQUM7QUFDOUIsT0FBTyxFQUNMLHdCQUF3QixHQUV6QixNQUFNLGtEQUFrRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5leHBvcnQgKiBmcm9tICcuL2FyaWEtZGVzY3JpYmVyL2FyaWEtZGVzY3JpYmVyJztcbmV4cG9ydCAqIGZyb20gJy4va2V5LW1hbmFnZXIvYWN0aXZlZGVzY2VuZGFudC1rZXktbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2tleS1tYW5hZ2VyL2ZvY3VzLWtleS1tYW5hZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4va2V5LW1hbmFnZXIvbGlzdC1rZXktbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcCc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyYWN0aXZpdHktY2hlY2tlci9pbnRlcmFjdGl2aXR5LWNoZWNrZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXZlLWFubm91bmNlci9saXZlLWFubm91bmNlcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLXRva2Vucyc7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLW1vbml0b3IvZm9jdXMtbW9uaXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2Zha2UtbW91c2Vkb3duJztcbmV4cG9ydCAqIGZyb20gJy4vYTExeS1tb2R1bGUnO1xuZXhwb3J0IHtcbiAgSGlnaENvbnRyYXN0TW9kZURldGVjdG9yLFxuICBIaWdoQ29udHJhc3RNb2RlLFxufSBmcm9tICcuL2hpZ2gtY29udHJhc3QtbW9kZS9oaWdoLWNvbnRyYXN0LW1vZGUtZGV0ZWN0b3InO1xuIl19