/**
 * @license Angular v9.0.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AnimationMetadata } from '@angular/animations';
import { AnimationOptions } from '@angular/animations';
import { AnimationPlayer } from '@angular/animations';
import { AnimationTriggerMetadata } from '@angular/animations';
import { ɵStyleData } from '@angular/animations';

/**
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
declare abstract class AnimationDriver {
    static NOOP: AnimationDriver;
    abstract validateStyleProperty(prop: string): boolean;
    abstract matchesElement(element: any, selector: string): boolean;
    abstract containsElement(elm1: any, elm2: any): boolean;
    abstract query(element: any, selector: string, multi: boolean): any[];
    abstract computeStyle(element: any, prop: string, defaultValue?: string): string;
    abstract animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing?: string | null, previousPlayers?: any[], scrubberAccessRequested?: boolean): any;
}
export { AnimationDriver }
export { AnimationDriver as ɵAnimationDriver }

declare interface AnimationEngineInstruction {
    type: AnimationTransitionInstructionType;
}

declare interface AnimationTimelineInstruction extends AnimationEngineInstruction {
    element: any;
    keyframes: ɵStyleData[];
    preStyleProps: string[];
    postStyleProps: string[];
    duration: number;
    delay: number;
    totalTime: number;
    easing: string | null;
    stretchStartingKeyframe?: boolean;
    subTimeline: boolean;
}


declare const enum AnimationTransitionInstructionType {
    TransitionAnimation = 0,
    TimelineAnimation = 1
}


/**
 * DOMAnimation represents the Animation Web API.
 *
 * It is an external API by the browser, and must thus use "declare interface",
 * to prevent renaming by Closure Compiler.
 *
 * @see https://developer.mozilla.org/de/docs/Web/API/Animation
 */
declare interface DOMAnimation {
    cancel(): void;
    play(): void;
    pause(): void;
    finish(): void;
    onfinish: Function;
    position: number;
    currentTime: number;
    addEventListener(eventName: string, handler: (event: any) => any): any;
    dispatchEvent(eventName: string): any;
}

declare class ElementInstructionMap {
    private _map;
    consume(element: any): AnimationTimelineInstruction[];
    append(element: any, instructions: AnimationTimelineInstruction[]): void;
    has(element: any): boolean;
    clear(): void;
}

export declare function ɵallowPreviousPlayerStylesMerge(duration: number, delay: number): boolean;

/**
 * Designed to be executed during a keyframe-based animation to apply any special-cased styles.
 *
 * When started (when the `start()` method is run) then the provided `startStyles`
 * will be applied. When finished (when the `finish()` method is called) the
 * `endStyles` will be applied as well any any starting styles. Finally when
 * `destroy()` is called then all styles will be removed.
 */
export declare class ɵangular_packages_animations_browser_browser_a {
    private _element;
    private _startStyles;
    private _endStyles;
    static initialStylesByElement: WeakMap<any, {
        [key: string]: any;
    }>;
    private _state;
    private _initialStyles;
    constructor(_element: any, _startStyles: {
        [key: string]: any;
    } | null, _endStyles: {
        [key: string]: any;
    } | null);
    start(): void;
    finish(): void;
    destroy(): void;
}

export declare class ɵAnimation {
    private _driver;
    private _animationAst;
    constructor(_driver: AnimationDriver, input: AnimationMetadata | AnimationMetadata[]);
    buildTimelines(element: any, startingStyles: ɵStyleData | ɵStyleData[], destinationStyles: ɵStyleData | ɵStyleData[], options: AnimationOptions, subInstructions?: ElementInstructionMap): AnimationTimelineInstruction[];
}

export declare class ɵAnimationEngine {
    private bodyNode;
    private _driver;
    private _transitionEngine;
    private _timelineEngine;
    private _triggerCache;
    onRemovalComplete: (element: any, context: any) => void;
    constructor(bodyNode: any, _driver: AnimationDriver, normalizer: ɵAnimationStyleNormalizer);
    registerTrigger(componentId: string, namespaceId: string, hostElement: any, name: string, metadata: AnimationTriggerMetadata): void;
    register(namespaceId: string, hostElement: any): void;
    destroy(namespaceId: string, context: any): void;
    onInsert(namespaceId: string, element: any, parent: any, insertBefore: boolean): void;
    onRemove(namespaceId: string, element: any, context: any, isHostElement?: boolean): void;
    disableAnimations(element: any, disable: boolean): void;
    process(namespaceId: string, element: any, property: string, value: any): void;
    listen(namespaceId: string, element: any, eventName: string, eventPhase: string, callback: (event: any) => any): () => any;
    flush(microtaskId?: number): void;
    get players(): AnimationPlayer[];
    whenRenderingDone(): Promise<any>;
}


/**
 * @publicApi
 */
export declare abstract class ɵAnimationStyleNormalizer {
    abstract normalizePropertyName(propertyName: string, errors: string[]): string;
    abstract normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export declare const ɵcontainsElement: (elm1: any, elm2: any) => boolean;

export declare class ɵCssKeyframesDriver implements AnimationDriver {
    private _count;
    private readonly _head;
    private _warningIssued;
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    buildKeyframeElement(element: any, name: string, keyframes: {
        [key: string]: any;
    }[]): any;
    animate(element: any, keyframes: ɵStyleData[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[], scrubberAccessRequested?: boolean): AnimationPlayer;
    private _notifyFaultyScrubber;
}

export declare class ɵCssKeyframesPlayer implements AnimationPlayer {
    readonly element: any;
    readonly keyframes: {
        [key: string]: string | number;
    }[];
    readonly animationName: string;
    private readonly _duration;
    private readonly _delay;
    private readonly _finalStyles;
    private readonly _specialStyles?;
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _started;
    private _styler;
    parentPlayer: AnimationPlayer;
    readonly totalTime: number;
    readonly easing: string;
    currentSnapshot: {
        [key: string]: string;
    };
    private _state;
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], animationName: string, _duration: number, _delay: number, easing: string, _finalStyles: {
        [key: string]: any;
    }, _specialStyles?: ɵangular_packages_animations_browser_browser_a | null | undefined);
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    destroy(): void;
    private _flushDoneFns;
    private _flushStartFns;
    finish(): void;
    setPosition(value: number): void;
    getPosition(): number;
    hasStarted(): boolean;
    init(): void;
    play(): void;
    pause(): void;
    restart(): void;
    reset(): void;
    private _buildStyler;
    beforeDestroy(): void;
}

export declare const ɵinvokeQuery: (element: any, selector: string, multi: boolean) => any[];

export declare const ɵmatchesElement: (element: any, selector: string) => boolean;

/**
 * @publicApi
 */
export declare class ɵNoopAnimationDriver implements AnimationDriver {
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    animate(element: any, keyframes: {
        [key: string]: string | number;
    }[], duration: number, delay: number, easing: string, previousPlayers?: any[], scrubberAccessRequested?: boolean): AnimationPlayer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵNoopAnimationDriver>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵNoopAnimationDriver>;
}

/**
 * @publicApi
 */
export declare class ɵNoopAnimationStyleNormalizer {
    normalizePropertyName(propertyName: string, errors: string[]): string;
    normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export declare function ɵsupportsWebAnimations(): boolean;

export declare function ɵvalidateStyleProperty(prop: string): boolean;

export declare class ɵWebAnimationsDriver implements AnimationDriver {
    private _isNativeImpl;
    private _cssKeyframesDriver;
    validateStyleProperty(prop: string): boolean;
    matchesElement(element: any, selector: string): boolean;
    containsElement(elm1: any, elm2: any): boolean;
    query(element: any, selector: string, multi: boolean): any[];
    computeStyle(element: any, prop: string, defaultValue?: string): string;
    overrideWebAnimationsSupport(supported: boolean): void;
    animate(element: any, keyframes: ɵStyleData[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[], scrubberAccessRequested?: boolean): AnimationPlayer;
}

export declare class ɵWebAnimationsPlayer implements AnimationPlayer {
    element: any;
    keyframes: {
        [key: string]: string | number;
    }[];
    options: {
        [key: string]: string | number;
    };
    private _specialStyles?;
    private _onDoneFns;
    private _onStartFns;
    private _onDestroyFns;
    private _duration;
    private _delay;
    private _initialized;
    private _finished;
    private _started;
    private _destroyed;
    private _finalKeyframe;
    readonly domPlayer: DOMAnimation;
    time: number;
    parentPlayer: AnimationPlayer | null;
    currentSnapshot: {
        [styleName: string]: string | number;
    };
    constructor(element: any, keyframes: {
        [key: string]: string | number;
    }[], options: {
        [key: string]: string | number;
    }, _specialStyles?: ɵangular_packages_animations_browser_browser_a | null | undefined);
    private _onFinish;
    init(): void;
    private _buildPlayer;
    private _preparePlayerBeforeStart;
    onStart(fn: () => void): void;
    onDone(fn: () => void): void;
    onDestroy(fn: () => void): void;
    play(): void;
    pause(): void;
    finish(): void;
    reset(): void;
    private _resetDomPlayerState;
    restart(): void;
    hasStarted(): boolean;
    destroy(): void;
    setPosition(p: number): void;
    getPosition(): number;
    get totalTime(): number;
    beforeDestroy(): void;
}

export declare class ɵWebAnimationsStyleNormalizer extends ɵAnimationStyleNormalizer {
    normalizePropertyName(propertyName: string, errors: string[]): string;
    normalizeStyleValue(userProvidedProperty: string, normalizedProperty: string, value: string | number, errors: string[]): string;
}

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5kLnRzIiwic291cmNlcyI6WyJicm93c2VyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9OQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4wLjBcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQW5pbWF0aW9uTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25QbGF5ZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IMm1U3R5bGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBBbmltYXRpb25Ecml2ZXIge1xyXG4gICAgc3RhdGljIE5PT1A6IEFuaW1hdGlvbkRyaXZlcjtcclxuICAgIGFic3RyYWN0IHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgbWF0Y2hlc0VsZW1lbnQoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGNvbnRhaW5zRWxlbWVudChlbG0xOiBhbnksIGVsbTI6IGFueSk6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBxdWVyeShlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKTogYW55W107XHJcbiAgICBhYnN0cmFjdCBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGFuaW1hdGUoZWxlbWVudDogYW55LCBrZXlmcmFtZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9W10sIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIGVhc2luZz86IHN0cmluZyB8IG51bGwsIHByZXZpb3VzUGxheWVycz86IGFueVtdLCBzY3J1YmJlckFjY2Vzc1JlcXVlc3RlZD86IGJvb2xlYW4pOiBhbnk7XHJcbn1cclxuZXhwb3J0IHsgQW5pbWF0aW9uRHJpdmVyIH1cclxuZXhwb3J0IHsgQW5pbWF0aW9uRHJpdmVyIGFzIMm1QW5pbWF0aW9uRHJpdmVyIH1cclxuXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvbkVuZ2luZUluc3RydWN0aW9uIHtcclxuICAgIHR5cGU6IEFuaW1hdGlvblRyYW5zaXRpb25JbnN0cnVjdGlvblR5cGU7XHJcbn1cclxuXHJcbmRlY2xhcmUgaW50ZXJmYWNlIEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb24gZXh0ZW5kcyBBbmltYXRpb25FbmdpbmVJbnN0cnVjdGlvbiB7XHJcbiAgICBlbGVtZW50OiBhbnk7XHJcbiAgICBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW107XHJcbiAgICBwcmVTdHlsZVByb3BzOiBzdHJpbmdbXTtcclxuICAgIHBvc3RTdHlsZVByb3BzOiBzdHJpbmdbXTtcclxuICAgIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgdG90YWxUaW1lOiBudW1iZXI7XHJcbiAgICBlYXNpbmc6IHN0cmluZyB8IG51bGw7XHJcbiAgICBzdHJldGNoU3RhcnRpbmdLZXlmcmFtZT86IGJvb2xlYW47XHJcbiAgICBzdWJUaW1lbGluZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmRlY2xhcmUgY29uc3QgZW51bSBBbmltYXRpb25UcmFuc2l0aW9uSW5zdHJ1Y3Rpb25UeXBlIHtcclxuICAgIFRyYW5zaXRpb25BbmltYXRpb24gPSAwLFxyXG4gICAgVGltZWxpbmVBbmltYXRpb24gPSAxXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRE9NQW5pbWF0aW9uIHJlcHJlc2VudHMgdGhlIEFuaW1hdGlvbiBXZWIgQVBJLlxyXG4gKlxyXG4gKiBJdCBpcyBhbiBleHRlcm5hbCBBUEkgYnkgdGhlIGJyb3dzZXIsIGFuZCBtdXN0IHRodXMgdXNlIFwiZGVjbGFyZSBpbnRlcmZhY2VcIixcclxuICogdG8gcHJldmVudCByZW5hbWluZyBieSBDbG9zdXJlIENvbXBpbGVyLlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RlL2RvY3MvV2ViL0FQSS9BbmltYXRpb25cclxuICovXHJcbmRlY2xhcmUgaW50ZXJmYWNlIERPTUFuaW1hdGlvbiB7XHJcbiAgICBjYW5jZWwoKTogdm9pZDtcclxuICAgIHBsYXkoKTogdm9pZDtcclxuICAgIHBhdXNlKCk6IHZvaWQ7XHJcbiAgICBmaW5pc2goKTogdm9pZDtcclxuICAgIG9uZmluaXNoOiBGdW5jdGlvbjtcclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBjdXJyZW50VGltZTogbnVtYmVyO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogKGV2ZW50OiBhbnkpID0+IGFueSk6IGFueTtcclxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgRWxlbWVudEluc3RydWN0aW9uTWFwIHtcclxuICAgIHByaXZhdGUgX21hcDtcclxuICAgIGNvbnN1bWUoZWxlbWVudDogYW55KTogQW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbltdO1xyXG4gICAgYXBwZW5kKGVsZW1lbnQ6IGFueSwgaW5zdHJ1Y3Rpb25zOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uW10pOiB2b2lkO1xyXG4gICAgaGFzKGVsZW1lbnQ6IGFueSk6IGJvb2xlYW47XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZShkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogYm9vbGVhbjtcclxuXHJcbi8qKlxyXG4gKiBEZXNpZ25lZCB0byBiZSBleGVjdXRlZCBkdXJpbmcgYSBrZXlmcmFtZS1iYXNlZCBhbmltYXRpb24gdG8gYXBwbHkgYW55IHNwZWNpYWwtY2FzZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBXaGVuIHN0YXJ0ZWQgKHdoZW4gdGhlIGBzdGFydCgpYCBtZXRob2QgaXMgcnVuKSB0aGVuIHRoZSBwcm92aWRlZCBgc3RhcnRTdHlsZXNgXHJcbiAqIHdpbGwgYmUgYXBwbGllZC4gV2hlbiBmaW5pc2hlZCAod2hlbiB0aGUgYGZpbmlzaCgpYCBtZXRob2QgaXMgY2FsbGVkKSB0aGVcclxuICogYGVuZFN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIGFzIHdlbGwgYW55IGFueSBzdGFydGluZyBzdHlsZXMuIEZpbmFsbHkgd2hlblxyXG4gKiBgZGVzdHJveSgpYCBpcyBjYWxsZWQgdGhlbiBhbGwgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZC5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19hbmltYXRpb25zX2Jyb3dzZXJfYnJvd3Nlcl9hIHtcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9zdGFydFN0eWxlcztcclxuICAgIHByaXZhdGUgX2VuZFN0eWxlcztcclxuICAgIHN0YXRpYyBpbml0aWFsU3R5bGVzQnlFbGVtZW50OiBXZWFrTWFwPGFueSwge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH0+O1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsU3R5bGVzO1xyXG4gICAgY29uc3RydWN0b3IoX2VsZW1lbnQ6IGFueSwgX3N0YXJ0U3R5bGVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgfSB8IG51bGwsIF9lbmRTdHlsZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICB9IHwgbnVsbCk7XHJcbiAgICBzdGFydCgpOiB2b2lkO1xyXG4gICAgZmluaXNoKCk6IHZvaWQ7XHJcbiAgICBkZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1QW5pbWF0aW9uIHtcclxuICAgIHByaXZhdGUgX2RyaXZlcjtcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbkFzdDtcclxuICAgIGNvbnN0cnVjdG9yKF9kcml2ZXI6IEFuaW1hdGlvbkRyaXZlciwgaW5wdXQ6IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXSk7XHJcbiAgICBidWlsZFRpbWVsaW5lcyhlbGVtZW50OiBhbnksIHN0YXJ0aW5nU3R5bGVzOiDJtVN0eWxlRGF0YSB8IMm1U3R5bGVEYXRhW10sIGRlc3RpbmF0aW9uU3R5bGVzOiDJtVN0eWxlRGF0YSB8IMm1U3R5bGVEYXRhW10sIG9wdGlvbnM6IEFuaW1hdGlvbk9wdGlvbnMsIHN1Ykluc3RydWN0aW9ucz86IEVsZW1lbnRJbnN0cnVjdGlvbk1hcCk6IEFuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVBbmltYXRpb25FbmdpbmUge1xyXG4gICAgcHJpdmF0ZSBib2R5Tm9kZTtcclxuICAgIHByaXZhdGUgX2RyaXZlcjtcclxuICAgIHByaXZhdGUgX3RyYW5zaXRpb25FbmdpbmU7XHJcbiAgICBwcml2YXRlIF90aW1lbGluZUVuZ2luZTtcclxuICAgIHByaXZhdGUgX3RyaWdnZXJDYWNoZTtcclxuICAgIG9uUmVtb3ZhbENvbXBsZXRlOiAoZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnkpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5Tm9kZTogYW55LCBfZHJpdmVyOiBBbmltYXRpb25Ecml2ZXIsIG5vcm1hbGl6ZXI6IMm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyKTtcclxuICAgIHJlZ2lzdGVyVHJpZ2dlcihjb21wb25lbnRJZDogc3RyaW5nLCBuYW1lc3BhY2VJZDogc3RyaW5nLCBob3N0RWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIG1ldGFkYXRhOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEpOiB2b2lkO1xyXG4gICAgcmVnaXN0ZXIobmFtZXNwYWNlSWQ6IHN0cmluZywgaG9zdEVsZW1lbnQ6IGFueSk6IHZvaWQ7XHJcbiAgICBkZXN0cm95KG5hbWVzcGFjZUlkOiBzdHJpbmcsIGNvbnRleHQ6IGFueSk6IHZvaWQ7XHJcbiAgICBvbkluc2VydChuYW1lc3BhY2VJZDogc3RyaW5nLCBlbGVtZW50OiBhbnksIHBhcmVudDogYW55LCBpbnNlcnRCZWZvcmU6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgb25SZW1vdmUobmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBjb250ZXh0OiBhbnksIGlzSG9zdEVsZW1lbnQ/OiBib29sZWFuKTogdm9pZDtcclxuICAgIGRpc2FibGVBbmltYXRpb25zKGVsZW1lbnQ6IGFueSwgZGlzYWJsZTogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBwcm9jZXNzKG5hbWVzcGFjZUlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBsaXN0ZW4obmFtZXNwYWNlSWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRQaGFzZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGFueSk6ICgpID0+IGFueTtcclxuICAgIGZsdXNoKG1pY3JvdGFza0lkPzogbnVtYmVyKTogdm9pZDtcclxuICAgIGdldCBwbGF5ZXJzKCk6IEFuaW1hdGlvblBsYXllcltdO1xyXG4gICAgd2hlblJlbmRlcmluZ0RvbmUoKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIMm1QW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIHtcclxuICAgIGFic3RyYWN0IG5vcm1hbGl6ZVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZztcclxuICAgIGFic3RyYWN0IG5vcm1hbGl6ZVN0eWxlVmFsdWUodXNlclByb3ZpZGVkUHJvcGVydHk6IHN0cmluZywgbm9ybWFsaXplZFByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1Y29udGFpbnNFbGVtZW50OiAoZWxtMTogYW55LCBlbG0yOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtUNzc0tleWZyYW1lc0RyaXZlciBpbXBsZW1lbnRzIEFuaW1hdGlvbkRyaXZlciB7XHJcbiAgICBwcml2YXRlIF9jb3VudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2hlYWQ7XHJcbiAgICBwcml2YXRlIF93YXJuaW5nSXNzdWVkO1xyXG4gICAgdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3A6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBtYXRjaGVzRWxlbWVudChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgY29udGFpbnNFbGVtZW50KGVsbTE6IGFueSwgZWxtMjogYW55KTogYm9vbGVhbjtcclxuICAgIHF1ZXJ5KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXTtcclxuICAgIGNvbXB1dGVTdHlsZShlbGVtZW50OiBhbnksIHByb3A6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgYnVpbGRLZXlmcmFtZUVsZW1lbnQoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIH1bXSk6IGFueTtcclxuICAgIGFuaW1hdGUoZWxlbWVudDogYW55LCBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10sIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIGVhc2luZzogc3RyaW5nLCBwcmV2aW91c1BsYXllcnM/OiBBbmltYXRpb25QbGF5ZXJbXSwgc2NydWJiZXJBY2Nlc3NSZXF1ZXN0ZWQ/OiBib29sZWFuKTogQW5pbWF0aW9uUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBfbm90aWZ5RmF1bHR5U2NydWJiZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1Q3NzS2V5ZnJhbWVzUGxheWVyIGltcGxlbWVudHMgQW5pbWF0aW9uUGxheWVyIHtcclxuICAgIHJlYWRvbmx5IGVsZW1lbnQ6IGFueTtcclxuICAgIHJlYWRvbmx5IGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH1bXTtcclxuICAgIHJlYWRvbmx5IGFuaW1hdGlvbk5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2R1cmF0aW9uO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVsYXk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9maW5hbFN0eWxlcztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwZWNpYWxTdHlsZXM/O1xyXG4gICAgcHJpdmF0ZSBfb25Eb25lRm5zO1xyXG4gICAgcHJpdmF0ZSBfb25TdGFydEZucztcclxuICAgIHByaXZhdGUgX29uRGVzdHJveUZucztcclxuICAgIHByaXZhdGUgX3N0YXJ0ZWQ7XHJcbiAgICBwcml2YXRlIF9zdHlsZXI7XHJcbiAgICBwYXJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcclxuICAgIHJlYWRvbmx5IHRvdGFsVGltZTogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZWFzaW5nOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50U25hcHNob3Q6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfc3RhdGU7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBhbnksIGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH1bXSwgYW5pbWF0aW9uTmFtZTogc3RyaW5nLCBfZHVyYXRpb246IG51bWJlciwgX2RlbGF5OiBudW1iZXIsIGVhc2luZzogc3RyaW5nLCBfZmluYWxTdHlsZXM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgICB9LCBfc3BlY2lhbFN0eWxlcz86IMm1YW5ndWxhcl9wYWNrYWdlc19hbmltYXRpb25zX2Jyb3dzZXJfYnJvd3Nlcl9hIHwgbnVsbCB8IHVuZGVmaW5lZCk7XHJcbiAgICBvblN0YXJ0KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIG9uRG9uZShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBvbkRlc3Ryb3koZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgZGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfZmx1c2hEb25lRm5zO1xyXG4gICAgcHJpdmF0ZSBfZmx1c2hTdGFydEZucztcclxuICAgIGZpbmlzaCgpOiB2b2lkO1xyXG4gICAgc2V0UG9zaXRpb24odmFsdWU6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBnZXRQb3NpdGlvbigpOiBudW1iZXI7XHJcbiAgICBoYXNTdGFydGVkKCk6IGJvb2xlYW47XHJcbiAgICBpbml0KCk6IHZvaWQ7XHJcbiAgICBwbGF5KCk6IHZvaWQ7XHJcbiAgICBwYXVzZSgpOiB2b2lkO1xyXG4gICAgcmVzdGFydCgpOiB2b2lkO1xyXG4gICAgcmVzZXQoKTogdm9pZDtcclxuICAgIHByaXZhdGUgX2J1aWxkU3R5bGVyO1xyXG4gICAgYmVmb3JlRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWludm9rZVF1ZXJ5OiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbikgPT4gYW55W107XHJcblxyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtW1hdGNoZXNFbGVtZW50OiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1Tm9vcEFuaW1hdGlvbkRyaXZlciBpbXBsZW1lbnRzIEFuaW1hdGlvbkRyaXZlciB7XHJcbiAgICB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBjb250YWluc0VsZW1lbnQoZWxtMTogYW55LCBlbG0yOiBhbnkpOiBib29sZWFuO1xyXG4gICAgcXVlcnkoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbik6IGFueVtdO1xyXG4gICAgY29tcHV0ZVN0eWxlKGVsZW1lbnQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBhbmltYXRlKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdLCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBlYXNpbmc6IHN0cmluZywgcHJldmlvdXNQbGF5ZXJzPzogYW55W10sIHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkPzogYm9vbGVhbik6IEFuaW1hdGlvblBsYXllcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1Tm9vcEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciB7XHJcbiAgICBub3JtYWxpemVQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmc7XHJcbiAgICBub3JtYWxpemVTdHlsZVZhbHVlKHVzZXJQcm92aWRlZFByb3BlcnR5OiBzdHJpbmcsIG5vcm1hbGl6ZWRQcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtXN1cHBvcnRzV2ViQW5pbWF0aW9ucygpOiBib29sZWFuO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybV2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1V2ViQW5pbWF0aW9uc0RyaXZlciBpbXBsZW1lbnRzIEFuaW1hdGlvbkRyaXZlciB7XHJcbiAgICBwcml2YXRlIF9pc05hdGl2ZUltcGw7XHJcbiAgICBwcml2YXRlIF9jc3NLZXlmcmFtZXNEcml2ZXI7XHJcbiAgICB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcDogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBjb250YWluc0VsZW1lbnQoZWxtMTogYW55LCBlbG0yOiBhbnkpOiBib29sZWFuO1xyXG4gICAgcXVlcnkoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nLCBtdWx0aTogYm9vbGVhbik6IGFueVtdO1xyXG4gICAgY29tcHV0ZVN0eWxlKGVsZW1lbnQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBvdmVycmlkZVdlYkFuaW1hdGlvbnNTdXBwb3J0KHN1cHBvcnRlZDogYm9vbGVhbik6IHZvaWQ7XHJcbiAgICBhbmltYXRlKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiDJtVN0eWxlRGF0YVtdLCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBlYXNpbmc6IHN0cmluZywgcHJldmlvdXNQbGF5ZXJzPzogQW5pbWF0aW9uUGxheWVyW10sIHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkPzogYm9vbGVhbik6IEFuaW1hdGlvblBsYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVXZWJBbmltYXRpb25zUGxheWVyIGltcGxlbWVudHMgQW5pbWF0aW9uUGxheWVyIHtcclxuICAgIGVsZW1lbnQ6IGFueTtcclxuICAgIGtleWZyYW1lczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcclxuICAgIH1bXTtcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfc3BlY2lhbFN0eWxlcz87XHJcbiAgICBwcml2YXRlIF9vbkRvbmVGbnM7XHJcbiAgICBwcml2YXRlIF9vblN0YXJ0Rm5zO1xyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95Rm5zO1xyXG4gICAgcHJpdmF0ZSBfZHVyYXRpb247XHJcbiAgICBwcml2YXRlIF9kZWxheTtcclxuICAgIHByaXZhdGUgX2luaXRpYWxpemVkO1xyXG4gICAgcHJpdmF0ZSBfZmluaXNoZWQ7XHJcbiAgICBwcml2YXRlIF9zdGFydGVkO1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJveWVkO1xyXG4gICAgcHJpdmF0ZSBfZmluYWxLZXlmcmFtZTtcclxuICAgIHJlYWRvbmx5IGRvbVBsYXllcjogRE9NQW5pbWF0aW9uO1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG4gICAgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXIgfCBudWxsO1xyXG4gICAgY3VycmVudFNuYXBzaG90OiB7XHJcbiAgICAgICAgW3N0eWxlTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfVtdLCBvcHRpb25zOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgfSwgX3NwZWNpYWxTdHlsZXM/OiDJtWFuZ3VsYXJfcGFja2FnZXNfYW5pbWF0aW9uc19icm93c2VyX2Jyb3dzZXJfYSB8IG51bGwgfCB1bmRlZmluZWQpO1xyXG4gICAgcHJpdmF0ZSBfb25GaW5pc2g7XHJcbiAgICBpbml0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9idWlsZFBsYXllcjtcclxuICAgIHByaXZhdGUgX3ByZXBhcmVQbGF5ZXJCZWZvcmVTdGFydDtcclxuICAgIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gICAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIG9uRGVzdHJveShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgICBwbGF5KCk6IHZvaWQ7XHJcbiAgICBwYXVzZSgpOiB2b2lkO1xyXG4gICAgZmluaXNoKCk6IHZvaWQ7XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfcmVzZXREb21QbGF5ZXJTdGF0ZTtcclxuICAgIHJlc3RhcnQoKTogdm9pZDtcclxuICAgIGhhc1N0YXJ0ZWQoKTogYm9vbGVhbjtcclxuICAgIGRlc3Ryb3koKTogdm9pZDtcclxuICAgIHNldFBvc2l0aW9uKHA6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBnZXRQb3NpdGlvbigpOiBudW1iZXI7XHJcbiAgICBnZXQgdG90YWxUaW1lKCk6IG51bWJlcjtcclxuICAgIGJlZm9yZURlc3Ryb3koKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVXZWJBbmltYXRpb25zU3R5bGVOb3JtYWxpemVyIGV4dGVuZHMgybVBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIge1xyXG4gICAgbm9ybWFsaXplUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xyXG4gICAgbm9ybWFsaXplU3R5bGVWYWx1ZSh1c2VyUHJvdmlkZWRQcm9wZXJ0eTogc3RyaW5nLCBub3JtYWxpemVkUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHsgfVxyXG4iXX0=