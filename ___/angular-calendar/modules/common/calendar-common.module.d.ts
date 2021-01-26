import { ModuleWithProviders, Provider } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './calendar-event-actions.component';
import * as ɵngcc2 from './calendar-event-title.component';
import * as ɵngcc3 from './calendar-tooltip.directive';
import * as ɵngcc4 from './calendar-previous-view.directive';
import * as ɵngcc5 from './calendar-next-view.directive';
import * as ɵngcc6 from './calendar-today.directive';
import * as ɵngcc7 from './calendar-date.pipe';
import * as ɵngcc8 from './calendar-event-title.pipe';
import * as ɵngcc9 from './calendar-a11y.pipe';
import * as ɵngcc10 from './click.directive';
import * as ɵngcc11 from './keydown-enter.directive';
import * as ɵngcc12 from '@angular/common';
export interface CalendarModuleConfig {
    eventTitleFormatter?: Provider;
    dateFormatter?: Provider;
    utils?: Provider;
    a11y?: Provider;
}
export * from './calendar-event-title-formatter.provider';
export * from './calendar-moment-date-formatter.provider';
export * from './calendar-native-date-formatter.provider';
export * from './calendar-angular-date-formatter.provider';
export * from './calendar-date-formatter.provider';
export * from './calendar-utils.provider';
export * from './calendar-a11y.provider';
export * from './calendar-a11y.interface';
export * from './calendar-date-formatter.interface';
export * from './calendar-event-times-changed-event.interface';
export * from '../../date-adapters/date-adapter';
export * from './calendar-view.enum';
export { CalendarEvent, EventAction as CalendarEventAction, DAYS_OF_WEEK, ViewPeriod as CalendarViewPeriod } from 'calendar-utils';
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export declare class CalendarCommonModule {
    static forRoot(dateAdapter: Provider, config?: CalendarModuleConfig): ModuleWithProviders<CalendarCommonModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CalendarCommonModule, [typeof ɵngcc1.CalendarEventActionsComponent, typeof ɵngcc2.CalendarEventTitleComponent, typeof ɵngcc3.CalendarTooltipWindowComponent, typeof ɵngcc3.CalendarTooltipDirective, typeof ɵngcc4.CalendarPreviousViewDirective, typeof ɵngcc5.CalendarNextViewDirective, typeof ɵngcc6.CalendarTodayDirective, typeof ɵngcc7.CalendarDatePipe, typeof ɵngcc8.CalendarEventTitlePipe, typeof ɵngcc9.CalendarA11yPipe, typeof ɵngcc10.ClickDirective, typeof ɵngcc11.KeydownEnterDirective], [typeof ɵngcc12.CommonModule], [typeof ɵngcc1.CalendarEventActionsComponent, typeof ɵngcc2.CalendarEventTitleComponent, typeof ɵngcc3.CalendarTooltipWindowComponent, typeof ɵngcc3.CalendarTooltipDirective, typeof ɵngcc4.CalendarPreviousViewDirective, typeof ɵngcc5.CalendarNextViewDirective, typeof ɵngcc6.CalendarTodayDirective, typeof ɵngcc7.CalendarDatePipe, typeof ɵngcc8.CalendarEventTitlePipe, typeof ɵngcc9.CalendarA11yPipe, typeof ɵngcc10.ClickDirective, typeof ɵngcc11.KeydownEnterDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CalendarCommonModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItY29tbW9uLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci1jb21tb24ubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRUFvQzBFLHlDQUFtQjs7O0FBQzdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJNb2R1bGVDb25maWcge1xuICAgIGV2ZW50VGl0bGVGb3JtYXR0ZXI/OiBQcm92aWRlcjtcbiAgICBkYXRlRm9ybWF0dGVyPzogUHJvdmlkZXI7XG4gICAgdXRpbHM/OiBQcm92aWRlcjtcbiAgICBhMTF5PzogUHJvdmlkZXI7XG59XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW1vbWVudC1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWFuZ3VsYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLXV0aWxzLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItYTExeS5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWExMXkuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuZXhwb3J0IHsgQ2FsZW5kYXJFdmVudCwgRXZlbnRBY3Rpb24gYXMgQ2FsZW5kYXJFdmVudEFjdGlvbiwgREFZU19PRl9XRUVLLCBWaWV3UGVyaW9kIGFzIENhbGVuZGFyVmlld1BlcmlvZCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbi8qKlxuICogSW1wb3J0IHRoaXMgbW9kdWxlIHRvIGlmIHlvdSdyZSBqdXN0IHVzaW5nIGEgc2luZ3VsYXIgdmlldyBhbmQgd2FudCB0byBzYXZlIG9uIGJ1bmRsZSBzaXplLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlLCBDYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLmZvclJvb3QoKSxcbiAqICAgICBDYWxlbmRhck1vbnRoTW9kdWxlXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYWxlbmRhckNvbW1vbk1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZGF0ZUFkYXB0ZXI6IFByb3ZpZGVyLCBjb25maWc/OiBDYWxlbmRhck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM7XG59XG4iXX0=