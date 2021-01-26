import { ModuleWithProviders, Provider } from '@angular/core';
import { CalendarModuleConfig } from './common/calendar-common.module';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './common/calendar-common.module';
import * as ɵngcc2 from './month/calendar-month.module';
import * as ɵngcc3 from './week/calendar-week.module';
import * as ɵngcc4 from './day/calendar-day.module';
export * from './common/calendar-common.module';
export * from './month/calendar-month.module';
export * from './week/calendar-week.module';
export * from './day/calendar-day.module';
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export declare class CalendarModule {
    static forRoot(dateAdapter: Provider, config?: CalendarModuleConfig): ModuleWithProviders<CalendarModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<CalendarModule, never, [typeof ɵngcc1.CalendarCommonModule, typeof ɵngcc2.CalendarMonthModule, typeof ɵngcc3.CalendarWeekModule, typeof ɵngcc4.CalendarDayModule], [typeof ɵngcc1.CalendarCommonModule, typeof ɵngcc2.CalendarMonthModule, typeof ɵngcc3.CalendarWeekModule, typeof ɵngcc4.CalendarDayModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<CalendarModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbImNhbGVuZGFyLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBFQW9CMEUsbUNBQW1COzs7QUFDN0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF5L2NhbGVuZGFyLWRheS5tb2R1bGUnO1xuLyoqXG4gKiBUaGUgbWFpbiBtb2R1bGUgb2YgdGhpcyBsaWJyYXJ5LiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGVyTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgaW1wb3J0czogW1xuICogICAgIENhbGVuZGVyTW9kdWxlLmZvclJvb3QoKVxuICogICBdXG4gKiB9KVxuICogY2xhc3MgTXlNb2R1bGUge31cbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGRhdGVBZGFwdGVyOiBQcm92aWRlciwgY29uZmlnPzogQ2FsZW5kYXJNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzO1xufVxuIl19