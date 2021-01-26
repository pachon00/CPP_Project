/**
 * @license Angular v9.0.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AnimationPlayer } from '@angular/animations';
import { NoopAnimationPlayer } from '@angular/animations';
import { ɵAnimationDriver } from '@angular/animations/browser';
import { ɵStyleData } from '@angular/animations';

/**
 * @publicApi
 */
export declare class MockAnimationDriver implements ɵAnimationDriver {
    static log: AnimationPlayer[];
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing: string, previousPlayers?: any[]): MockAnimationPlayer;
}

/**
 * @publicApi
 */
export declare class MockAnimationPlayer extends NoopAnimationPlayer {
    element: any;
    keyframes: {
        [key: string]: string | number;
    }[];
    duration: number;
    delay: number;
    easing: string;
    previousPlayers: any[];
    private __finished;
    private __started;
    previousStyles: {
        [key: string]: string | number;
    };
    private _onInitFns;
    currentSnapshot: ɵStyleData;
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing: string, previousPlayers: any[]);
    finish(): void;
    destroy(): void;
    play(): void;
    hasStarted(): boolean;
    beforeDestroy(): void;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5kLnRzIiwic291cmNlcyI6WyJ0ZXN0aW5nLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjkuMC4wXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCB7IEFuaW1hdGlvblBsYXllciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOb29wQW5pbWF0aW9uUGxheWVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IMm1QW5pbWF0aW9uRHJpdmVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcclxuaW1wb3J0IHsgybVTdHlsZURhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb2NrQW5pbWF0aW9uRHJpdmVyIGltcGxlbWVudHMgybVBbmltYXRpb25Ecml2ZXIge1xyXG4gICAgc3RhdGljIGxvZzogQW5pbWF0aW9uUGxheWVyW107XHJcbiAgICB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBjb250YWluc0VsZW1lbnQoZWxtMTogYW55LCBlbG0yOiBhbnkpOiBib29sZWFuO1xyXG4gICAgcXVlcnkoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbik6IGFueVtdO1xyXG4gICAgY29tcHV0ZVN0eWxlKGVsZW1lbnQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBhbmltYXRlKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdLCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBlYXNpbmc6IHN0cmluZywgcHJldmlvdXNQbGF5ZXJzPzogYW55W10pOiBNb2NrQW5pbWF0aW9uUGxheWVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9ja0FuaW1hdGlvblBsYXllciBleHRlbmRzIE5vb3BBbmltYXRpb25QbGF5ZXIge1xyXG4gICAgZWxlbWVudDogYW55O1xyXG4gICAga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBlYXNpbmc6IHN0cmluZztcclxuICAgIHByZXZpb3VzUGxheWVyczogYW55W107XHJcbiAgICBwcml2YXRlIF9fZmluaXNoZWQ7XHJcbiAgICBwcml2YXRlIF9fc3RhcnRlZDtcclxuICAgIHByZXZpb3VzU3R5bGVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX29uSW5pdEZucztcclxuICAgIGN1cnJlbnRTbmFwc2hvdDogybVTdHlsZURhdGE7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBhbnksIGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH1bXSwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciwgZWFzaW5nOiBzdHJpbmcsIHByZXZpb3VzUGxheWVyczogYW55W10pO1xyXG4gICAgZmluaXNoKCk6IHZvaWQ7XHJcbiAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBwbGF5KCk6IHZvaWQ7XHJcbiAgICBoYXNTdGFydGVkKCk6IGJvb2xlYW47XHJcbiAgICBiZWZvcmVEZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IH1cclxuIl19