import { __decorate, __metadata, __param, __rest } from 'tslib';
import { Input, TemplateRef, Component, ElementRef, Injector, Renderer2, ComponentFactoryResolver, ViewContainerRef, Inject, HostListener, Directive, EventEmitter, Output, Injectable, LOCALE_ID, Pipe, InjectionToken, NgModule, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT, formatDate, I18nPluralPipe, CommonModule } from '@angular/common';
import { positionElements } from 'positioning';
import { Subject, of, timer, Observable, BehaviorSubject, interval } from 'rxjs';
import { takeUntil, startWith, switchMapTo, map } from 'rxjs/operators';
import { validateEvents as validateEvents$1, getMonthView, getWeekViewHeader, getWeekView } from 'calendar-utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'angular-draggable-droppable';
import * as ɵngcc3 from 'angular-resizable-element';

const _c0 = function (a0) { return { action: a0 }; };
function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r121 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r121); const action_r118 = ctx.$implicit; const event_r114 = ɵngcc0.ɵɵnextContext(2).event; return action_r118.onClick({ event: event_r114, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r121); const action_r118 = ctx.$implicit; const event_r114 = ɵngcc0.ɵɵnextContext(2).event; return action_r118.onClick({ event: event_r114, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r118 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", action_r118.cssClass)("innerHtml", action_r118.label, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 3, ɵngcc0.ɵɵpureFunction1(6, _c0, action_r118), "actionButtonLabel"));
} }
function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵtemplate(1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r124 = ɵngcc0.ɵɵnextContext();
    const event_r114 = ctx_r124.event;
    const trackByActionId_r115 = ctx_r124.trackByActionId;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", event_r114.actions)("ngForTrackBy", trackByActionId_r115);
} }
function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
} if (rf & 2) {
    const event_r114 = ctx.event;
    ɵngcc0.ɵɵproperty("ngIf", event_r114.actions);
} }
function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { event: a0, trackByActionId: a1 }; };
const _c2 = function () { return {}; };
function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 2);
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
} if (rf & 2) {
    const event_r128 = ctx.event;
    const view_r129 = ctx.view;
    ɵngcc0.ɵɵproperty("innerHTML", ɵngcc0.ɵɵpipeBind3(1, 2, event_r128.title, view_r129, event_r128), ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 6, ɵngcc0.ɵɵpureFunction0(9, _c2), "hideEventTitle"));
} }
function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) { }
const _c3 = function (a0, a1) { return { event: a0, view: a1 }; };
function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelement(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const contents_r133 = ctx.contents;
    const placement_r134 = ctx.placement;
    ɵngcc0.ɵɵproperty("ngClass", "cal-tooltip-" + placement_r134);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("innerHtml", contents_r133, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) { }
const _c4 = function (a0, a1, a2) { return { contents: a0, placement: a1, event: a2 }; };
const _c5 = function (a0) { return { backgroundColor: a0 }; };
function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) { if (rf & 1) {
    const _r141 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mwl-calendar-month-cell", 7);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const day_r139 = ctx.$implicit; const ctx_r140 = ɵngcc0.ɵɵnextContext(2); return ctx_r140.dayClicked.emit({ day: day_r139, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const day_r139 = ctx.$implicit; const ctx_r142 = ɵngcc0.ɵɵnextContext(2); return ctx_r142.dayClicked.emit({ day: day_r139, sourceEvent: $event }); })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const ctx_r143 = ɵngcc0.ɵɵnextContext(2); return ctx_r143.toggleDayHighlight($event.event, true); })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const ctx_r144 = ɵngcc0.ɵɵnextContext(2); return ctx_r144.toggleDayHighlight($event.event, false); })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const day_r139 = ctx.$implicit; const ctx_r145 = ɵngcc0.ɵɵnextContext(2); return ctx_r145.eventDropped(day_r139, $event.dropData.event, $event.dropData.draggedFrom); })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r141); const ctx_r146 = ɵngcc0.ɵɵnextContext(2); return ctx_r146.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r139 = ctx.$implicit;
    const ctx_r138 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", day_r139 == null ? null : day_r139.cssClass)("day", day_r139)("openDay", ctx_r138.openDay)("locale", ctx_r138.locale)("tooltipPlacement", ctx_r138.tooltipPlacement)("tooltipAppendToBody", ctx_r138.tooltipAppendToBody)("tooltipTemplate", ctx_r138.tooltipTemplate)("tooltipDelay", ctx_r138.tooltipDelay)("customTemplate", ctx_r138.cellTemplate)("ngStyle", ɵngcc0.ɵɵpureFunction1(15, _c5, day_r139.backgroundColor))("clickListenerDisabled", ctx_r138.dayClicked.observers.length === 0);
    ɵngcc0.ɵɵattribute("tabindex", ɵngcc0.ɵɵpipeBind2(1, 12, ɵngcc0.ɵɵpureFunction0(17, _c2), "monthCellTabIndex"));
} }
function CalendarMonthViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r148 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    ɵngcc0.ɵɵpipe(3, "slice");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "mwl-calendar-open-day-events", 6);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r148); const ctx_r147 = ɵngcc0.ɵɵnextContext(); return ctx_r147.eventClicked.emit({ event: $event.event, sourceEvent: $event.sourceEvent }); })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r148); const ctx_r149 = ɵngcc0.ɵɵnextContext(); return ctx_r149.eventDropped(ctx_r149.openDay, $event.dropData.event, $event.dropData.draggedFrom); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const rowIndex_r137 = ctx.$implicit;
    const ctx_r136 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind3(3, 9, ctx_r136.view.days, rowIndex_r137, rowIndex_r137 + ctx_r136.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r136.trackByDate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("locale", ctx_r136.locale)("isOpen", ctx_r136.openRowIndex === rowIndex_r137)("events", ctx_r136.openDay == null ? null : ctx_r136.openDay.events)("date", ctx_r136.openDay == null ? null : ctx_r136.openDay.date)("customTemplate", ctx_r136.openDayEventsTemplate)("eventTitleTemplate", ctx_r136.eventTitleTemplate)("eventActionsTemplate", ctx_r136.eventActionsTemplate);
} }
function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r159 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r159); const day_r157 = ctx.$implicit; const ctx_r158 = ɵngcc0.ɵɵnextContext(2); return ctx_r158.columnHeaderClicked.emit({ isoDayNumber: day_r157.day, sourceEvent: $event }); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r157 = ctx.$implicit;
    const locale_r154 = ɵngcc0.ɵɵnextContext().locale;
    ɵngcc0.ɵɵclassProp("cal-past", day_r157.isPast)("cal-today", day_r157.isToday)("cal-future", day_r157.isFuture)("cal-weekend", day_r157.isWeekend);
    ɵngcc0.ɵɵproperty("ngClass", day_r157.cssClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 10, day_r157.date, "monthViewColumnHeader", locale_r154), " ");
} }
function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const days_r153 = ctx.days;
    const trackByWeekDayHeaderDate_r155 = ctx.trackByWeekDayHeaderDate;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", days_r153)("ngForTrackBy", trackByWeekDayHeaderDate_r155);
} }
function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { days: a0, locale: a1, trackByWeekDayHeaderDate: a2 }; };
function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r164 = ɵngcc0.ɵɵnextContext().day;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(day_r164.badgeTotal);
} }
const _c7 = function (a0, a1) { return { event: a0, draggedFrom: a1 }; };
const _c8 = function (a0, a1) { return { x: a0, y: a1 }; };
function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r183 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r183); const event_r180 = ctx.$implicit; const highlightDay_r168 = ɵngcc0.ɵɵnextContext(2).highlightDay; return highlightDay_r168.emit({ event: event_r180 }); })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r183); const event_r180 = ctx.$implicit; const unhighlightDay_r169 = ɵngcc0.ɵɵnextContext(2).unhighlightDay; return unhighlightDay_r169.emit({ event: event_r180 }); })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r183); const event_r180 = ctx.$implicit; const eventClicked_r170 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r170.emit({ event: event_r180, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r180 = ctx.$implicit;
    const ctx_r188 = ɵngcc0.ɵɵnextContext(2);
    const tooltipPlacement_r167 = ctx_r188.tooltipPlacement;
    const tooltipTemplate_r171 = ctx_r188.tooltipTemplate;
    const tooltipAppendToBody_r172 = ctx_r188.tooltipAppendToBody;
    const tooltipDelay_r173 = ctx_r188.tooltipDelay;
    const day_r164 = ctx_r188.day;
    const validateDrag_r175 = ctx_r188.validateDrag;
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r180.draggable);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(21, _c5, event_r180.color == null ? null : event_r180.color.primary))("ngClass", event_r180 == null ? null : event_r180.cssClass)("mwlCalendarTooltip", ɵngcc0.ɵɵpipeBind3(1, 14, event_r180.title, "monthTooltip", event_r180))("tooltipPlacement", tooltipPlacement_r167)("tooltipEvent", event_r180)("tooltipTemplate", tooltipTemplate_r171)("tooltipAppendToBody", tooltipAppendToBody_r172)("tooltipDelay", tooltipDelay_r173)("dropData", ɵngcc0.ɵɵpureFunction2(23, _c7, event_r180, day_r164))("dragAxis", ɵngcc0.ɵɵpureFunction2(26, _c8, event_r180.draggable, event_r180.draggable))("validateDrag", validateDrag_r175);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(2, 18, ɵngcc0.ɵɵpureFunction0(29, _c2), "hideMonthCellEvents"));
} }
function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 30, "div", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r189 = ɵngcc0.ɵɵnextContext();
    const day_r164 = ctx_r189.day;
    const trackByEventId_r174 = ctx_r189.trackByEventId;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", day_r164.events)("ngForTrackBy", trackByEventId_r174);
} }
const _c9 = function (a0, a1) { return { day: a0, locale: a1 }; };
function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵelementStart(2, "span", 3);
    ɵngcc0.ɵɵtemplate(3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
} if (rf & 2) {
    const day_r164 = ctx.day;
    const locale_r166 = ctx.locale;
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(1, 4, ɵngcc0.ɵɵpureFunction2(11, _c9, day_r164, locale_r166), "monthCell"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", day_r164.badgeTotal > 0);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(6, 7, day_r164.date, "monthViewDayNumber", locale_r166));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", day_r164.events.length > 0);
} }
function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) { }
const _c10 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { day: a0, openDay: a1, locale: a2, tooltipPlacement: a3, highlightDay: a4, unhighlightDay: a5, eventClicked: a6, tooltipTemplate: a7, tooltipAppendToBody: a8, tooltipDelay: a9, trackByEventId: a10, validateDrag: a11 }; };
const _c11 = function (a0) { return { event: a0 }; };
const _c12 = function (a0, a1) { return { event: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r202 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵtext(2, " ");
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-event-title", 9);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r202); const event_r200 = ctx.$implicit; const eventClicked_r194 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r194.emit({ event: event_r200, sourceEvent: $event }); })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r202); const event_r200 = ctx.$implicit; const eventClicked_r194 = ɵngcc0.ɵɵnextContext(2).eventClicked; return eventClicked_r194.emit({ event: event_r200, sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(5, " ");
    ɵngcc0.ɵɵelement(6, "mwl-calendar-event-actions", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r200 = ctx.$implicit;
    const validateDrag_r197 = ɵngcc0.ɵɵnextContext(2).validateDrag;
    const ctx_r199 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("cal-draggable", event_r200.draggable);
    ɵngcc0.ɵɵproperty("ngClass", event_r200 == null ? null : event_r200.cssClass)("dropData", ɵngcc0.ɵɵpureFunction1(15, _c11, event_r200))("dragAxis", ɵngcc0.ɵɵpureFunction2(17, _c8, event_r200.draggable, event_r200.draggable))("validateDrag", validateDrag_r197);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(20, _c5, event_r200.color == null ? null : event_r200.color.primary));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("event", event_r200)("customTemplate", ctx_r199.eventTitleTemplate);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 12, ɵngcc0.ɵɵpureFunction2(22, _c12, event_r200, ctx_r199.locale), "eventDescription"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("event", event_r200)("customTemplate", ctx_r199.eventActionsTemplate);
} }
const _c13 = function (a0, a1) { return { date: a0, locale: a1 }; };
function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵpipe(4, "calendarA11y");
    ɵngcc0.ɵɵtemplate(5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 25, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r207 = ɵngcc0.ɵɵnextContext();
    const events_r193 = ctx_r207.events;
    const trackByEventId_r196 = ctx_r207.trackByEventId;
    const ctx_r198 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@collapse", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 5, ɵngcc0.ɵɵpureFunction2(11, _c13, ctx_r198.date, ctx_r198.locale), "openDayEventsAlert"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(4, 8, ɵngcc0.ɵɵpureFunction2(14, _c13, ctx_r198.date, ctx_r198.locale), "openDayEventsLandmark"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", events_r193)("ngForTrackBy", trackByEventId_r196);
} }
function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
} if (rf & 2) {
    const isOpen_r195 = ctx.isOpen;
    ɵngcc0.ɵɵproperty("ngIf", isOpen_r195);
} }
function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) { }
const _c14 = function (a0, a1, a2, a3, a4) { return { events: a0, eventClicked: a1, isOpen: a2, trackByEventId: a3, validateDrag: a4 }; };
function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r217 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r217); const day_r215 = ctx.$implicit; const ctx_r216 = ɵngcc0.ɵɵnextContext(2); return ctx_r216.eventDropped($event, day_r215.date, true); })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r217); const day_r215 = ctx.$implicit; const ctx_r218 = ɵngcc0.ɵɵnextContext(2); return ctx_r218.dateDragEnter(day_r215.date); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c15 = function () { return { left: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c15));
} }
const _c16 = function () { return { right: true }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c16));
} }
const _c17 = function (a0, a1) { return { left: a0, right: a1 }; };
const _c18 = function (a0, a1) { return { event: a0, calendarId: a1 }; };
const _c19 = function (a0) { return { x: a0 }; };
function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r227 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17, 18);
    ɵngcc0.ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const allDayEvent_r222 = ctx.$implicit; ɵngcc0.ɵɵnextContext(); const _r220 = ɵngcc0.ɵɵreference(1); const ctx_r226 = ɵngcc0.ɵɵnextContext(2); return ctx_r226.allDayEventResizeStarted(_r220, allDayEvent_r222, $event); })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const allDayEvent_r222 = ctx.$implicit; const ctx_r228 = ɵngcc0.ɵɵnextContext(3); return ctx_r228.allDayEventResizing(allDayEvent_r222, $event, ctx_r228.dayColumnWidth); })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const allDayEvent_r222 = ctx.$implicit; const ctx_r229 = ɵngcc0.ɵɵnextContext(3); return ctx_r229.allDayEventResizeEnded(allDayEvent_r222); })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const _r223 = ɵngcc0.ɵɵreference(1); ɵngcc0.ɵɵnextContext(); const _r220 = ɵngcc0.ɵɵreference(1); const ctx_r230 = ɵngcc0.ɵɵnextContext(2); return ctx_r230.dragStarted(_r220, _r223); })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const ctx_r231 = ɵngcc0.ɵɵnextContext(3); return ctx_r231.allDayEventDragMove(); })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const allDayEvent_r222 = ctx.$implicit; const ctx_r232 = ɵngcc0.ɵɵnextContext(3); return ctx_r232.dragEnded(allDayEvent_r222, $event, ctx_r232.dayColumnWidth); });
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-week-view-event", 20);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r227); const allDayEvent_r222 = ctx.$implicit; const ctx_r233 = ɵngcc0.ɵɵnextContext(3); return ctx_r233.eventClicked.emit({ event: allDayEvent_r222.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const allDayEvent_r222 = ctx.$implicit;
    const ctx_r221 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("width", 100 / ctx_r221.days.length * allDayEvent_r222.span, "%")("margin-left", 100 / ctx_r221.days.length * allDayEvent_r222.offset, "%");
    ɵngcc0.ɵɵclassProp("cal-draggable", allDayEvent_r222.event.draggable && ctx_r221.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r222.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r222.endsAfterWeek);
    ɵngcc0.ɵɵproperty("ngClass", allDayEvent_r222.event == null ? null : allDayEvent_r222.event.cssClass)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction2(29, _c17, ctx_r221.dayColumnWidth, ctx_r221.dayColumnWidth))("validateResize", ctx_r221.validateResize)("dropData", ɵngcc0.ɵɵpureFunction2(32, _c18, allDayEvent_r222.event, ctx_r221.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(35, _c8, allDayEvent_r222.event.draggable && ctx_r221.allDayEventResizes.size === 0, !ctx_r221.snapDraggedEvents && allDayEvent_r222.event.draggable && ctx_r221.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r221.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction1(38, _c19, ctx_r221.dayColumnWidth) : ɵngcc0.ɵɵpureFunction0(40, _c2))("validateDrag", ctx_r221.validateDrag);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", (allDayEvent_r222.event == null ? null : allDayEvent_r222.event.resizable == null ? null : allDayEvent_r222.event.resizable.beforeStart) && !allDayEvent_r222.startsBeforeWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r221.locale)("weekEvent", allDayEvent_r222)("tooltipPlacement", ctx_r221.tooltipPlacement)("tooltipTemplate", ctx_r221.tooltipTemplate)("tooltipAppendToBody", ctx_r221.tooltipAppendToBody)("tooltipDelay", ctx_r221.tooltipDelay)("customTemplate", ctx_r221.eventTemplate)("eventTitleTemplate", ctx_r221.eventTitleTemplate)("eventActionsTemplate", ctx_r221.eventActionsTemplate)("daysInWeek", ctx_r221.daysInWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (allDayEvent_r222.event == null ? null : allDayEvent_r222.event.resizable == null ? null : allDayEvent_r222.event.resizable.afterEnd) && !allDayEvent_r222.endsAfterWeek);
} }
function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14, 15);
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 41, "div", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const eventRow_r219 = ctx.$implicit;
    const ctx_r214 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", eventRow_r219.row)("ngForTrackBy", ctx_r214.trackByWeekAllDayEvent);
} }
function CalendarWeekViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r235 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 8, 9);
    ɵngcc0.ɵɵlistener("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r235); const ctx_r234 = ɵngcc0.ɵɵnextContext(); return ctx_r234.dragEnter("allDay"); })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r235); const ctx_r236 = ɵngcc0.ɵɵnextContext(); return ctx_r236.dragLeave("allDay"); });
    ɵngcc0.ɵɵelementStart(2, "div", 5);
    ɵngcc0.ɵɵelement(3, "div", 10);
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r208 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r208.allDayEventsLabelTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r208.days)("ngForTrackBy", ctx_r208.trackByWeekDayHeaderDate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r208.view.allDayEventRows)("ngForTrackBy", ctx_r208.trackById);
} }
function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mwl-calendar-week-view-hour-segment", 28);
} if (rf & 2) {
    const segment_r241 = ctx.$implicit;
    const ctx_r240 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("height", ctx_r240.hourSegmentHeight, "px");
    ɵngcc0.ɵɵproperty("segment", segment_r241)("segmentHeight", ctx_r240.hourSegmentHeight)("locale", ctx_r240.locale)("customTemplate", ctx_r240.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r240.daysInWeek);
} }
function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r238 = ctx.$implicit;
    const odd_r239 = ctx.odd;
    const ctx_r237 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("cal-hour-odd", odd_r239);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", hour_r238.segments)("ngForTrackBy", ctx_r237.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r209 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r209.view.hourColumns[0].hours)("ngForTrackBy", ctx_r209.trackByHour);
} }
const _c20 = function () { return { left: true, top: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c20));
} }
const _c21 = function () { return { right: true, bottom: true }; };
function CalendarWeekViewComponent_div_7_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("resizeEdges", ɵngcc0.ɵɵpureFunction0(1, _c21));
} }
const _c22 = function (a0, a1, a2, a3) { return { left: a0, right: a1, top: a2, bottom: a3 }; };
function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r250 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 33, 18);
    ɵngcc0.ɵɵlistener("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r249 = ɵngcc0.ɵɵnextContext(2); const _r210 = ɵngcc0.ɵɵreference(6); return ctx_r249.timeEventResizeStarted(_r210, timeEvent_r245, $event); })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r251 = ɵngcc0.ɵɵnextContext(2); return ctx_r251.timeEventResizing(timeEvent_r245, $event); })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r252 = ɵngcc0.ɵɵnextContext(2); return ctx_r252.timeEventResizeEnded(timeEvent_r245); })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const _r246 = ɵngcc0.ɵɵreference(1); const ctx_r253 = ɵngcc0.ɵɵnextContext(2); const _r210 = ɵngcc0.ɵɵreference(6); return ctx_r253.dragStarted(_r210, _r246, timeEvent_r245); })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r254 = ɵngcc0.ɵɵnextContext(2); return ctx_r254.dragMove(timeEvent_r245, $event); })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r255 = ɵngcc0.ɵɵnextContext(2); return ctx_r255.dragEnded(timeEvent_r245, $event, ctx_r255.dayColumnWidth, true); });
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);
    ɵngcc0.ɵɵelementStart(3, "mwl-calendar-week-view-event", 34);
    ɵngcc0.ɵɵlistener("eventClicked", function CalendarWeekViewComponent_div_7_div_3_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r250); const timeEvent_r245 = ctx.$implicit; const ctx_r256 = ɵngcc0.ɵɵnextContext(2); return ctx_r256.eventClicked.emit({ event: timeEvent_r245.event, sourceEvent: $event.sourceEvent }); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_7_div_3_div_4_Template, 1, 2, "div", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const timeEvent_r245 = ctx.$implicit;
    const column_r242 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r243 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("top", timeEvent_r245.top, "px")("height", timeEvent_r245.height, "px")("left", timeEvent_r245.left, "%")("width", timeEvent_r245.width, "%");
    ɵngcc0.ɵɵclassProp("cal-draggable", timeEvent_r245.event.draggable && ctx_r243.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r245.startsBeforeDay)("cal-ends-within-day", !timeEvent_r245.endsAfterDay);
    ɵngcc0.ɵɵproperty("ngClass", timeEvent_r245.event.cssClass)("hidden", timeEvent_r245.height === 0 && timeEvent_r245.width === 0)("resizeSnapGrid", ɵngcc0.ɵɵpureFunction4(38, _c22, ctx_r243.dayColumnWidth, ctx_r243.dayColumnWidth, ctx_r243.eventSnapSize || ctx_r243.hourSegmentHeight, ctx_r243.eventSnapSize || ctx_r243.hourSegmentHeight))("validateResize", ctx_r243.validateResize)("allowNegativeResizes", true)("dropData", ɵngcc0.ɵɵpureFunction2(43, _c18, timeEvent_r245.event, ctx_r243.calendarId))("dragAxis", ɵngcc0.ɵɵpureFunction2(46, _c8, timeEvent_r245.event.draggable && ctx_r243.timeEventResizes.size === 0, timeEvent_r245.event.draggable && ctx_r243.timeEventResizes.size === 0))("dragSnapGrid", ctx_r243.snapDraggedEvents ? ɵngcc0.ɵɵpureFunction2(49, _c8, ctx_r243.dayColumnWidth, ctx_r243.eventSnapSize || ctx_r243.hourSegmentHeight) : ɵngcc0.ɵɵpureFunction0(52, _c2))("ghostDragEnabled", !ctx_r243.snapDraggedEvents)("validateDrag", ctx_r243.validateDrag);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", (timeEvent_r245.event == null ? null : timeEvent_r245.event.resizable == null ? null : timeEvent_r245.event.resizable.beforeStart) && !timeEvent_r245.startsBeforeDay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r243.locale)("weekEvent", timeEvent_r245)("tooltipPlacement", ctx_r243.tooltipPlacement)("tooltipTemplate", ctx_r243.tooltipTemplate)("tooltipAppendToBody", ctx_r243.tooltipAppendToBody)("tooltipDisabled", ctx_r243.dragActive || ctx_r243.timeEventResizes.size > 0)("tooltipDelay", ctx_r243.tooltipDelay)("customTemplate", ctx_r243.eventTemplate)("eventTitleTemplate", ctx_r243.eventTitleTemplate)("eventActionsTemplate", ctx_r243.eventActionsTemplate)("column", column_r242)("daysInWeek", ctx_r243.daysInWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (timeEvent_r245.event == null ? null : timeEvent_r245.event.resizable == null ? null : timeEvent_r245.event.resizable.afterEnd) && !timeEvent_r245.endsAfterDay);
} }
function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) { if (rf & 1) {
    const _r263 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view-hour-segment", 36);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r263); const segment_r261 = ctx.$implicit; const ctx_r262 = ɵngcc0.ɵɵnextContext(3); return ctx_r262.hourSegmentClicked.emit({ date: segment_r261.date, sourceEvent: $event }); })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r263); const segment_r261 = ctx.$implicit; const ctx_r264 = ɵngcc0.ɵɵnextContext(3); return ctx_r264.eventDropped($event, segment_r261.date, false); })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r263); const segment_r261 = ctx.$implicit; const ctx_r265 = ɵngcc0.ɵɵnextContext(3); return ctx_r265.dateDragEnter(segment_r261.date); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r261 = ctx.$implicit;
    const ctx_r260 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("height", ctx_r260.hourSegmentHeight, "px");
    ɵngcc0.ɵɵproperty("segment", segment_r261)("segmentHeight", ctx_r260.hourSegmentHeight)("locale", ctx_r260.locale)("customTemplate", ctx_r260.hourSegmentTemplate)("daysInWeek", ctx_r260.daysInWeek)("clickListenerDisabled", ctx_r260.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r260.dragActive || !ctx_r260.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r260.daysInWeek === 1);
} }
function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 35);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r258 = ctx.$implicit;
    const odd_r259 = ctx.odd;
    const ctx_r244 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("cal-hour-odd", odd_r259);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", hour_r258.segments)("ngForTrackBy", ctx_r244.trackByHourSegment);
} }
function CalendarWeekViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵelement(1, "mwl-calendar-week-view-current-time-marker", 30);
    ɵngcc0.ɵɵelementStart(2, "div", 31);
    ɵngcc0.ɵɵtemplate(3, CalendarWeekViewComponent_div_7_div_3_Template, 5, 53, "div", 32);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r242 = ctx.$implicit;
    const ctx_r211 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("columnDate", column_r242.date)("dayStartHour", ctx_r211.dayStartHour)("dayStartMinute", ctx_r211.dayStartMinute)("dayEndHour", ctx_r211.dayEndHour)("dayEndMinute", ctx_r211.dayEndMinute)("hourSegments", ctx_r211.hourSegments)("hourSegmentHeight", ctx_r211.hourSegmentHeight)("customTemplate", ctx_r211.currentTimeMarkerTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", column_r242.events)("ngForTrackBy", ctx_r211.trackByWeekTimeEvent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", column_r242.hours)("ngForTrackBy", ctx_r211.trackByHour);
} }
function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r278 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r278); const day_r276 = ctx.$implicit; const dayHeaderClicked_r271 = ɵngcc0.ɵɵnextContext().dayHeaderClicked; return dayHeaderClicked_r271.emit({ day: day_r276, sourceEvent: $event }); })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r278); const day_r276 = ctx.$implicit; const eventDropped_r272 = ɵngcc0.ɵɵnextContext().eventDropped; return eventDropped_r272.emit({ event: $event.dropData.event, newStart: day_r276.date }); })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r278); const day_r276 = ctx.$implicit; const dragEnter_r274 = ɵngcc0.ɵɵnextContext().dragEnter; return dragEnter_r274.emit({ date: day_r276.date }); });
    ɵngcc0.ɵɵelementStart(1, "b");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵpipe(3, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "br");
    ɵngcc0.ɵɵelementStart(5, "span");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵpipe(7, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r276 = ctx.$implicit;
    const locale_r270 = ɵngcc0.ɵɵnextContext().locale;
    ɵngcc0.ɵɵclassProp("cal-past", day_r276.isPast)("cal-today", day_r276.isToday)("cal-future", day_r276.isFuture)("cal-weekend", day_r276.isWeekend);
    ɵngcc0.ɵɵproperty("ngClass", day_r276.cssClass);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(3, 11, day_r276.date, "weekViewColumnHeader", locale_r270));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(7, 15, day_r276.date, "weekViewColumnSubHeader", locale_r270));
} }
function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const days_r269 = ctx.days;
    const trackByWeekDayHeaderDate_r273 = ctx.trackByWeekDayHeaderDate;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", days_r269)("ngForTrackBy", trackByWeekDayHeaderDate_r273);
} }
function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) { }
const _c23 = function (a0, a1, a2, a3, a4, a5) { return { days: a0, locale: a1, dayHeaderClicked: a2, eventDropped: a3, dragEnter: a4, trackByWeekDayHeaderDate: a5 }; };
const _c24 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r298 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r298); const eventClicked_r290 = ctx.eventClicked; return eventClicked_r290.emit({ sourceEvent: $event }); })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r298); const eventClicked_r290 = ctx.eventClicked; return eventClicked_r290.emit({ sourceEvent: $event }); });
    ɵngcc0.ɵɵpipe(1, "calendarEventTitle");
    ɵngcc0.ɵɵpipe(2, "calendarA11y");
    ɵngcc0.ɵɵelement(3, "mwl-calendar-event-actions", 3);
    ɵngcc0.ɵɵtext(4, " ");
    ɵngcc0.ɵɵelement(5, "mwl-calendar-event-title", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const weekEvent_r288 = ctx.weekEvent;
    const tooltipPlacement_r289 = ctx.tooltipPlacement;
    const tooltipTemplate_r291 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r292 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r293 = ctx.tooltipDisabled;
    const tooltipDelay_r294 = ctx.tooltipDelay;
    const daysInWeek_r296 = ctx.daysInWeek;
    const ctx_r286 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(20, _c24, weekEvent_r288.event.color == null ? null : weekEvent_r288.event.color.secondary, weekEvent_r288.event.color == null ? null : weekEvent_r288.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r293 ? ɵngcc0.ɵɵpipeBind3(1, 13, weekEvent_r288.event.title, daysInWeek_r296 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r288.event) : "")("tooltipPlacement", tooltipPlacement_r289)("tooltipEvent", weekEvent_r288.event)("tooltipTemplate", tooltipTemplate_r291)("tooltipAppendToBody", tooltipAppendToBody_r292)("tooltipDelay", tooltipDelay_r294);
    ɵngcc0.ɵɵattribute("aria-label", ɵngcc0.ɵɵpipeBind2(2, 17, ɵngcc0.ɵɵpureFunction2(23, _c12, weekEvent_r288.event, ctx_r286.locale), "eventDescription"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("event", weekEvent_r288.event)("customTemplate", ctx_r286.eventActionsTemplate);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("event", weekEvent_r288.event)("customTemplate", ctx_r286.eventTitleTemplate)("view", daysInWeek_r296 === 1 ? "day" : "week");
} }
function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) { }
const _c25 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { weekEvent: a0, tooltipPlacement: a1, eventClicked: a2, tooltipTemplate: a3, tooltipAppendToBody: a4, tooltipDisabled: a5, tooltipDelay: a6, column: a7, daysInWeek: a8 }; };
function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "calendarDate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r309 = ɵngcc0.ɵɵnextContext();
    const segment_r303 = ctx_r309.segment;
    const daysInWeek_r307 = ctx_r309.daysInWeek;
    const locale_r304 = ctx_r309.locale;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 1, segment_r303.displayDate, daysInWeek_r307 === 1 ? "dayViewHour" : "weekViewHour", locale_r304), " ");
} }
function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵpipe(1, "calendarA11y");
    ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r303 = ctx.segment;
    const segmentHeight_r305 = ctx.segmentHeight;
    const isTimeLabel_r306 = ctx.isTimeLabel;
    const daysInWeek_r307 = ctx.daysInWeek;
    ɵngcc0.ɵɵstyleProp("height", segmentHeight_r305, "px");
    ɵngcc0.ɵɵclassProp("cal-hour-start", segment_r303.isStart)("cal-after-hour-start", !segment_r303.isStart);
    ɵngcc0.ɵɵproperty("ngClass", segment_r303.cssClass);
    ɵngcc0.ɵɵattribute("aria-hidden", ɵngcc0.ɵɵpipeBind2(1, 9, ɵngcc0.ɵɵpureFunction0(12, _c2), daysInWeek_r307 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", isTimeLabel_r306);
} }
function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) { }
const _c26 = function (a0, a1, a2, a3, a4) { return { segment: a0, locale: a1, segmentHeight: a2, isTimeLabel: a3, daysInWeek: a4 }; };
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const topPx_r319 = ɵngcc0.ɵɵnextContext().topPx;
    ɵngcc0.ɵɵstyleProp("top", topPx_r319, "px");
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
} if (rf & 2) {
    const isVisible_r318 = ctx.isVisible;
    ɵngcc0.ɵɵproperty("ngIf", isVisible_r318);
} }
function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) { }
const _c27 = function (a0, a1, a2, a3, a4, a5, a6) { return { columnDate: a0, dayStartHour: a1, dayStartMinute: a2, dayEndHour: a3, dayEndMinute: a4, isVisible: a5, topPx: a6 }; };
export { DAYS_OF_WEEK } from 'calendar-utils';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ResizableModule } from 'angular-resizable-element';

let CalendarEventActionsComponent = class CalendarEventActionsComponent {
    constructor() {
        this.trackByActionId = (index, action) => action.id ? action.id : action;
    }
};
CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) { return new (t || CalendarEventActionsComponent)(); };
CalendarEventActionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventActionsComponent, selectors: [["mwl-calendar-event-actions"]], inputs: { event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]], template: function CalendarEventActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r111 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r111)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, ctx.event, ctx.trackByActionId));
    } }, directives: function () { return [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgClass, ClickDirective,
        KeydownEnterDirective]; }, pipes: function () { return [CalendarA11yPipe]; }, encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarEventActionsComponent.prototype, "event", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarEventActionsComponent.prototype, "customTemplate", void 0);

let CalendarEventTitleComponent = class CalendarEventTitleComponent {
};
CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) { return new (t || CalendarEventTitleComponent)(); };
CalendarEventTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarEventTitleComponent, selectors: [["mwl-calendar-event-title"]], inputs: { event: "event", customTemplate: "customTemplate", view: "view" }, decls: 3, vars: 5, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]], template: function CalendarEventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r125 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r125)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c3, ctx.event, ctx.view));
    } }, directives: function () { return [ɵngcc1.NgTemplateOutlet]; }, pipes: function () { return [CalendarEventTitlePipe,
        CalendarA11yPipe]; }, encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarEventTitleComponent.prototype, "event", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarEventTitleComponent.prototype, "view", void 0);

let CalendarTooltipWindowComponent = class CalendarTooltipWindowComponent {
};
CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) { return new (t || CalendarTooltipWindowComponent)(); };
CalendarTooltipWindowComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarTooltipWindowComponent, selectors: [["mwl-calendar-tooltip-window"]], inputs: { contents: "contents", placement: "placement", event: "event", customTemplate: "customTemplate" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]], template: function CalendarTooltipWindowComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r130 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r130)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c4, ctx.contents, ctx.placement, ctx.event));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarTooltipWindowComponent.prototype, "contents", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarTooltipWindowComponent.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarTooltipWindowComponent.prototype, "event", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
let CalendarTooltipDirective = class CalendarTooltipDirective {
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.delay = null; // tslint:disable-line no-input-rename
        this.cancelTooltipDelay$ = new Subject();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    ngOnChanges(changes) {
        if (this.tooltipRef &&
            (changes.contents || changes.customTemplate || changes.event)) {
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.tooltipRef.changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    onMouseOver() {
        const delay$ = this.delay === null ? of('now') : timer(this.delay);
        delay$.pipe(takeUntil(this.cancelTooltipDelay$)).subscribe(() => {
            this.show();
        });
    }
    onMouseOut() {
        this.hide();
    }
    show() {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(() => {
                this.positionTooltip();
            });
        }
    }
    hide() {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
        this.cancelTooltipDelay$.next();
    }
    positionTooltip(previousPositions = []) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([
                    ...previousPositions,
                    this.tooltipRef.instance.placement
                ]);
            }
        }
    }
};
CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) { return new (t || CalendarTooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
CalendarTooltipDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTooltipDirective, selectors: [["", "mwlCalendarTooltip", ""]], hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver(); })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut(); });
    } }, inputs: { placement: ["tooltipPlacement", "placement"], delay: ["tooltipDelay", "delay"], contents: ["mwlCalendarTooltip", "contents"], customTemplate: ["tooltipTemplate", "customTemplate"], event: ["tooltipEvent", "event"], appendToBody: ["tooltipAppendToBody", "appendToBody"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature()] });
CalendarTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input('mwlCalendarTooltip'),
    __metadata("design:type", String)
], CalendarTooltipDirective.prototype, "contents", void 0);
__decorate([
    Input('tooltipPlacement'),
    __metadata("design:type", Object)
], CalendarTooltipDirective.prototype, "placement", void 0);
__decorate([
    Input('tooltipTemplate'),
    __metadata("design:type", TemplateRef)
], CalendarTooltipDirective.prototype, "customTemplate", void 0);
__decorate([
    Input('tooltipEvent'),
    __metadata("design:type", Object)
], CalendarTooltipDirective.prototype, "event", void 0);
__decorate([
    Input('tooltipAppendToBody'),
    __metadata("design:type", Boolean)
], CalendarTooltipDirective.prototype, "appendToBody", void 0);
__decorate([
    Input('tooltipDelay'),
    __metadata("design:type", Number)
], CalendarTooltipDirective.prototype, "delay", void 0);
__decorate([
    HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOver", null);
__decorate([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarTooltipDirective.prototype, "onMouseOut", null);
CalendarTooltipDirective = __decorate([ __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ElementRef,
        Injector,
        Renderer2,
        ComponentFactoryResolver,
        ViewContainerRef, Object])
], CalendarTooltipDirective);

class DateAdapter {
}

var CalendarView;
(function (CalendarView) {
    CalendarView["Month"] = "month";
    CalendarView["Week"] = "week";
    CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));

const validateEvents = (events) => {
    const warn = (...args) => console.warn('angular-calendar', ...args);
    return validateEvents$1(events, warn);
};
function isInside(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right) &&
        Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
const trackByEventId = (index, event) => event.id ? event.id : event;
const trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();
const trackByHourSegment = (index, segment) => segment.date.toISOString();
const trackByHour = (index, hour) => hour.segments[0].date.toISOString();
const trackByWeekAllDayEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const trackByWeekTimeEvent = (index, weekEvent) => (weekEvent.event.id ? weekEvent.event.id : weekEvent.event);
const MINUTES_IN_HOUR = 60;
function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
    return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
}
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight);
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    let daysCounter = 0;
    let daysToAdd = 0;
    const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    let result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        const day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
    const end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
    let viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn });
    const endOfWeek = dateAdapter.endOfWeek(viewDate, { weekStartsOn });
    while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 &&
        viewStart < endOfWeek) {
        viewStart = dateAdapter.addDays(viewStart, 1);
    }
    if (daysInWeek) {
        const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart, viewEnd };
    }
    else {
        let viewEnd = endOfWeek;
        while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 &&
            viewEnd > viewStart) {
            viewEnd = dateAdapter.subDays(viewEnd, 1);
        }
        return { viewStart, viewEnd };
    }
}
function isWithinThreshold({ x, y }) {
    const DRAG_THRESHOLD = 1;
    return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
let CalendarPreviousViewDirective = class CalendarPreviousViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    }
};
CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) { return new (t || CalendarPreviousViewDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarPreviousViewDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarPreviousViewDirective, selectors: [["", "mwlCalendarPreviousView", ""]], hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarPreviousViewDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarPreviousViewDirective.ctorParameters = () => [
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarPreviousViewDirective.prototype, "view", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarPreviousViewDirective.prototype, "onClick", null);
CalendarPreviousViewDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarPreviousViewDirective);

/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
let CalendarNextViewDirective = class CalendarNextViewDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        const addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    }
};
CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) { return new (t || CalendarNextViewDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarNextViewDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarNextViewDirective, selectors: [["", "mwlCalendarNextView", ""]], hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarNextViewDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } }, inputs: { excludeDays: "excludeDays", view: "view", viewDate: "viewDate", daysInWeek: "daysInWeek" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarNextViewDirective.ctorParameters = () => [
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarNextViewDirective.prototype, "view", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarNextViewDirective.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarNextViewDirective.prototype, "excludeDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarNextViewDirective.prototype, "onClick", null);
CalendarNextViewDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarNextViewDirective);

/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
let CalendarTodayDirective = class CalendarTodayDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
};
CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) { return new (t || CalendarTodayDirective)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarTodayDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CalendarTodayDirective, selectors: [["", "mwlCalendarToday", ""]], hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CalendarTodayDirective_click_HostBindingHandler($event) { return ctx.onClick(); });
    } }, inputs: { viewDate: "viewDate" }, outputs: { viewDateChange: "viewDateChange" } });
CalendarTodayDirective.ctorParameters = () => [
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarTodayDirective.prototype, "viewDate", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CalendarTodayDirective.prototype, "viewDateChange", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalendarTodayDirective.prototype, "onClick", null);
CalendarTodayDirective = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarTodayDirective);

/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
let CalendarAngularDateFormatter = class CalendarAngularDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return formatDate(date, 'EEEE', locale);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return formatDate(date, 'd', locale);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return formatDate(date, 'LLLL y', locale);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return formatDate(date, 'EEEE', locale);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale }) {
        return formatDate(date, 'MMM d', locale);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => formatDate(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return formatDate(date, 'h a', locale);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return formatDate(date, 'h a', locale);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return formatDate(date, 'EEEE, MMMM d, y', locale);
    }
};
CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) { return new (t || CalendarAngularDateFormatter)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarAngularDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarAngularDateFormatter, factory: CalendarAngularDateFormatter.ɵfac });
CalendarAngularDateFormatter.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarAngularDateFormatter = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarAngularDateFormatter);

/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
let CalendarDateFormatter = class CalendarDateFormatter extends CalendarAngularDateFormatter {
};
CalendarDateFormatter.ɵfac = function CalendarDateFormatter_Factory(t) { return ɵCalendarDateFormatter_BaseFactory(t || CalendarDateFormatter); };
CalendarDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarDateFormatter, factory: CalendarDateFormatter.ɵfac });

/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
let CalendarDatePipe = class CalendarDatePipe {
    constructor(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(iMethod => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.dateFormatter[method]({
            date,
            locale,
            weekStartsOn,
            excludeDays,
            daysInWeek
        });
    }
};
CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) { return new (t || CalendarDatePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarDateFormatter), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
CalendarDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarDate", type: CalendarDatePipe, pure: true });
CalendarDatePipe.ctorParameters = () => [
    { type: CalendarDateFormatter },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CalendarDatePipe = __decorate([ __param(1, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [CalendarDateFormatter, String])
], CalendarDatePipe);

/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
class CalendarEventTitleFormatter {
    /**
     * The month view event title.
     */
    month(event, title) {
        return event.title;
    }
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    monthTooltip(event, title) {
        return event.title;
    }
    /**
     * The week view event title.
     */
    week(event, title) {
        return event.title;
    }
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    weekTooltip(event, title) {
        return event.title;
    }
    /**
     * The day view event title.
     */
    day(event, title) {
        return event.title;
    }
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    dayTooltip(event, title) {
        return event.title;
    }
}

let CalendarEventTitlePipe = class CalendarEventTitlePipe {
    constructor(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    transform(title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    }
};
CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) { return new (t || CalendarEventTitlePipe)(ɵngcc0.ɵɵdirectiveInject(CalendarEventTitleFormatter)); };
CalendarEventTitlePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarEventTitle", type: CalendarEventTitlePipe, pure: true });
CalendarEventTitlePipe.ctorParameters = () => [
    { type: CalendarEventTitleFormatter }
];
CalendarEventTitlePipe = __decorate([ __metadata("design:paramtypes", [CalendarEventTitleFormatter])
], CalendarEventTitlePipe);

let ClickDirective = class ClickDirective {
    constructor(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new EventEmitter(); // tslint:disable-line
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.stopPropagation();
                this.click.emit(event);
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    listen() {
        return new Observable(observer => {
            return this.renderer.listen(this.elm.nativeElement, 'click', event => {
                observer.next(event);
            });
        });
    }
};
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
ClickDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ClickDirective, selectors: [["", "mwlClick", ""]], inputs: { clickListenerDisabled: "clickListenerDisabled" }, outputs: { click: "mwlClick" } });
ClickDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ClickDirective.prototype, "clickListenerDisabled", void 0);
__decorate([
    Output('mwlClick'),
    __metadata("design:type", Object)
], ClickDirective.prototype, "click", void 0);
ClickDirective = __decorate([ __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef, Object])
], ClickDirective);

let KeydownEnterDirective = class KeydownEnterDirective {
    constructor() {
        this.keydown = new EventEmitter(); // tslint:disable-line
    }
    onKeyPress(event) {
        if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
        }
    }
};
KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) { return new (t || KeydownEnterDirective)(); };
KeydownEnterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: KeydownEnterDirective, selectors: [["", "mwlKeydownEnter", ""]], hostBindings: function KeydownEnterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function KeydownEnterDirective_keydown_HostBindingHandler($event) { return ctx.onKeyPress($event); });
    } }, outputs: { keydown: "mwlKeydownEnter" } });
__decorate([
    Output('mwlKeydownEnter'),
    __metadata("design:type", Object)
], KeydownEnterDirective.prototype, "keydown", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], KeydownEnterDirective.prototype, "onKeyPress", null);

let CalendarUtils = class CalendarUtils {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    getMonthView(args) {
        return getMonthView(this.dateAdapter, args);
    }
    getWeekViewHeader(args) {
        return getWeekViewHeader(this.dateAdapter, args);
    }
    getWeekView(args) {
        return getWeekView(this.dateAdapter, args);
    }
};
CalendarUtils.ɵfac = function CalendarUtils_Factory(t) { return new (t || CalendarUtils)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarUtils.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarUtils, factory: CalendarUtils.ɵfac });
CalendarUtils.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarUtils = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarUtils);

/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
let CalendarA11y = class CalendarA11y {
    constructor(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }) {
        if (day.badgeTotal > 0) {
            return `
        ${formatDate(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
            })},
         click to expand
      `;
        }
        else {
            return `${formatDate(day.date, 'EEEE MMMM d', locale)}`;
        }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }) {
        return `
      Beginning of expanded view for ${formatDate(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }) {
        return `${formatDate(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }) {
        if (event.allDay === true) {
            return this.allDayEventDescription({ event, locale });
        }
        const aria = `
      ${formatDate(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${formatDate(event.start, 'hh:mm a', locale)}
    `;
        if (event.end) {
            return aria + ` to ${formatDate(event.end, 'hh:mm a', locale)}`;
        }
        return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${formatDate(event.start, 'MMMM dd hh:mm a', locale)}
    `;
        if (event.end) {
            return (aria + `, stop time ${formatDate(event.end, 'MMMM d hh:mm a', locale)}`);
        }
        return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }) {
        return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex() {
        return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents() {
        return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle() {
        return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment() {
        return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment() {
        return true;
    }
};
CalendarA11y.ɵfac = function CalendarA11y_Factory(t) { return new (t || CalendarA11y)(ɵngcc0.ɵɵinject(ɵngcc1.I18nPluralPipe)); };
CalendarA11y.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarA11y, factory: CalendarA11y.ɵfac });
CalendarA11y.ctorParameters = () => [
    { type: I18nPluralPipe }
];
CalendarA11y = __decorate([ __metadata("design:paramtypes", [I18nPluralPipe])
], CalendarA11y);

/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
let CalendarA11yPipe = class CalendarA11yPipe {
    constructor(calendarA11y, locale) {
        this.calendarA11y = calendarA11y;
        this.locale = locale;
    }
    transform(a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(iMethod => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.calendarA11y[method](a11yParams);
    }
};
CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) { return new (t || CalendarA11yPipe)(ɵngcc0.ɵɵdirectiveInject(CalendarA11y), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
CalendarA11yPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "calendarA11y", type: CalendarA11yPipe, pure: true });
CalendarA11yPipe.ctorParameters = () => [
    { type: CalendarA11y },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CalendarA11yPipe = __decorate([ __param(1, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [CalendarA11y, String])
], CalendarA11yPipe);

const MOMENT = new InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
let CalendarMomentDateFormatter = class CalendarMomentDateFormatter {
    /**
     * @hidden
     */
    constructor(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('D');
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('MMM D');
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => this.moment(dateToFormat)
            .locale(locale)
            .format('MMM D' + (showYear ? ', YYYY' : ''));
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('ha');
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('ha');
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    }
};
CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) { return new (t || CalendarMomentDateFormatter)(ɵngcc0.ɵɵinject(MOMENT), ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarMomentDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarMomentDateFormatter, factory: CalendarMomentDateFormatter.ɵfac });
CalendarMomentDateFormatter.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MOMENT,] }] },
    { type: DateAdapter }
];
CalendarMomentDateFormatter = __decorate([ __param(0, Inject(MOMENT)),
    __metadata("design:paramtypes", [Object, DateAdapter])
], CalendarMomentDateFormatter);

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
let CalendarNativeDateFormatter = class CalendarNativeDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: showYear ? 'numeric' : undefined
        }).format(dateToFormat);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    }
};
CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) { return new (t || CalendarNativeDateFormatter)(ɵngcc0.ɵɵinject(DateAdapter)); };
CalendarNativeDateFormatter.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CalendarNativeDateFormatter, factory: CalendarNativeDateFormatter.ɵfac });
CalendarNativeDateFormatter.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarNativeDateFormatter = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarNativeDateFormatter);

var CalendarEventTimesChangedEventType;
(function (CalendarEventTimesChangedEventType) {
    CalendarEventTimesChangedEventType["Drag"] = "drag";
    CalendarEventTimesChangedEventType["Drop"] = "drop";
    CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

var CalendarCommonModule_1;
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
let CalendarCommonModule = CalendarCommonModule_1 = class CalendarCommonModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarCommonModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y
            ]
        };
    }
};
CalendarCommonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarCommonModule });
CalendarCommonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarCommonModule_Factory(t) { return new (t || CalendarCommonModule)(); }, providers: [I18nPluralPipe], imports: [[CommonModule]] });

/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
let CalendarMonthViewComponent = class CalendarMonthViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * @hidden
         */
        this.trackByRowOffset = (index, offset) => this.view.days
            .slice(offset, this.view.totalDaysVisibleInWeek)
            .map(day => day.date.toISOString())
            .join('-');
        /**
         * @hidden
         */
        this.trackByDate = (index, day) => day.date.toISOString();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        const refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    toggleDayHighlight(event, isHighlighted) {
        this.view.days.forEach(day => {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    }
    /**
     * @hidden
     */
    eventDropped(droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            const year = this.dateAdapter.getYear(droppedOn.date);
            const month = this.dateAdapter.getMonth(droppedOn.date);
            const date = this.dateAdapter.getDate(droppedOn.date);
            const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            let newEnd;
            if (event.end) {
                const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event,
                newStart,
                newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
            });
        }
    }
    refreshHeader() {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    }
    refreshBody() {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    }
    checkActiveDayIsOpen() {
        if (this.activeDayIsOpen === true) {
            const activeDay = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(day => this.dateAdapter.isSameDay(day.date, activeDay));
            const index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    }
    emitBeforeViewRender() {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    }
};
CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) { return new (t || CalendarMonthViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(CalendarUtils), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarMonthViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewComponent, selectors: [["mwl-calendar-month-view"]], inputs: { events: "events", excludeDays: "excludeDays", activeDayIsOpen: "activeDayIsOpen", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", locale: "locale", viewDate: "viewDate", activeDay: "activeDay", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", cellTemplate: "cellTemplate", openDayEventsTemplate: "openDayEventsTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays" }, outputs: { beforeViewRender: "beforeViewRender", dayClicked: "dayClicked", eventClicked: "eventClicked", columnHeaderClicked: "columnHeaderClicked", eventTimesChanged: "eventTimesChanged" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], decls: 4, vars: 5, consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-cell-row"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]], template: function CalendarMonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mwl-calendar-month-view-header", 1);
        ɵngcc0.ɵɵlistener("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) { return ctx.columnHeaderClicked.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    } }, directives: function () { return [CalendarMonthViewHeaderComponent, ɵngcc1.NgForOf, CalendarOpenDayEventsComponent, ɵngcc2.ɵa, CalendarMonthCellComponent, ɵngcc1.NgClass, ɵngcc1.NgStyle, ClickDirective,
        KeydownEnterDirective]; }, pipes: function () { return [ɵngcc1.SlicePipe, CalendarA11yPipe]; }, encapsulation: 2 });
CalendarMonthViewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CalendarUtils },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarMonthViewComponent.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarMonthViewComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarMonthViewComponent.prototype, "activeDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Subject)
], CalendarMonthViewComponent.prototype, "refresh", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarMonthViewComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
CalendarMonthViewComponent = __decorate([ __param(2, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        CalendarUtils, String, DateAdapter])
], CalendarMonthViewComponent);

let CalendarMonthViewHeaderComponent = class CalendarMonthViewHeaderComponent {
    constructor() {
        this.columnHeaderClicked = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) { return new (t || CalendarMonthViewHeaderComponent)(); };
CalendarMonthViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthViewHeaderComponent, selectors: [["mwl-calendar-month-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { columnHeaderClicked: "columnHeaderClicked" }, decls: 3, vars: 6, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]], template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r150 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r150)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c6, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgClass], pipes: [CalendarDatePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);

let CalendarMonthCellComponent = class CalendarMonthCellComponent {
    constructor() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) { return new (t || CalendarMonthCellComponent)(); };
CalendarMonthCellComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarMonthCellComponent, selectors: [["mwl-calendar-month-cell"]], hostAttrs: [1, "cal-cell", "cal-day-cell"], hostVars: 18, hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    } }, inputs: { day: "day", openDay: "openDay", locale: "locale", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", customTemplate: "customTemplate", tooltipTemplate: "tooltipTemplate", tooltipDelay: "tooltipDelay" }, outputs: { highlightDay: "highlightDay", unhighlightDay: "unhighlightDay", eventClicked: "eventClicked" }, decls: 3, vars: 15, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "mouseenter", "mouseleave", "mwlClick"]], template: function CalendarMonthCellComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r161 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r161)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c10, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgStyle, ɵngcc1.NgClass, CalendarTooltipDirective,
        ClickDirective], pipes: [CalendarA11yPipe,
        CalendarDatePipe,
        CalendarEventTitlePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarMonthCellComponent.prototype, "day", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarMonthCellComponent.prototype, "openDay", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarMonthCellComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarMonthCellComponent.prototype, "eventClicked", void 0);

const collapseAnimation = trigger('collapse', [
    state('void', style({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
    })),
    state('*', style({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
    })),
    transition('* => void', animate('150ms ease-out')),
    transition('void => *', animate('150ms ease-in'))
]);
let CalendarOpenDayEventsComponent = class CalendarOpenDayEventsComponent {
    constructor() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) { return new (t || CalendarOpenDayEventsComponent)(); };
CalendarOpenDayEventsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarOpenDayEventsComponent, selectors: [["mwl-calendar-open-day-events"]], inputs: { isOpen: "isOpen", locale: "locale", events: "events", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", date: "date" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]], template: function CalendarOpenDayEventsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r190 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r190)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c14, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.ɵb, ɵngcc1.NgClass, ɵngcc1.NgStyle, CalendarEventTitleComponent,
        ClickDirective,
        KeydownEnterDirective,
        CalendarEventActionsComponent], pipes: [CalendarA11yPipe], encapsulation: 2, data: { animation: [collapseAnimation] } });
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarOpenDayEventsComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarOpenDayEventsComponent.prototype, "date", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);

let CalendarMonthModule = class CalendarMonthModule {
};
CalendarMonthModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarMonthModule });
CalendarMonthModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarMonthModule_Factory(t) { return new (t || CalendarMonthModule)(); }, imports: [[CommonModule, DragAndDropModule, CalendarCommonModule],
        DragAndDropModule] });

class CalendarDragHelper {
    constructor(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    validateDrag({ x, y, snapDraggedEvents, dragAlreadyMoved, transform }) {
        if (snapDraggedEvents) {
            const newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
            });
            return ((isWithinThreshold({ x, y }) || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold({ x, y }) || dragAlreadyMoved;
        }
    }
}

class CalendarResizeHelper {
    constructor(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    validateResize({ rectangle }) {
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    }
}

/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
let CalendarWeekViewComponent = class CalendarWeekViewComponent {
    /**
     * @hidden
     */
    constructor(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.dragAlreadyMoved = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
        /**
         * @hidden
         */
        this.trackByWeekTimeEvent = trackByWeekTimeEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        /**
         * @hidden
         */
        this.trackById = (index, row) => row.id;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    ngOnInit() {
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(() => {
                this.refreshAll();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        const refreshHeader = changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek ||
            changes.weekStartsOn;
        const refreshBody = changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    }
    resizeStarted(eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = ({ rectangle }) => resizeHelper.validateResize({ rectangle });
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     */
    timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    }
    /**
     * @hidden
     */
    timeEventResizing(timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        const adjustedEvents = new Map();
        const tempEvents = [...this.events];
        this.timeEventResizes.forEach((lastResizeEvent, event) => {
            const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
            const adjustedEvent = Object.assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            const eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    }
    /**
     * @hidden
     */
    timeEventResizeEnded(timeEvent) {
        this.view = this.getWeekView(this.events);
        const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        if (lastResizeEvent) {
            this.timeEventResizes.delete(timeEvent.event);
            const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
            this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    }
    /**
     * @hidden
     */
    allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    }
    /**
     * @hidden
     */
    allDayEventResizeEnded(allDayEvent) {
        const currentResize = this.allDayEventResizes.get(allDayEvent);
        if (currentResize) {
            const allDayEventResizingBeforeStart = currentResize.edge === 'left';
            let daysDiff;
            if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
            }
            else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
            }
            allDayEvent.offset = currentResize.originalOffset;
            allDayEvent.span = currentResize.originalSpan;
            let newStart = allDayEvent.event.start;
            let newEnd = allDayEvent.event.end || allDayEvent.event.start;
            if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
            }
            else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
            }
            this.eventTimesChanged.emit({
                newStart,
                newEnd,
                event: allDayEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
            });
            this.allDayEventResizes.delete(allDayEvent);
        }
    }
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    }
    /**
     * @hidden
     */
    dateDragEnter(date) {
        this.lastDragEnterDate = date;
    }
    /**
     * @hidden
     */
    eventDropped(dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) &&
            this.lastDragEnterDate.getTime() === date.getTime()) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay
            });
        }
    }
    /**
     * @hidden
     */
    dragEnter(type) {
        this.eventDragEnterByType[type]++;
    }
    /**
     * @hidden
     */
    dragLeave(type) {
        this.eventDragEnterByType[type]--;
    }
    /**
     * @hidden
     */
    dragStarted(eventsContainer, event, dayEvent) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        const dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = ({ x, y, transform }) => this.allDayEventResizes.size === 0 &&
            this.timeEventResizes.size === 0 &&
            dragHelper.validateDrag({
                x,
                y,
                snapDraggedEvents: this.snapDraggedEvents,
                dragAlreadyMoved: this.dragAlreadyMoved,
                transform
            });
        this.dragActive = true;
        this.dragAlreadyMoved = false;
        this.eventDragEnterByType = {
            allDay: 0,
            time: 0
        };
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(column => {
                const linkedEvent = column.events.find(columnEvent => columnEvent.event === dayEvent.event && columnEvent !== dayEvent);
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    }
    /**
     * @hidden
     */
    dragMove(dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            const originalEvent = dayEvent.event;
            const adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
            const tempEvents = this.events.map(event => {
                if (event === originalEvent) {
                    return adjustedEvent;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
        }
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    allDayEventDragMove() {
        this.dragAlreadyMoved = true;
    }
    /**
     * @hidden
     */
    dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        const { start, end } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);
        if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
            });
        }
    }
    refreshHeader() {
        this.days = this.utils.getWeekViewHeader(Object.assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    refreshBody() {
        this.view = this.getWeekView(this.events);
    }
    refreshAll() {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
    }
    emitBeforeViewRender() {
        if (this.days && this.view) {
            this.beforeViewRender.emit(Object.assign({ header: this.days }, this.view));
        }
    }
    getWeekView(events) {
        return this.utils.getWeekView(Object.assign({ events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    }
    getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
        const daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        const minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        const start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
        let end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
        }
        return { start, end };
    }
    restoreOriginalEvents(tempEvents, adjustedEvents) {
        const previousView = this.view;
        this.view = this.getWeekView(tempEvents);
        const adjustedEventsArray = tempEvents.filter(event => adjustedEvents.has(event));
        this.view.hourColumns.forEach((column, columnIndex) => {
            previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
                hour.segments.forEach((segment, segmentIndex) => {
                    column.hours[hourIndex].segments[segmentIndex].cssClass =
                        segment.cssClass;
                });
            });
            adjustedEventsArray.forEach(adjustedEvent => {
                const originalEvent = adjustedEvents.get(adjustedEvent);
                const existingColumnEvent = column.events.find(columnEvent => columnEvent.event === adjustedEvent);
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            });
        });
        adjustedEvents.clear();
    }
    getTimeEventResizedDates(calendarEvent, resizeEvent) {
        const minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        const newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        const { end } = calendarEvent, eventWithoutEnd = __rest(calendarEvent, ["end"]);
        const smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (typeof resizeEvent.edges.left !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            const newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.right !== 'undefined') {
            const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            const newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (typeof resizeEvent.edges.top !== 'undefined') {
            const minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (typeof resizeEvent.edges.bottom !== 'undefined') {
            const minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    }
};
CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) { return new (t || CalendarWeekViewComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(CalendarUtils), ɵngcc0.ɵɵdirectiveInject(LOCALE_ID), ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarWeekViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewComponent, selectors: [["mwl-calendar-week-view"]], inputs: { events: "events", excludeDays: "excludeDays", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", precision: "precision", snapDraggedEvents: "snapDraggedEvents", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", locale: "locale", viewDate: "viewDate", refresh: "refresh", tooltipTemplate: "tooltipTemplate", weekStartsOn: "weekStartsOn", headerTemplate: "headerTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", weekendDays: "weekendDays", hourSegmentTemplate: "hourSegmentTemplate", eventSnapSize: "eventSnapSize", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", daysInWeek: "daysInWeek", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventClicked: "eventClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender", hourSegmentClicked: "hourSegmentClicked" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], decls: 8, vars: 9, consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "ghostDragEnabled", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "mwl-calendar-week-view-header", 1);
        ɵngcc0.ɵɵlistener("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) { return ctx.dayHeaderClicked.emit($event); })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) { return ctx.eventDropped({ dropData: $event }, $event.newStart, true); })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) { return ctx.dateDragEnter($event.date); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵlistener("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener($event) { return ctx.dragEnter("time"); })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener($event) { return ctx.dragLeave("time"); });
        ɵngcc0.ɵɵtemplate(4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5, 6);
        ɵngcc0.ɵɵtemplate(7, CalendarWeekViewComponent_div_7_Template, 5, 12, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.view.allDayEventRows.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("cal-resize-active", ctx.timeEventResizes.size > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    } }, directives: function () { return [CalendarWeekViewHeaderComponent, ɵngcc1.NgIf, ɵngcc2.ɵa, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc3.ResizableDirective, ɵngcc2.ɵb, ɵngcc1.NgClass, CalendarWeekViewEventComponent, ɵngcc3.ResizeHandleDirective, CalendarWeekViewHourSegmentComponent,
        CalendarWeekViewCurrentTimeMarkerComponent,
        ClickDirective]; }, encapsulation: 2 });
CalendarWeekViewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: CalendarUtils },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarWeekViewComponent.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarWeekViewComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Subject)
], CalendarWeekViewComponent.prototype, "refresh", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewComponent.prototype, "precision", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
CalendarWeekViewComponent = __decorate([ __param(2, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        CalendarUtils, String, DateAdapter])
], CalendarWeekViewComponent);

let CalendarWeekViewHeaderComponent = class CalendarWeekViewHeaderComponent {
    constructor() {
        this.dayHeaderClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) { return new (t || CalendarWeekViewHeaderComponent)(); };
CalendarWeekViewHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHeaderComponent, selectors: [["mwl-calendar-week-view-header"]], inputs: { days: "days", locale: "locale", customTemplate: "customTemplate" }, outputs: { dayHeaderClicked: "dayHeaderClicked", eventDropped: "eventDropped", dragEnter: "dragEnter" }, decls: 3, vars: 9, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]], template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r266 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r266)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction6(2, _c23, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc2.ɵa, ɵngcc1.NgClass, ClickDirective], pipes: [CalendarDatePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);

let CalendarWeekViewEventComponent = class CalendarWeekViewEventComponent {
    constructor() {
        this.eventClicked = new EventEmitter();
    }
};
CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) { return new (t || CalendarWeekViewEventComponent)(); };
CalendarWeekViewEventComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewEventComponent, selectors: [["mwl-calendar-week-view-event"]], inputs: { locale: "locale", weekEvent: "weekEvent", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDisabled: "tooltipDisabled", tooltipDelay: "tooltipDelay", customTemplate: "customTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", tooltipTemplate: "tooltipTemplate", column: "column", daysInWeek: "daysInWeek" }, outputs: { eventClicked: "eventClicked" }, decls: 3, vars: 12, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]], template: function CalendarWeekViewEventComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r285 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r285)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunctionV(2, _c25, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgStyle, CalendarTooltipDirective,
        ClickDirective,
        KeydownEnterDirective,
        CalendarEventActionsComponent,
        CalendarEventTitleComponent], pipes: [CalendarEventTitlePipe,
        CalendarA11yPipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewEventComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);

let CalendarWeekViewHourSegmentComponent = class CalendarWeekViewHourSegmentComponent {
};
CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) { return new (t || CalendarWeekViewHourSegmentComponent)(); };
CalendarWeekViewHourSegmentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewHourSegmentComponent, selectors: [["mwl-calendar-week-view-hour-segment"]], inputs: { segment: "segment", segmentHeight: "segmentHeight", locale: "locale", isTimeLabel: "isTimeLabel", daysInWeek: "daysInWeek", customTemplate: "customTemplate" }, decls: 3, vars: 8, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]], template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    } if (rf & 2) {
        const _r300 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r300)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction5(2, _c26, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass, ɵngcc1.NgIf], pipes: [CalendarA11yPipe,
        CalendarDatePipe], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);

let CalendarWeekViewCurrentTimeMarkerComponent = class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.columnDate$ = new BehaviorSubject(this.columnDate);
        this.marker$ = interval(60 * 1000).pipe(startWith(0), switchMapTo(this.columnDate$), map(columnDate => {
            const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
            const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
            const hourHeightModifier = (this.hourSegments * this.hourSegmentHeight) / 60;
            const now = new Date();
            return {
                isVisible: this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier
            };
        }));
    }
    ngOnChanges(changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    }
};
CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) { return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(ɵngcc0.ɵɵdirectiveInject(DateAdapter)); };
CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarWeekViewCurrentTimeMarkerComponent, selectors: [["mwl-calendar-week-view-current-time-marker"]], inputs: { columnDate: "columnDate", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", customTemplate: "customTemplate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], decls: 5, vars: 14, consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]], template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵpipe(3, "async");
        ɵngcc0.ɵɵpipe(4, "async");
    } if (rf & 2) {
        const _r310 = ɵngcc0.ɵɵreference(1);
        var tmp_1_0 = null;
        const currVal_1 = ɵngcc0.ɵɵpureFunction7(6, _c27, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = ɵngcc0.ɵɵpipeBind1(4, 4, ctx.marker$)) == null ? null : tmp_1_0.top);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.customTemplate || _r310)("ngTemplateOutletContext", currVal_1);
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], pipes: [ɵngcc1.AsyncPipe], encapsulation: 2 });
CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = () => [
    { type: DateAdapter }
];
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
CalendarWeekViewCurrentTimeMarkerComponent = __decorate([ __metadata("design:paramtypes", [DateAdapter])
], CalendarWeekViewCurrentTimeMarkerComponent);

let CalendarWeekModule = class CalendarWeekModule {
};
CalendarWeekModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarWeekModule });
CalendarWeekModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarWeekModule_Factory(t) { return new (t || CalendarWeekModule)(); }, imports: [[
            CommonModule,
            ResizableModule,
            DragAndDropModule,
            CalendarCommonModule
        ],
        ResizableModule,
        DragAndDropModule] });

/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
let CalendarDayViewComponent = class CalendarDayViewComponent {
    /**
     * Shows all events on a given day. Example usage:
     *
     * ```typescript
     * <mwl-calendar-day-view
     *  [viewDate]="viewDate"
     *  [events]="events">
     * </mwl-calendar-day-view>
     * ```
     */
    constructor() {
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new EventEmitter();
    }
};
CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) { return new (t || CalendarDayViewComponent)(); };
CalendarDayViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarDayViewComponent, selectors: [["mwl-calendar-day-view"]], inputs: { events: "events", hourSegments: "hourSegments", hourSegmentHeight: "hourSegmentHeight", dayStartHour: "dayStartHour", dayStartMinute: "dayStartMinute", dayEndHour: "dayEndHour", dayEndMinute: "dayEndMinute", tooltipPlacement: "tooltipPlacement", tooltipAppendToBody: "tooltipAppendToBody", tooltipDelay: "tooltipDelay", snapDraggedEvents: "snapDraggedEvents", viewDate: "viewDate", refresh: "refresh", locale: "locale", eventSnapSize: "eventSnapSize", tooltipTemplate: "tooltipTemplate", hourSegmentTemplate: "hourSegmentTemplate", eventTemplate: "eventTemplate", eventTitleTemplate: "eventTitleTemplate", eventActionsTemplate: "eventActionsTemplate", allDayEventsLabelTemplate: "allDayEventsLabelTemplate", currentTimeMarkerTemplate: "currentTimeMarkerTemplate" }, outputs: { eventClicked: "eventClicked", hourSegmentClicked: "hourSegmentClicked", eventTimesChanged: "eventTimesChanged", beforeViewRender: "beforeViewRender" }, decls: 1, vars: 23, consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourSegmentHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]], template: function CalendarDayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "mwl-calendar-week-view", 0);
        ɵngcc0.ɵɵlistener("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) { return ctx.eventClicked.emit($event); })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) { return ctx.hourSegmentClicked.emit($event); })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) { return ctx.eventTimesChanged.emit($event); })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) { return ctx.beforeViewRender.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourSegmentHeight", ctx.hourSegmentHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate);
    } }, directives: [CalendarWeekViewComponent], encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Date)
], CalendarDayViewComponent.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CalendarDayViewComponent.prototype, "events", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegments", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
__decorate([
    Input(),
    __metadata("design:type", Subject)
], CalendarDayViewComponent.prototype, "refresh", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CalendarDayViewComponent.prototype, "locale", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "eventClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);

let CalendarDayModule = class CalendarDayModule {
};
CalendarDayModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarDayModule });
CalendarDayModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarDayModule_Factory(t) { return new (t || CalendarDayModule)(); }, imports: [[CommonModule, CalendarCommonModule, CalendarWeekModule]] });

var CalendarModule_1;
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
let CalendarModule = CalendarModule_1 = class CalendarModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y
            ]
        };
    }
};
CalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CalendarModule });
CalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CalendarModule_Factory(t) { return new (t || CalendarModule)(); }, imports: [[
            CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule
        ],
        CalendarCommonModule,
        CalendarMonthModule,
        CalendarWeekModule,
        CalendarDayModule] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventActionsComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-event-actions',
                template: `
    <ng-template
      #defaultTemplate
      let-event="event"
      let-trackByActionId="trackByActionId"
    >
      <span *ngIf="event.actions" class="cal-event-actions">
        <a
          class="cal-event-action"
          href="javascript:;"
          *ngFor="let action of event.actions; trackBy: trackByActionId"
          (mwlClick)="action.onClick({ event: event, sourceEvent: $event })"
          (mwlKeydownEnter)="
            action.onClick({ event: event, sourceEvent: $event })
          "
          [ngClass]="action.cssClass"
          [innerHtml]="action.label"
          tabindex="0"
          role="button"
          [attr.aria-label]="
            { action: action } | calendarA11y: 'actionButtonLabel'
          "
        >
        </a>
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        trackByActionId: trackByActionId
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitleComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-event-title',
                template: `
    <ng-template #defaultTemplate let-event="event" let-view="view">
      <span
        class="cal-event-title"
        [innerHTML]="event.title | calendarEventTitle: view:event"
        [attr.aria-hidden]="{} | calendarA11y: 'hideEventTitle'"
      >
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        view: view
      }"
    >
    </ng-template>
  `
            }]
    }], null, { event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipWindowComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-tooltip-window',
                template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
            }]
    }], null, { contents: [{
            type: Input
        }], placement: [{
            type: Input
        }], event: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarTooltip]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Injector }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { placement: [{
            type: Input,
            args: ['tooltipPlacement']
        }], delay: [{
            type: Input,
            args: ['tooltipDelay']
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseOut: [{
            type: HostListener,
            args: ['mouseleave']
        }], contents: [{
            type: Input,
            args: ['mwlCalendarTooltip']
        }], customTemplate: [{
            type: Input,
            args: ['tooltipTemplate']
        }], event: [{
            type: Input,
            args: ['tooltipEvent']
        }], appendToBody: [{
            type: Input,
            args: ['tooltipAppendToBody']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarPreviousViewDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarPreviousView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: Input
        }], viewDateChange: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], view: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarNextViewDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarNextView]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { excludeDays: [{
            type: Input
        }], viewDateChange: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], view: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarTodayDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlCalendarToday]'
            }]
    }], function () { return [{ type: DateAdapter }]; }, { viewDateChange: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], viewDate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarAngularDateFormatter, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
const ɵCalendarDateFormatter_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(CalendarDateFormatter);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDateFormatter, [{
        type: Injectable
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDatePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarDate'
            }]
    }], function () { return [{ type: CalendarDateFormatter }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarEventTitlePipe, [{
        type: Pipe,
        args: [{
                name: 'calendarEventTitle'
            }]
    }], function () { return [{ type: CalendarEventTitleFormatter }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ClickDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlClick]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { clickListenerDisabled: [{
            type: Input
        }], click: [{
            type: Output,
            args: ['mwlClick']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeydownEnterDirective, [{
        type: Directive,
        args: [{
                selector: '[mwlKeydownEnter]'
            }]
    }], function () { return []; }, { keydown: [{
            type: Output,
            args: ['mwlKeydownEnter']
        }], onKeyPress: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarUtils, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11y, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.I18nPluralPipe }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarA11yPipe, [{
        type: Pipe,
        args: [{
                name: 'calendarA11y'
            }]
    }], function () { return [{ type: CalendarA11y }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMomentDateFormatter, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MOMENT]
            }] }, { type: DateAdapter }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarNativeDateFormatter, [{
        type: Injectable
    }], function () { return [{ type: DateAdapter }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarCommonModule, { declarations: function () { return [CalendarEventActionsComponent,
        CalendarEventTitleComponent,
        CalendarTooltipWindowComponent,
        CalendarTooltipDirective,
        CalendarPreviousViewDirective,
        CalendarNextViewDirective,
        CalendarTodayDirective,
        CalendarDatePipe,
        CalendarEventTitlePipe,
        CalendarA11yPipe,
        ClickDirective,
        KeydownEnterDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [CalendarEventActionsComponent,
        CalendarEventTitleComponent,
        CalendarTooltipWindowComponent,
        CalendarTooltipDirective,
        CalendarPreviousViewDirective,
        CalendarNextViewDirective,
        CalendarTodayDirective,
        CalendarDatePipe,
        CalendarEventTitlePipe,
        CalendarA11yPipe,
        ClickDirective,
        KeydownEnterDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarCommonModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective
                ],
                imports: [CommonModule],
                exports: [
                    CalendarEventActionsComponent,
                    CalendarEventTitleComponent,
                    CalendarTooltipWindowComponent,
                    CalendarTooltipDirective,
                    CalendarPreviousViewDirective,
                    CalendarNextViewDirective,
                    CalendarTodayDirective,
                    CalendarDatePipe,
                    CalendarEventTitlePipe,
                    CalendarA11yPipe,
                    ClickDirective,
                    KeydownEnterDirective
                ],
                providers: [I18nPluralPipe],
                entryComponents: [CalendarTooltipWindowComponent]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-view',
                template: `
    <div class="cal-month-view" role="grid">
      <mwl-calendar-month-view-header
        [days]="columnHeaders"
        [locale]="locale"
        (columnHeaderClicked)="columnHeaderClicked.emit($event)"
        [customTemplate]="headerTemplate"
      >
      </mwl-calendar-month-view-header>
      <div class="cal-days">
        <div
          *ngFor="let rowIndex of view.rowOffsets; trackBy: trackByRowOffset"
        >
          <div class="cal-cell-row">
            <mwl-calendar-month-cell
              *ngFor="
                let day of view.days
                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;
                trackBy: trackByDate
              "
              [ngClass]="day?.cssClass"
              [day]="day"
              [openDay]="openDay"
              [locale]="locale"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="cellTemplate"
              [ngStyle]="{ backgroundColor: day.backgroundColor }"
              (mwlClick)="dayClicked.emit({ day: day, sourceEvent: $event })"
              [clickListenerDisabled]="dayClicked.observers.length === 0"
              (mwlKeydownEnter)="
                dayClicked.emit({ day: day, sourceEvent: $event })
              "
              (highlightDay)="toggleDayHighlight($event.event, true)"
              (unhighlightDay)="toggleDayHighlight($event.event, false)"
              mwlDroppable
              dragOverClass="cal-drag-over"
              (drop)="
                eventDropped(
                  day,
                  $event.dropData.event,
                  $event.dropData.draggedFrom
                )
              "
              (eventClicked)="
                eventClicked.emit({
                  event: $event.event,
                  sourceEvent: $event.sourceEvent
                })
              "
              [attr.tabindex]="{} | calendarA11y: 'monthCellTabIndex'"
            >
            </mwl-calendar-month-cell>
          </div>
          <mwl-calendar-open-day-events
            [locale]="locale"
            [isOpen]="openRowIndex === rowIndex"
            [events]="openDay?.events"
            [date]="openDay?.date"
            [customTemplate]="openDayEventsTemplate"
            [eventTitleTemplate]="eventTitleTemplate"
            [eventActionsTemplate]="eventActionsTemplate"
            (eventClicked)="
              eventClicked.emit({
                event: $event.event,
                sourceEvent: $event.sourceEvent
              })
            "
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="
              eventDropped(
                openDay,
                $event.dropData.event,
                $event.dropData.draggedFrom
              )
            "
          >
          </mwl-calendar-open-day-events>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: Input
        }], excludeDays: [{
            type: Input
        }], activeDayIsOpen: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], beforeViewRender: [{
            type: Output
        }], dayClicked: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], columnHeaderClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], locale: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], activeDay: [{
            type: Input
        }], refresh: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], weekStartsOn: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], cellTemplate: [{
            type: Input
        }], openDayEventsTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], weekendDays: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-view-header',
                template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
    >
      <div class="cal-cell-row cal-header" role="row">
        <div
          class="cal-cell"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          (click)="
            columnHeaderClicked.emit({
              isoDayNumber: day.day,
              sourceEvent: $event
            })
          "
          [ngClass]="day.cssClass"
          tabindex="0"
          role="columnheader"
        >
          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { columnHeaderClicked: [{
            type: Output
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthCellComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-month-cell',
                template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y: 'monthCell'
        "
      >
        <span aria-hidden="true">
          <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{
            day.badgeTotal
          }}</span>
          <span class="cal-day-number">{{
            day.date | calendarDate: 'monthViewDayNumber':locale
          }}</span>
        </span>
      </div>
      <div class="cal-events" *ngIf="day.events.length > 0">
        <div
          class="cal-event"
          *ngFor="let event of day.events; trackBy: trackByEventId"
          [ngStyle]="{ backgroundColor: event.color?.primary }"
          [ngClass]="event?.cssClass"
          (mouseenter)="highlightDay.emit({ event: event })"
          (mouseleave)="unhighlightDay.emit({ event: event })"
          [mwlCalendarTooltip]="
            event.title | calendarEventTitle: 'monthTooltip':event
          "
          [tooltipPlacement]="tooltipPlacement"
          [tooltipEvent]="event"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipAppendToBody]="tooltipAppendToBody"
          [tooltipDelay]="tooltipDelay"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event, draggedFrom: day }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          (mwlClick)="eventClicked.emit({ event: event, sourceEvent: $event })"
          [attr.aria-hidden]="{} | calendarA11y: 'hideMonthCellEvents'"
        ></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
                host: {
                    class: 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[class.cal-event-highlight]': '!!day.backgroundColor'
                }
            }]
    }], function () { return []; }, { highlightDay: [{
            type: Output
        }], unhighlightDay: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], day: [{
            type: Input
        }], openDay: [{
            type: Input
        }], locale: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarOpenDayEventsComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-open-day-events',
                template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
                animations: [collapseAnimation]
            }]
    }], function () { return []; }, { isOpen: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], locale: [{
            type: Input
        }], events: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarMonthModule, { declarations: function () { return [CalendarMonthViewComponent,
        CalendarMonthCellComponent,
        CalendarOpenDayEventsComponent,
        CalendarMonthViewHeaderComponent]; }, imports: function () { return [CommonModule, DragAndDropModule,
        CalendarCommonModule]; }, exports: function () { return [DragAndDropModule,
        CalendarMonthViewComponent,
        CalendarMonthCellComponent,
        CalendarOpenDayEventsComponent,
        CalendarMonthViewHeaderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarMonthModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DragAndDropModule, CalendarCommonModule],
                declarations: [
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ],
                exports: [
                    DragAndDropModule,
                    CalendarMonthViewComponent,
                    CalendarMonthCellComponent,
                    CalendarOpenDayEventsComponent,
                    CalendarMonthViewHeaderComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view',
                template: `
    <div class="cal-week-view" role="grid">
      <mwl-calendar-week-view-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayHeaderClicked)="dayHeaderClicked.emit($event)"
        (eventDropped)="
          eventDropped({ dropData: $event }, $event.newStart, true)
        "
        (dragEnter)="dateDragEnter($event.date)"
      >
      </mwl-calendar-week-view-header>
      <div
        class="cal-all-day-events"
        #allDayEventsContainer
        *ngIf="view.allDayEventRows.length > 0"
        mwlDroppable
        (dragEnter)="dragEnter('allDay')"
        (dragLeave)="dragLeave('allDay')"
      >
        <div class="cal-day-columns">
          <div
            class="cal-time-label-column"
            [ngTemplateOutlet]="allDayEventsLabelTemplate"
          ></div>
          <div
            class="cal-day-column"
            *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="eventDropped($event, day.date, true)"
            (dragEnter)="dateDragEnter(day.date)"
          ></div>
        </div>
        <div
          *ngFor="let eventRow of view.allDayEventRows; trackBy: trackById"
          #eventRowContainer
          class="cal-events-row"
        >
          <div
            *ngFor="
              let allDayEvent of eventRow.row;
              trackBy: trackByWeekAllDayEvent
            "
            #event
            class="cal-event-container"
            [class.cal-draggable]="
              allDayEvent.event.draggable && allDayEventResizes.size === 0
            "
            [class.cal-starts-within-week]="!allDayEvent.startsBeforeWeek"
            [class.cal-ends-within-week]="!allDayEvent.endsAfterWeek"
            [ngClass]="allDayEvent.event?.cssClass"
            [style.width.%]="(100 / days.length) * allDayEvent.span"
            [style.marginLeft.%]="(100 / days.length) * allDayEvent.offset"
            mwlResizable
            [resizeSnapGrid]="{ left: dayColumnWidth, right: dayColumnWidth }"
            [validateResize]="validateResize"
            (resizeStart)="
              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)
            "
            (resizing)="
              allDayEventResizing(allDayEvent, $event, dayColumnWidth)
            "
            (resizeEnd)="allDayEventResizeEnded(allDayEvent)"
            mwlDraggable
            dragActiveClass="cal-drag-active"
            [dropData]="{ event: allDayEvent.event, calendarId: calendarId }"
            [dragAxis]="{
              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,
              y:
                !snapDraggedEvents &&
                allDayEvent.event.draggable &&
                allDayEventResizes.size === 0
            }"
            [dragSnapGrid]="snapDraggedEvents ? { x: dayColumnWidth } : {}"
            [validateDrag]="validateDrag"
            (dragStart)="dragStarted(eventRowContainer, event)"
            (dragging)="allDayEventDragMove()"
            (dragEnd)="dragEnded(allDayEvent, $event, dayColumnWidth)"
          >
            <div
              class="cal-resize-handle cal-resize-handle-before-start"
              *ngIf="
                allDayEvent.event?.resizable?.beforeStart &&
                !allDayEvent.startsBeforeWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ left: true }"
            ></div>
            <mwl-calendar-week-view-event
              [locale]="locale"
              [weekEvent]="allDayEvent"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="eventTemplate"
              [eventTitleTemplate]="eventTitleTemplate"
              [eventActionsTemplate]="eventActionsTemplate"
              [daysInWeek]="daysInWeek"
              (eventClicked)="
                eventClicked.emit({
                  event: allDayEvent.event,
                  sourceEvent: $event.sourceEvent
                })
              "
            >
            </mwl-calendar-week-view-event>
            <div
              class="cal-resize-handle cal-resize-handle-after-end"
              *ngIf="
                allDayEvent.event?.resizable?.afterEnd &&
                !allDayEvent.endsAfterWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ right: true }"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="cal-time-events"
        mwlDroppable
        (dragEnter)="dragEnter('time')"
        (dragLeave)="dragLeave('time')"
      >
        <div
          class="cal-time-label-column"
          *ngIf="view.hourColumns.length > 0 && daysInWeek !== 1"
        >
          <div
            *ngFor="
              let hour of view.hourColumns[0].hours;
              trackBy: trackByHour;
              let odd = odd
            "
            class="cal-hour"
            [class.cal-hour-odd]="odd"
          >
            <mwl-calendar-week-view-hour-segment
              *ngFor="let segment of hour.segments; trackBy: trackByHourSegment"
              [style.height.px]="hourSegmentHeight"
              [segment]="segment"
              [segmentHeight]="hourSegmentHeight"
              [locale]="locale"
              [customTemplate]="hourSegmentTemplate"
              [isTimeLabel]="true"
              [daysInWeek]="daysInWeek"
            >
            </mwl-calendar-week-view-hour-segment>
          </div>
        </div>
        <div
          class="cal-day-columns"
          [class.cal-resize-active]="timeEventResizes.size > 0"
          #dayColumns
        >
          <div
            class="cal-day-column"
            *ngFor="let column of view.hourColumns; trackBy: trackByHourColumn"
          >
            <mwl-calendar-week-view-current-time-marker
              [columnDate]="column.date"
              [dayStartHour]="dayStartHour"
              [dayStartMinute]="dayStartMinute"
              [dayEndHour]="dayEndHour"
              [dayEndMinute]="dayEndMinute"
              [hourSegments]="hourSegments"
              [hourSegmentHeight]="hourSegmentHeight"
              [customTemplate]="currentTimeMarkerTemplate"
            ></mwl-calendar-week-view-current-time-marker>
            <div class="cal-events-container">
              <div
                *ngFor="
                  let timeEvent of column.events;
                  trackBy: trackByWeekTimeEvent
                "
                #event
                class="cal-event-container"
                [class.cal-draggable]="
                  timeEvent.event.draggable && timeEventResizes.size === 0
                "
                [class.cal-starts-within-day]="!timeEvent.startsBeforeDay"
                [class.cal-ends-within-day]="!timeEvent.endsAfterDay"
                [ngClass]="timeEvent.event.cssClass"
                [hidden]="timeEvent.height === 0 && timeEvent.width === 0"
                [style.top.px]="timeEvent.top"
                [style.height.px]="timeEvent.height"
                [style.left.%]="timeEvent.left"
                [style.width.%]="timeEvent.width"
                mwlResizable
                [resizeSnapGrid]="{
                  left: dayColumnWidth,
                  right: dayColumnWidth,
                  top: eventSnapSize || hourSegmentHeight,
                  bottom: eventSnapSize || hourSegmentHeight
                }"
                [validateResize]="validateResize"
                [allowNegativeResizes]="true"
                (resizeStart)="
                  timeEventResizeStarted(dayColumns, timeEvent, $event)
                "
                (resizing)="timeEventResizing(timeEvent, $event)"
                (resizeEnd)="timeEventResizeEnded(timeEvent)"
                mwlDraggable
                dragActiveClass="cal-drag-active"
                [dropData]="{ event: timeEvent.event, calendarId: calendarId }"
                [dragAxis]="{
                  x: timeEvent.event.draggable && timeEventResizes.size === 0,
                  y: timeEvent.event.draggable && timeEventResizes.size === 0
                }"
                [dragSnapGrid]="
                  snapDraggedEvents
                    ? {
                        x: dayColumnWidth,
                        y: eventSnapSize || hourSegmentHeight
                      }
                    : {}
                "
                [ghostDragEnabled]="!snapDraggedEvents"
                [validateDrag]="validateDrag"
                (dragStart)="dragStarted(dayColumns, event, timeEvent)"
                (dragging)="dragMove(timeEvent, $event)"
                (dragEnd)="dragEnded(timeEvent, $event, dayColumnWidth, true)"
              >
                <div
                  class="cal-resize-handle cal-resize-handle-before-start"
                  *ngIf="
                    timeEvent.event?.resizable?.beforeStart &&
                    !timeEvent.startsBeforeDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    left: true,
                    top: true
                  }"
                ></div>
                <mwl-calendar-week-view-event
                  [locale]="locale"
                  [weekEvent]="timeEvent"
                  [tooltipPlacement]="tooltipPlacement"
                  [tooltipTemplate]="tooltipTemplate"
                  [tooltipAppendToBody]="tooltipAppendToBody"
                  [tooltipDisabled]="dragActive || timeEventResizes.size > 0"
                  [tooltipDelay]="tooltipDelay"
                  [customTemplate]="eventTemplate"
                  [eventTitleTemplate]="eventTitleTemplate"
                  [eventActionsTemplate]="eventActionsTemplate"
                  [column]="column"
                  [daysInWeek]="daysInWeek"
                  (eventClicked)="
                    eventClicked.emit({
                      event: timeEvent.event,
                      sourceEvent: $event.sourceEvent
                    })
                  "
                >
                </mwl-calendar-week-view-event>
                <div
                  class="cal-resize-handle cal-resize-handle-after-end"
                  *ngIf="
                    timeEvent.event?.resizable?.afterEnd &&
                    !timeEvent.endsAfterDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    right: true,
                    bottom: true
                  }"
                ></div>
              </div>
            </div>

            <div
              *ngFor="
                let hour of column.hours;
                trackBy: trackByHour;
                let odd = odd
              "
              class="cal-hour"
              [class.cal-hour-odd]="odd"
            >
              <mwl-calendar-week-view-hour-segment
                *ngFor="
                  let segment of hour.segments;
                  trackBy: trackByHourSegment
                "
                [style.height.px]="hourSegmentHeight"
                [segment]="segment"
                [segmentHeight]="hourSegmentHeight"
                [locale]="locale"
                [customTemplate]="hourSegmentTemplate"
                [daysInWeek]="daysInWeek"
                (mwlClick)="
                  hourSegmentClicked.emit({
                    date: segment.date,
                    sourceEvent: $event
                  })
                "
                [clickListenerDisabled]="
                  hourSegmentClicked.observers.length === 0
                "
                mwlDroppable
                [dragOverClass]="
                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null
                "
                dragActiveClass="cal-drag-active"
                (drop)="eventDropped($event, segment.date, false)"
                (dragEnter)="dateDragEnter(segment.date)"
                [isTimeLabel]="daysInWeek === 1"
              >
              </mwl-calendar-week-view-hour-segment>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: CalendarUtils }, { type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }, { type: DateAdapter }]; }, { events: [{
            type: Input
        }], excludeDays: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], precision: [{
            type: Input
        }], snapDraggedEvents: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], dayHeaderClicked: [{
            type: Output
        }], eventClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], beforeViewRender: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], locale: [{
            type: Input
        }], viewDate: [{
            type: Input
        }], refresh: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], weekStartsOn: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], weekendDays: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], allDayEventsLabelTemplate: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }], currentTimeMarkerTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-header',
                template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        <div
          class="cal-header"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({ day: day, sourceEvent: $event })"
          mwlDroppable
          dragOverClass="cal-drag-over"
          (drop)="
            eventDropped.emit({
              event: $event.dropData.event,
              newStart: day.date
            })
          "
          (dragEnter)="dragEnter.emit({ date: day.date })"
          tabindex="0"
          role="columnheader"
        >
          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b
          ><br />
          <span>{{
            day.date | calendarDate: 'weekViewColumnSubHeader':locale
          }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { dayHeaderClicked: [{
            type: Output
        }], eventDropped: [{
            type: Output
        }], dragEnter: [{
            type: Output
        }], days: [{
            type: Input
        }], locale: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewEventComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-event',
                template: `
    <ng-template
      #defaultTemplate
      let-weekEvent="weekEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDisabled="tooltipDisabled"
      let-tooltipDelay="tooltipDelay"
      let-column="column"
      let-daysInWeek="daysInWeek"
    >
      <div
        class="cal-event"
        [ngStyle]="{
          backgroundColor: weekEvent.event.color?.secondary,
          borderColor: weekEvent.event.color?.primary
        }"
        [mwlCalendarTooltip]="
          !tooltipDisabled
            ? (weekEvent.event.title
              | calendarEventTitle
                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')
                : weekEvent.event)
            : ''
        "
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="weekEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody"
        [tooltipDelay]="tooltipDelay"
        (mwlClick)="eventClicked.emit({ sourceEvent: $event })"
        (mwlKeydownEnter)="eventClicked.emit({ sourceEvent: $event })"
        tabindex="0"
        role="application"
        [attr.aria-label]="
          { event: weekEvent.event, locale: locale }
            | calendarA11y: 'eventDescription'
        "
      >
        <mwl-calendar-event-actions
          [event]="weekEvent.event"
          [customTemplate]="eventActionsTemplate"
        >
        </mwl-calendar-event-actions>
        &ngsp;
        <mwl-calendar-event-title
          [event]="weekEvent.event"
          [customTemplate]="eventTitleTemplate"
          [view]="daysInWeek === 1 ? 'day' : 'week'"
        >
        </mwl-calendar-event-title>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        weekEvent: weekEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDisabled: tooltipDisabled,
        tooltipDelay: tooltipDelay,
        column: column,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return []; }, { eventClicked: [{
            type: Output
        }], locale: [{
            type: Input
        }], weekEvent: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], column: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewHourSegmentComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-hour-segment',
                template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time" *ngIf="isTimeLabel">
          {{
            segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale
          }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
            }]
    }], null, { segment: [{
            type: Input
        }], segmentHeight: [{
            type: Input
        }], locale: [{
            type: Input
        }], isTimeLabel: [{
            type: Input
        }], daysInWeek: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekViewCurrentTimeMarkerComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-week-view-current-time-marker',
                template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
            }]
    }], function () { return [{ type: DateAdapter }]; }, { columnDate: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarWeekModule, { declarations: function () { return [CalendarWeekViewComponent,
        CalendarWeekViewHeaderComponent,
        CalendarWeekViewEventComponent,
        CalendarWeekViewHourSegmentComponent,
        CalendarWeekViewCurrentTimeMarkerComponent]; }, imports: function () { return [CommonModule,
        ResizableModule,
        DragAndDropModule,
        CalendarCommonModule]; }, exports: function () { return [ResizableModule,
        DragAndDropModule,
        CalendarWeekViewComponent,
        CalendarWeekViewHeaderComponent,
        CalendarWeekViewEventComponent,
        CalendarWeekViewHourSegmentComponent,
        CalendarWeekViewCurrentTimeMarkerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarWeekModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    ResizableModule,
                    DragAndDropModule,
                    CalendarCommonModule
                ],
                declarations: [
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent
                ],
                exports: [
                    ResizableModule,
                    DragAndDropModule,
                    CalendarWeekViewComponent,
                    CalendarWeekViewHeaderComponent,
                    CalendarWeekViewEventComponent,
                    CalendarWeekViewHourSegmentComponent,
                    CalendarWeekViewCurrentTimeMarkerComponent
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayViewComponent, [{
        type: Component,
        args: [{
                selector: 'mwl-calendar-day-view',
                template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourSegmentHeight]="hourSegmentHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    ></mwl-calendar-week-view>
  `
            }]
    }], function () { return []; }, { events: [{
            type: Input
        }], hourSegments: [{
            type: Input
        }], hourSegmentHeight: [{
            type: Input
        }], dayStartHour: [{
            type: Input
        }], dayStartMinute: [{
            type: Input
        }], dayEndHour: [{
            type: Input
        }], dayEndMinute: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAppendToBody: [{
            type: Input
        }], tooltipDelay: [{
            type: Input
        }], snapDraggedEvents: [{
            type: Input
        }], eventClicked: [{
            type: Output
        }], hourSegmentClicked: [{
            type: Output
        }], eventTimesChanged: [{
            type: Output
        }], beforeViewRender: [{
            type: Output
        }], viewDate: [{
            type: Input
        }], refresh: [{
            type: Input
        }], locale: [{
            type: Input
        }], eventSnapSize: [{
            type: Input
        }], tooltipTemplate: [{
            type: Input
        }], hourSegmentTemplate: [{
            type: Input
        }], eventTemplate: [{
            type: Input
        }], eventTitleTemplate: [{
            type: Input
        }], eventActionsTemplate: [{
            type: Input
        }], allDayEventsLabelTemplate: [{
            type: Input
        }], currentTimeMarkerTemplate: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarDayModule, { declarations: function () { return [CalendarDayViewComponent]; }, imports: function () { return [CommonModule,
        CalendarCommonModule,
        CalendarWeekModule]; }, exports: function () { return [CalendarDayViewComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarDayModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CalendarCommonModule, CalendarWeekModule],
                declarations: [CalendarDayViewComponent],
                exports: [CalendarDayViewComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CalendarModule, { imports: [CalendarCommonModule,
        CalendarMonthModule,
        CalendarWeekModule,
        CalendarDayModule], exports: [CalendarCommonModule,
        CalendarMonthModule,
        CalendarWeekModule,
        CalendarDayModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ],
                exports: [
                    CalendarCommonModule,
                    CalendarMonthModule,
                    CalendarWeekModule,
                    CalendarDayModule
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarA11y, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, CalendarOpenDayEventsComponent as ɵa, CalendarEventActionsComponent as ɵb, CalendarEventTitleComponent as ɵc, CalendarTooltipWindowComponent as ɵd, CalendarTooltipDirective as ɵe, CalendarPreviousViewDirective as ɵf, CalendarNextViewDirective as ɵg, CalendarTodayDirective as ɵh, CalendarDatePipe as ɵi, CalendarEventTitlePipe as ɵj, CalendarA11yPipe as ɵk, ClickDirective as ɵl, KeydownEnterDirective as ɵm, CalendarMonthCellComponent as ɵn, CalendarMonthViewHeaderComponent as ɵo, CalendarWeekViewHeaderComponent as ɵp, CalendarWeekViewEventComponent as ɵq, CalendarWeekViewHourSegmentComponent as ɵr, CalendarWeekViewCurrentTimeMarkerComponent as ɵs };

//# sourceMappingURL=angular-calendar.js.map