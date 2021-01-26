import { ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './components/footer/footer-template.directive';
import * as ɵngcc2 from './directives/visibility.directive';
import * as ɵngcc3 from './directives/draggable.directive';
import * as ɵngcc4 from './directives/resizeable.directive';
import * as ɵngcc5 from './directives/orderable.directive';
import * as ɵngcc6 from './directives/long-press.directive';
import * as ɵngcc7 from './components/body/scroller.component';
import * as ɵngcc8 from './components/datatable.component';
import * as ɵngcc9 from './components/columns/column.directive';
import * as ɵngcc10 from './components/header/header.component';
import * as ɵngcc11 from './components/header/header-cell.component';
import * as ɵngcc12 from './components/body/body.component';
import * as ɵngcc13 from './components/footer/footer.component';
import * as ɵngcc14 from './components/footer/pager.component';
import * as ɵngcc15 from './components/body/progress-bar.component';
import * as ɵngcc16 from './components/body/body-row.component';
import * as ɵngcc17 from './components/body/body-row-wrapper.component';
import * as ɵngcc18 from './components/row-detail/row-detail.directive';
import * as ɵngcc19 from './components/body/body-group-header.directive';
import * as ɵngcc20 from './components/row-detail/row-detail-template.directive';
import * as ɵngcc21 from './components/body/body-cell.component';
import * as ɵngcc22 from './components/body/selection.component';
import * as ɵngcc23 from './components/columns/column-header.directive';
import * as ɵngcc24 from './components/columns/column-cell.directive';
import * as ɵngcc25 from './components/columns/tree.directive';
import * as ɵngcc26 from './components/footer/footer.directive';
import * as ɵngcc27 from './components/body/body-group-header-template.directive';
import * as ɵngcc28 from './components/body/summary/summary-row.component';
import * as ɵngcc29 from '@angular/common';
export declare class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration: INgxDatatableConfig): ModuleWithProviders<NgxDatatableModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<NgxDatatableModule, [typeof ɵngcc1.DataTableFooterTemplateDirective, typeof ɵngcc2.VisibilityDirective, typeof ɵngcc3.DraggableDirective, typeof ɵngcc4.ResizeableDirective, typeof ɵngcc5.OrderableDirective, typeof ɵngcc6.LongPressDirective, typeof ɵngcc7.ScrollerComponent, typeof ɵngcc8.DatatableComponent, typeof ɵngcc9.DataTableColumnDirective, typeof ɵngcc10.DataTableHeaderComponent, typeof ɵngcc11.DataTableHeaderCellComponent, typeof ɵngcc12.DataTableBodyComponent, typeof ɵngcc13.DataTableFooterComponent, typeof ɵngcc14.DataTablePagerComponent, typeof ɵngcc15.ProgressBarComponent, typeof ɵngcc16.DataTableBodyRowComponent, typeof ɵngcc17.DataTableRowWrapperComponent, typeof ɵngcc18.DatatableRowDetailDirective, typeof ɵngcc19.DatatableGroupHeaderDirective, typeof ɵngcc20.DatatableRowDetailTemplateDirective, typeof ɵngcc21.DataTableBodyCellComponent, typeof ɵngcc22.DataTableSelectionComponent, typeof ɵngcc23.DataTableColumnHeaderDirective, typeof ɵngcc24.DataTableColumnCellDirective, typeof ɵngcc25.DataTableColumnCellTreeToggle, typeof ɵngcc26.DatatableFooterDirective, typeof ɵngcc27.DatatableGroupHeaderTemplateDirective, typeof ɵngcc28.DataTableSummaryRowComponent], [typeof ɵngcc29.CommonModule], [typeof ɵngcc8.DatatableComponent, typeof ɵngcc18.DatatableRowDetailDirective, typeof ɵngcc19.DatatableGroupHeaderDirective, typeof ɵngcc20.DatatableRowDetailTemplateDirective, typeof ɵngcc9.DataTableColumnDirective, typeof ɵngcc23.DataTableColumnHeaderDirective, typeof ɵngcc24.DataTableColumnCellDirective, typeof ɵngcc25.DataTableColumnCellTreeToggle, typeof ɵngcc1.DataTableFooterTemplateDirective, typeof ɵngcc26.DatatableFooterDirective, typeof ɵngcc14.DataTablePagerComponent, typeof ɵngcc27.DatatableGroupHeaderTemplateDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<NgxDatatableModule>;
}
/**
 * Interface definition for INgxDatatableConfig global configuration
 */
export interface INgxDatatableConfig {
    messages: {
        emptyMessage: string;
        totalMessage: string;
        selectedMessage: string;
    };
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsibmd4LWRhdGF0YWJsZS5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozt3REFLd0QsdUNBQW1COzs7QUFDM0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ3hEYXRhdGFibGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSBnbG9iYWwgY29uZmlndXJhdGlvbiB2aWEgSU5neERhdGF0YWJsZUNvbmZpZ1xuICAgICAqIEBwYXJhbSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbjogSU5neERhdGF0YWJsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM7XG59XG4vKipcbiAqIEludGVyZmFjZSBkZWZpbml0aW9uIGZvciBJTmd4RGF0YXRhYmxlQ29uZmlnIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSU5neERhdGF0YWJsZUNvbmZpZyB7XG4gICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gICAgICAgIHRvdGFsTWVzc2FnZTogc3RyaW5nO1xuICAgICAgICBzZWxlY3RlZE1lc3NhZ2U6IHN0cmluZztcbiAgICB9O1xufVxuIl19