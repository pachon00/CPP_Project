/**
 * @license Angular v9.0.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { AfterContentInit } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Compiler } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { NgModuleFactory } from '@angular/core';
import { NgModuleFactoryLoader } from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { Provider } from '@angular/core';
import { QueryList } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Type } from '@angular/core';
import { Version } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

/**
 * Provides access to information about a route associated with a component
 * that is loaded in an outlet.
 * Use to traverse the `RouterState` tree and extract information from nodes.
 *
 * {@example router/activated-route/module.ts region="activated-route"
 *     header="activated-route.component.ts"}
 *
 * @publicApi
 */
import * as ɵngcc0 from '@angular/core';
export declare class ActivatedRoute {
    /** An observable of the URL segments matched by this route. */
    url: Observable<UrlSegment[]>;
    /** An observable of the matrix parameters scoped to this route. */
    params: Observable<Params>;
    /** An observable of the query parameters shared by all the routes. */
    queryParams: Observable<Params>;
    /** An observable of the URL fragment shared by all the routes. */
    fragment: Observable<string>;
    /** An observable of the static and resolved data of this route. */
    data: Observable<Data>;
    /** The outlet name of the route, a constant. */
    outlet: string;
    /** The component of the route, a constant. */
    component: Type<any> | string | null;
    /** The current snapshot of this route */
    snapshot: ActivatedRouteSnapshot;
    /** The configuration used to match this route. */
    get routeConfig(): Route | null;
    /** The root of the router state. */
    get root(): ActivatedRoute;
    /** The parent of this route in the router state tree. */
    get parent(): ActivatedRoute | null;
    /** The first child of this route in the router state tree. */
    get firstChild(): ActivatedRoute | null;
    /** The children of this route in the router state tree. */
    get children(): ActivatedRoute[];
    /** The path from the root of the router state tree to this route. */
    get pathFromRoot(): ActivatedRoute[];
    /** An Observable that contains a map of the required and optional parameters
     * specific to the route.
     * The map supports retrieving single and multiple values from the same parameter. */
    get paramMap(): Observable<ParamMap>;
    /**
     * An Observable that contains a map of the query parameters available to all routes.
     * The map supports retrieving single and multiple values from the query parameter.
     */
    get queryParamMap(): Observable<ParamMap>;
    toString(): string;
}

/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class ActivatedRouteSnapshot {
    /** The URL segments matched by this route */
    url: UrlSegment[];
    /** The matrix parameters scoped to this route */
    params: Params;
    /** The query parameters shared by all the routes */
    queryParams: Params;
    /** The URL fragment shared by all the routes */
    fragment: string;
    /** The static and resolved data of this route */
    data: Data;
    /** The outlet name of the route */
    outlet: string;
    /** The component of the route */
    component: Type<any> | string | null;
    /** The configuration used to match this route **/
    readonly routeConfig: Route | null;
    /** The root of the router state */
    get root(): ActivatedRouteSnapshot;
    /** The parent of this route in the router state tree */
    get parent(): ActivatedRouteSnapshot | null;
    /** The first child of this route in the router state tree */
    get firstChild(): ActivatedRouteSnapshot | null;
    /** The children of this route in the router state tree */
    get children(): ActivatedRouteSnapshot[];
    /** The path from the root of the router state tree to this route */
    get pathFromRoot(): ActivatedRouteSnapshot[];
    get paramMap(): ParamMap;
    get queryParamMap(): ParamMap;
    toString(): string;
}

/**
 * An event triggered at the end of the activation part
 * of the Resolve phase of routing.
 * @see `ActivationStart`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the activation part
 * of the Resolve phase of routing.
 * @see ActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivate {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivate(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: [CanActivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canActivate: ['canActivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a child route can be activated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canActivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanActivateTeam implements CanActivateChild {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canActivateChild(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canActivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: [CanActivateTeam],
 *         children: [
 *           {
 *              path: 'team/:id',
 *              component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [CanActivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canActivateChild` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'root',
 *         canActivateChild: ['canActivateTeam'],
 *         children: [
 *           {
 *             path: 'team/:id',
 *             component: TeamComponent
 *           }
 *         ]
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canActivateTeam',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if a route can be deactivated.
 * If all guards return `true`, navigation will continue. If any guard returns `false`,
 * navigation will be cancelled. If any guard returns a `UrlTree`, current navigation will
 * be cancelled and a new navigation will be kicked off to the `UrlTree` returned from the
 * guard.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canDeactivate(user: UserToken, id: string): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanDeactivateTeam implements CanDeactivate<TeamComponent> {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canDeactivate(
 *     component: TeamComponent,
 *     currentRoute: ActivatedRouteSnapshot,
 *     currentState: RouterStateSnapshot,
 *     nextState: RouterStateSnapshot
 *   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 *     return this.permissions.canDeactivate(this.currentUser, route.params.id);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: [CanDeactivateTeam]
 *       }
 *     ])
 *   ],
 *   providers: [CanDeactivateTeam, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canDeactivate` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         canDeactivate: ['canDeactivateTeam']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canDeactivateTeam',
 *       useValue: (component: TeamComponent, currentRoute: ActivatedRouteSnapshot, currentState:
 * RouterStateSnapshot, nextState: RouterStateSnapshot) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanDeactivate<T> {
    canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

/**
 * @description
 *
 * Interface that a class can implement to be a guard deciding if children can be loaded.
 *
 * ```
 * class UserToken {}
 * class Permissions {
 *   canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
 *     return true;
 *   }
 * }
 *
 * @Injectable()
 * class CanLoadTeamSection implements CanLoad {
 *   constructor(private permissions: Permissions, private currentUser: UserToken) {}
 *
 *   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
 *     return this.permissions.canLoadChildren(this.currentUser, route, segments);
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: [CanLoadTeamSection]
 *       }
 *     ])
 *   ],
 *   providers: [CanLoadTeamSection, UserToken, Permissions]
 * })
 * class AppModule {}
 * ```
 *
 * You can alternatively provide a function with the `canLoad` signature:
 *
 * ```
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'team/:id',
 *         component: TeamComponent,
 *         loadChildren: 'team.js',
 *         canLoad: ['canLoadTeamSection']
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'canLoadTeamSection',
 *       useValue: (route: Route, segments: UrlSegment[]) => true
 *     }
 *   ]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * An event triggered at the end of the child-activation part
 * of the Resolve phase of routing.
 * @see `ChildActivationStart`
 * @see `ResolveStart` *
 * @publicApi
 */
export declare class ChildActivationEnd {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * An event triggered at the start of the child-activation
 * part of the Resolve phase of routing.
 * @see  `ChildActivationEnd`
 * @see `ResolveStart`
 *
 * @publicApi
 */
export declare class ChildActivationStart {
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot;
    constructor(
    /** @docsNotRequired */
    snapshot: ActivatedRouteSnapshot);
    toString(): string;
}

/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * @publicApi
 */
export declare class ChildrenOutletContexts {
    private contexts;
    /** Called when a `RouterOutlet` directive is instantiated */
    onChildOutletCreated(childName: string, outlet: RouterOutlet): void;
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    onChildOutletDestroyed(childName: string): void;
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    onOutletDeactivated(): Map<string, OutletContext>;
    onOutletReAttached(contexts: Map<string, OutletContext>): void;
    getOrCreateContext(childName: string): OutletContext;
    getContext(childName: string): OutletContext | null;
}

/**
 * Converts a `Params` instance to a `ParamMap`.
 * @param params The instance to convert.
 * @returns The new map instance.
 *
 * @publicApi
 */
export declare function convertToParamMap(params: Params): ParamMap;

/**
 *
 * Represents static data associated with a particular route.
 *
 * @see `Route#data`
 *
 * @publicApi
 */
export declare type Data = {
    [name: string]: any;
};

/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */
export declare class DefaultUrlSerializer implements UrlSerializer {
    /** Parses a url into a `UrlTree` */
    parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    serialize(tree: UrlTree): string;
}

/**
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load.
 *
 * @see `Route#loadChildren`
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated in favor of the proposed ES dynamic
 * `import()` expression, which offers a more natural and standards-based mechanism to dynamically
 * load an ES module at runtime.
 */
export declare type DeprecatedLoadChildren = string;

/**
 * @description
 *
 * Represents the detached route tree.
 *
 * This is an opaque value the router will give to a custom route reuse strategy
 * to store and retrieve later on.
 *
 * @publicApi
 */
export declare type DetachedRouteHandle = {};

/**
 * Error handler that is invoked when a navigation error occurs.
 *
 * If the handler returns a value, the navigation promise is resolved with this value.
 * If the handler throws an exception, the navigation promise is rejected with
 * the exception.
 *
 * @publicApi
 */
declare type ErrorHandler = (error: any) => any;

/**
 * Router events that allow you to track the lifecycle of the router.
 *
 * The sequence of router events is as follows:
 *
 * - `NavigationStart`,
 * - `RouteConfigLoadStart`,
 * - `RouteConfigLoadEnd`,
 * - `RoutesRecognized`,
 * - `GuardsCheckStart`,
 * - `ChildActivationStart`,
 * - `ActivationStart`,
 * - `GuardsCheckEnd`,
 * - `ResolveStart`,
 * - `ResolveEnd`,
 * - `ActivationEnd`
 * - `ChildActivationEnd`
 * - `NavigationEnd`,
 * - `NavigationCancel`,
 * - `NavigationError`
 * - `Scroll`
 *
 * @publicApi
 */
export declare type Event = RouterEvent | RouteConfigLoadStart | RouteConfigLoadEnd | ChildActivationStart | ChildActivationEnd | ActivationStart | ActivationEnd | Scroll;

/**
 * A set of configuration options for a router module, provided in the
 * `forRoot()` method.
 *
 * @publicApi
 */
export declare interface ExtraOptions {
    /**
     * When true, log all internal navigation events to the console.
     * Use for debugging.
     */
    enableTracing?: boolean;
    /**
     * When true, enable the location strategy that uses the URL fragment
     * instead of the history API.
     */
    useHash?: boolean;
    /**
     * One of `enabled` or `disabled`.
     * When set to `enabled`, the initial navigation starts before the root component is created.
     * The bootstrap is blocked until the initial navigation is complete. This value is required for
     * [server-side rendering](guide/universal) to work.
     * When set to `disabled`, the initial navigation is not performed.
     * The location listener is set up before the root component gets created.
     * Use if there is a reason to have more control over when the router
     * starts its initial navigation due to some complex initialization logic.
     *
     * Legacy values are deprecated since v4 and should not be used for new applications:
     *
     * * `legacy_enabled` - Default for compatibility.
     * The initial navigation starts after the root component has been created,
     * but the bootstrap is not blocked until the initial navigation is complete.
     * * `legacy_disabled` - The initial navigation is not performed.
     * The location listener is set up after the root component gets created.
     * * `true` - same as `legacy_enabled`.
     * * `false` - same as `legacy_disabled`.
     */
    initialNavigation?: InitialNavigation;
    /**
     * A custom error handler for failed navigations.
     */
    errorHandler?: ErrorHandler;
    /**
     * Configures a preloading strategy.
     * One of `PreloadAllModules` or `NoPreloading` (the default).
     */
    preloadingStrategy?: any;
    /**
     * Define what the router should do if it receives a navigation request to the current URL.
     * Default is `ignore`, which causes the router ignores the navigation.
     * This can disable features such as a "refresh" button.
     * Use this option to configure the behavior when navigating to the
     * current URL. Default is 'ignore'.
     */
    onSameUrlNavigation?: 'reload' | 'ignore';
    /**
     * Configures if the scroll position needs to be restored when navigating back.
     *
     * * 'disabled'- (Default) Does nothing. Scroll position is maintained on navigation.
     * * 'top'- Sets the scroll position to x = 0, y = 0 on all navigation.
     * * 'enabled'- Restores the previous scroll position on backward navigation, else sets the
     * position to the anchor if one is provided, or sets the scroll position to [0, 0] (forward
     * navigation). This option will be the default in the future.
     *
     * You can implement custom scroll restoration behavior by adapting the enabled behavior as
     * in the following example.
     *
     * ```typescript
     * class AppModule {
     *   constructor(router: Router, viewportScroller: ViewportScroller) {
     *     router.events.pipe(
     *       filter((e: Event): e is Scroll => e instanceof Scroll)
     *     ).subscribe(e => {
     *       if (e.position) {
     *         // backward navigation
     *         viewportScroller.scrollToPosition(e.position);
     *       } else if (e.anchor) {
     *         // anchor navigation
     *         viewportScroller.scrollToAnchor(e.anchor);
     *       } else {
     *         // forward navigation
     *         viewportScroller.scrollToPosition([0, 0]);
     *       }
     *     });
     *   }
     * }
     * ```
     */
    scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
    /**
     * When set to 'enabled', scrolls to the anchor element when the URL has a fragment.
     * Anchor scrolling is disabled by default.
     *
     * Anchor scrolling does not happen on 'popstate'. Instead, we restore the position
     * that we stored or scroll to the top.
     */
    anchorScrolling?: 'disabled' | 'enabled';
    /**
     * Configures the scroll offset the router will use when scrolling to an element.
     *
     * When given a tuple with x and y position value,
     * the router uses that offset each time it scrolls.
     * When given a function, the router invokes the function every time
     * it restores scroll position.
     */
    scrollOffset?: [number, number] | (() => [number, number]);
    /**
     * Defines how the router merges parameters, data, and resolved data from parent to child
     * routes. By default ('emptyOnly'), inherits parent parameters only for
     * path-less or component-less routes.
     * Set to 'always' to enable unconditional inheritance of parent parameters.
     */
    paramsInheritanceStrategy?: 'emptyOnly' | 'always';
    /**
     * A custom handler for malformed URI errors. The handler is invoked when `encodedURI` contains
     * invalid character sequences.
     * The default implementation is to redirect to the root URL, dropping
     * any path or parameter information. The function takes three parameters:
     *
     * - `'URIError'` - Error thrown when parsing a bad URL.
     * - `'UrlSerializer'` - UrlSerializer that’s configured with the router.
     * - `'url'` -  The malformed URL that caused the URIError
     * */
    malformedUriErrorHandler?: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * Defines when the router updates the browser URL. By default ('deferred'),
     * update after successful navigation.
     * Set to 'eager' if prefer to update the URL at the beginning of navigation.
     * Updating the URL early allows you to handle a failure of navigation by
     * showing an error message with the URL that failed.
     */
    urlUpdateStrategy?: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * Example:
     *
     * ```
     * const routes = [
     *   {
     *     path: '',
     *     component: ContainerComponent,
     *     children: [
     *       { path: 'a', component: AComponent },
     *       { path: 'b', component: BComponent },
     *     ]
     *   }
     * ];
     * ```
     *
     * From the `ContainerComponent`, this will not work:
     *
     * `<a [routerLink]="['./a']">Link to A</a>`
     *
     * However, this will work:
     *
     * `<a [routerLink]="['../a']">Link to A</a>`
     *
     * In other words, you're required to use `../` rather than `./`. This is currently the default
     * behavior. Setting this option to `corrected` enables the fix.
     */
    relativeLinkResolution?: 'legacy' | 'corrected';
}

/**
 * An event triggered at the end of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    /** @docsNotRequired */
    shouldActivate: boolean;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot, 
    /** @docsNotRequired */
    shouldActivate: boolean);
    toString(): string;
}

/**
 * An event triggered at the start of the Guard phase of routing.
 *
 * @publicApi
 */
export declare class GuardsCheckStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * Allowed values in an `ExtraOptions` object that configure
 * when the router performs the initial navigation operation.
 *
 * * 'enabled' - The initial navigation starts before the root component is created.
 * The bootstrap is blocked until the initial navigation is complete. This value is required
 * for [server-side rendering](guide/universal) to work.
 * * 'disabled' - The initial navigation is not performed. The location listener is set up before
 * the root component gets created. Use if there is a reason to have
 * more control over when the router starts its initial navigation due to some complex
 * initialization logic.
 * * 'legacy_enabled'- (Default, for compatibility.) The initial navigation starts after the root component has been created.
 * The bootstrap is not blocked until the initial navigation is complete. @deprecated
 * * 'legacy_disabled'- The initial navigation is not performed. The location listener is set up
 * after the root component gets created. @deprecated since v4
 * * `true` - same as 'legacy_enabled'. @deprecated since v4
 * * `false` - same as 'legacy_disabled'. @deprecated since v4
 *
 * The 'legacy_enabled' and 'legacy_disabled' should not be used for new applications.
 *
 * @see `forRoot()`
 *
 * @publicApi
 */
export declare type InitialNavigation = true | false | 'enabled' | 'disabled' | 'legacy_enabled' | 'legacy_disabled';

/**
 *
 * A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load,
 * or a function that returns such a set.
 *
 * The string form of `LoadChildren` is deprecated (see `DeprecatedLoadChildren`). The function
 * form (`LoadChildrenCallback`) should be used instead.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildren = LoadChildrenCallback | DeprecatedLoadChildren;

/**
 *
 * A function that is called to resolve a collection of lazy-loaded routes.
 *
 * Often this function will be implemented using an ES dynamic `import()` expression. For example:
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * This function _must_ match the form above: an arrow function of the form
 * `() => import('...').then(mod => mod.MODULE)`.
 *
 * @see `Route#loadChildren`.
 * @publicApi
 */
export declare type LoadChildrenCallback = () => Type<any> | NgModuleFactory<any> | Observable<Type<any>> | Promise<NgModuleFactory<any> | Type<any> | any>;

/**
 * Information about a navigation operation. Retrieve the most recent
 * navigation object with the `router.getCurrentNavigation()` method.
 *
 * @publicApi
 */
export declare type Navigation = {
    /**
     * The ID of the current navigation.
     */
    id: number;
    /**
     * The target URL passed into the `Router#navigateByUrl()` call before navigation. This is
     * the value before the router has parsed or applied redirects to it.
     */
    initialUrl: string | UrlTree;
    /**
     * The initial target URL after being parsed with `UrlSerializer.extract()`.
     */
    extractedUrl: UrlTree;
    /**
     * The extracted URL after redirects have been applied.
     * This URL may not be available immediately, therefore this property can be `undefined`.
     * It is guaranteed to be set after the `RoutesRecognized` event fires.
     */
    finalUrl?: UrlTree;
    /**
     * Identifies how this navigation was triggered.
     *
     * * 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
     * * 'popstate'--Triggered by a popstate event.
     * * 'hashchange'--Triggered by a hashchange event.
     */
    trigger: 'imperative' | 'popstate' | 'hashchange';
    /**
     * Options that controlled the strategy used for this navigation.
     * See `NavigationExtras`.
     */
    extras: NavigationExtras;
    /**
     * The previously successful `Navigation` object. Only one previous navigation
     * is available, therefore this previous `Navigation` object has a `null` value
     * for its own `previousNavigation`.
     */
    previousNavigation: Navigation | null;
};

/**
 * An event triggered when a navigation is canceled, directly or indirectly.
 *
 * This can happen when a [route guard](guide/router#milestone-5-route-guards)
 * returns `false` or initiates a redirect by returning a `UrlTree`.
 *
 * @publicApi
 */
export declare class NavigationCancel extends RouterEvent {
    /** @docsNotRequired */
    reason: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    reason: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation ends successfully.
 *
 * @publicApi
 */
export declare class NavigationEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * An event triggered when a navigation fails due to an unexpected error.
 *
 * @publicApi
 */
export declare class NavigationError extends RouterEvent {
    /** @docsNotRequired */
    error: any;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    error: any);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Options that modify the navigation strategy.
 *
 * @publicApi
 */
export declare interface NavigationExtras {
    /**
     * Specifies a root URI to use for relative navigation.
     *
     * For example, consider the following route configuration where the parent route
     * has two children.
     *
     * ```
     * [{
    *   path: 'parent',
    *   component: ParentComponent,
    *   children: [{
    *     path: 'list',
    *     component: ListComponent
    *   },{
    *     path: 'child',
    *     component: ChildComponent
    *   }]
    * }]
     * ```
     *
     * The following `go()` function navigates to the `list` route by
     * interpreting the destination URI as relative to the activated `child`  route
     *
     * ```
     *  @Component({...})
     *  class ChildComponent {
    *    constructor(private router: Router, private route: ActivatedRoute) {}
    *
    *    go() {
    *      this.router.navigate(['../list'], { relativeTo: this.route });
    *    }
    *  }
     * ```
     */
    relativeTo?: ActivatedRoute | null;
    /**
     * Sets query parameters to the URL.
     *
     * ```
     * // Navigate to /results?page=1
     * this.router.navigate(['/results'], { queryParams: { page: 1 } });
     * ```
     */
    queryParams?: Params | null;
    /**
     * Sets the hash fragment for the URL.
     *
     * ```
     * // Navigate to /results#top
     * this.router.navigate(['/results'], { fragment: 'top' });
     * ```
     */
    fragment?: string;
    /**
     * **DEPRECATED**: Use `queryParamsHandling: "preserve"` instead to preserve
     * query parameters for the next navigation.
     *
     * @deprecated since v4
     */
    preserveQueryParams?: boolean;
    /**
     * How to handle query parameters in the router link for the next navigation.
     * One of:
     * * `merge` : Merge new with current parameters.
     * * `preserve` : Preserve current parameters.
     *
     * ```
     * // from /results?page=1 to /view?page=1&page=2
     * this.router.navigate(['/view'], { queryParams: { page: 2 },  queryParamsHandling: "merge" });
     * ```
     */
    queryParamsHandling?: QueryParamsHandling | null;
    /**
     * When true, preserves the URL fragment for the next navigation
     *
     * ```
     * // Preserve fragment from /results#top to /view#top
     * this.router.navigate(['/view'], { preserveFragment: true });
     * ```
     */
    preserveFragment?: boolean;
    /**
     * When true, navigates without pushing a new state into history.
     *
     * ```
     * // Navigate silently to /view
     * this.router.navigate(['/view'], { skipLocationChange: true });
     * ```
     */
    skipLocationChange?: boolean;
    /**
     * When true, navigates while replacing the current state in history.
     *
     * ```
     * // Navigate to /view
     * this.router.navigate(['/view'], { replaceUrl: true });
     * ```
     */
    replaceUrl?: boolean;
    /**
     * Developer-defined state that can be passed to any navigation.
     * Access this value through the `Navigation.extras` object
     * returned from `router.getCurrentNavigation()` while a navigation is executing.
     *
     * After a navigation completes, the router writes an object containing this
     * value together with a `navigationId` to `history.state`.
     * The value is written when `location.go()` or `location.replaceState()`
     * is called before activating this route.
     *
     * Note that `history.state` does not pass an object equality test because
     * the router adds the `navigationId` on each navigation.
     */
    state?: {
        [k: string]: any;
    };
}

/**
 * An event triggered when a navigation starts.
 *
 * @publicApi
 */
export declare class NavigationStart extends RouterEvent {
    /**
     * Identifies the call or event that triggered the navigation.
     * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
     *
     */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange';
    /**
     * The navigation state that was previously supplied to the `pushState` call,
     * when the navigation is triggered by a `popstate` event. Otherwise null.
     *
     * The state object is defined by `NavigationExtras`, and contains any
     * developer-defined state value, as well as a unique ID that
     * the router assigns to every router transition/navigation.
     *
     * From the perspective of the router, the router never "goes back".
     * When the user clicks on the back button in the browser,
     * a new navigation ID is created.
     *
     * Use the ID in this previous-state object to differentiate between a newly created
     * state and one returned to by a `popstate` event, so that you can restore some
     * remembered state, such as scroll position.
     *
     */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    navigationTrigger?: 'imperative' | 'popstate' | 'hashchange', 
    /** @docsNotRequired */
    restoredState?: {
        [k: string]: any;
        navigationId: number;
    } | null);
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * @publicApi
 */
export declare class NoPreloading implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * Store contextual information about a `RouterOutlet`
 *
 * @publicApi
 */
export declare class OutletContext {
    outlet: RouterOutlet | null;
    route: ActivatedRoute | null;
    resolver: ComponentFactoryResolver | null;
    children: ChildrenOutletContexts;
    attachRef: ComponentRef<any> | null;
}

/**
 * A map that provides access to the required and optional parameters
 * specific to a route.
 * The map supports retrieving a single value with `get()`
 * or multiple values with `getAll()`.
 *
 * @see [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
 *
 * @publicApi
 */
export declare interface ParamMap {
    /**
     * Reports whether the map contains a given parameter.
     * @param name The parameter name.
     * @returns True if the map contains the given parameter, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves a single value for a parameter.
     * @param name The parameter name.
     * @return The parameter's single value,
     * or the first value if the parameter has multiple values,
     * or `null` when there is no such parameter.
     */
    get(name: string): string | null;
    /**
     * Retrieves multiple values for a parameter.
     * @param name The parameter name.
     * @return An array containing one or more values,
     * or an empty array if there is no such parameter.
     *
     */
    getAll(name: string): string[];
    /** Names of the parameters in the map. */
    readonly keys: string[];
}

/**
 * A collection of matrix and query URL parameters.
 * @see `convertToParamMap()`
 * @see `ParamMap`
 *
 * @publicApi
 */
export declare type Params = {
    [key: string]: any;
};

/**
 * @description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * @publicApi
 */
export declare class PreloadAllModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * @description
 *
 * Provides a preloading strategy.
 *
 * @publicApi
 */
export declare abstract class PreloadingStrategy {
    abstract preload(route: Route, fn: () => Observable<any>): Observable<any>;
}

/**
 * The primary routing outlet.
 *
 * @publicApi
 */
export declare const PRIMARY_OUTLET = "primary";

/**
 * Registers a [DI provider](guide/glossary#provider) for a set of routes.
 * @param routes The route configuration to provide.
 *
 * @usageNotes
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @publicApi
 */
export declare function provideRoutes(routes: Routes): any;

/**
 *
 * How to handle query parameters in a router link.
 * One of:
 * - `merge` : Merge new with current parameters.
 * - `preserve` : Preserve current parameters.
 *
 * @see `NavigationExtras#queryParamsHandling`
 * @see `RouterLink`
 * @publicApi
 */
export declare type QueryParamsHandling = 'merge' | 'preserve' | '';

/**
 * @description
 *
 * Interface that classes can implement to be a data provider.
 * A data provider class can be used with the router to resolve data during navigation.
 * The interface defines a `resolve()` method that will be invoked when the navigation starts.
 * The router will then wait for the data to be resolved before the route is finally activated.
 *
 * ```
 * @Injectable({ providedIn: 'root' })
 * export class HeroResolver implements Resolve<Hero> {
 *   constructor(private service: HeroService) {}
 *
 *   resolve(
 *     route: ActivatedRouteSnapshot,
 *     state: RouterStateSnapshot
 *   ): Observable<any>|Promise<any>|any {
 *     return this.service.getHero(route.paramMap.get('id'));
 *   }
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroDetailComponent,
 *         resolve: {
 *           hero: HeroResolver
 *         }
 *       }
 *     ])
 *   ],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule {}
 * ```
 *
 * You can alternatively provide a function with the `resolve` signature:
 *
 * ```
 * export const myHero: Hero = {
 *   // ...
 * }
 *
 * @NgModule({
 *   imports: [
 *     RouterModule.forRoot([
 *       {
 *         path: 'detail/:id',
 *         component: HeroComponent,
 *         resolve: {
 *           hero: 'heroResolver'
 *         }
 *       }
 *     ])
 *   ],
 *   providers: [
 *     {
 *       provide: 'heroResolver',
 *       useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => myHero
 *     }
 *   ]
 * })
 * export class AppModule {}
 * ```
 *
 * @publicApi
 */
export declare interface Resolve<T> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T;
}

/**
 *
 * Represents the resolved data associated with a particular route.
 *
 * @see `Route#resolve`.
 *
 * @publicApi
 */
export declare type ResolveData = {
    [name: string]: any;
};

/**
 * An event triggered at the end of the Resolve phase of routing.
 * @see `ResolveStart`.
 *
 * @publicApi
 */
export declare class ResolveEnd extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * An event triggered at the the start of the Resolve phase of routing.
 *
 * Runs in the "resolve" phase whether or not there is anything to resolve.
 * In future, may change to only run when there are things to be resolved.
 *
 * @publicApi
 */
export declare class ResolveStart extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    toString(): string;
}

/**
 * A configuration object that defines a single route.
 * A set of routes are collected in a `Routes` array to define a `Router` configuration.
 * The router attempts to match segments of a given URL against each route,
 * using the configuration options defined in this object.
 *
 * Supports static, parameterized, redirect, and wildcard routes, as well as
 * custom route data and resolve methods.
 *
 * For detailed usage information, see the [Routing Guide](guide/router).
 *
 * @usageNotes
 *
 * ### Simple Configuration
 *
 * The following route specifies that when navigating to, for example,
 * `/team/11/user/bob`, the router creates the 'Team' component
 * with the 'User' child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
  *  component: Team,
 *   children: [{
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * ### Multiple Outlets
 *
 * The following route creates sibling components with multiple outlets.
 * When navigating to `/team/11(aux:chat/jim)`, the router creates the 'Team' component next to
 * the 'Chat' component. The 'Chat' component is placed into the 'aux' outlet.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team
 * }, {
 *   path: 'chat/:user',
 *   component: Chat
 *   outlet: 'aux'
 * }]
 * ```
 *
 * ### Wild Cards
 *
 * The following route uses wild-card notation to specify a component
 * that is always instantiated regardless of where you navigate to.
 *
 * ```
 * [{
 *   path: '**',
 *   component: WildcardComponent
 * }]
 * ```
 *
 * ### Redirects
 *
 * The following route uses the `redirectTo` property to ignore a segment of
 * a given URL when looking for a child path.
 *
 * When navigating to '/team/11/legacy/user/jim', the router changes the URL segment
 * '/team/11/legacy/user/jim' to '/team/11/user/jim', and then instantiates
 * the Team component with the User child component in it.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: 'legacy/user/:name',
 *     redirectTo: 'user/:name'
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * The redirect path can be relative, as shown in this example, or absolute.
 * If we change the `redirectTo` value in the example to the absolute URL segment '/user/:name',
 * the result URL is also absolute, '/user/jim'.

 * ### Empty Path
 *
 * Empty-path route configurations can be used to instantiate components that do not 'consume'
 * any URL segments.
 *
 * In the following configuration, when navigating to
 * `/team/11`, the router instantiates the 'AllUsers' component.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: AllUsers
 *   }, {
 *     path: 'user/:name',
 *     component: User
 *   }]
 * }]
 * ```
 *
 * Empty-path routes can have children. In the following example, when navigating
 * to `/team/11/user/jim`, the router instantiates the wrapper component with
 * the user component in it.
 *
 * Note that an empty path route inherits its parent's parameters and data.
 *
 * ```
 * [{
 *   path: 'team/:id',
 *   component: Team,
 *   children: [{
 *     path: '',
 *     component: WrapperCmp,
 *     children: [{
 *       path: 'user/:name',
 *       component: User
 *     }]
 *   }]
 * }]
 * ```
 *
 * ### Matching Strategy
 *
 * The default path-match strategy is 'prefix', which means that the router
 * checks URL elements from the left to see if the URL matches a specified path.
 * For example, '/team/11/user' matches 'team/:id'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'prefix', //default
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * You can specify the path-match strategy 'full' to make sure that the path
 * covers the whole unconsumed URL. It is important to do this when redirecting
 * empty-path routes. Otherwise, because an empty path is a prefix of any URL,
 * the router would apply the redirect even when navigating to the redirect destination,
 * creating an endless loop.
 *
 * In the following example, supplying the 'full' `pathMatch` strategy ensures
 * that the router applies the redirect if and only if navigating to '/'.
 *
 * ```
 * [{
 *   path: '',
 *   pathMatch: 'full',
 *   redirectTo: 'main'
 * }, {
 *   path: 'main',
 *   component: Main
 * }]
 * ```
 *
 * ### Componentless Routes
 *
 * You can share parameters between sibling components.
 * For example, suppose that two sibling components should go next to each other,
 * and both of them require an ID parameter. You can accomplish this using a route
 * that does not specify a component at the top level.
 *
 * In the following example, 'MainChild' and 'AuxChild' are siblings.
 * When navigating to 'parent/10/(a//aux:b)', the route instantiates
 * the main child and aux child components next to each other.
 * For this to work, the application component must have the primary and aux outlets defined.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: 'a', component: MainChild },
 *      { path: 'b', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * The router merges the parameters, data, and resolve of the componentless
 * parent into the parameters, data, and resolve of the children.
 *
 * This is especially useful when child components are defined
 * with an empty path string, as in the following example.
 * With this configuration, navigating to '/parent/10' creates
 * the main child and aux components.
 *
 * ```
 * [{
 *    path: 'parent/:id',
 *    children: [
 *      { path: '', component: MainChild },
 *      { path: '', component: AuxChild, outlet: 'aux' }
 *    ]
 * }]
 * ```
 *
 * ### Lazy Loading
 *
 * Lazy loading speeds up application load time by splitting the application
 * into multiple bundles and loading them on demand.
 * To use lazy loading, provide the `loadChildren` property  instead of the `children` property.
 *
 * Given the following example route, the router will lazy load
 * the associated module on demand using the browser native import system.
 *
 * ```
 * [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
 * }];
 * ```
 *
 * @publicApi
 */
export declare interface Route {
    /**
     * The path to match against. Cannot be used together with a custom `matcher` function.
     * A URL string that uses router matching notation.
     * Can be a wild card (`**`) that matches any URL (see Usage Notes below).
     * Default is "/" (the root path).
     *
     */
    path?: string;
    /**
     * The path-matching strategy, one of 'prefix' or 'full'.
     * Default is 'prefix'.
     *
     * By default, the router checks URL elements from the left to see if the URL
     * matches a given  path, and stops when there is a match. For example,
     * '/team/11/user' matches 'team/:id'.
     *
     * The path-match strategy 'full' matches against the entire URL.
     * It is important to do this when redirecting empty-path routes.
     * Otherwise, because an empty path is a prefix of any URL,
     * the router would apply the redirect even when navigating
     * to the redirect destination, creating an endless loop.
     *
     */
    pathMatch?: string;
    /**
     * A custom URL-matching function. Cannot be used together with `path`.
     */
    matcher?: UrlMatcher;
    /**
     * The component to instantiate when the path matches.
     * Can be empty if child routes specify components.
     */
    component?: Type<any>;
    /**
     * A URL to which to redirect when a the path matches.
     * Absolute if the URL begins with a slash (/), otherwise relative to the path URL.
     * When not present, router does not redirect.
     */
    redirectTo?: string;
    /**
     * Name of a `RouterOutlet` object where the component can be placed
     * when the path matches.
     */
    outlet?: string;
    /**
     * An array of dependency-injection tokens used to look up `CanActivate()`
     * handlers, in order to determine if the current user is allowed to
     * activate the component. By default, any user can activate.
     */
    canActivate?: any[];
    /**
     * An array of DI tokens used to look up `CanActivateChild()` handlers,
     * in order to determine if the current user is allowed to activate
     * a child of the component. By default, any user can activate a child.
     */
    canActivateChild?: any[];
    /**
     * An array of DI tokens used to look up `CanDeactivate()`
     * handlers, in order to determine if the current user is allowed to
     * deactivate the component. By default, any user can deactivate.
     *
     */
    canDeactivate?: any[];
    /**
     * An array of DI tokens used to look up `CanLoad()`
     * handlers, in order to determine if the current user is allowed to
     * load the component. By default, any user can load.
     */
    canLoad?: any[];
    /**
     * Additional developer-defined data provided to the component via
     * `ActivatedRoute`. By default, no additional data is passed.
     */
    data?: Data;
    /**
     * A map of DI tokens used to look up data resolvers. See `Resolve`.
     */
    resolve?: ResolveData;
    /**
     * An array of child `Route` objects that specifies a nested route
     * configuration.
     */
    children?: Routes;
    /**
     * A `LoadChildren` object specifying lazy-loaded child routes.
     */
    loadChildren?: LoadChildren;
    /**
     * Defines when guards and resolvers will be run. One of
     * - `paramsOrQueryParamsChange` : Run when query parameters change.
     * - `always` : Run on every execution.
     * By default, guards and resolvers run only when the matrix
     * parameters of the route change.
     */
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}

/**
 * An event triggered when a route has been lazy loaded.
 *
 * @publicApi
 */
export declare class RouteConfigLoadEnd {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * An event triggered before lazy loading a route configuration.
 *
 * @publicApi
 */
export declare class RouteConfigLoadStart {
    /** @docsNotRequired */
    route: Route;
    constructor(
    /** @docsNotRequired */
    route: Route);
    toString(): string;
}

/**
 * @description
 *
 * A service that provides navigation and URL manipulation capabilities.
 *
 * @see `Route`.
 * @see [Routing and Navigation Guide](guide/router).
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class Router {
    private rootComponentType;
    private urlSerializer;
    private rootContexts;
    private location;
    config: Routes;
    private currentUrlTree;
    private rawUrlTree;
    private browserUrlTree;
    private readonly transitions;
    private navigations;
    private lastSuccessfulNavigation;
    private currentNavigation;
    private locationSubscription;
    private navigationId;
    private configLoader;
    private ngModule;
    private console;
    private isNgZoneEnabled;
    /**
     * An event stream for routing events in this NgModule.
     */
    readonly events: Observable<Event>;
    /**
     * The current state of routing in this NgModule.
     */
    readonly routerState: RouterState;
    /**
     * A handler for navigation errors in this NgModule.
     */
    errorHandler: ErrorHandler;
    /**
     * A handler for errors thrown by `Router.parseUrl(url)`
     * when `url` contains an invalid character.
     * The most common case is a `%` sign
     * that's not encoded and is not part of a percent encoded sequence.
     */
    malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree;
    /**
     * True if at least one navigation event has occurred,
     * false otherwise.
     */
    navigated: boolean;
    private lastSuccessfulId;
    /**
     * A strategy for extracting and merging URLs.
     * Used for AngularJS to Angular migrations.
     */
    urlHandlingStrategy: UrlHandlingStrategy;
    /**
     * A strategy for re-using routes.
     */
    routeReuseStrategy: RouteReuseStrategy;
    /**
     * How to handle a navigation request to the current URL. One of:
     * - `'ignore'` :  The router ignores the request.
     * - `'reload'` : The router reloads the URL. Use to implement a "refresh" feature.
     */
    onSameUrlNavigation: 'reload' | 'ignore';
    /**
     * How to merge parameters, data, and resolved data from parent to child
     * routes. One of:
     *
     * - `'emptyOnly'` : Inherit parent parameters, data, and resolved data
     * for path-less or component-less routes.
     * - `'always'` : Inherit parent parameters, data, and resolved data
     * for all child routes.
     */
    paramsInheritanceStrategy: 'emptyOnly' | 'always';
    /**
     * Determines when the router updates the browser URL.
     * By default (`"deferred"`), updates the browser URL after navigation has finished.
     * Set to `'eager'` to update the browser URL at the beginning of navigation.
     * You can choose to update early so that, if navigation fails,
     * you can show an error message with the URL that failed.
     */
    urlUpdateStrategy: 'deferred' | 'eager';
    /**
     * Enables a bug fix that corrects relative link resolution in components with empty paths.
     * @see `RouterModule`
     */
    relativeLinkResolution: 'legacy' | 'corrected';
    /**
     * Creates the router service.
     */
    constructor(rootComponentType: Type<any> | null, urlSerializer: UrlSerializer, rootContexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Routes);
    private setupNavigations;
    private getTransition;
    private setTransition;
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    initialNavigation(): void;
    /**
     * Sets up the location change listener.
     */
    setUpLocationChangeListener(): void;
    /** The current URL. */
    get url(): string;
    /** The current Navigation object if one exists */
    getCurrentNavigation(): Navigation | null;
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * @param config The route array for the new configuration.
     *
     * @usageNotes
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    resetConfig(config: Routes): void;
    /** @docsNotRequired */
    ngOnDestroy(): void;
    /** Disposes of the router. */
    dispose(): void;
    /**
     * Applies an array of commands to the current URL tree and creates a new URL tree.
     *
     * When given an activated route, applies the given commands starting from the route.
     * Otherwise, applies the given command starting from the root.
     *
     * @param commands An array of commands to apply.
     * @param navigationExtras Options that control the navigation strategy. This function
     * only utilizes properties in `NavigationExtras` that would change the provided URL.
     * @returns The new URL tree.
     *
     * @usageNotes
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it,
     * // you can do the following:
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    createUrlTree(commands: any[], navigationExtras?: NavigationExtras): UrlTree;
    /**
     * Navigate based on the provided URL, which must be absolute.
     *
     * @param url An absolute URL. The function does not apply any delta to the current URL.
     * @param extras An object containing properties that modify the navigation strategy.
     * The function ignores any properties in the `NavigationExtras` that would change the
     * provided URL.
     *
     * @returns A Promise that resolves to 'true' when navigation succeeds,
     * to 'false' when navigation fails, or is rejected on error.
     *
     * @usageNotes
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     */
    navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean>;
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     *
     * In order to affect this browser's `history.state` entry, the `state`
     * parameter can be passed. This must be an object because the router
     * will add the `navigationId` property to this object before creating
     * the new history item.
     */
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>;
    /** Serializes a `UrlTree` into a string */
    serializeUrl(url: UrlTree): string;
    /** Parses a string into a `UrlTree` */
    parseUrl(url: string): UrlTree;
    /** Returns whether the url is activated */
    isActive(url: string | UrlTree, exact: boolean): boolean;
    private removeEmptyProps;
    private processNavigations;
    private scheduleNavigation;
    private setBrowserUrl;
    private resetStateAndUrl;
    private resetUrlToCurrentUrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Router>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Router, never, never, {}, {}, never>;
}

/**
 * A [DI token](guide/glossary/#di-token) for the router service.
 *
 * @publicApi
 */
export declare const ROUTER_CONFIGURATION: InjectionToken<ExtraOptions>;

/**
 * A [DI token](guide/glossary/#di-token) for the router initializer that
 * is called after the app is bootstrapped.
 *
 * @publicApi
 */
export declare const ROUTER_INITIALIZER: InjectionToken<(compRef: ComponentRef<any>) => void>;

/**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @publicApi
 */
export declare abstract class RouteReuseStrategy {
    /** Determines if this route (and its subtree) should be detached to be reused later */
    abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;
    /**
     * Stores the detached route.
     *
     * Storing a `null` value should erase the previously stored value.
     */
    abstract store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void;
    /** Determines if this route (and its subtree) should be reattached */
    abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;
    /** Retrieves the previously stored route */
    abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
    /** Determines if a route should be reused */
    abstract shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}

/**
 * Base for events the router goes through, as opposed to events tied to a specific
 * route. Fired one time for any given navigation.
 *
 * @usageNotes
 *
 * ```ts
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.pipe(
 *       filter(e => e instanceof RouterEvent)
 *     ).subscribe(e => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * @see `Event`
 * @publicApi
 */
export declare class RouterEvent {
    /** A unique ID that the router assigns to every router navigation. */
    id: number;
    /** The URL that is the destination for this navigation. */
    url: string;
    constructor(
    /** A unique ID that the router assigns to every router navigation. */
    id: number, 
    /** The URL that is the destination for this navigation. */
    url: string);
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive how to handle queryParams. Available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * You can provide a `state` value to be persisted to the browser's History.state
 * property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
 * used as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
 *   link to user component
 * </a>
 * ```
 *
 * And later the value can be read from the router through `router.getCurrentNavigation`.
 * For example, to capture the `tracingId` above during the `NavigationStart` event:
 *
 * ```
 * // Get NavigationStart events
 * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
 *   const navigation = router.getCurrentNavigation();
 *   tracingService.trace({id: navigation.extras.state.tracingId});
 * });
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {@link Router#createUrlTree createUrlTree} for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLink {
    private router;
    private route;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    state?: {
        [k: string]: any;
    };
    private commands;
    private preserve;
    constructor(router: Router, route: ActivatedRoute, tabIndex: string, renderer: Renderer2, el: ElementRef);
    set routerLink(commands: any[] | string);
    /**
     * @deprecated 4.0.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value: boolean);
    onClick(): boolean;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLink>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLink, ":not(a):not(area)[routerLink]", never, {
    "routerLink": "routerLink";
    "preserveQueryParams": "preserveQueryParams";
    "queryParams": "queryParams";
    "fragment": "fragment";
    "queryParamsHandling": "queryParamsHandling";
    "preserveFragment": "preserveFragment";
    "skipLocationChange": "skipLocationChange";
    "replaceUrl": "replaceUrl";
    "state": "state";
}, {}, never>;
}

/**
 *
 * @description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkActive implements OnChanges, OnDestroy, AfterContentInit {
    private router;
    private element;
    private renderer;
    private link?;
    private linkWithHref?;
    links: QueryList<RouterLink>;
    linksWithHrefs: QueryList<RouterLinkWithHref>;
    private classes;
    private subscription;
    readonly isActive: boolean;
    routerLinkActiveOptions: {
        exact: boolean;
    };
    constructor(router: Router, element: ElementRef, renderer: Renderer2, link?: RouterLink | undefined, linkWithHref?: RouterLinkWithHref | undefined);
    ngAfterContentInit(): void;
    set routerLinkActive(data: string[] | string);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private update;
    private isLinkActive;
    private hasActiveLinks;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkActive>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkActive, "[routerLinkActive]", ["routerLinkActive"], {
    "routerLinkActiveOptions": "routerLinkActiveOptions";
    "routerLinkActive": "routerLinkActive";
}, {}, ["links", "linksWithHrefs"]>;
}

/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterLinkWithHref implements OnChanges, OnDestroy {
    private router;
    private route;
    private locationStrategy;
    target: string;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    state?: {
        [k: string]: any;
    };
    private commands;
    private subscription;
    private preserve;
    href: string;
    constructor(router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy);
    set routerLink(commands: any[] | string);
    set preserveQueryParams(value: boolean);
    ngOnChanges(changes: {}): any;
    ngOnDestroy(): any;
    onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean;
    private updateTargetUrlAndHref;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterLinkWithHref>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterLinkWithHref, "a[routerLink],area[routerLink]", never, {
    "routerLink": "routerLink";
    "preserveQueryParams": "preserveQueryParams";
    "target": "target";
    "queryParams": "queryParams";
    "fragment": "fragment";
    "queryParamsHandling": "queryParamsHandling";
    "preserveFragment": "preserveFragment";
    "skipLocationChange": "skipLocationChange";
    "replaceUrl": "replaceUrl";
    "state": "state";
}, {}, never>;
}

/**
 * @usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * @NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * @description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router service solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * @see [Routing and Navigation](guide/router.html) for an
 * overview of how the router service should be used.
 *
 * @publicApi
 */
export declare class RouterModule {
    constructor(guard: any, router: Router);
    /**
     * Creates and configures a module with all the router providers and directives.
     * Optionally sets up an application listener to perform an initial navigation.
     *
     * @param routes An array of `Route` objects that define the navigation paths for the application.
     * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
     * @return The new router module.
    */
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule>;
    /**
     * Creates a module with all the router directives and a provider registering routes.
     */
    static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<RouterModule, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent], never, [typeof RouterOutlet, typeof RouterLink, typeof RouterLinkWithHref, typeof RouterLinkActive, typeof ɵEmptyOutletComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<RouterModule>;
}

/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * Each outlet can have a unique name, determined by the optional `name` attribute.
 * The name cannot be set or changed dynamically. If not set, default value is "primary".
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet emits an activate event when a new component is instantiated,
 * and a deactivate event when a component is destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class RouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    private activated;
    private _activatedRoute;
    private name;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    get isActivated(): boolean;
    get component(): Object;
    get activatedRoute(): ActivatedRoute;
    get activatedRouteData(): Data;
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RouterOutlet, "router-outlet", ["outlet"], {}, {
    "activateEvents": "activate";
    "deactivateEvents": "deactivate";
}, never>;
}

/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * @publicApi
 */
export declare class RouterPreloader implements OnDestroy {
    private router;
    private injector;
    private preloadingStrategy;
    private loader;
    private subscription;
    constructor(router: Router, moduleLoader: NgModuleFactoryLoader, compiler: Compiler, injector: Injector, preloadingStrategy: PreloadingStrategy);
    setUpPreloading(): void;
    preload(): Observable<any>;
    ngOnDestroy(): void;
    private processRoutes;
    private preloadConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RouterPreloader>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<RouterPreloader>;
}

/**
 * Represents the state of the router as a tree of activated routes.
 *
 * @usageNotes
 *
 * Every node in the route tree is an `ActivatedRoute` instance
 * that knows about the "consumed" URL segments, the extracted parameters,
 * and the resolved data.
 * Use the `ActivatedRoute` properties to traverse the tree from any node.
 *
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @see `ActivatedRoute`
 *
 * @publicApi
 */
export declare class RouterState extends ɵangular_packages_router_router_m<ActivatedRoute> {
    /** The current snapshot of the router state */
    snapshot: RouterStateSnapshot;
    toString(): string;
}

/**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class RouterStateSnapshot extends ɵangular_packages_router_router_m<ActivatedRouteSnapshot> {
    /** The url from which this snapshot was created */
    url: string;
    toString(): string;
}

/**
 * The [DI token](guide/glossary/#di-token) for a router configuration.
 * @see `ROUTES`
 * @publicApi
 */
export declare const ROUTES: InjectionToken<Route[][]>;

/**
 * Represents a route configuration for the Router service.
 * An array of `Route` objects, used in `Router.config` and for nested route configurations
 * in `Route.children`.
 *
 * @see `Route`
 * @see `Router`
 * @publicApi
 */
export declare type Routes = Route[];

/**
 *An event triggered when routes are recognized.
 *
 * @publicApi
 */
export declare class RoutesRecognized extends RouterEvent {
    /** @docsNotRequired */
    urlAfterRedirects: string;
    /** @docsNotRequired */
    state: RouterStateSnapshot;
    constructor(
    /** @docsNotRequired */
    id: number, 
    /** @docsNotRequired */
    url: string, 
    /** @docsNotRequired */
    urlAfterRedirects: string, 
    /** @docsNotRequired */
    state: RouterStateSnapshot);
    /** @docsNotRequired */
    toString(): string;
}

/**
 *
 * A policy for when to run guards and resolvers on a route.
 *
 * @see `Route#runGuardsAndResolvers`
 * @publicApi
 */
export declare type RunGuardsAndResolvers = 'pathParamsChange' | 'pathParamsOrQueryParamsChange' | 'paramsChange' | 'paramsOrQueryParamsChange' | 'always' | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean);

/**
 * An event triggered by scrolling.
 *
 * @publicApi
 */
export declare class Scroll {
    /** @docsNotRequired */
    readonly routerEvent: NavigationEnd;
    /** @docsNotRequired */
    readonly position: [number, number] | null;
    /** @docsNotRequired */
    readonly anchor: string | null;
    constructor(
    /** @docsNotRequired */
    routerEvent: NavigationEnd, 
    /** @docsNotRequired */
    position: [number, number] | null, 
    /** @docsNotRequired */
    anchor: string | null);
    toString(): string;
}

/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @publicApi
 */
export declare abstract class UrlHandlingStrategy {
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     */
    abstract shouldProcessUrl(url: UrlTree): boolean;
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     */
    abstract extract(url: UrlTree): UrlTree;
    /**
     * Merges the URL fragment with the rest of the URL.
     */
    abstract merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree;
}

/**
 * A function for matching a route against URLs. Implement a custom URL matcher
 * for `Route.matcher` when a combination of `path` and `pathMatch`
 * is not expressive enough. Cannot be used together with `path` and `pathMatch`.
 *
 * @param segments An array of URL segments.
 * @param group A segment group.
 * @param route The route to match against.
 * @returns The match-result.
 *
 * @usageNotes
 *
 * The following matcher matches HTML files.
 *
 * ```
 * export function htmlFiles(url: UrlSegment[]) {
 *   return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
 * }
 *
 * export const routes = [{ matcher: htmlFiles, component: AnyComponent }];
 * ```
 *
 * @publicApi
 */
export declare type UrlMatcher = (segments: UrlSegment[], group: UrlSegmentGroup, route: Route) => UrlMatchResult;

/**
 * Represents the result of matching URLs with a custom matching function.
 *
 * * `consumed` is an array of the consumed URL segments.
 * * `posParams` is a map of positional parameters.
 *
 * @see `UrlMatcher()`
 * @publicApi
 */
export declare type UrlMatchResult = {
    consumed: UrlSegment[];
    posParams?: {
        [name: string]: UrlSegment;
    };
};

/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlSegment {
    /** The path part of a URL segment */
    path: string;
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    };
    constructor(
    /** The path part of a URL segment */
    path: string, 
    /** The matrix parameters associated with a segment */
    parameters: {
        [name: string]: string;
    });
    get parameterMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */
export declare class UrlSegmentGroup {
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[];
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    };
    /** The parent node in the url tree */
    parent: UrlSegmentGroup | null;
    constructor(
    /** The URL segments of this group. See `UrlSegment` for more information */
    segments: UrlSegment[], 
    /** The list of children of this group */
    children: {
        [key: string]: UrlSegmentGroup;
    });
    /** Whether the segment has child segments */
    hasChildren(): boolean;
    /** Number of child segments */
    get numberOfChildren(): number;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */
export declare abstract class UrlSerializer {
    /** Parse a url into a `UrlTree` */
    abstract parse(url: string): UrlTree;
    /** Converts a `UrlTree` into a url */
    abstract serialize(tree: UrlTree): string;
}

/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export declare class UrlTree {
    /** The root segment group of the URL tree */
    root: UrlSegmentGroup;
    /** The query params of the URL */
    queryParams: Params;
    /** The fragment of the URL */
    fragment: string | null;
    get queryParamMap(): ParamMap;
    /** @docsNotRequired */
    toString(): string;
}

/**
 * @publicApi
 */
export declare const VERSION: Version;

/**
 * @docsNotRequired
 */
export declare const ɵangular_packages_router_router_a: InjectionToken<void>;

export declare function ɵangular_packages_router_router_b(): NgProbeToken;

export declare function ɵangular_packages_router_router_c(router: Router, viewportScroller: ViewportScroller, config: ExtraOptions): ɵangular_packages_router_router_o;

export declare function ɵangular_packages_router_router_d(platformLocationStrategy: PlatformLocation, baseHref: string, options?: ExtraOptions): HashLocationStrategy | PathLocationStrategy;

export declare function ɵangular_packages_router_router_e(router: Router): any;

export declare function ɵangular_packages_router_router_f(ref: ApplicationRef, urlSerializer: UrlSerializer, contexts: ChildrenOutletContexts, location: Location, injector: Injector, loader: NgModuleFactoryLoader, compiler: Compiler, config: Route[][], opts?: ExtraOptions, urlHandlingStrategy?: UrlHandlingStrategy, routeReuseStrategy?: RouteReuseStrategy): Router;

export declare function ɵangular_packages_router_router_g(router: Router): ActivatedRoute;

/**
 * Router initialization requires two steps:
 *
 * First, we start the navigation in a `APP_INITIALIZER` to block the bootstrap if
 * a resolver or a guard executes asynchronously.
 *
 * Next, we actually run activation in a `BOOTSTRAP_LISTENER`, using the
 * `afterPreactivation` hook provided by the router.
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
export declare class ɵangular_packages_router_router_h {
    private injector;
    private initNavigation;
    private resultOfPreactivationDone;
    constructor(injector: Injector);
    appInitializer(): Promise<any>;
    bootstrapListener(bootstrappedComponentRef: ComponentRef<any>): void;
    private isLegacyEnabled;
    private isLegacyDisabled;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_h>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ɵangular_packages_router_router_h>;
}

export declare function ɵangular_packages_router_router_i(r: ɵangular_packages_router_router_h): () => Promise<any>;

export declare function ɵangular_packages_router_router_j(r: ɵangular_packages_router_router_h): (bootstrappedComponentRef: ComponentRef<any>) => void;

export declare function ɵangular_packages_router_router_k(): (typeof ɵangular_packages_router_router_h | {
    provide: InjectionToken<(() => void)[]>;
    multi: boolean;
    useFactory: typeof ɵangular_packages_router_router_i;
    deps: (typeof ɵangular_packages_router_router_h)[];
    useExisting?: undefined;
} | {
    provide: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory: typeof ɵangular_packages_router_router_j;
    deps: (typeof ɵangular_packages_router_router_h)[];
    multi?: undefined;
    useExisting?: undefined;
} | {
    provide: InjectionToken<((compRef: ComponentRef<any>) => void)[]>;
    multi: boolean;
    useExisting: InjectionToken<(compRef: ComponentRef<any>) => void>;
    useFactory?: undefined;
    deps?: undefined;
})[];


export declare class ɵangular_packages_router_router_m<T> {
    constructor(root: ɵangular_packages_router_router_n<T>);
    get root(): T;
}

export declare class ɵangular_packages_router_router_n<T> {
    value: T;
    children: ɵangular_packages_router_router_n<T>[];
    constructor(value: T, children: ɵangular_packages_router_router_n<T>[]);
    toString(): string;
}

export declare class ɵangular_packages_router_router_o implements OnDestroy {
    private router;
    /** @docsNotRequired */ readonly viewportScroller: ViewportScroller;
    private options;
    private routerEventsSubscription;
    private scrollEventsSubscription;
    private lastId;
    private lastSource;
    private restoredId;
    private store;
    constructor(router: Router, 
    /** @docsNotRequired */ viewportScroller: ViewportScroller, options?: {
        scrollPositionRestoration?: 'disabled' | 'enabled' | 'top';
        anchorScrolling?: 'disabled' | 'enabled';
    });
    init(): void;
    private createScrollEvents;
    private consumeScrollEvents;
    private scheduleScrollEvent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵangular_packages_router_router_o>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ɵangular_packages_router_router_o, never, never, {}, {}, never>;
}


/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
declare class ɵEmptyOutletComponent {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ɵEmptyOutletComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ɵEmptyOutletComponent, "ng-component", never, {}, {}, never>;
}
export { ɵEmptyOutletComponent }
export { ɵEmptyOutletComponent as ɵangular_packages_router_router_l }

/**
 * Flattens single-level nested arrays.
 */
export declare function ɵflatten<T>(arr: T[][]): T[];

export declare const ɵROUTER_PROVIDERS: Provider[];

export { }

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmQudHMiLCJzb3VyY2VzIjpbInJvdXRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBczlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ01BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2OS4wLjBcbiAqIChjKSAyMDEwLTIwMjAgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21waWxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nUHJvYmVUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3cG9ydFNjcm9sbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBhY2Nlc3MgdG8gaW5mb3JtYXRpb24gYWJvdXQgYSByb3V0ZSBhc3NvY2lhdGVkIHdpdGggYSBjb21wb25lbnRcclxuICogdGhhdCBpcyBsb2FkZWQgaW4gYW4gb3V0bGV0LlxyXG4gKiBVc2UgdG8gdHJhdmVyc2UgdGhlIGBSb3V0ZXJTdGF0ZWAgdHJlZSBhbmQgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIG5vZGVzLlxyXG4gKlxyXG4gKiB7QGV4YW1wbGUgcm91dGVyL2FjdGl2YXRlZC1yb3V0ZS9tb2R1bGUudHMgcmVnaW9uPVwiYWN0aXZhdGVkLXJvdXRlXCJcclxuICogICAgIGhlYWRlcj1cImFjdGl2YXRlZC1yb3V0ZS5jb21wb25lbnQudHNcIn1cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWN0aXZhdGVkUm91dGUge1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIFVSTCBzZWdtZW50cyBtYXRjaGVkIGJ5IHRoaXMgcm91dGUuICovXHJcbiAgICB1cmw6IE9ic2VydmFibGU8VXJsU2VnbWVudFtdPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBtYXRyaXggcGFyYW1ldGVycyBzY29wZWQgdG8gdGhpcyByb3V0ZS4gKi9cclxuICAgIHBhcmFtczogT2JzZXJ2YWJsZTxQYXJhbXM+O1xyXG4gICAgLyoqIEFuIG9ic2VydmFibGUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzLiAqL1xyXG4gICAgcXVlcnlQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBVUkwgZnJhZ21lbnQgc2hhcmVkIGJ5IGFsbCB0aGUgcm91dGVzLiAqL1xyXG4gICAgZnJhZ21lbnQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8qKiBBbiBvYnNlcnZhYmxlIG9mIHRoZSBzdGF0aWMgYW5kIHJlc29sdmVkIGRhdGEgb2YgdGhpcyByb3V0ZS4gKi9cclxuICAgIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XHJcbiAgICAvKiogVGhlIG91dGxldCBuYW1lIG9mIHRoZSByb3V0ZSwgYSBjb25zdGFudC4gKi9cclxuICAgIG91dGxldDogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBjb21wb25lbnQgb2YgdGhlIHJvdXRlLCBhIGNvbnN0YW50LiAqL1xyXG4gICAgY29tcG9uZW50OiBUeXBlPGFueT4gfCBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IHNuYXBzaG90IG9mIHRoaXMgcm91dGUgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgLyoqIFRoZSBjb25maWd1cmF0aW9uIHVzZWQgdG8gbWF0Y2ggdGhpcyByb3V0ZS4gKi9cclxuICAgIGdldCByb3V0ZUNvbmZpZygpOiBSb3V0ZSB8IG51bGw7XHJcbiAgICAvKiogVGhlIHJvb3Qgb2YgdGhlIHJvdXRlciBzdGF0ZS4gKi9cclxuICAgIGdldCByb290KCk6IEFjdGl2YXRlZFJvdXRlO1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXHJcbiAgICBnZXQgcGFyZW50KCk6IEFjdGl2YXRlZFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgZmlyc3QgY2hpbGQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUuICovXHJcbiAgICBnZXQgZmlyc3RDaGlsZCgpOiBBY3RpdmF0ZWRSb3V0ZSB8IG51bGw7XHJcbiAgICAvKiogVGhlIGNoaWxkcmVuIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlLiAqL1xyXG4gICAgZ2V0IGNoaWxkcmVuKCk6IEFjdGl2YXRlZFJvdXRlW107XHJcbiAgICAvKiogVGhlIHBhdGggZnJvbSB0aGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgdG8gdGhpcyByb3V0ZS4gKi9cclxuICAgIGdldCBwYXRoRnJvbVJvb3QoKTogQWN0aXZhdGVkUm91dGVbXTtcclxuICAgIC8qKiBBbiBPYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgYSBtYXAgb2YgdGhlIHJlcXVpcmVkIGFuZCBvcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAgKiBzcGVjaWZpYyB0byB0aGUgcm91dGUuXHJcbiAgICAgKiBUaGUgbWFwIHN1cHBvcnRzIHJldHJpZXZpbmcgc2luZ2xlIGFuZCBtdWx0aXBsZSB2YWx1ZXMgZnJvbSB0aGUgc2FtZSBwYXJhbWV0ZXIuICovXHJcbiAgICBnZXQgcGFyYW1NYXAoKTogT2JzZXJ2YWJsZTxQYXJhbU1hcD47XHJcbiAgICAvKipcclxuICAgICAqIEFuIE9ic2VydmFibGUgdGhhdCBjb250YWlucyBhIG1hcCBvZiB0aGUgcXVlcnkgcGFyYW1ldGVycyBhdmFpbGFibGUgdG8gYWxsIHJvdXRlcy5cclxuICAgICAqIFRoZSBtYXAgc3VwcG9ydHMgcmV0cmlldmluZyBzaW5nbGUgYW5kIG11bHRpcGxlIHZhbHVlcyBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldCBxdWVyeVBhcmFtTWFwKCk6IE9ic2VydmFibGU8UGFyYW1NYXA+O1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIENvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIHJvdXRlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBvbmVudCBsb2FkZWQgaW4gYW5cclxuICogb3V0bGV0IGF0IGEgcGFydGljdWxhciBtb21lbnQgaW4gdGltZS4gQWN0aXZhdGVkUm91dGVTbmFwc2hvdCBjYW4gYWxzbyBiZSB1c2VkIHRvXHJcbiAqIHRyYXZlcnNlIHRoZSByb3V0ZXIgc3RhdGUgdHJlZS5cclxuICpcclxuICogYGBgXHJcbiAqIEBDb21wb25lbnQoe3RlbXBsYXRlVXJsOicuL215LWNvbXBvbmVudC5odG1sJ30pXHJcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcclxuICogICBjb25zdHJ1Y3Rvcihyb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICogICAgIGNvbnN0IGlkOiBzdHJpbmcgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXMuaWQ7XHJcbiAqICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHJvdXRlLnNuYXBzaG90LnVybC5qb2luKCcnKTtcclxuICogICAgIGNvbnN0IHVzZXIgPSByb3V0ZS5zbmFwc2hvdC5kYXRhLnVzZXI7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHtcclxuICAgIC8qKiBUaGUgVVJMIHNlZ21lbnRzIG1hdGNoZWQgYnkgdGhpcyByb3V0ZSAqL1xyXG4gICAgdXJsOiBVcmxTZWdtZW50W107XHJcbiAgICAvKiogVGhlIG1hdHJpeCBwYXJhbWV0ZXJzIHNjb3BlZCB0byB0aGlzIHJvdXRlICovXHJcbiAgICBwYXJhbXM6IFBhcmFtcztcclxuICAgIC8qKiBUaGUgcXVlcnkgcGFyYW1ldGVycyBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMgKi9cclxuICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XHJcbiAgICAvKiogVGhlIFVSTCBmcmFnbWVudCBzaGFyZWQgYnkgYWxsIHRoZSByb3V0ZXMgKi9cclxuICAgIGZyYWdtZW50OiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIHN0YXRpYyBhbmQgcmVzb2x2ZWQgZGF0YSBvZiB0aGlzIHJvdXRlICovXHJcbiAgICBkYXRhOiBEYXRhO1xyXG4gICAgLyoqIFRoZSBvdXRsZXQgbmFtZSBvZiB0aGUgcm91dGUgKi9cclxuICAgIG91dGxldDogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBjb21wb25lbnQgb2YgdGhlIHJvdXRlICovXHJcbiAgICBjb21wb25lbnQ6IFR5cGU8YW55PiB8IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVGhlIGNvbmZpZ3VyYXRpb24gdXNlZCB0byBtYXRjaCB0aGlzIHJvdXRlICoqL1xyXG4gICAgcmVhZG9ubHkgcm91dGVDb25maWc6IFJvdXRlIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlICovXHJcbiAgICBnZXQgcm9vdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cclxuICAgIGdldCBwYXJlbnQoKTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB8IG51bGw7XHJcbiAgICAvKiogVGhlIGZpcnN0IGNoaWxkIG9mIHRoaXMgcm91dGUgaW4gdGhlIHJvdXRlciBzdGF0ZSB0cmVlICovXHJcbiAgICBnZXQgZmlyc3RDaGlsZCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IHwgbnVsbDtcclxuICAgIC8qKiBUaGUgY2hpbGRyZW4gb2YgdGhpcyByb3V0ZSBpbiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgKi9cclxuICAgIGdldCBjaGlsZHJlbigpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W107XHJcbiAgICAvKiogVGhlIHBhdGggZnJvbSB0aGUgcm9vdCBvZiB0aGUgcm91dGVyIHN0YXRlIHRyZWUgdG8gdGhpcyByb3V0ZSAqL1xyXG4gICAgZ2V0IHBhdGhGcm9tUm9vdCgpOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W107XHJcbiAgICBnZXQgcGFyYW1NYXAoKTogUGFyYW1NYXA7XHJcbiAgICBnZXQgcXVlcnlQYXJhbU1hcCgpOiBQYXJhbU1hcDtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBhY3RpdmF0aW9uIHBhcnRcclxuICogb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBgQWN0aXZhdGlvblN0YXJ0YFxyXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFjdGl2YXRpb25FbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBzdGFydCBvZiB0aGUgYWN0aXZhdGlvbiBwYXJ0XHJcbiAqIG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqIEBzZWUgQWN0aXZhdGlvbkVuZGBcclxuICogQHNlZSBgUmVzb2x2ZVN0YXJ0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBY3RpdmF0aW9uU3RhcnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgcm91dGUgY2FuIGJlIGFjdGl2YXRlZC5cclxuICogSWYgYWxsIGd1YXJkcyByZXR1cm4gYHRydWVgLCBuYXZpZ2F0aW9uIHdpbGwgY29udGludWUuIElmIGFueSBndWFyZCByZXR1cm5zIGBmYWxzZWAsXHJcbiAqIG5hdmlnYXRpb24gd2lsbCBiZSBjYW5jZWxsZWQuIElmIGFueSBndWFyZCByZXR1cm5zIGEgYFVybFRyZWVgLCBjdXJyZW50IG5hdmlnYXRpb24gd2lsbFxyXG4gKiBiZSBjYW5jZWxsZWQgYW5kIGEgbmV3IG5hdmlnYXRpb24gd2lsbCBiZSBraWNrZWQgb2ZmIHRvIHRoZSBgVXJsVHJlZWAgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogZ3VhcmQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkFjdGl2YXRlKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuQWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLCBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyVG9rZW4pIHt9XHJcbiAqXHJcbiAqICAgY2FuQWN0aXZhdGUoXHJcbiAqICAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICogICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxib29sZWFufFVybFRyZWU+fFByb21pc2U8Ym9vbGVhbnxVcmxUcmVlPnxib29sZWFufFVybFRyZWUge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuY2FuQWN0aXZhdGUodGhpcy5jdXJyZW50VXNlciwgcm91dGUucGFyYW1zLmlkKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVGVhbV1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW0NhbkFjdGl2YXRlVGVhbSwgVXNlclRva2VuLCBQZXJtaXNzaW9uc11cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFsdGVybmF0aXZlbHkgcHJvdmlkZSBhIGZ1bmN0aW9uIHdpdGggdGhlIGBjYW5BY3RpdmF0ZWAgc2lnbmF0dXJlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBjYW5BY3RpdmF0ZTogWydjYW5BY3RpdmF0ZVRlYW0nXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5BY3RpdmF0ZVRlYW0nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuQWN0aXZhdGUge1xyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgY2hpbGQgcm91dGUgY2FuIGJlIGFjdGl2YXRlZC5cclxuICogSWYgYWxsIGd1YXJkcyByZXR1cm4gYHRydWVgLCBuYXZpZ2F0aW9uIHdpbGwgY29udGludWUuIElmIGFueSBndWFyZCByZXR1cm5zIGBmYWxzZWAsXHJcbiAqIG5hdmlnYXRpb24gd2lsbCBiZSBjYW5jZWxsZWQuIElmIGFueSBndWFyZCByZXR1cm5zIGEgYFVybFRyZWVgLCBjdXJyZW50IG5hdmlnYXRpb24gd2lsbFxyXG4gKiBiZSBjYW5jZWxsZWQgYW5kIGEgbmV3IG5hdmlnYXRpb24gd2lsbCBiZSBraWNrZWQgb2ZmIHRvIHRoZSBgVXJsVHJlZWAgcmV0dXJuZWQgZnJvbSB0aGVcclxuICogZ3VhcmQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkFjdGl2YXRlKHVzZXI6IFVzZXJUb2tlbiwgaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gKiAgICAgcmV0dXJuIHRydWU7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBJbmplY3RhYmxlKClcclxuICogY2xhc3MgQ2FuQWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5BY3RpdmF0ZUNoaWxkKFxyXG4gKiAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAqICAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gKiAgICk6IE9ic2VydmFibGU8Ym9vbGVhbnxVcmxUcmVlPnxQcm9taXNlPGJvb2xlYW58VXJsVHJlZT58Ym9vbGVhbnxVcmxUcmVlIHtcclxuICogICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zLmNhbkFjdGl2YXRlKHRoaXMuY3VycmVudFVzZXIsIHJvdXRlLnBhcmFtcy5pZCk7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3Jvb3QnLFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFtDYW5BY3RpdmF0ZVRlYW1dLFxyXG4gKiAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAqICAgICAgICAgICB7XHJcbiAqICAgICAgICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuQWN0aXZhdGVUZWFtLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkFjdGl2YXRlQ2hpbGRgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3Jvb3QnLFxyXG4gKiAgICAgICAgIGNhbkFjdGl2YXRlQ2hpbGQ6IFsnY2FuQWN0aXZhdGVUZWFtJ10sXHJcbiAqICAgICAgICAgY2hpbGRyZW46IFtcclxuICogICAgICAgICAgIHtcclxuICogICAgICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5BY3RpdmF0ZVRlYW0nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuQWN0aXZhdGVDaGlsZCB7XHJcbiAgICBjYW5BY3RpdmF0ZUNoaWxkKGNoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGEgcm91dGUgY2FuIGJlIGRlYWN0aXZhdGVkLlxyXG4gKiBJZiBhbGwgZ3VhcmRzIHJldHVybiBgdHJ1ZWAsIG5hdmlnYXRpb24gd2lsbCBjb250aW51ZS4gSWYgYW55IGd1YXJkIHJldHVybnMgYGZhbHNlYCxcclxuICogbmF2aWdhdGlvbiB3aWxsIGJlIGNhbmNlbGxlZC4gSWYgYW55IGd1YXJkIHJldHVybnMgYSBgVXJsVHJlZWAsIGN1cnJlbnQgbmF2aWdhdGlvbiB3aWxsXHJcbiAqIGJlIGNhbmNlbGxlZCBhbmQgYSBuZXcgbmF2aWdhdGlvbiB3aWxsIGJlIGtpY2tlZCBvZmYgdG8gdGhlIGBVcmxUcmVlYCByZXR1cm5lZCBmcm9tIHRoZVxyXG4gKiBndWFyZC5cclxuICpcclxuICogYGBgXHJcbiAqIGNsYXNzIFVzZXJUb2tlbiB7fVxyXG4gKiBjbGFzcyBQZXJtaXNzaW9ucyB7XHJcbiAqICAgY2FuRGVhY3RpdmF0ZSh1c2VyOiBVc2VyVG9rZW4sIGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICogICAgIHJldHVybiB0cnVlO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBASW5qZWN0YWJsZSgpXHJcbiAqIGNsYXNzIENhbkRlYWN0aXZhdGVUZWFtIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxUZWFtQ29tcG9uZW50PiB7XHJcbiAqICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbnMsIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXJUb2tlbikge31cclxuICpcclxuICogICBjYW5EZWFjdGl2YXRlKFxyXG4gKiAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gKiAgICAgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gKiAgICAgbmV4dFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAqICAgKTogT2JzZXJ2YWJsZTxib29sZWFufFVybFRyZWU+fFByb21pc2U8Ym9vbGVhbnxVcmxUcmVlPnxib29sZWFufFVybFRyZWUge1xyXG4gKiAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuY2FuRGVhY3RpdmF0ZSh0aGlzLmN1cnJlbnRVc2VyLCByb3V0ZS5wYXJhbXMuaWQpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtcclxuICogICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICogICAgICAge1xyXG4gKiAgICAgICAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBUZWFtQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIGNhbkRlYWN0aXZhdGU6IFtDYW5EZWFjdGl2YXRlVGVhbV1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW0NhbkRlYWN0aXZhdGVUZWFtLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkRlYWN0aXZhdGVgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICAgICAgY2FuRGVhY3RpdmF0ZTogWydjYW5EZWFjdGl2YXRlVGVhbSddXHJcbiAqICAgICAgIH1cclxuICogICAgIF0pXHJcbiAqICAgXSxcclxuICogICBwcm92aWRlcnM6IFtcclxuICogICAgIHtcclxuICogICAgICAgcHJvdmlkZTogJ2NhbkRlYWN0aXZhdGVUZWFtJyxcclxuICogICAgICAgdXNlVmFsdWU6IChjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsIGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOlxyXG4gKiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpID0+IHRydWVcclxuICogICAgIH1cclxuICogICBdXHJcbiAqIH0pXHJcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIENhbkRlYWN0aXZhdGU8VD4ge1xyXG4gICAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IFQsIGN1cnJlbnRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgY3VycmVudFN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBuZXh0U3RhdGU/OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEludGVyZmFjZSB0aGF0IGEgY2xhc3MgY2FuIGltcGxlbWVudCB0byBiZSBhIGd1YXJkIGRlY2lkaW5nIGlmIGNoaWxkcmVuIGNhbiBiZSBsb2FkZWQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjbGFzcyBVc2VyVG9rZW4ge31cclxuICogY2xhc3MgUGVybWlzc2lvbnMge1xyXG4gKiAgIGNhbkxvYWRDaGlsZHJlbih1c2VyOiBVc2VyVG9rZW4sIGlkOiBzdHJpbmcsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcclxuICogICAgIHJldHVybiB0cnVlO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiBASW5qZWN0YWJsZSgpXHJcbiAqIGNsYXNzIENhbkxvYWRUZWFtU2VjdGlvbiBpbXBsZW1lbnRzIENhbkxvYWQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLCBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyVG9rZW4pIHt9XHJcbiAqXHJcbiAqICAgY2FuTG9hZChyb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+fFByb21pc2U8Ym9vbGVhbj58Ym9vbGVhbiB7XHJcbiAqICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5jYW5Mb2FkQ2hpbGRyZW4odGhpcy5jdXJyZW50VXNlciwgcm91dGUsIHNlZ21lbnRzKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogVGVhbUNvbXBvbmVudCxcclxuICogICAgICAgICBsb2FkQ2hpbGRyZW46ICd0ZWFtLmpzJyxcclxuICogICAgICAgICBjYW5Mb2FkOiBbQ2FuTG9hZFRlYW1TZWN0aW9uXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbQ2FuTG9hZFRlYW1TZWN0aW9uLCBVc2VyVG9rZW4sIFBlcm1pc3Npb25zXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBBcHBNb2R1bGUge31cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWx0ZXJuYXRpdmVseSBwcm92aWRlIGEgZnVuY3Rpb24gd2l0aCB0aGUgYGNhbkxvYWRgIHNpZ25hdHVyZTpcclxuICpcclxuICogYGBgXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICAgICAgICBjb21wb25lbnQ6IFRlYW1Db21wb25lbnQsXHJcbiAqICAgICAgICAgbG9hZENoaWxkcmVuOiAndGVhbS5qcycsXHJcbiAqICAgICAgICAgY2FuTG9hZDogWydjYW5Mb2FkVGVhbVNlY3Rpb24nXVxyXG4gKiAgICAgICB9XHJcbiAqICAgICBdKVxyXG4gKiAgIF0sXHJcbiAqICAgcHJvdmlkZXJzOiBbXHJcbiAqICAgICB7XHJcbiAqICAgICAgIHByb3ZpZGU6ICdjYW5Mb2FkVGVhbVNlY3Rpb24nLFxyXG4gKiAgICAgICB1c2VWYWx1ZTogKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSkgPT4gdHJ1ZVxyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ2FuTG9hZCB7XHJcbiAgICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgc2VnbWVudHM6IFVybFNlZ21lbnRbXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZC1hY3RpdmF0aW9uIHBhcnRcclxuICogb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICogQHNlZSBgQ2hpbGRBY3RpdmF0aW9uU3RhcnRgXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGAgKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGlsZEFjdGl2YXRpb25FbmQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSBzdGFydCBvZiB0aGUgY2hpbGQtYWN0aXZhdGlvblxyXG4gKiBwYXJ0IG9mIHRoZSBSZXNvbHZlIHBoYXNlIG9mIHJvdXRpbmcuXHJcbiAqIEBzZWUgIGBDaGlsZEFjdGl2YXRpb25FbmRgXHJcbiAqIEBzZWUgYFJlc29sdmVTdGFydGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2hpbGRBY3RpdmF0aW9uU3RhcnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogU3RvcmUgY29udGV4dHVhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2hpbGRyZW4gKD0gbmVzdGVkKSBgUm91dGVyT3V0bGV0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGlsZHJlbk91dGxldENvbnRleHRzIHtcclxuICAgIHByaXZhdGUgY29udGV4dHM7XHJcbiAgICAvKiogQ2FsbGVkIHdoZW4gYSBgUm91dGVyT3V0bGV0YCBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkICovXHJcbiAgICBvbkNoaWxkT3V0bGV0Q3JlYXRlZChjaGlsZE5hbWU6IHN0cmluZywgb3V0bGV0OiBSb3V0ZXJPdXRsZXQpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGBSb3V0ZXJPdXRsZXRgIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXHJcbiAgICAgKiBXZSBuZWVkIHRvIGtlZXAgdGhlIGNvbnRleHQgYXMgdGhlIG91dGxldCBjb3VsZCBiZSBkZXN0cm95ZWQgaW5zaWRlIGEgTmdJZiBhbmQgbWlnaHQgYmVcclxuICAgICAqIHJlLWNyZWF0ZWQgbGF0ZXIuXHJcbiAgICAgKi9cclxuICAgIG9uQ2hpbGRPdXRsZXREZXN0cm95ZWQoY2hpbGROYW1lOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY29ycmVzcG9uZGluZyByb3V0ZSBpcyBkZWFjdGl2YXRlZCBkdXJpbmcgbmF2aWdhdGlvbi5cclxuICAgICAqIEJlY2F1c2UgdGhlIGNvbXBvbmVudCBnZXQgZGVzdHJveWVkLCBhbGwgY2hpbGRyZW4gb3V0bGV0IGFyZSBkZXN0cm95ZWQuXHJcbiAgICAgKi9cclxuICAgIG9uT3V0bGV0RGVhY3RpdmF0ZWQoKTogTWFwPHN0cmluZywgT3V0bGV0Q29udGV4dD47XHJcbiAgICBvbk91dGxldFJlQXR0YWNoZWQoY29udGV4dHM6IE1hcDxzdHJpbmcsIE91dGxldENvbnRleHQ+KTogdm9pZDtcclxuICAgIGdldE9yQ3JlYXRlQ29udGV4dChjaGlsZE5hbWU6IHN0cmluZyk6IE91dGxldENvbnRleHQ7XHJcbiAgICBnZXRDb250ZXh0KGNoaWxkTmFtZTogc3RyaW5nKTogT3V0bGV0Q29udGV4dCB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIGBQYXJhbXNgIGluc3RhbmNlIHRvIGEgYFBhcmFtTWFwYC5cclxuICogQHBhcmFtIHBhcmFtcyBUaGUgaW5zdGFuY2UgdG8gY29udmVydC5cclxuICogQHJldHVybnMgVGhlIG5ldyBtYXAgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNvbnZlcnRUb1BhcmFtTWFwKHBhcmFtczogUGFyYW1zKTogUGFyYW1NYXA7XHJcblxyXG4vKipcclxuICpcclxuICogUmVwcmVzZW50cyBzdGF0aWMgZGF0YSBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIHJvdXRlLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNkYXRhYFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERhdGEgPSB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIGBVcmxTZXJpYWxpemVyYC5cclxuICpcclxuICogRXhhbXBsZSBVUkxzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogL2luYm94LzMzKHBvcHVwOmNvbXBvc2UpXHJcbiAqIC9pbmJveC8zMztvcGVuPXRydWUvbWVzc2FnZXMvNDRcclxuICogYGBgXHJcbiAqXHJcbiAqIERlZmF1bHRVcmxTZXJpYWxpemVyIHVzZXMgcGFyZW50aGVzZXMgdG8gc2VyaWFsaXplIHNlY29uZGFyeSBzZWdtZW50cyAoZS5nLiwgcG9wdXA6Y29tcG9zZSksIHRoZVxyXG4gKiBjb2xvbiBzeW50YXggdG8gc3BlY2lmeSB0aGUgb3V0bGV0LCBhbmQgdGhlICc7cGFyYW1ldGVyPXZhbHVlJyBzeW50YXggKGUuZy4sIG9wZW49dHJ1ZSkgdG9cclxuICogc3BlY2lmeSByb3V0ZSBzcGVjaWZpYyBwYXJhbWV0ZXJzLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWZhdWx0VXJsU2VyaWFsaXplciBpbXBsZW1lbnRzIFVybFNlcmlhbGl6ZXIge1xyXG4gICAgLyoqIFBhcnNlcyBhIHVybCBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogQ29udmVydHMgYSBgVXJsVHJlZWAgaW50byBhIHVybCAqL1xyXG4gICAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWUpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN0cmluZyBvZiB0aGUgZm9ybSBgcGF0aC90by9maWxlI2V4cG9ydE5hbWVgIHRoYXQgYWN0cyBhcyBhIFVSTCBmb3IgYSBzZXQgb2Ygcm91dGVzIHRvIGxvYWQuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI2xvYWRDaGlsZHJlbmBcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVwcmVjYXRlZCB0aGUgYHN0cmluZ2AgZm9ybSBvZiBgbG9hZENoaWxkcmVuYCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHRoZSBwcm9wb3NlZCBFUyBkeW5hbWljXHJcbiAqIGBpbXBvcnQoKWAgZXhwcmVzc2lvbiwgd2hpY2ggb2ZmZXJzIGEgbW9yZSBuYXR1cmFsIGFuZCBzdGFuZGFyZHMtYmFzZWQgbWVjaGFuaXNtIHRvIGR5bmFtaWNhbGx5XHJcbiAqIGxvYWQgYW4gRVMgbW9kdWxlIGF0IHJ1bnRpbWUuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIERlcHJlY2F0ZWRMb2FkQ2hpbGRyZW4gPSBzdHJpbmc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGRldGFjaGVkIHJvdXRlIHRyZWUuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYW4gb3BhcXVlIHZhbHVlIHRoZSByb3V0ZXIgd2lsbCBnaXZlIHRvIGEgY3VzdG9tIHJvdXRlIHJldXNlIHN0cmF0ZWd5XHJcbiAqIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBsYXRlciBvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBEZXRhY2hlZFJvdXRlSGFuZGxlID0ge307XHJcblxyXG4vKipcclxuICogRXJyb3IgaGFuZGxlciB0aGF0IGlzIGludm9rZWQgd2hlbiBhIG5hdmlnYXRpb24gZXJyb3Igb2NjdXJzLlxyXG4gKlxyXG4gKiBJZiB0aGUgaGFuZGxlciByZXR1cm5zIGEgdmFsdWUsIHRoZSBuYXZpZ2F0aW9uIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGlzIHZhbHVlLlxyXG4gKiBJZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLCB0aGUgbmF2aWdhdGlvbiBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGhcclxuICogdGhlIGV4Y2VwdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZGVjbGFyZSB0eXBlIEVycm9ySGFuZGxlciA9IChlcnJvcjogYW55KSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogUm91dGVyIGV2ZW50cyB0aGF0IGFsbG93IHlvdSB0byB0cmFjayB0aGUgbGlmZWN5Y2xlIG9mIHRoZSByb3V0ZXIuXHJcbiAqXHJcbiAqIFRoZSBzZXF1ZW5jZSBvZiByb3V0ZXIgZXZlbnRzIGlzIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIC0gYE5hdmlnYXRpb25TdGFydGAsXHJcbiAqIC0gYFJvdXRlQ29uZmlnTG9hZFN0YXJ0YCxcclxuICogLSBgUm91dGVDb25maWdMb2FkRW5kYCxcclxuICogLSBgUm91dGVzUmVjb2duaXplZGAsXHJcbiAqIC0gYEd1YXJkc0NoZWNrU3RhcnRgLFxyXG4gKiAtIGBDaGlsZEFjdGl2YXRpb25TdGFydGAsXHJcbiAqIC0gYEFjdGl2YXRpb25TdGFydGAsXHJcbiAqIC0gYEd1YXJkc0NoZWNrRW5kYCxcclxuICogLSBgUmVzb2x2ZVN0YXJ0YCxcclxuICogLSBgUmVzb2x2ZUVuZGAsXHJcbiAqIC0gYEFjdGl2YXRpb25FbmRgXHJcbiAqIC0gYENoaWxkQWN0aXZhdGlvbkVuZGBcclxuICogLSBgTmF2aWdhdGlvbkVuZGAsXHJcbiAqIC0gYE5hdmlnYXRpb25DYW5jZWxgLFxyXG4gKiAtIGBOYXZpZ2F0aW9uRXJyb3JgXHJcbiAqIC0gYFNjcm9sbGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBFdmVudCA9IFJvdXRlckV2ZW50IHwgUm91dGVDb25maWdMb2FkU3RhcnQgfCBSb3V0ZUNvbmZpZ0xvYWRFbmQgfCBDaGlsZEFjdGl2YXRpb25TdGFydCB8IENoaWxkQWN0aXZhdGlvbkVuZCB8IEFjdGl2YXRpb25TdGFydCB8IEFjdGl2YXRpb25FbmQgfCBTY3JvbGw7XHJcblxyXG4vKipcclxuICogQSBzZXQgb2YgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhIHJvdXRlciBtb2R1bGUsIHByb3ZpZGVkIGluIHRoZVxyXG4gKiBgZm9yUm9vdCgpYCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBFeHRyYU9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIGxvZyBhbGwgaW50ZXJuYWwgbmF2aWdhdGlvbiBldmVudHMgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgKiBVc2UgZm9yIGRlYnVnZ2luZy5cclxuICAgICAqL1xyXG4gICAgZW5hYmxlVHJhY2luZz86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgZW5hYmxlIHRoZSBsb2NhdGlvbiBzdHJhdGVneSB0aGF0IHVzZXMgdGhlIFVSTCBmcmFnbWVudFxyXG4gICAgICogaW5zdGVhZCBvZiB0aGUgaGlzdG9yeSBBUEkuXHJcbiAgICAgKi9cclxuICAgIHVzZUhhc2g/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBPbmUgb2YgYGVuYWJsZWRgIG9yIGBkaXNhYmxlZGAuXHJcbiAgICAgKiBXaGVuIHNldCB0byBgZW5hYmxlZGAsIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gc3RhcnRzIGJlZm9yZSB0aGUgcm9vdCBjb21wb25lbnQgaXMgY3JlYXRlZC5cclxuICAgICAqIFRoZSBib290c3RyYXAgaXMgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIGZvclxyXG4gICAgICogW3NlcnZlci1zaWRlIHJlbmRlcmluZ10oZ3VpZGUvdW5pdmVyc2FsKSB0byB3b3JrLlxyXG4gICAgICogV2hlbiBzZXQgdG8gYGRpc2FibGVkYCwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBub3QgcGVyZm9ybWVkLlxyXG4gICAgICogVGhlIGxvY2F0aW9uIGxpc3RlbmVyIGlzIHNldCB1cCBiZWZvcmUgdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC5cclxuICAgICAqIFVzZSBpZiB0aGVyZSBpcyBhIHJlYXNvbiB0byBoYXZlIG1vcmUgY29udHJvbCBvdmVyIHdoZW4gdGhlIHJvdXRlclxyXG4gICAgICogc3RhcnRzIGl0cyBpbml0aWFsIG5hdmlnYXRpb24gZHVlIHRvIHNvbWUgY29tcGxleCBpbml0aWFsaXphdGlvbiBsb2dpYy5cclxuICAgICAqXHJcbiAgICAgKiBMZWdhY3kgdmFsdWVzIGFyZSBkZXByZWNhdGVkIHNpbmNlIHY0IGFuZCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG5ldyBhcHBsaWNhdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogKiBgbGVnYWN5X2VuYWJsZWRgIC0gRGVmYXVsdCBmb3IgY29tcGF0aWJpbGl0eS5cclxuICAgICAqIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gc3RhcnRzIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBoYXMgYmVlbiBjcmVhdGVkLFxyXG4gICAgICogYnV0IHRoZSBib290c3RyYXAgaXMgbm90IGJsb2NrZWQgdW50aWwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBjb21wbGV0ZS5cclxuICAgICAqICogYGxlZ2FjeV9kaXNhYmxlZGAgLSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIG5vdCBwZXJmb3JtZWQuXHJcbiAgICAgKiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBnZXRzIGNyZWF0ZWQuXHJcbiAgICAgKiAqIGB0cnVlYCAtIHNhbWUgYXMgYGxlZ2FjeV9lbmFibGVkYC5cclxuICAgICAqICogYGZhbHNlYCAtIHNhbWUgYXMgYGxlZ2FjeV9kaXNhYmxlZGAuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxOYXZpZ2F0aW9uPzogSW5pdGlhbE5hdmlnYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIEEgY3VzdG9tIGVycm9yIGhhbmRsZXIgZm9yIGZhaWxlZCBuYXZpZ2F0aW9ucy5cclxuICAgICAqL1xyXG4gICAgZXJyb3JIYW5kbGVyPzogRXJyb3JIYW5kbGVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmVzIGEgcHJlbG9hZGluZyBzdHJhdGVneS5cclxuICAgICAqIE9uZSBvZiBgUHJlbG9hZEFsbE1vZHVsZXNgIG9yIGBOb1ByZWxvYWRpbmdgICh0aGUgZGVmYXVsdCkuXHJcbiAgICAgKi9cclxuICAgIHByZWxvYWRpbmdTdHJhdGVneT86IGFueTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lIHdoYXQgdGhlIHJvdXRlciBzaG91bGQgZG8gaWYgaXQgcmVjZWl2ZXMgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgdG8gdGhlIGN1cnJlbnQgVVJMLlxyXG4gICAgICogRGVmYXVsdCBpcyBgaWdub3JlYCwgd2hpY2ggY2F1c2VzIHRoZSByb3V0ZXIgaWdub3JlcyB0aGUgbmF2aWdhdGlvbi5cclxuICAgICAqIFRoaXMgY2FuIGRpc2FibGUgZmVhdHVyZXMgc3VjaCBhcyBhIFwicmVmcmVzaFwiIGJ1dHRvbi5cclxuICAgICAqIFVzZSB0aGlzIG9wdGlvbiB0byBjb25maWd1cmUgdGhlIGJlaGF2aW9yIHdoZW4gbmF2aWdhdGluZyB0byB0aGVcclxuICAgICAqIGN1cnJlbnQgVVJMLiBEZWZhdWx0IGlzICdpZ25vcmUnLlxyXG4gICAgICovXHJcbiAgICBvblNhbWVVcmxOYXZpZ2F0aW9uPzogJ3JlbG9hZCcgfCAnaWdub3JlJztcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHdoZW4gbmF2aWdhdGluZyBiYWNrLlxyXG4gICAgICpcclxuICAgICAqICogJ2Rpc2FibGVkJy0gKERlZmF1bHQpIERvZXMgbm90aGluZy4gU2Nyb2xsIHBvc2l0aW9uIGlzIG1haW50YWluZWQgb24gbmF2aWdhdGlvbi5cclxuICAgICAqICogJ3RvcCctIFNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byB4ID0gMCwgeSA9IDAgb24gYWxsIG5hdmlnYXRpb24uXHJcbiAgICAgKiAqICdlbmFibGVkJy0gUmVzdG9yZXMgdGhlIHByZXZpb3VzIHNjcm9sbCBwb3NpdGlvbiBvbiBiYWNrd2FyZCBuYXZpZ2F0aW9uLCBlbHNlIHNldHMgdGhlXHJcbiAgICAgKiBwb3NpdGlvbiB0byB0aGUgYW5jaG9yIGlmIG9uZSBpcyBwcm92aWRlZCwgb3Igc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIFswLCAwXSAoZm9yd2FyZFxyXG4gICAgICogbmF2aWdhdGlvbikuIFRoaXMgb3B0aW9uIHdpbGwgYmUgdGhlIGRlZmF1bHQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAqXHJcbiAgICAgKiBZb3UgY2FuIGltcGxlbWVudCBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGJlaGF2aW9yIGJ5IGFkYXB0aW5nIHRoZSBlbmFibGVkIGJlaGF2aW9yIGFzXHJcbiAgICAgKiBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUuXHJcbiAgICAgKlxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgICAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXIpIHtcclxuICAgICAqICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgKiAgICAgICBmaWx0ZXIoKGU6IEV2ZW50KTogZSBpcyBTY3JvbGwgPT4gZSBpbnN0YW5jZW9mIFNjcm9sbClcclxuICAgICAqICAgICApLnN1YnNjcmliZShlID0+IHtcclxuICAgICAqICAgICAgIGlmIChlLnBvc2l0aW9uKSB7XHJcbiAgICAgKiAgICAgICAgIC8vIGJhY2t3YXJkIG5hdmlnYXRpb25cclxuICAgICAqICAgICAgICAgdmlld3BvcnRTY3JvbGxlci5zY3JvbGxUb1Bvc2l0aW9uKGUucG9zaXRpb24pO1xyXG4gICAgICogICAgICAgfSBlbHNlIGlmIChlLmFuY2hvcikge1xyXG4gICAgICogICAgICAgICAvLyBhbmNob3IgbmF2aWdhdGlvblxyXG4gICAgICogICAgICAgICB2aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvQW5jaG9yKGUuYW5jaG9yKTtcclxuICAgICAqICAgICAgIH0gZWxzZSB7XHJcbiAgICAgKiAgICAgICAgIC8vIGZvcndhcmQgbmF2aWdhdGlvblxyXG4gICAgICogICAgICAgICB2aWV3cG9ydFNjcm9sbGVyLnNjcm9sbFRvUG9zaXRpb24oWzAsIDBdKTtcclxuICAgICAqICAgICAgIH1cclxuICAgICAqICAgICB9KTtcclxuICAgICAqICAgfVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb24/OiAnZGlzYWJsZWQnIHwgJ2VuYWJsZWQnIHwgJ3RvcCc7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gc2V0IHRvICdlbmFibGVkJywgc2Nyb2xscyB0byB0aGUgYW5jaG9yIGVsZW1lbnQgd2hlbiB0aGUgVVJMIGhhcyBhIGZyYWdtZW50LlxyXG4gICAgICogQW5jaG9yIHNjcm9sbGluZyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0LlxyXG4gICAgICpcclxuICAgICAqIEFuY2hvciBzY3JvbGxpbmcgZG9lcyBub3QgaGFwcGVuIG9uICdwb3BzdGF0ZScuIEluc3RlYWQsIHdlIHJlc3RvcmUgdGhlIHBvc2l0aW9uXHJcbiAgICAgKiB0aGF0IHdlIHN0b3JlZCBvciBzY3JvbGwgdG8gdGhlIHRvcC5cclxuICAgICAqL1xyXG4gICAgYW5jaG9yU2Nyb2xsaW5nPzogJ2Rpc2FibGVkJyB8ICdlbmFibGVkJztcclxuICAgIC8qKlxyXG4gICAgICogQ29uZmlndXJlcyB0aGUgc2Nyb2xsIG9mZnNldCB0aGUgcm91dGVyIHdpbGwgdXNlIHdoZW4gc2Nyb2xsaW5nIHRvIGFuIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogV2hlbiBnaXZlbiBhIHR1cGxlIHdpdGggeCBhbmQgeSBwb3NpdGlvbiB2YWx1ZSxcclxuICAgICAqIHRoZSByb3V0ZXIgdXNlcyB0aGF0IG9mZnNldCBlYWNoIHRpbWUgaXQgc2Nyb2xscy5cclxuICAgICAqIFdoZW4gZ2l2ZW4gYSBmdW5jdGlvbiwgdGhlIHJvdXRlciBpbnZva2VzIHRoZSBmdW5jdGlvbiBldmVyeSB0aW1lXHJcbiAgICAgKiBpdCByZXN0b3JlcyBzY3JvbGwgcG9zaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbE9mZnNldD86IFtudW1iZXIsIG51bWJlcl0gfCAoKCkgPT4gW251bWJlciwgbnVtYmVyXSk7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaG93IHRoZSByb3V0ZXIgbWVyZ2VzIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlZCBkYXRhIGZyb20gcGFyZW50IHRvIGNoaWxkXHJcbiAgICAgKiByb3V0ZXMuIEJ5IGRlZmF1bHQgKCdlbXB0eU9ubHknKSwgaW5oZXJpdHMgcGFyZW50IHBhcmFtZXRlcnMgb25seSBmb3JcclxuICAgICAqIHBhdGgtbGVzcyBvciBjb21wb25lbnQtbGVzcyByb3V0ZXMuXHJcbiAgICAgKiBTZXQgdG8gJ2Fsd2F5cycgdG8gZW5hYmxlIHVuY29uZGl0aW9uYWwgaW5oZXJpdGFuY2Ugb2YgcGFyZW50IHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k/OiAnZW1wdHlPbmx5JyB8ICdhbHdheXMnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGN1c3RvbSBoYW5kbGVyIGZvciBtYWxmb3JtZWQgVVJJIGVycm9ycy4gVGhlIGhhbmRsZXIgaXMgaW52b2tlZCB3aGVuIGBlbmNvZGVkVVJJYCBjb250YWluc1xyXG4gICAgICogaW52YWxpZCBjaGFyYWN0ZXIgc2VxdWVuY2VzLlxyXG4gICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gaXMgdG8gcmVkaXJlY3QgdG8gdGhlIHJvb3QgVVJMLCBkcm9wcGluZ1xyXG4gICAgICogYW55IHBhdGggb3IgcGFyYW1ldGVyIGluZm9ybWF0aW9uLiBUaGUgZnVuY3Rpb24gdGFrZXMgdGhyZWUgcGFyYW1ldGVyczpcclxuICAgICAqXHJcbiAgICAgKiAtIGAnVVJJRXJyb3InYCAtIEVycm9yIHRocm93biB3aGVuIHBhcnNpbmcgYSBiYWQgVVJMLlxyXG4gICAgICogLSBgJ1VybFNlcmlhbGl6ZXInYCAtIFVybFNlcmlhbGl6ZXIgdGhhdOKAmXMgY29uZmlndXJlZCB3aXRoIHRoZSByb3V0ZXIuXHJcbiAgICAgKiAtIGAndXJsJ2AgLSAgVGhlIG1hbGZvcm1lZCBVUkwgdGhhdCBjYXVzZWQgdGhlIFVSSUVycm9yXHJcbiAgICAgKiAqL1xyXG4gICAgbWFsZm9ybWVkVXJpRXJyb3JIYW5kbGVyPzogKGVycm9yOiBVUklFcnJvciwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgdXJsOiBzdHJpbmcpID0+IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hlbiB0aGUgcm91dGVyIHVwZGF0ZXMgdGhlIGJyb3dzZXIgVVJMLiBCeSBkZWZhdWx0ICgnZGVmZXJyZWQnKSxcclxuICAgICAqIHVwZGF0ZSBhZnRlciBzdWNjZXNzZnVsIG5hdmlnYXRpb24uXHJcbiAgICAgKiBTZXQgdG8gJ2VhZ2VyJyBpZiBwcmVmZXIgdG8gdXBkYXRlIHRoZSBVUkwgYXQgdGhlIGJlZ2lubmluZyBvZiBuYXZpZ2F0aW9uLlxyXG4gICAgICogVXBkYXRpbmcgdGhlIFVSTCBlYXJseSBhbGxvd3MgeW91IHRvIGhhbmRsZSBhIGZhaWx1cmUgb2YgbmF2aWdhdGlvbiBieVxyXG4gICAgICogc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlIHdpdGggdGhlIFVSTCB0aGF0IGZhaWxlZC5cclxuICAgICAqL1xyXG4gICAgdXJsVXBkYXRlU3RyYXRlZ3k/OiAnZGVmZXJyZWQnIHwgJ2VhZ2VyJztcclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBhIGJ1ZyBmaXggdGhhdCBjb3JyZWN0cyByZWxhdGl2ZSBsaW5rIHJlc29sdXRpb24gaW4gY29tcG9uZW50cyB3aXRoIGVtcHR5IHBhdGhzLlxyXG4gICAgICogRXhhbXBsZTpcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIGNvbnN0IHJvdXRlcyA9IFtcclxuICAgICAqICAge1xyXG4gICAgICogICAgIHBhdGg6ICcnLFxyXG4gICAgICogICAgIGNvbXBvbmVudDogQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICogICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgKiAgICAgICB7IHBhdGg6ICdhJywgY29tcG9uZW50OiBBQ29tcG9uZW50IH0sXHJcbiAgICAgKiAgICAgICB7IHBhdGg6ICdiJywgY29tcG9uZW50OiBCQ29tcG9uZW50IH0sXHJcbiAgICAgKiAgICAgXVxyXG4gICAgICogICB9XHJcbiAgICAgKiBdO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogRnJvbSB0aGUgYENvbnRhaW5lckNvbXBvbmVudGAsIHRoaXMgd2lsbCBub3Qgd29yazpcclxuICAgICAqXHJcbiAgICAgKiBgPGEgW3JvdXRlckxpbmtdPVwiWycuL2EnXVwiPkxpbmsgdG8gQTwvYT5gXHJcbiAgICAgKlxyXG4gICAgICogSG93ZXZlciwgdGhpcyB3aWxsIHdvcms6XHJcbiAgICAgKlxyXG4gICAgICogYDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vYSddXCI+TGluayB0byBBPC9hPmBcclxuICAgICAqXHJcbiAgICAgKiBJbiBvdGhlciB3b3JkcywgeW91J3JlIHJlcXVpcmVkIHRvIHVzZSBgLi4vYCByYXRoZXIgdGhhbiBgLi9gLiBUaGlzIGlzIGN1cnJlbnRseSB0aGUgZGVmYXVsdFxyXG4gICAgICogYmVoYXZpb3IuIFNldHRpbmcgdGhpcyBvcHRpb24gdG8gYGNvcnJlY3RlZGAgZW5hYmxlcyB0aGUgZml4LlxyXG4gICAgICovXHJcbiAgICByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uPzogJ2xlZ2FjeScgfCAnY29ycmVjdGVkJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRyaWdnZXJlZCBhdCB0aGUgZW5kIG9mIHRoZSBHdWFyZCBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHdWFyZHNDaGVja0VuZCBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHNob3VsZEFjdGl2YXRlOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBzaG91bGRBY3RpdmF0ZTogYm9vbGVhbik7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBHdWFyZCBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHdWFyZHNDaGVja1N0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dlZCB2YWx1ZXMgaW4gYW4gYEV4dHJhT3B0aW9uc2Agb2JqZWN0IHRoYXQgY29uZmlndXJlXHJcbiAqIHdoZW4gdGhlIHJvdXRlciBwZXJmb3JtcyB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIG9wZXJhdGlvbi5cclxuICpcclxuICogKiAnZW5hYmxlZCcgLSBUaGUgaW5pdGlhbCBuYXZpZ2F0aW9uIHN0YXJ0cyBiZWZvcmUgdGhlIHJvb3QgY29tcG9uZW50IGlzIGNyZWF0ZWQuXHJcbiAqIFRoZSBib290c3RyYXAgaXMgYmxvY2tlZCB1bnRpbCB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uIGlzIGNvbXBsZXRlLiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkXHJcbiAqIGZvciBbc2VydmVyLXNpZGUgcmVuZGVyaW5nXShndWlkZS91bml2ZXJzYWwpIHRvIHdvcmsuXHJcbiAqICogJ2Rpc2FibGVkJyAtIFRoZSBpbml0aWFsIG5hdmlnYXRpb24gaXMgbm90IHBlcmZvcm1lZC4gVGhlIGxvY2F0aW9uIGxpc3RlbmVyIGlzIHNldCB1cCBiZWZvcmVcclxuICogdGhlIHJvb3QgY29tcG9uZW50IGdldHMgY3JlYXRlZC4gVXNlIGlmIHRoZXJlIGlzIGEgcmVhc29uIHRvIGhhdmVcclxuICogbW9yZSBjb250cm9sIG92ZXIgd2hlbiB0aGUgcm91dGVyIHN0YXJ0cyBpdHMgaW5pdGlhbCBuYXZpZ2F0aW9uIGR1ZSB0byBzb21lIGNvbXBsZXhcclxuICogaW5pdGlhbGl6YXRpb24gbG9naWMuXHJcbiAqICogJ2xlZ2FjeV9lbmFibGVkJy0gKERlZmF1bHQsIGZvciBjb21wYXRpYmlsaXR5LikgVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBzdGFydHMgYWZ0ZXIgdGhlIHJvb3QgY29tcG9uZW50IGhhcyBiZWVuIGNyZWF0ZWQuXHJcbiAqIFRoZSBib290c3RyYXAgaXMgbm90IGJsb2NrZWQgdW50aWwgdGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBjb21wbGV0ZS4gQGRlcHJlY2F0ZWRcclxuICogKiAnbGVnYWN5X2Rpc2FibGVkJy0gVGhlIGluaXRpYWwgbmF2aWdhdGlvbiBpcyBub3QgcGVyZm9ybWVkLiBUaGUgbG9jYXRpb24gbGlzdGVuZXIgaXMgc2V0IHVwXHJcbiAqIGFmdGVyIHRoZSByb290IGNvbXBvbmVudCBnZXRzIGNyZWF0ZWQuIEBkZXByZWNhdGVkIHNpbmNlIHY0XHJcbiAqICogYHRydWVgIC0gc2FtZSBhcyAnbGVnYWN5X2VuYWJsZWQnLiBAZGVwcmVjYXRlZCBzaW5jZSB2NFxyXG4gKiAqIGBmYWxzZWAgLSBzYW1lIGFzICdsZWdhY3lfZGlzYWJsZWQnLiBAZGVwcmVjYXRlZCBzaW5jZSB2NFxyXG4gKlxyXG4gKiBUaGUgJ2xlZ2FjeV9lbmFibGVkJyBhbmQgJ2xlZ2FjeV9kaXNhYmxlZCcgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBuZXcgYXBwbGljYXRpb25zLlxyXG4gKlxyXG4gKiBAc2VlIGBmb3JSb290KClgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgSW5pdGlhbE5hdmlnYXRpb24gPSB0cnVlIHwgZmFsc2UgfCAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnIHwgJ2xlZ2FjeV9lbmFibGVkJyB8ICdsZWdhY3lfZGlzYWJsZWQnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtIGBwYXRoL3RvL2ZpbGUjZXhwb3J0TmFtZWAgdGhhdCBhY3RzIGFzIGEgVVJMIGZvciBhIHNldCBvZiByb3V0ZXMgdG8gbG9hZCxcclxuICogb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgc3VjaCBhIHNldC5cclxuICpcclxuICogVGhlIHN0cmluZyBmb3JtIG9mIGBMb2FkQ2hpbGRyZW5gIGlzIGRlcHJlY2F0ZWQgKHNlZSBgRGVwcmVjYXRlZExvYWRDaGlsZHJlbmApLiBUaGUgZnVuY3Rpb25cclxuICogZm9ybSAoYExvYWRDaGlsZHJlbkNhbGxiYWNrYCkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHNlZSBgUm91dGUjbG9hZENoaWxkcmVuYC5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMb2FkQ2hpbGRyZW4gPSBMb2FkQ2hpbGRyZW5DYWxsYmFjayB8IERlcHJlY2F0ZWRMb2FkQ2hpbGRyZW47XHJcblxyXG4vKipcclxuICpcclxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byByZXNvbHZlIGEgY29sbGVjdGlvbiBvZiBsYXp5LWxvYWRlZCByb3V0ZXMuXHJcbiAqXHJcbiAqIE9mdGVuIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZCB1c2luZyBhbiBFUyBkeW5hbWljIGBpbXBvcnQoKWAgZXhwcmVzc2lvbi4gRm9yIGV4YW1wbGU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICdsYXp5JyxcclxuICogICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9sYXp5LXJvdXRlL2xhenkubW9kdWxlJykudGhlbihtb2QgPT4gbW9kLkxhenlNb2R1bGUpLFxyXG4gKiB9XTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb24gX211c3RfIG1hdGNoIHRoZSBmb3JtIGFib3ZlOiBhbiBhcnJvdyBmdW5jdGlvbiBvZiB0aGUgZm9ybVxyXG4gKiBgKCkgPT4gaW1wb3J0KCcuLi4nKS50aGVuKG1vZCA9PiBtb2QuTU9EVUxFKWAuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI2xvYWRDaGlsZHJlbmAuXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTG9hZENoaWxkcmVuQ2FsbGJhY2sgPSAoKSA9PiBUeXBlPGFueT4gfCBOZ01vZHVsZUZhY3Rvcnk8YW55PiB8IE9ic2VydmFibGU8VHlwZTxhbnk+PiB8IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PGFueT4gfCBUeXBlPGFueT4gfCBhbnk+O1xyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IGEgbmF2aWdhdGlvbiBvcGVyYXRpb24uIFJldHJpZXZlIHRoZSBtb3N0IHJlY2VudFxyXG4gKiBuYXZpZ2F0aW9uIG9iamVjdCB3aXRoIHRoZSBgcm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKClgIG1ldGhvZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBOYXZpZ2F0aW9uID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgSUQgb2YgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbi5cclxuICAgICAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBVUkwgcGFzc2VkIGludG8gdGhlIGBSb3V0ZXIjbmF2aWdhdGVCeVVybCgpYCBjYWxsIGJlZm9yZSBuYXZpZ2F0aW9uLiBUaGlzIGlzXHJcbiAgICAgKiB0aGUgdmFsdWUgYmVmb3JlIHRoZSByb3V0ZXIgaGFzIHBhcnNlZCBvciBhcHBsaWVkIHJlZGlyZWN0cyB0byBpdC5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbFVybDogc3RyaW5nIHwgVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGluaXRpYWwgdGFyZ2V0IFVSTCBhZnRlciBiZWluZyBwYXJzZWQgd2l0aCBgVXJsU2VyaWFsaXplci5leHRyYWN0KClgLlxyXG4gICAgICovXHJcbiAgICBleHRyYWN0ZWRVcmw6IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBleHRyYWN0ZWQgVVJMIGFmdGVyIHJlZGlyZWN0cyBoYXZlIGJlZW4gYXBwbGllZC5cclxuICAgICAqIFRoaXMgVVJMIG1heSBub3QgYmUgYXZhaWxhYmxlIGltbWVkaWF0ZWx5LCB0aGVyZWZvcmUgdGhpcyBwcm9wZXJ0eSBjYW4gYmUgYHVuZGVmaW5lZGAuXHJcbiAgICAgKiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIHNldCBhZnRlciB0aGUgYFJvdXRlc1JlY29nbml6ZWRgIGV2ZW50IGZpcmVzLlxyXG4gICAgICovXHJcbiAgICBmaW5hbFVybD86IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgaG93IHRoaXMgbmF2aWdhdGlvbiB3YXMgdHJpZ2dlcmVkLlxyXG4gICAgICpcclxuICAgICAqICogJ2ltcGVyYXRpdmUnLS1UcmlnZ2VyZWQgYnkgYHJvdXRlci5uYXZpZ2F0ZUJ5VXJsYCBvciBgcm91dGVyLm5hdmlnYXRlYC5cclxuICAgICAqICogJ3BvcHN0YXRlJy0tVHJpZ2dlcmVkIGJ5IGEgcG9wc3RhdGUgZXZlbnQuXHJcbiAgICAgKiAqICdoYXNoY2hhbmdlJy0tVHJpZ2dlcmVkIGJ5IGEgaGFzaGNoYW5nZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgdHJpZ2dlcjogJ2ltcGVyYXRpdmUnIHwgJ3BvcHN0YXRlJyB8ICdoYXNoY2hhbmdlJztcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW9ucyB0aGF0IGNvbnRyb2xsZWQgdGhlIHN0cmF0ZWd5IHVzZWQgZm9yIHRoaXMgbmF2aWdhdGlvbi5cclxuICAgICAqIFNlZSBgTmF2aWdhdGlvbkV4dHJhc2AuXHJcbiAgICAgKi9cclxuICAgIGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByZXZpb3VzbHkgc3VjY2Vzc2Z1bCBgTmF2aWdhdGlvbmAgb2JqZWN0LiBPbmx5IG9uZSBwcmV2aW91cyBuYXZpZ2F0aW9uXHJcbiAgICAgKiBpcyBhdmFpbGFibGUsIHRoZXJlZm9yZSB0aGlzIHByZXZpb3VzIGBOYXZpZ2F0aW9uYCBvYmplY3QgaGFzIGEgYG51bGxgIHZhbHVlXHJcbiAgICAgKiBmb3IgaXRzIG93biBgcHJldmlvdXNOYXZpZ2F0aW9uYC5cclxuICAgICAqL1xyXG4gICAgcHJldmlvdXNOYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uIHwgbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gaXMgY2FuY2VsZWQsIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkuXHJcbiAqXHJcbiAqIFRoaXMgY2FuIGhhcHBlbiB3aGVuIGEgW3JvdXRlIGd1YXJkXShndWlkZS9yb3V0ZXIjbWlsZXN0b25lLTUtcm91dGUtZ3VhcmRzKVxyXG4gKiByZXR1cm5zIGBmYWxzZWAgb3IgaW5pdGlhdGVzIGEgcmVkaXJlY3QgYnkgcmV0dXJuaW5nIGEgYFVybFRyZWVgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYXZpZ2F0aW9uQ2FuY2VsIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYXNvbjogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYXNvbjogc3RyaW5nKTtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gZW5kcyBzdWNjZXNzZnVsbHkuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25FbmQgZXh0ZW5kcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmxBZnRlclJlZGlyZWN0czogc3RyaW5nKTtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgd2hlbiBhIG5hdmlnYXRpb24gZmFpbHMgZHVlIHRvIGFuIHVuZXhwZWN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25FcnJvciBleHRlbmRzIFJvdXRlckV2ZW50IHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBlcnJvcjogYW55O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgaWQ6IG51bWJlciwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsOiBzdHJpbmcsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGVycm9yOiBhbnkpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBPcHRpb25zIHRoYXQgbW9kaWZ5IHRoZSBuYXZpZ2F0aW9uIHN0cmF0ZWd5LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgTmF2aWdhdGlvbkV4dHJhcyB7XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyBhIHJvb3QgVVJJIHRvIHVzZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGZvbGxvd2luZyByb3V0ZSBjb25maWd1cmF0aW9uIHdoZXJlIHRoZSBwYXJlbnQgcm91dGVcclxuICAgICAqIGhhcyB0d28gY2hpbGRyZW4uXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiBbe1xyXG4gICAgKiAgIHBhdGg6ICdwYXJlbnQnLFxyXG4gICAgKiAgIGNvbXBvbmVudDogUGFyZW50Q29tcG9uZW50LFxyXG4gICAgKiAgIGNoaWxkcmVuOiBbe1xyXG4gICAgKiAgICAgcGF0aDogJ2xpc3QnLFxyXG4gICAgKiAgICAgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50XHJcbiAgICAqICAgfSx7XHJcbiAgICAqICAgICBwYXRoOiAnY2hpbGQnLFxyXG4gICAgKiAgICAgY29tcG9uZW50OiBDaGlsZENvbXBvbmVudFxyXG4gICAgKiAgIH1dXHJcbiAgICAqIH1dXHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIGBnbygpYCBmdW5jdGlvbiBuYXZpZ2F0ZXMgdG8gdGhlIGBsaXN0YCByb3V0ZSBieVxyXG4gICAgICogaW50ZXJwcmV0aW5nIHRoZSBkZXN0aW5hdGlvbiBVUkkgYXMgcmVsYXRpdmUgdG8gdGhlIGFjdGl2YXRlZCBgY2hpbGRgICByb3V0ZVxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogIEBDb21wb25lbnQoey4uLn0pXHJcbiAgICAgKiAgY2xhc3MgQ2hpbGRDb21wb25lbnQge1xyXG4gICAgKiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cclxuICAgICpcclxuICAgICogICAgZ28oKSB7XHJcbiAgICAqICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9saXN0J10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcclxuICAgICogICAgfVxyXG4gICAgKiAgfVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHJlbGF0aXZlVG8/OiBBY3RpdmF0ZWRSb3V0ZSB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgcXVlcnkgcGFyYW1ldGVycyB0byB0aGUgVVJMLlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gTmF2aWdhdGUgdG8gL3Jlc3VsdHM/cGFnZT0xXHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXN1bHRzJ10sIHsgcXVlcnlQYXJhbXM6IHsgcGFnZTogMSB9IH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UGFyYW1zPzogUGFyYW1zIHwgbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaGFzaCBmcmFnbWVudCBmb3IgdGhlIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIE5hdmlnYXRlIHRvIC9yZXN1bHRzI3RvcFxyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVzdWx0cyddLCB7IGZyYWdtZW50OiAndG9wJyB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBmcmFnbWVudD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogKipERVBSRUNBVEVEKio6IFVzZSBgcXVlcnlQYXJhbXNIYW5kbGluZzogXCJwcmVzZXJ2ZVwiYCBpbnN0ZWFkIHRvIHByZXNlcnZlXHJcbiAgICAgKiBxdWVyeSBwYXJhbWV0ZXJzIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHY0XHJcbiAgICAgKi9cclxuICAgIHByZXNlcnZlUXVlcnlQYXJhbXM/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgdG8gaGFuZGxlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIHJvdXRlciBsaW5rIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uLlxyXG4gICAgICogT25lIG9mOlxyXG4gICAgICogKiBgbWVyZ2VgIDogTWVyZ2UgbmV3IHdpdGggY3VycmVudCBwYXJhbWV0ZXJzLlxyXG4gICAgICogKiBgcHJlc2VydmVgIDogUHJlc2VydmUgY3VycmVudCBwYXJhbWV0ZXJzLlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICogLy8gZnJvbSAvcmVzdWx0cz9wYWdlPTEgdG8gL3ZpZXc/cGFnZT0xJnBhZ2U9MlxyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmlldyddLCB7IHF1ZXJ5UGFyYW1zOiB7IHBhZ2U6IDIgfSwgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6IFwibWVyZ2VcIiB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBxdWVyeVBhcmFtc0hhbmRsaW5nPzogUXVlcnlQYXJhbXNIYW5kbGluZyB8IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgcHJlc2VydmVzIHRoZSBVUkwgZnJhZ21lbnQgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIFByZXNlcnZlIGZyYWdtZW50IGZyb20gL3Jlc3VsdHMjdG9wIHRvIC92aWV3I3RvcFxyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmlldyddLCB7IHByZXNlcnZlRnJhZ21lbnQ6IHRydWUgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcHJlc2VydmVGcmFnbWVudD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gdHJ1ZSwgbmF2aWdhdGVzIHdpdGhvdXQgcHVzaGluZyBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnkuXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBOYXZpZ2F0ZSBzaWxlbnRseSB0byAvdmlld1xyXG4gICAgICogdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmlldyddLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBza2lwTG9jYXRpb25DaGFuZ2U/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHRydWUsIG5hdmlnYXRlcyB3aGlsZSByZXBsYWNpbmcgdGhlIGN1cnJlbnQgc3RhdGUgaW4gaGlzdG9yeS5cclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIC8vIE5hdmlnYXRlIHRvIC92aWV3XHJcbiAgICAgKiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92aWV3J10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICByZXBsYWNlVXJsPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogRGV2ZWxvcGVyLWRlZmluZWQgc3RhdGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFueSBuYXZpZ2F0aW9uLlxyXG4gICAgICogQWNjZXNzIHRoaXMgdmFsdWUgdGhyb3VnaCB0aGUgYE5hdmlnYXRpb24uZXh0cmFzYCBvYmplY3RcclxuICAgICAqIHJldHVybmVkIGZyb20gYHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpYCB3aGlsZSBhIG5hdmlnYXRpb24gaXMgZXhlY3V0aW5nLlxyXG4gICAgICpcclxuICAgICAqIEFmdGVyIGEgbmF2aWdhdGlvbiBjb21wbGV0ZXMsIHRoZSByb3V0ZXIgd3JpdGVzIGFuIG9iamVjdCBjb250YWluaW5nIHRoaXNcclxuICAgICAqIHZhbHVlIHRvZ2V0aGVyIHdpdGggYSBgbmF2aWdhdGlvbklkYCB0byBgaGlzdG9yeS5zdGF0ZWAuXHJcbiAgICAgKiBUaGUgdmFsdWUgaXMgd3JpdHRlbiB3aGVuIGBsb2NhdGlvbi5nbygpYCBvciBgbG9jYXRpb24ucmVwbGFjZVN0YXRlKClgXHJcbiAgICAgKiBpcyBjYWxsZWQgYmVmb3JlIGFjdGl2YXRpbmcgdGhpcyByb3V0ZS5cclxuICAgICAqXHJcbiAgICAgKiBOb3RlIHRoYXQgYGhpc3Rvcnkuc3RhdGVgIGRvZXMgbm90IHBhc3MgYW4gb2JqZWN0IGVxdWFsaXR5IHRlc3QgYmVjYXVzZVxyXG4gICAgICogdGhlIHJvdXRlciBhZGRzIHRoZSBgbmF2aWdhdGlvbklkYCBvbiBlYWNoIG5hdmlnYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRlPzoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIHdoZW4gYSBuYXZpZ2F0aW9uIHN0YXJ0cy5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvblN0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIHRoZSBjYWxsIG9yIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBuYXZpZ2F0aW9uLlxyXG4gICAgICogQW4gYGltcGVyYXRpdmVgIHRyaWdnZXIgaXMgYSBjYWxsIHRvIGByb3V0ZXIubmF2aWdhdGVCeVVybCgpYCBvciBgcm91dGVyLm5hdmlnYXRlKClgLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGlvblRyaWdnZXI/OiAnaW1wZXJhdGl2ZScgfCAncG9wc3RhdGUnIHwgJ2hhc2hjaGFuZ2UnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmF2aWdhdGlvbiBzdGF0ZSB0aGF0IHdhcyBwcmV2aW91c2x5IHN1cHBsaWVkIHRvIHRoZSBgcHVzaFN0YXRlYCBjYWxsLFxyXG4gICAgICogd2hlbiB0aGUgbmF2aWdhdGlvbiBpcyB0cmlnZ2VyZWQgYnkgYSBgcG9wc3RhdGVgIGV2ZW50LiBPdGhlcndpc2UgbnVsbC5cclxuICAgICAqXHJcbiAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGlzIGRlZmluZWQgYnkgYE5hdmlnYXRpb25FeHRyYXNgLCBhbmQgY29udGFpbnMgYW55XHJcbiAgICAgKiBkZXZlbG9wZXItZGVmaW5lZCBzdGF0ZSB2YWx1ZSwgYXMgd2VsbCBhcyBhIHVuaXF1ZSBJRCB0aGF0XHJcbiAgICAgKiB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIHRyYW5zaXRpb24vbmF2aWdhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBGcm9tIHRoZSBwZXJzcGVjdGl2ZSBvZiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIG5ldmVyIFwiZ29lcyBiYWNrXCIuXHJcbiAgICAgKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFjayBidXR0b24gaW4gdGhlIGJyb3dzZXIsXHJcbiAgICAgKiBhIG5ldyBuYXZpZ2F0aW9uIElEIGlzIGNyZWF0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogVXNlIHRoZSBJRCBpbiB0aGlzIHByZXZpb3VzLXN0YXRlIG9iamVjdCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gYSBuZXdseSBjcmVhdGVkXHJcbiAgICAgKiBzdGF0ZSBhbmQgb25lIHJldHVybmVkIHRvIGJ5IGEgYHBvcHN0YXRlYCBldmVudCwgc28gdGhhdCB5b3UgY2FuIHJlc3RvcmUgc29tZVxyXG4gICAgICogcmVtZW1iZXJlZCBzdGF0ZSwgc3VjaCBhcyBzY3JvbGwgcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICByZXN0b3JlZFN0YXRlPzoge1xyXG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XHJcbiAgICAgICAgbmF2aWdhdGlvbklkOiBudW1iZXI7XHJcbiAgICB9IHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIGlkOiBudW1iZXIsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybDogc3RyaW5nLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBuYXZpZ2F0aW9uVHJpZ2dlcj86ICdpbXBlcmF0aXZlJyB8ICdwb3BzdGF0ZScgfCAnaGFzaGNoYW5nZScsIFxyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlc3RvcmVkU3RhdGU/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgICAgICBuYXZpZ2F0aW9uSWQ6IG51bWJlcjtcclxuICAgIH0gfCBudWxsKTtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUHJvdmlkZXMgYSBwcmVsb2FkaW5nIHN0cmF0ZWd5IHRoYXQgZG9lcyBub3QgcHJlbG9hZCBhbnkgbW9kdWxlcy5cclxuICpcclxuICogVGhpcyBzdHJhdGVneSBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5vUHJlbG9hZGluZyBpbXBsZW1lbnRzIFByZWxvYWRpbmdTdHJhdGVneSB7XHJcbiAgICBwcmVsb2FkKHJvdXRlOiBSb3V0ZSwgZm46ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8YW55PjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0b3JlIGNvbnRleHR1YWwgaW5mb3JtYXRpb24gYWJvdXQgYSBgUm91dGVyT3V0bGV0YFxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXRDb250ZXh0IHtcclxuICAgIG91dGxldDogUm91dGVyT3V0bGV0IHwgbnVsbDtcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSB8IG51bGw7XHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHwgbnVsbDtcclxuICAgIGNoaWxkcmVuOiBDaGlsZHJlbk91dGxldENvbnRleHRzO1xyXG4gICAgYXR0YWNoUmVmOiBDb21wb25lbnRSZWY8YW55PiB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIG1hcCB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgcmVxdWlyZWQgYW5kIG9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICogc3BlY2lmaWMgdG8gYSByb3V0ZS5cclxuICogVGhlIG1hcCBzdXBwb3J0cyByZXRyaWV2aW5nIGEgc2luZ2xlIHZhbHVlIHdpdGggYGdldCgpYFxyXG4gKiBvciBtdWx0aXBsZSB2YWx1ZXMgd2l0aCBgZ2V0QWxsKClgLlxyXG4gKlxyXG4gKiBAc2VlIFtVUkxTZWFyY2hQYXJhbXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9VUkxTZWFyY2hQYXJhbXMpXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBQYXJhbU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFJlcG9ydHMgd2hldGhlciB0aGUgbWFwIGNvbnRhaW5zIGEgZ2l2ZW4gcGFyYW1ldGVyLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHBhcmFtZXRlciBuYW1lLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbWFwIGNvbnRhaW5zIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqL1xyXG4gICAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhIHNpbmdsZSB2YWx1ZSBmb3IgYSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcGFyYW1ldGVyIG5hbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBwYXJhbWV0ZXIncyBzaW5nbGUgdmFsdWUsXHJcbiAgICAgKiBvciB0aGUgZmlyc3QgdmFsdWUgaWYgdGhlIHBhcmFtZXRlciBoYXMgbXVsdGlwbGUgdmFsdWVzLFxyXG4gICAgICogb3IgYG51bGxgIHdoZW4gdGhlcmUgaXMgbm8gc3VjaCBwYXJhbWV0ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgbXVsdGlwbGUgdmFsdWVzIGZvciBhIHBhcmFtZXRlci5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwYXJhbWV0ZXIgbmFtZS5cclxuICAgICAqIEByZXR1cm4gQW4gYXJyYXkgY29udGFpbmluZyBvbmUgb3IgbW9yZSB2YWx1ZXMsXHJcbiAgICAgKiBvciBhbiBlbXB0eSBhcnJheSBpZiB0aGVyZSBpcyBubyBzdWNoIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldEFsbChuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuICAgIC8qKiBOYW1lcyBvZiB0aGUgcGFyYW1ldGVycyBpbiB0aGUgbWFwLiAqL1xyXG4gICAgcmVhZG9ubHkga2V5czogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgbWF0cml4IGFuZCBxdWVyeSBVUkwgcGFyYW1ldGVycy5cclxuICogQHNlZSBgY29udmVydFRvUGFyYW1NYXAoKWBcclxuICogQHNlZSBgUGFyYW1NYXBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUGFyYW1zID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBQcm92aWRlcyBhIHByZWxvYWRpbmcgc3RyYXRlZ3kgdGhhdCBwcmVsb2FkcyBhbGwgbW9kdWxlcyBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLlxyXG4gKlxyXG4gKiBgYGBcclxuICogUm91dGVNb2R1bGUuZm9yUm9vdChST1VURVMsIHtwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzfSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByZWxvYWRBbGxNb2R1bGVzIGltcGxlbWVudHMgUHJlbG9hZGluZ1N0cmF0ZWd5IHtcclxuICAgIHByZWxvYWQocm91dGU6IFJvdXRlLCBmbjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgcHJlbG9hZGluZyBzdHJhdGVneS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgUHJlbG9hZGluZ1N0cmF0ZWd5IHtcclxuICAgIGFic3RyYWN0IHByZWxvYWQocm91dGU6IFJvdXRlLCBmbjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+O1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHByaW1hcnkgcm91dGluZyBvdXRsZXQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFBSSU1BUllfT1VUTEVUID0gXCJwcmltYXJ5XCI7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGEgW0RJIHByb3ZpZGVyXShndWlkZS9nbG9zc2FyeSNwcm92aWRlcikgZm9yIGEgc2V0IG9mIHJvdXRlcy5cclxuICogQHBhcmFtIHJvdXRlcyBUaGUgcm91dGUgY29uZmlndXJhdGlvbiB0byBwcm92aWRlLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBgYGBcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKFJPVVRFUyldLFxyXG4gKiAgIHByb3ZpZGVyczogW3Byb3ZpZGVSb3V0ZXMoRVhUUkFfUk9VVEVTKV1cclxuICogfSlcclxuICogY2xhc3MgTXlOZ01vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcHJvdmlkZVJvdXRlcyhyb3V0ZXM6IFJvdXRlcyk6IGFueTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBIb3cgdG8gaGFuZGxlIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gYSByb3V0ZXIgbGluay5cclxuICogT25lIG9mOlxyXG4gKiAtIGBtZXJnZWAgOiBNZXJnZSBuZXcgd2l0aCBjdXJyZW50IHBhcmFtZXRlcnMuXHJcbiAqIC0gYHByZXNlcnZlYCA6IFByZXNlcnZlIGN1cnJlbnQgcGFyYW1ldGVycy5cclxuICpcclxuICogQHNlZSBgTmF2aWdhdGlvbkV4dHJhcyNxdWVyeVBhcmFtc0hhbmRsaW5nYFxyXG4gKiBAc2VlIGBSb3V0ZXJMaW5rYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFF1ZXJ5UGFyYW1zSGFuZGxpbmcgPSAnbWVyZ2UnIHwgJ3ByZXNlcnZlJyB8ICcnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBjbGFzc2VzIGNhbiBpbXBsZW1lbnQgdG8gYmUgYSBkYXRhIHByb3ZpZGVyLlxyXG4gKiBBIGRhdGEgcHJvdmlkZXIgY2xhc3MgY2FuIGJlIHVzZWQgd2l0aCB0aGUgcm91dGVyIHRvIHJlc29sdmUgZGF0YSBkdXJpbmcgbmF2aWdhdGlvbi5cclxuICogVGhlIGludGVyZmFjZSBkZWZpbmVzIGEgYHJlc29sdmUoKWAgbWV0aG9kIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIG5hdmlnYXRpb24gc3RhcnRzLlxyXG4gKiBUaGUgcm91dGVyIHdpbGwgdGhlbiB3YWl0IGZvciB0aGUgZGF0YSB0byBiZSByZXNvbHZlZCBiZWZvcmUgdGhlIHJvdXRlIGlzIGZpbmFsbHkgYWN0aXZhdGVkLlxyXG4gKlxyXG4gKiBgYGBcclxuICogQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuICogZXhwb3J0IGNsYXNzIEhlcm9SZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8SGVybz4ge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogSGVyb1NlcnZpY2UpIHt9XHJcbiAqXHJcbiAqICAgcmVzb2x2ZShcclxuICogICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gKiAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICogICApOiBPYnNlcnZhYmxlPGFueT58UHJvbWlzZTxhbnk+fGFueSB7XHJcbiAqICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEhlcm8ocm91dGUucGFyYW1NYXAuZ2V0KCdpZCcpKTtcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogQE5nTW9kdWxlKHtcclxuICogICBpbXBvcnRzOiBbXHJcbiAqICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAqICAgICAgIHtcclxuICogICAgICAgICBwYXRoOiAnZGV0YWlsLzppZCcsXHJcbiAqICAgICAgICAgY29tcG9uZW50OiBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gKiAgICAgICAgIHJlc29sdmU6IHtcclxuICogICAgICAgICAgIGhlcm86IEhlcm9SZXNvbHZlclxyXG4gKiAgICAgICAgIH1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGFsdGVybmF0aXZlbHkgcHJvdmlkZSBhIGZ1bmN0aW9uIHdpdGggdGhlIGByZXNvbHZlYCBzaWduYXR1cmU6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBleHBvcnQgY29uc3QgbXlIZXJvOiBIZXJvID0ge1xyXG4gKiAgIC8vIC4uLlxyXG4gKiB9XHJcbiAqXHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICAgaW1wb3J0czogW1xyXG4gKiAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gKiAgICAgICB7XHJcbiAqICAgICAgICAgcGF0aDogJ2RldGFpbC86aWQnLFxyXG4gKiAgICAgICAgIGNvbXBvbmVudDogSGVyb0NvbXBvbmVudCxcclxuICogICAgICAgICByZXNvbHZlOiB7XHJcbiAqICAgICAgICAgICBoZXJvOiAnaGVyb1Jlc29sdmVyJ1xyXG4gKiAgICAgICAgIH1cclxuICogICAgICAgfVxyXG4gKiAgICAgXSlcclxuICogICBdLFxyXG4gKiAgIHByb3ZpZGVyczogW1xyXG4gKiAgICAge1xyXG4gKiAgICAgICBwcm92aWRlOiAnaGVyb1Jlc29sdmVyJyxcclxuICogICAgICAgdXNlVmFsdWU6IChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpID0+IG15SGVyb1xyXG4gKiAgICAgfVxyXG4gKiAgIF1cclxuICogfSlcclxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFJlc29sdmU8VD4ge1xyXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFQ+IHwgUHJvbWlzZTxUPiB8IFQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBSZXByZXNlbnRzIHRoZSByZXNvbHZlZCBkYXRhIGFzc29jaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgcm91dGUuXHJcbiAqXHJcbiAqIEBzZWUgYFJvdXRlI3Jlc29sdmVgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFJlc29sdmVEYXRhID0ge1xyXG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYXQgdGhlIGVuZCBvZiB0aGUgUmVzb2x2ZSBwaGFzZSBvZiByb3V0aW5nLlxyXG4gKiBAc2VlIGBSZXNvbHZlU3RhcnRgLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXNvbHZlRW5kIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGF0IHRoZSB0aGUgc3RhcnQgb2YgdGhlIFJlc29sdmUgcGhhc2Ugb2Ygcm91dGluZy5cclxuICpcclxuICogUnVucyBpbiB0aGUgXCJyZXNvbHZlXCIgcGhhc2Ugd2hldGhlciBvciBub3QgdGhlcmUgaXMgYW55dGhpbmcgdG8gcmVzb2x2ZS5cclxuICogSW4gZnV0dXJlLCBtYXkgY2hhbmdlIHRvIG9ubHkgcnVuIHdoZW4gdGhlcmUgYXJlIHRoaW5ncyB0byBiZSByZXNvbHZlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUmVzb2x2ZVN0YXJ0IGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb25maWd1cmF0aW9uIG9iamVjdCB0aGF0IGRlZmluZXMgYSBzaW5nbGUgcm91dGUuXHJcbiAqIEEgc2V0IG9mIHJvdXRlcyBhcmUgY29sbGVjdGVkIGluIGEgYFJvdXRlc2AgYXJyYXkgdG8gZGVmaW5lIGEgYFJvdXRlcmAgY29uZmlndXJhdGlvbi5cclxuICogVGhlIHJvdXRlciBhdHRlbXB0cyB0byBtYXRjaCBzZWdtZW50cyBvZiBhIGdpdmVuIFVSTCBhZ2FpbnN0IGVhY2ggcm91dGUsXHJcbiAqIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZGVmaW5lZCBpbiB0aGlzIG9iamVjdC5cclxuICpcclxuICogU3VwcG9ydHMgc3RhdGljLCBwYXJhbWV0ZXJpemVkLCByZWRpcmVjdCwgYW5kIHdpbGRjYXJkIHJvdXRlcywgYXMgd2VsbCBhc1xyXG4gKiBjdXN0b20gcm91dGUgZGF0YSBhbmQgcmVzb2x2ZSBtZXRob2RzLlxyXG4gKlxyXG4gKiBGb3IgZGV0YWlsZWQgdXNhZ2UgaW5mb3JtYXRpb24sIHNlZSB0aGUgW1JvdXRpbmcgR3VpZGVdKGd1aWRlL3JvdXRlcikuXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBTaW1wbGUgQ29uZmlndXJhdGlvblxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIHNwZWNpZmllcyB0aGF0IHdoZW4gbmF2aWdhdGluZyB0bywgZm9yIGV4YW1wbGUsXHJcbiAqIGAvdGVhbS8xMS91c2VyL2JvYmAsIHRoZSByb3V0ZXIgY3JlYXRlcyB0aGUgJ1RlYW0nIGNvbXBvbmVudFxyXG4gKiB3aXRoIHRoZSAnVXNlcicgY2hpbGQgY29tcG9uZW50IGluIGl0LlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAndGVhbS86aWQnLFxyXG4gICogIGNvbXBvbmVudDogVGVhbSxcclxuICogICBjaGlsZHJlbjogW3tcclxuICogICAgIHBhdGg6ICd1c2VyLzpuYW1lJyxcclxuICogICAgIGNvbXBvbmVudDogVXNlclxyXG4gKiAgIH1dXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgTXVsdGlwbGUgT3V0bGV0c1xyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHJvdXRlIGNyZWF0ZXMgc2libGluZyBjb21wb25lbnRzIHdpdGggbXVsdGlwbGUgb3V0bGV0cy5cclxuICogV2hlbiBuYXZpZ2F0aW5nIHRvIGAvdGVhbS8xMShhdXg6Y2hhdC9qaW0pYCwgdGhlIHJvdXRlciBjcmVhdGVzIHRoZSAnVGVhbScgY29tcG9uZW50IG5leHQgdG9cclxuICogdGhlICdDaGF0JyBjb21wb25lbnQuIFRoZSAnQ2hhdCcgY29tcG9uZW50IGlzIHBsYWNlZCBpbnRvIHRoZSAnYXV4JyBvdXRsZXQuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgY29tcG9uZW50OiBUZWFtXHJcbiAqIH0sIHtcclxuICogICBwYXRoOiAnY2hhdC86dXNlcicsXHJcbiAqICAgY29tcG9uZW50OiBDaGF0XHJcbiAqICAgb3V0bGV0OiAnYXV4J1xyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFdpbGQgQ2FyZHNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyByb3V0ZSB1c2VzIHdpbGQtY2FyZCBub3RhdGlvbiB0byBzcGVjaWZ5IGEgY29tcG9uZW50XHJcbiAqIHRoYXQgaXMgYWx3YXlzIGluc3RhbnRpYXRlZCByZWdhcmRsZXNzIG9mIHdoZXJlIHlvdSBuYXZpZ2F0ZSB0by5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJyoqJyxcclxuICogICBjb21wb25lbnQ6IFdpbGRjYXJkQ29tcG9uZW50XHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgUmVkaXJlY3RzXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgcm91dGUgdXNlcyB0aGUgYHJlZGlyZWN0VG9gIHByb3BlcnR5IHRvIGlnbm9yZSBhIHNlZ21lbnQgb2ZcclxuICogYSBnaXZlbiBVUkwgd2hlbiBsb29raW5nIGZvciBhIGNoaWxkIHBhdGguXHJcbiAqXHJcbiAqIFdoZW4gbmF2aWdhdGluZyB0byAnL3RlYW0vMTEvbGVnYWN5L3VzZXIvamltJywgdGhlIHJvdXRlciBjaGFuZ2VzIHRoZSBVUkwgc2VnbWVudFxyXG4gKiAnL3RlYW0vMTEvbGVnYWN5L3VzZXIvamltJyB0byAnL3RlYW0vMTEvdXNlci9qaW0nLCBhbmQgdGhlbiBpbnN0YW50aWF0ZXNcclxuICogdGhlIFRlYW0gY29tcG9uZW50IHdpdGggdGhlIFVzZXIgY2hpbGQgY29tcG9uZW50IGluIGl0LlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICBwYXRoOiAndGVhbS86aWQnLFxyXG4gKiAgIGNvbXBvbmVudDogVGVhbSxcclxuICogICBjaGlsZHJlbjogW3tcclxuICogICAgIHBhdGg6ICdsZWdhY3kvdXNlci86bmFtZScsXHJcbiAqICAgICByZWRpcmVjdFRvOiAndXNlci86bmFtZSdcclxuICogICB9LCB7XHJcbiAqICAgICBwYXRoOiAndXNlci86bmFtZScsXHJcbiAqICAgICBjb21wb25lbnQ6IFVzZXJcclxuICogICB9XVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHJlZGlyZWN0IHBhdGggY2FuIGJlIHJlbGF0aXZlLCBhcyBzaG93biBpbiB0aGlzIGV4YW1wbGUsIG9yIGFic29sdXRlLlxyXG4gKiBJZiB3ZSBjaGFuZ2UgdGhlIGByZWRpcmVjdFRvYCB2YWx1ZSBpbiB0aGUgZXhhbXBsZSB0byB0aGUgYWJzb2x1dGUgVVJMIHNlZ21lbnQgJy91c2VyLzpuYW1lJyxcclxuICogdGhlIHJlc3VsdCBVUkwgaXMgYWxzbyBhYnNvbHV0ZSwgJy91c2VyL2ppbScuXHJcblxyXG4gKiAjIyMgRW1wdHkgUGF0aFxyXG4gKlxyXG4gKiBFbXB0eS1wYXRoIHJvdXRlIGNvbmZpZ3VyYXRpb25zIGNhbiBiZSB1c2VkIHRvIGluc3RhbnRpYXRlIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgJ2NvbnN1bWUnXHJcbiAqIGFueSBVUkwgc2VnbWVudHMuXHJcbiAqXHJcbiAqIEluIHRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiwgd2hlbiBuYXZpZ2F0aW5nIHRvXHJcbiAqIGAvdGVhbS8xMWAsIHRoZSByb3V0ZXIgaW5zdGFudGlhdGVzIHRoZSAnQWxsVXNlcnMnIGNvbXBvbmVudC5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ3RlYW0vOmlkJyxcclxuICogICBjb21wb25lbnQ6IFRlYW0sXHJcbiAqICAgY2hpbGRyZW46IFt7XHJcbiAqICAgICBwYXRoOiAnJyxcclxuICogICAgIGNvbXBvbmVudDogQWxsVXNlcnNcclxuICogICB9LCB7XHJcbiAqICAgICBwYXRoOiAndXNlci86bmFtZScsXHJcbiAqICAgICBjb21wb25lbnQ6IFVzZXJcclxuICogICB9XVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogRW1wdHktcGF0aCByb3V0ZXMgY2FuIGhhdmUgY2hpbGRyZW4uIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgd2hlbiBuYXZpZ2F0aW5nXHJcbiAqIHRvIGAvdGVhbS8xMS91c2VyL2ppbWAsIHRoZSByb3V0ZXIgaW5zdGFudGlhdGVzIHRoZSB3cmFwcGVyIGNvbXBvbmVudCB3aXRoXHJcbiAqIHRoZSB1c2VyIGNvbXBvbmVudCBpbiBpdC5cclxuICpcclxuICogTm90ZSB0aGF0IGFuIGVtcHR5IHBhdGggcm91dGUgaW5oZXJpdHMgaXRzIHBhcmVudCdzIHBhcmFtZXRlcnMgYW5kIGRhdGEuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICd0ZWFtLzppZCcsXHJcbiAqICAgY29tcG9uZW50OiBUZWFtLFxyXG4gKiAgIGNoaWxkcmVuOiBbe1xyXG4gKiAgICAgcGF0aDogJycsXHJcbiAqICAgICBjb21wb25lbnQ6IFdyYXBwZXJDbXAsXHJcbiAqICAgICBjaGlsZHJlbjogW3tcclxuICogICAgICAgcGF0aDogJ3VzZXIvOm5hbWUnLFxyXG4gKiAgICAgICBjb21wb25lbnQ6IFVzZXJcclxuICogICAgIH1dXHJcbiAqICAgfV1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBNYXRjaGluZyBTdHJhdGVneVxyXG4gKlxyXG4gKiBUaGUgZGVmYXVsdCBwYXRoLW1hdGNoIHN0cmF0ZWd5IGlzICdwcmVmaXgnLCB3aGljaCBtZWFucyB0aGF0IHRoZSByb3V0ZXJcclxuICogY2hlY2tzIFVSTCBlbGVtZW50cyBmcm9tIHRoZSBsZWZ0IHRvIHNlZSBpZiB0aGUgVVJMIG1hdGNoZXMgYSBzcGVjaWZpZWQgcGF0aC5cclxuICogRm9yIGV4YW1wbGUsICcvdGVhbS8xMS91c2VyJyBtYXRjaGVzICd0ZWFtLzppZCcuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBbe1xyXG4gKiAgIHBhdGg6ICcnLFxyXG4gKiAgIHBhdGhNYXRjaDogJ3ByZWZpeCcsIC8vZGVmYXVsdFxyXG4gKiAgIHJlZGlyZWN0VG86ICdtYWluJ1xyXG4gKiB9LCB7XHJcbiAqICAgcGF0aDogJ21haW4nLFxyXG4gKiAgIGNvbXBvbmVudDogTWFpblxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBzcGVjaWZ5IHRoZSBwYXRoLW1hdGNoIHN0cmF0ZWd5ICdmdWxsJyB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcGF0aFxyXG4gKiBjb3ZlcnMgdGhlIHdob2xlIHVuY29uc3VtZWQgVVJMLiBJdCBpcyBpbXBvcnRhbnQgdG8gZG8gdGhpcyB3aGVuIHJlZGlyZWN0aW5nXHJcbiAqIGVtcHR5LXBhdGggcm91dGVzLiBPdGhlcndpc2UsIGJlY2F1c2UgYW4gZW1wdHkgcGF0aCBpcyBhIHByZWZpeCBvZiBhbnkgVVJMLFxyXG4gKiB0aGUgcm91dGVyIHdvdWxkIGFwcGx5IHRoZSByZWRpcmVjdCBldmVuIHdoZW4gbmF2aWdhdGluZyB0byB0aGUgcmVkaXJlY3QgZGVzdGluYXRpb24sXHJcbiAqIGNyZWF0aW5nIGFuIGVuZGxlc3MgbG9vcC5cclxuICpcclxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCBzdXBwbHlpbmcgdGhlICdmdWxsJyBgcGF0aE1hdGNoYCBzdHJhdGVneSBlbnN1cmVzXHJcbiAqIHRoYXQgdGhlIHJvdXRlciBhcHBsaWVzIHRoZSByZWRpcmVjdCBpZiBhbmQgb25seSBpZiBuYXZpZ2F0aW5nIHRvICcvJy5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJycsXHJcbiAqICAgcGF0aE1hdGNoOiAnZnVsbCcsXHJcbiAqICAgcmVkaXJlY3RUbzogJ21haW4nXHJcbiAqIH0sIHtcclxuICogICBwYXRoOiAnbWFpbicsXHJcbiAqICAgY29tcG9uZW50OiBNYWluXHJcbiAqIH1dXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQ29tcG9uZW50bGVzcyBSb3V0ZXNcclxuICpcclxuICogWW91IGNhbiBzaGFyZSBwYXJhbWV0ZXJzIGJldHdlZW4gc2libGluZyBjb21wb25lbnRzLlxyXG4gKiBGb3IgZXhhbXBsZSwgc3VwcG9zZSB0aGF0IHR3byBzaWJsaW5nIGNvbXBvbmVudHMgc2hvdWxkIGdvIG5leHQgdG8gZWFjaCBvdGhlcixcclxuICogYW5kIGJvdGggb2YgdGhlbSByZXF1aXJlIGFuIElEIHBhcmFtZXRlci4gWW91IGNhbiBhY2NvbXBsaXNoIHRoaXMgdXNpbmcgYSByb3V0ZVxyXG4gKiB0aGF0IGRvZXMgbm90IHNwZWNpZnkgYSBjb21wb25lbnQgYXQgdGhlIHRvcCBsZXZlbC5cclxuICpcclxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCAnTWFpbkNoaWxkJyBhbmQgJ0F1eENoaWxkJyBhcmUgc2libGluZ3MuXHJcbiAqIFdoZW4gbmF2aWdhdGluZyB0byAncGFyZW50LzEwLyhhLy9hdXg6YiknLCB0aGUgcm91dGUgaW5zdGFudGlhdGVzXHJcbiAqIHRoZSBtYWluIGNoaWxkIGFuZCBhdXggY2hpbGQgY29tcG9uZW50cyBuZXh0IHRvIGVhY2ggb3RoZXIuXHJcbiAqIEZvciB0aGlzIHRvIHdvcmssIHRoZSBhcHBsaWNhdGlvbiBjb21wb25lbnQgbXVzdCBoYXZlIHRoZSBwcmltYXJ5IGFuZCBhdXggb3V0bGV0cyBkZWZpbmVkLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICAgcGF0aDogJ3BhcmVudC86aWQnLFxyXG4gKiAgICBjaGlsZHJlbjogW1xyXG4gKiAgICAgIHsgcGF0aDogJ2EnLCBjb21wb25lbnQ6IE1haW5DaGlsZCB9LFxyXG4gKiAgICAgIHsgcGF0aDogJ2InLCBjb21wb25lbnQ6IEF1eENoaWxkLCBvdXRsZXQ6ICdhdXgnIH1cclxuICogICAgXVxyXG4gKiB9XVxyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHJvdXRlciBtZXJnZXMgdGhlIHBhcmFtZXRlcnMsIGRhdGEsIGFuZCByZXNvbHZlIG9mIHRoZSBjb21wb25lbnRsZXNzXHJcbiAqIHBhcmVudCBpbnRvIHRoZSBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZSBvZiB0aGUgY2hpbGRyZW4uXHJcbiAqXHJcbiAqIFRoaXMgaXMgZXNwZWNpYWxseSB1c2VmdWwgd2hlbiBjaGlsZCBjb21wb25lbnRzIGFyZSBkZWZpbmVkXHJcbiAqIHdpdGggYW4gZW1wdHkgcGF0aCBzdHJpbmcsIGFzIGluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZS5cclxuICogV2l0aCB0aGlzIGNvbmZpZ3VyYXRpb24sIG5hdmlnYXRpbmcgdG8gJy9wYXJlbnQvMTAnIGNyZWF0ZXNcclxuICogdGhlIG1haW4gY2hpbGQgYW5kIGF1eCBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBgYGBcclxuICogW3tcclxuICogICAgcGF0aDogJ3BhcmVudC86aWQnLFxyXG4gKiAgICBjaGlsZHJlbjogW1xyXG4gKiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWFpbkNoaWxkIH0sXHJcbiAqICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBBdXhDaGlsZCwgb3V0bGV0OiAnYXV4JyB9XHJcbiAqICAgIF1cclxuICogfV1cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBMYXp5IExvYWRpbmdcclxuICpcclxuICogTGF6eSBsb2FkaW5nIHNwZWVkcyB1cCBhcHBsaWNhdGlvbiBsb2FkIHRpbWUgYnkgc3BsaXR0aW5nIHRoZSBhcHBsaWNhdGlvblxyXG4gKiBpbnRvIG11bHRpcGxlIGJ1bmRsZXMgYW5kIGxvYWRpbmcgdGhlbSBvbiBkZW1hbmQuXHJcbiAqIFRvIHVzZSBsYXp5IGxvYWRpbmcsIHByb3ZpZGUgdGhlIGBsb2FkQ2hpbGRyZW5gIHByb3BlcnR5ICBpbnN0ZWFkIG9mIHRoZSBgY2hpbGRyZW5gIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBHaXZlbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgcm91dGUsIHRoZSByb3V0ZXIgd2lsbCBsYXp5IGxvYWRcclxuICogdGhlIGFzc29jaWF0ZWQgbW9kdWxlIG9uIGRlbWFuZCB1c2luZyB0aGUgYnJvd3NlciBuYXRpdmUgaW1wb3J0IHN5c3RlbS5cclxuICpcclxuICogYGBgXHJcbiAqIFt7XHJcbiAqICAgcGF0aDogJ2xhenknLFxyXG4gKiAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2xhenktcm91dGUvbGF6eS5tb2R1bGUnKS50aGVuKG1vZCA9PiBtb2QuTGF6eU1vZHVsZSksXHJcbiAqIH1dO1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFJvdXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBhdGggdG8gbWF0Y2ggYWdhaW5zdC4gQ2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBhIGN1c3RvbSBgbWF0Y2hlcmAgZnVuY3Rpb24uXHJcbiAgICAgKiBBIFVSTCBzdHJpbmcgdGhhdCB1c2VzIHJvdXRlciBtYXRjaGluZyBub3RhdGlvbi5cclxuICAgICAqIENhbiBiZSBhIHdpbGQgY2FyZCAoYCoqYCkgdGhhdCBtYXRjaGVzIGFueSBVUkwgKHNlZSBVc2FnZSBOb3RlcyBiZWxvdykuXHJcbiAgICAgKiBEZWZhdWx0IGlzIFwiL1wiICh0aGUgcm9vdCBwYXRoKS5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHBhdGg/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwYXRoLW1hdGNoaW5nIHN0cmF0ZWd5LCBvbmUgb2YgJ3ByZWZpeCcgb3IgJ2Z1bGwnLlxyXG4gICAgICogRGVmYXVsdCBpcyAncHJlZml4Jy5cclxuICAgICAqXHJcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgcm91dGVyIGNoZWNrcyBVUkwgZWxlbWVudHMgZnJvbSB0aGUgbGVmdCB0byBzZWUgaWYgdGhlIFVSTFxyXG4gICAgICogbWF0Y2hlcyBhIGdpdmVuICBwYXRoLCBhbmQgc3RvcHMgd2hlbiB0aGVyZSBpcyBhIG1hdGNoLiBGb3IgZXhhbXBsZSxcclxuICAgICAqICcvdGVhbS8xMS91c2VyJyBtYXRjaGVzICd0ZWFtLzppZCcuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHBhdGgtbWF0Y2ggc3RyYXRlZ3kgJ2Z1bGwnIG1hdGNoZXMgYWdhaW5zdCB0aGUgZW50aXJlIFVSTC5cclxuICAgICAqIEl0IGlzIGltcG9ydGFudCB0byBkbyB0aGlzIHdoZW4gcmVkaXJlY3RpbmcgZW1wdHktcGF0aCByb3V0ZXMuXHJcbiAgICAgKiBPdGhlcndpc2UsIGJlY2F1c2UgYW4gZW1wdHkgcGF0aCBpcyBhIHByZWZpeCBvZiBhbnkgVVJMLFxyXG4gICAgICogdGhlIHJvdXRlciB3b3VsZCBhcHBseSB0aGUgcmVkaXJlY3QgZXZlbiB3aGVuIG5hdmlnYXRpbmdcclxuICAgICAqIHRvIHRoZSByZWRpcmVjdCBkZXN0aW5hdGlvbiwgY3JlYXRpbmcgYW4gZW5kbGVzcyBsb29wLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcGF0aE1hdGNoPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIGN1c3RvbSBVUkwtbWF0Y2hpbmcgZnVuY3Rpb24uIENhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggYHBhdGhgLlxyXG4gICAgICovXHJcbiAgICBtYXRjaGVyPzogVXJsTWF0Y2hlcjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCB0byBpbnN0YW50aWF0ZSB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuXHJcbiAgICAgKiBDYW4gYmUgZW1wdHkgaWYgY2hpbGQgcm91dGVzIHNwZWNpZnkgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgY29tcG9uZW50PzogVHlwZTxhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIFVSTCB0byB3aGljaCB0byByZWRpcmVjdCB3aGVuIGEgdGhlIHBhdGggbWF0Y2hlcy5cclxuICAgICAqIEFic29sdXRlIGlmIHRoZSBVUkwgYmVnaW5zIHdpdGggYSBzbGFzaCAoLyksIG90aGVyd2lzZSByZWxhdGl2ZSB0byB0aGUgcGF0aCBVUkwuXHJcbiAgICAgKiBXaGVuIG5vdCBwcmVzZW50LCByb3V0ZXIgZG9lcyBub3QgcmVkaXJlY3QuXHJcbiAgICAgKi9cclxuICAgIHJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgYSBgUm91dGVyT3V0bGV0YCBvYmplY3Qgd2hlcmUgdGhlIGNvbXBvbmVudCBjYW4gYmUgcGxhY2VkXHJcbiAgICAgKiB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuXHJcbiAgICAgKi9cclxuICAgIG91dGxldD86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQW4gYXJyYXkgb2YgZGVwZW5kZW5jeS1pbmplY3Rpb24gdG9rZW5zIHVzZWQgdG8gbG9vayB1cCBgQ2FuQWN0aXZhdGUoKWBcclxuICAgICAqIGhhbmRsZXJzLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvXHJcbiAgICAgKiBhY3RpdmF0ZSB0aGUgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBhbnkgdXNlciBjYW4gYWN0aXZhdGUuXHJcbiAgICAgKi9cclxuICAgIGNhbkFjdGl2YXRlPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgYENhbkFjdGl2YXRlQ2hpbGQoKWAgaGFuZGxlcnMsXHJcbiAgICAgKiBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvIGFjdGl2YXRlXHJcbiAgICAgKiBhIGNoaWxkIG9mIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBhY3RpdmF0ZSBhIGNoaWxkLlxyXG4gICAgICovXHJcbiAgICBjYW5BY3RpdmF0ZUNoaWxkPzogYW55W107XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIERJIHRva2VucyB1c2VkIHRvIGxvb2sgdXAgYENhbkRlYWN0aXZhdGUoKWBcclxuICAgICAqIGhhbmRsZXJzLCBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvXHJcbiAgICAgKiBkZWFjdGl2YXRlIHRoZSBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGFueSB1c2VyIGNhbiBkZWFjdGl2YXRlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY2FuRGVhY3RpdmF0ZT86IGFueVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBESSB0b2tlbnMgdXNlZCB0byBsb29rIHVwIGBDYW5Mb2FkKClgXHJcbiAgICAgKiBoYW5kbGVycywgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWxsb3dlZCB0b1xyXG4gICAgICogbG9hZCB0aGUgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBhbnkgdXNlciBjYW4gbG9hZC5cclxuICAgICAqL1xyXG4gICAgY2FuTG9hZD86IGFueVtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpdGlvbmFsIGRldmVsb3Blci1kZWZpbmVkIGRhdGEgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCB2aWFcclxuICAgICAqIGBBY3RpdmF0ZWRSb3V0ZWAuIEJ5IGRlZmF1bHQsIG5vIGFkZGl0aW9uYWwgZGF0YSBpcyBwYXNzZWQuXHJcbiAgICAgKi9cclxuICAgIGRhdGE/OiBEYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBIG1hcCBvZiBESSB0b2tlbnMgdXNlZCB0byBsb29rIHVwIGRhdGEgcmVzb2x2ZXJzLiBTZWUgYFJlc29sdmVgLlxyXG4gICAgICovXHJcbiAgICByZXNvbHZlPzogUmVzb2x2ZURhdGE7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IG9mIGNoaWxkIGBSb3V0ZWAgb2JqZWN0cyB0aGF0IHNwZWNpZmllcyBhIG5lc3RlZCByb3V0ZVxyXG4gICAgICogY29uZmlndXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW4/OiBSb3V0ZXM7XHJcbiAgICAvKipcclxuICAgICAqIEEgYExvYWRDaGlsZHJlbmAgb2JqZWN0IHNwZWNpZnlpbmcgbGF6eS1sb2FkZWQgY2hpbGQgcm91dGVzLlxyXG4gICAgICovXHJcbiAgICBsb2FkQ2hpbGRyZW4/OiBMb2FkQ2hpbGRyZW47XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hlbiBndWFyZHMgYW5kIHJlc29sdmVycyB3aWxsIGJlIHJ1bi4gT25lIG9mXHJcbiAgICAgKiAtIGBwYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlYCA6IFJ1biB3aGVuIHF1ZXJ5IHBhcmFtZXRlcnMgY2hhbmdlLlxyXG4gICAgICogLSBgYWx3YXlzYCA6IFJ1biBvbiBldmVyeSBleGVjdXRpb24uXHJcbiAgICAgKiBCeSBkZWZhdWx0LCBndWFyZHMgYW5kIHJlc29sdmVycyBydW4gb25seSB3aGVuIHRoZSBtYXRyaXhcclxuICAgICAqIHBhcmFtZXRlcnMgb2YgdGhlIHJvdXRlIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgcnVuR3VhcmRzQW5kUmVzb2x2ZXJzPzogUnVuR3VhcmRzQW5kUmVzb2x2ZXJzO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIHdoZW4gYSByb3V0ZSBoYXMgYmVlbiBsYXp5IGxvYWRlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVDb25maWdMb2FkRW5kIHtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGU7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZTogUm91dGUpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gZXZlbnQgdHJpZ2dlcmVkIGJlZm9yZSBsYXp5IGxvYWRpbmcgYSByb3V0ZSBjb25maWd1cmF0aW9uLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZUNvbmZpZ0xvYWRTdGFydCB7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcm91dGU6IFJvdXRlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcm91dGU6IFJvdXRlKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBBIHNlcnZpY2UgdGhhdCBwcm92aWRlcyBuYXZpZ2F0aW9uIGFuZCBVUkwgbWFuaXB1bGF0aW9uIGNhcGFiaWxpdGllcy5cclxuICpcclxuICogQHNlZSBgUm91dGVgLlxyXG4gKiBAc2VlIFtSb3V0aW5nIGFuZCBOYXZpZ2F0aW9uIEd1aWRlXShndWlkZS9yb3V0ZXIpLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlciB7XHJcbiAgICBwcml2YXRlIHJvb3RDb21wb25lbnRUeXBlO1xyXG4gICAgcHJpdmF0ZSB1cmxTZXJpYWxpemVyO1xyXG4gICAgcHJpdmF0ZSByb290Q29udGV4dHM7XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uO1xyXG4gICAgY29uZmlnOiBSb3V0ZXM7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVcmxUcmVlO1xyXG4gICAgcHJpdmF0ZSByYXdVcmxUcmVlO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyVXJsVHJlZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNpdGlvbnM7XHJcbiAgICBwcml2YXRlIG5hdmlnYXRpb25zO1xyXG4gICAgcHJpdmF0ZSBsYXN0U3VjY2Vzc2Z1bE5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIGN1cnJlbnROYXZpZ2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgbmF2aWdhdGlvbklkO1xyXG4gICAgcHJpdmF0ZSBjb25maWdMb2FkZXI7XHJcbiAgICBwcml2YXRlIG5nTW9kdWxlO1xyXG4gICAgcHJpdmF0ZSBjb25zb2xlO1xyXG4gICAgcHJpdmF0ZSBpc05nWm9uZUVuYWJsZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGV2ZW50IHN0cmVhbSBmb3Igcm91dGluZyBldmVudHMgaW4gdGhpcyBOZ01vZHVsZS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgZXZlbnRzOiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2Ygcm91dGluZyBpbiB0aGlzIE5nTW9kdWxlLlxyXG4gICAgICovXHJcbiAgICByZWFkb25seSByb3V0ZXJTdGF0ZTogUm91dGVyU3RhdGU7XHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgbmF2aWdhdGlvbiBlcnJvcnMgaW4gdGhpcyBOZ01vZHVsZS5cclxuICAgICAqL1xyXG4gICAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXI7XHJcbiAgICAvKipcclxuICAgICAqIEEgaGFuZGxlciBmb3IgZXJyb3JzIHRocm93biBieSBgUm91dGVyLnBhcnNlVXJsKHVybClgXHJcbiAgICAgKiB3aGVuIGB1cmxgIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyLlxyXG4gICAgICogVGhlIG1vc3QgY29tbW9uIGNhc2UgaXMgYSBgJWAgc2lnblxyXG4gICAgICogdGhhdCdzIG5vdCBlbmNvZGVkIGFuZCBpcyBub3QgcGFydCBvZiBhIHBlcmNlbnQgZW5jb2RlZCBzZXF1ZW5jZS5cclxuICAgICAqL1xyXG4gICAgbWFsZm9ybWVkVXJpRXJyb3JIYW5kbGVyOiAoZXJyb3I6IFVSSUVycm9yLCB1cmxTZXJpYWxpemVyOiBVcmxTZXJpYWxpemVyLCB1cmw6IHN0cmluZykgPT4gVXJsVHJlZTtcclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBhdCBsZWFzdCBvbmUgbmF2aWdhdGlvbiBldmVudCBoYXMgb2NjdXJyZWQsXHJcbiAgICAgKiBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbGFzdFN1Y2Nlc3NmdWxJZDtcclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJhdGVneSBmb3IgZXh0cmFjdGluZyBhbmQgbWVyZ2luZyBVUkxzLlxyXG4gICAgICogVXNlZCBmb3IgQW5ndWxhckpTIHRvIEFuZ3VsYXIgbWlncmF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgdXJsSGFuZGxpbmdTdHJhdGVneTogVXJsSGFuZGxpbmdTdHJhdGVneTtcclxuICAgIC8qKlxyXG4gICAgICogQSBzdHJhdGVneSBmb3IgcmUtdXNpbmcgcm91dGVzLlxyXG4gICAgICovXHJcbiAgICByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneTtcclxuICAgIC8qKlxyXG4gICAgICogSG93IHRvIGhhbmRsZSBhIG5hdmlnYXRpb24gcmVxdWVzdCB0byB0aGUgY3VycmVudCBVUkwuIE9uZSBvZjpcclxuICAgICAqIC0gYCdpZ25vcmUnYCA6ICBUaGUgcm91dGVyIGlnbm9yZXMgdGhlIHJlcXVlc3QuXHJcbiAgICAgKiAtIGAncmVsb2FkJ2AgOiBUaGUgcm91dGVyIHJlbG9hZHMgdGhlIFVSTC4gVXNlIHRvIGltcGxlbWVudCBhIFwicmVmcmVzaFwiIGZlYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIG9uU2FtZVVybE5hdmlnYXRpb246ICdyZWxvYWQnIHwgJ2lnbm9yZSc7XHJcbiAgICAvKipcclxuICAgICAqIEhvdyB0byBtZXJnZSBwYXJhbWV0ZXJzLCBkYXRhLCBhbmQgcmVzb2x2ZWQgZGF0YSBmcm9tIHBhcmVudCB0byBjaGlsZFxyXG4gICAgICogcm91dGVzLiBPbmUgb2Y6XHJcbiAgICAgKlxyXG4gICAgICogLSBgJ2VtcHR5T25seSdgIDogSW5oZXJpdCBwYXJlbnQgcGFyYW1ldGVycywgZGF0YSwgYW5kIHJlc29sdmVkIGRhdGFcclxuICAgICAqIGZvciBwYXRoLWxlc3Mgb3IgY29tcG9uZW50LWxlc3Mgcm91dGVzLlxyXG4gICAgICogLSBgJ2Fsd2F5cydgIDogSW5oZXJpdCBwYXJlbnQgcGFyYW1ldGVycywgZGF0YSwgYW5kIHJlc29sdmVkIGRhdGFcclxuICAgICAqIGZvciBhbGwgY2hpbGQgcm91dGVzLlxyXG4gICAgICovXHJcbiAgICBwYXJhbXNJbmhlcml0YW5jZVN0cmF0ZWd5OiAnZW1wdHlPbmx5JyB8ICdhbHdheXMnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZW4gdGhlIHJvdXRlciB1cGRhdGVzIHRoZSBicm93c2VyIFVSTC5cclxuICAgICAqIEJ5IGRlZmF1bHQgKGBcImRlZmVycmVkXCJgKSwgdXBkYXRlcyB0aGUgYnJvd3NlciBVUkwgYWZ0ZXIgbmF2aWdhdGlvbiBoYXMgZmluaXNoZWQuXHJcbiAgICAgKiBTZXQgdG8gYCdlYWdlcidgIHRvIHVwZGF0ZSB0aGUgYnJvd3NlciBVUkwgYXQgdGhlIGJlZ2lubmluZyBvZiBuYXZpZ2F0aW9uLlxyXG4gICAgICogWW91IGNhbiBjaG9vc2UgdG8gdXBkYXRlIGVhcmx5IHNvIHRoYXQsIGlmIG5hdmlnYXRpb24gZmFpbHMsXHJcbiAgICAgKiB5b3UgY2FuIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBVUkwgdGhhdCBmYWlsZWQuXHJcbiAgICAgKi9cclxuICAgIHVybFVwZGF0ZVN0cmF0ZWd5OiAnZGVmZXJyZWQnIHwgJ2VhZ2VyJztcclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlcyBhIGJ1ZyBmaXggdGhhdCBjb3JyZWN0cyByZWxhdGl2ZSBsaW5rIHJlc29sdXRpb24gaW4gY29tcG9uZW50cyB3aXRoIGVtcHR5IHBhdGhzLlxyXG4gICAgICogQHNlZSBgUm91dGVyTW9kdWxlYFxyXG4gICAgICovXHJcbiAgICByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uOiAnbGVnYWN5JyB8ICdjb3JyZWN0ZWQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSByb3V0ZXIgc2VydmljZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iocm9vdENvbXBvbmVudFR5cGU6IFR5cGU8YW55PiB8IG51bGwsIHVybFNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsIHJvb3RDb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cywgbG9jYXRpb246IExvY2F0aW9uLCBpbmplY3RvcjogSW5qZWN0b3IsIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBjb21waWxlcjogQ29tcGlsZXIsIGNvbmZpZzogUm91dGVzKTtcclxuICAgIHByaXZhdGUgc2V0dXBOYXZpZ2F0aW9ucztcclxuICAgIHByaXZhdGUgZ2V0VHJhbnNpdGlvbjtcclxuICAgIHByaXZhdGUgc2V0VHJhbnNpdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCB0aGUgbG9jYXRpb24gY2hhbmdlIGxpc3RlbmVyIGFuZCBwZXJmb3JtcyB0aGUgaW5pdGlhbCBuYXZpZ2F0aW9uLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsTmF2aWdhdGlvbigpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIHRoZSBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXIuXHJcbiAgICAgKi9cclxuICAgIHNldFVwTG9jYXRpb25DaGFuZ2VMaXN0ZW5lcigpOiB2b2lkO1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IFVSTC4gKi9cclxuICAgIGdldCB1cmwoKTogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IE5hdmlnYXRpb24gb2JqZWN0IGlmIG9uZSBleGlzdHMgKi9cclxuICAgIGdldEN1cnJlbnROYXZpZ2F0aW9uKCk6IE5hdmlnYXRpb24gfCBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldHMgdGhlIGNvbmZpZ3VyYXRpb24gdXNlZCBmb3IgbmF2aWdhdGlvbiBhbmQgZ2VuZXJhdGluZyBsaW5rcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIFRoZSByb3V0ZSBhcnJheSBmb3IgdGhlIG5ldyBjb25maWd1cmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiByb3V0ZXIucmVzZXRDb25maWcoW1xyXG4gICAgICogIHsgcGF0aDogJ3RlYW0vOmlkJywgY29tcG9uZW50OiBUZWFtQ21wLCBjaGlsZHJlbjogW1xyXG4gICAgICogICAgeyBwYXRoOiAnc2ltcGxlJywgY29tcG9uZW50OiBTaW1wbGVDbXAgfSxcclxuICAgICAqICAgIHsgcGF0aDogJ3VzZXIvOm5hbWUnLCBjb21wb25lbnQ6IFVzZXJDbXAgfVxyXG4gICAgICogIF19XHJcbiAgICAgKiBdKTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICByZXNldENvbmZpZyhjb25maWc6IFJvdXRlcyk6IHZvaWQ7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIC8qKiBEaXNwb3NlcyBvZiB0aGUgcm91dGVyLiAqL1xyXG4gICAgZGlzcG9zZSgpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaWVzIGFuIGFycmF5IG9mIGNvbW1hbmRzIHRvIHRoZSBjdXJyZW50IFVSTCB0cmVlIGFuZCBjcmVhdGVzIGEgbmV3IFVSTCB0cmVlLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gZ2l2ZW4gYW4gYWN0aXZhdGVkIHJvdXRlLCBhcHBsaWVzIHRoZSBnaXZlbiBjb21tYW5kcyBzdGFydGluZyBmcm9tIHRoZSByb3V0ZS5cclxuICAgICAqIE90aGVyd2lzZSwgYXBwbGllcyB0aGUgZ2l2ZW4gY29tbWFuZCBzdGFydGluZyBmcm9tIHRoZSByb290LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb21tYW5kcyBBbiBhcnJheSBvZiBjb21tYW5kcyB0byBhcHBseS5cclxuICAgICAqIEBwYXJhbSBuYXZpZ2F0aW9uRXh0cmFzIE9wdGlvbnMgdGhhdCBjb250cm9sIHRoZSBuYXZpZ2F0aW9uIHN0cmF0ZWd5LiBUaGlzIGZ1bmN0aW9uXHJcbiAgICAgKiBvbmx5IHV0aWxpemVzIHByb3BlcnRpZXMgaW4gYE5hdmlnYXRpb25FeHRyYXNgIHRoYXQgd291bGQgY2hhbmdlIHRoZSBwcm92aWRlZCBVUkwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbmV3IFVSTCB0cmVlLlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAvLyBjcmVhdGUgL3RlYW0vMzMvdXNlci8xMVxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycvdGVhbScsIDMzLCAndXNlcicsIDExXSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gY3JlYXRlIC90ZWFtLzMzO2V4cGFuZD10cnVlL3VzZXIvMTFcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL3RlYW0nLCAzMywge2V4cGFuZDogdHJ1ZX0sICd1c2VyJywgMTFdKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyB5b3UgY2FuIGNvbGxhcHNlIHN0YXRpYyBzZWdtZW50cyBsaWtlIHRoaXMgKHRoaXMgd29ya3Mgb25seSB3aXRoIHRoZSBmaXJzdCBwYXNzZWQtaW4gdmFsdWUpOlxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoWycvdGVhbS8zMy91c2VyJywgdXNlcklkXSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gSWYgdGhlIGZpcnN0IHNlZ21lbnQgY2FuIGNvbnRhaW4gc2xhc2hlcywgYW5kIHlvdSBkbyBub3Qgd2FudCB0aGUgcm91dGVyIHRvIHNwbGl0IGl0LFxyXG4gICAgICogLy8geW91IGNhbiBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogcm91dGVyLmNyZWF0ZVVybFRyZWUoW3tzZWdtZW50UGF0aDogJy9vbmUvdHdvJ31dKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBjcmVhdGUgL3RlYW0vMzMvKHVzZXIvMTEvL3JpZ2h0OmNoYXQpXHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtJywgMzMsIHtvdXRsZXRzOiB7cHJpbWFyeTogJ3VzZXIvMTEnLCByaWdodDogJ2NoYXQnfX1dKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyByZW1vdmUgdGhlIHJpZ2h0IHNlY29uZGFyeSBub2RlXHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy90ZWFtJywgMzMsIHtvdXRsZXRzOiB7cHJpbWFyeTogJ3VzZXIvMTEnLCByaWdodDogbnVsbH19XSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gYXNzdW1pbmcgdGhlIGN1cnJlbnQgdXJsIGlzIGAvdGVhbS8zMy91c2VyLzExYCBhbmQgdGhlIHJvdXRlIHBvaW50cyB0byBgdXNlci8xMWBcclxuICAgICAqXHJcbiAgICAgKiAvLyBuYXZpZ2F0ZSB0byAvdGVhbS8zMy91c2VyLzExL2RldGFpbHNcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnZGV0YWlscyddLCB7cmVsYXRpdmVUbzogcm91dGV9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBuYXZpZ2F0ZSB0byAvdGVhbS8zMy91c2VyLzIyXHJcbiAgICAgKiByb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy4uLzIyJ10sIHtyZWxhdGl2ZVRvOiByb3V0ZX0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIG5hdmlnYXRlIHRvIC90ZWFtLzQ0L3VzZXIvMjJcclxuICAgICAqIHJvdXRlci5jcmVhdGVVcmxUcmVlKFsnLi4vLi4vdGVhbS80NC91c2VyLzIyJ10sIHtyZWxhdGl2ZVRvOiByb3V0ZX0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVVybFRyZWUoY29tbWFuZHM6IGFueVtdLCBuYXZpZ2F0aW9uRXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IFVybFRyZWU7XHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBVUkwsIHdoaWNoIG11c3QgYmUgYWJzb2x1dGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBBbiBhYnNvbHV0ZSBVUkwuIFRoZSBmdW5jdGlvbiBkb2VzIG5vdCBhcHBseSBhbnkgZGVsdGEgdG8gdGhlIGN1cnJlbnQgVVJMLlxyXG4gICAgICogQHBhcmFtIGV4dHJhcyBBbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIHRoYXQgbW9kaWZ5IHRoZSBuYXZpZ2F0aW9uIHN0cmF0ZWd5LlxyXG4gICAgICogVGhlIGZ1bmN0aW9uIGlnbm9yZXMgYW55IHByb3BlcnRpZXMgaW4gdGhlIGBOYXZpZ2F0aW9uRXh0cmFzYCB0aGF0IHdvdWxkIGNoYW5nZSB0aGVcclxuICAgICAqIHByb3ZpZGVkIFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byAndHJ1ZScgd2hlbiBuYXZpZ2F0aW9uIHN1Y2NlZWRzLFxyXG4gICAgICogdG8gJ2ZhbHNlJyB3aGVuIG5hdmlnYXRpb24gZmFpbHMsIG9yIGlzIHJlamVjdGVkIG9uIGVycm9yLlxyXG4gICAgICpcclxuICAgICAqIEB1c2FnZU5vdGVzXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKiByb3V0ZXIubmF2aWdhdGVCeVVybChcIi90ZWFtLzMzL3VzZXIvMTFcIik7XHJcbiAgICAgKlxyXG4gICAgICogLy8gTmF2aWdhdGUgd2l0aG91dCB1cGRhdGluZyB0aGUgVVJMXHJcbiAgICAgKiByb3V0ZXIubmF2aWdhdGVCeVVybChcIi90ZWFtLzMzL3VzZXIvMTFcIiwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIG5hdmlnYXRlQnlVcmwodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGFycmF5IG9mIGNvbW1hbmRzIGFuZCBhIHN0YXJ0aW5nIHBvaW50LlxyXG4gICAgICogSWYgbm8gc3RhcnRpbmcgcm91dGUgaXMgcHJvdmlkZWQsIHRoZSBuYXZpZ2F0aW9uIGlzIGFic29sdXRlLlxyXG4gICAgICpcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQ6XHJcbiAgICAgKiAtIHJlc29sdmVzIHRvICd0cnVlJyB3aGVuIG5hdmlnYXRpb24gc3VjY2VlZHMsXHJcbiAgICAgKiAtIHJlc29sdmVzIHRvICdmYWxzZScgd2hlbiBuYXZpZ2F0aW9uIGZhaWxzLFxyXG4gICAgICogLSBpcyByZWplY3RlZCB3aGVuIGFuIGVycm9yIGhhcHBlbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHVzYWdlTm90ZXNcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHJvdXRlci5uYXZpZ2F0ZShbJ3RlYW0nLCAzMywgJ3VzZXInLCAxMV0sIHtyZWxhdGl2ZVRvOiByb3V0ZX0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIE5hdmlnYXRlIHdpdGhvdXQgdXBkYXRpbmcgdGhlIFVSTFxyXG4gICAgICogcm91dGVyLm5hdmlnYXRlKFsndGVhbScsIDMzLCAndXNlcicsIDExXSwge3JlbGF0aXZlVG86IHJvdXRlLCBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWV9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICpcclxuICAgICAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgb2YgYG5hdmlnYXRlKClgIGlzIGEgZGVsdGEgdG8gYmUgYXBwbGllZCB0byB0aGUgY3VycmVudCBVUkxcclxuICAgICAqIG9yIHRoZSBvbmUgcHJvdmlkZWQgaW4gdGhlIGByZWxhdGl2ZVRvYCBwcm9wZXJ0eSBvZiB0aGUgc2Vjb25kIHBhcmFtZXRlciAodGhlXHJcbiAgICAgKiBgTmF2aWdhdGlvbkV4dHJhc2ApLlxyXG4gICAgICpcclxuICAgICAqIEluIG9yZGVyIHRvIGFmZmVjdCB0aGlzIGJyb3dzZXIncyBgaGlzdG9yeS5zdGF0ZWAgZW50cnksIHRoZSBgc3RhdGVgXHJcbiAgICAgKiBwYXJhbWV0ZXIgY2FuIGJlIHBhc3NlZC4gVGhpcyBtdXN0IGJlIGFuIG9iamVjdCBiZWNhdXNlIHRoZSByb3V0ZXJcclxuICAgICAqIHdpbGwgYWRkIHRoZSBgbmF2aWdhdGlvbklkYCBwcm9wZXJ0eSB0byB0aGlzIG9iamVjdCBiZWZvcmUgY3JlYXRpbmdcclxuICAgICAqIHRoZSBuZXcgaGlzdG9yeSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBuYXZpZ2F0ZShjb21tYW5kczogYW55W10sIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgLyoqIFNlcmlhbGl6ZXMgYSBgVXJsVHJlZWAgaW50byBhIHN0cmluZyAqL1xyXG4gICAgc2VyaWFsaXplVXJsKHVybDogVXJsVHJlZSk6IHN0cmluZztcclxuICAgIC8qKiBQYXJzZXMgYSBzdHJpbmcgaW50byBhIGBVcmxUcmVlYCAqL1xyXG4gICAgcGFyc2VVcmwodXJsOiBzdHJpbmcpOiBVcmxUcmVlO1xyXG4gICAgLyoqIFJldHVybnMgd2hldGhlciB0aGUgdXJsIGlzIGFjdGl2YXRlZCAqL1xyXG4gICAgaXNBY3RpdmUodXJsOiBzdHJpbmcgfCBVcmxUcmVlLCBleGFjdDogYm9vbGVhbik6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlbW92ZUVtcHR5UHJvcHM7XHJcbiAgICBwcml2YXRlIHByb2Nlc3NOYXZpZ2F0aW9ucztcclxuICAgIHByaXZhdGUgc2NoZWR1bGVOYXZpZ2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBzZXRCcm93c2VyVXJsO1xyXG4gICAgcHJpdmF0ZSByZXNldFN0YXRlQW5kVXJsO1xyXG4gICAgcHJpdmF0ZSByZXNldFVybFRvQ3VycmVudFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkvI2RpLXRva2VuKSBmb3IgdGhlIHJvdXRlciBzZXJ2aWNlLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBST1VURVJfQ09ORklHVVJBVElPTjogSW5qZWN0aW9uVG9rZW48RXh0cmFPcHRpb25zPjtcclxuXHJcbi8qKlxyXG4gKiBBIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkvI2RpLXRva2VuKSBmb3IgdGhlIHJvdXRlciBpbml0aWFsaXplciB0aGF0XHJcbiAqIGlzIGNhbGxlZCBhZnRlciB0aGUgYXBwIGlzIGJvb3RzdHJhcHBlZC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUk9VVEVSX0lOSVRJQUxJWkVSOiBJbmplY3Rpb25Ub2tlbjwoY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ+O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBQcm92aWRlcyBhIHdheSB0byBjdXN0b21pemUgd2hlbiBhY3RpdmF0ZWQgcm91dGVzIGdldCByZXVzZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFJvdXRlUmV1c2VTdHJhdGVneSB7XHJcbiAgICAvKiogRGV0ZXJtaW5lcyBpZiB0aGlzIHJvdXRlIChhbmQgaXRzIHN1YnRyZWUpIHNob3VsZCBiZSBkZXRhY2hlZCB0byBiZSByZXVzZWQgbGF0ZXIgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZERldGFjaChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlcyB0aGUgZGV0YWNoZWQgcm91dGUuXHJcbiAgICAgKlxyXG4gICAgICogU3RvcmluZyBhIGBudWxsYCB2YWx1ZSBzaG91bGQgZXJhc2UgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzdG9yZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgaGFuZGxlOiBEZXRhY2hlZFJvdXRlSGFuZGxlIHwgbnVsbCk6IHZvaWQ7XHJcbiAgICAvKiogRGV0ZXJtaW5lcyBpZiB0aGlzIHJvdXRlIChhbmQgaXRzIHN1YnRyZWUpIHNob3VsZCBiZSByZWF0dGFjaGVkICovXHJcbiAgICBhYnN0cmFjdCBzaG91bGRBdHRhY2gocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuO1xyXG4gICAgLyoqIFJldHJpZXZlcyB0aGUgcHJldmlvdXNseSBzdG9yZWQgcm91dGUgKi9cclxuICAgIGFic3RyYWN0IHJldHJpZXZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogRGV0YWNoZWRSb3V0ZUhhbmRsZSB8IG51bGw7XHJcbiAgICAvKiogRGV0ZXJtaW5lcyBpZiBhIHJvdXRlIHNob3VsZCBiZSByZXVzZWQgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZFJldXNlUm91dGUoZnV0dXJlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBjdXJyOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgZm9yIGV2ZW50cyB0aGUgcm91dGVyIGdvZXMgdGhyb3VnaCwgYXMgb3Bwb3NlZCB0byBldmVudHMgdGllZCB0byBhIHNwZWNpZmljXHJcbiAqIHJvdXRlLiBGaXJlZCBvbmUgdGltZSBmb3IgYW55IGdpdmVuIG5hdmlnYXRpb24uXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNsYXNzIE15U2VydmljZSB7XHJcbiAqICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBsb2dnZXI6IExvZ2dlcikge1xyXG4gKiAgICAgcm91dGVyLmV2ZW50cy5waXBlKFxyXG4gKiAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgUm91dGVyRXZlbnQpXHJcbiAqICAgICApLnN1YnNjcmliZShlID0+IHtcclxuICogICAgICAgbG9nZ2VyLmxvZyhlLmlkLCBlLnVybCk7XHJcbiAqICAgICB9KTtcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBzZWUgYEV2ZW50YFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJFdmVudCB7XHJcbiAgICAvKiogQSB1bmlxdWUgSUQgdGhhdCB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIG5hdmlnYXRpb24uICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBVUkwgdGhhdCBpcyB0aGUgZGVzdGluYXRpb24gZm9yIHRoaXMgbmF2aWdhdGlvbi4gKi9cclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogQSB1bmlxdWUgSUQgdGhhdCB0aGUgcm91dGVyIGFzc2lnbnMgdG8gZXZlcnkgcm91dGVyIG5hdmlnYXRpb24uICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBUaGUgVVJMIHRoYXQgaXMgdGhlIGRlc3RpbmF0aW9uIGZvciB0aGlzIG5hdmlnYXRpb24uICovXHJcbiAgICB1cmw6IHN0cmluZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogTGV0cyB5b3UgbGluayB0byBzcGVjaWZpYyByb3V0ZXMgaW4geW91ciBhcHAuXHJcbiAqXHJcbiAqIENvbnNpZGVyIHRoZSBmb2xsb3dpbmcgcm91dGUgY29uZmlndXJhdGlvbjpcclxuICogYFt7IHBhdGg6ICd1c2VyLzpuYW1lJywgY29tcG9uZW50OiBVc2VyQ21wIH1dYC5cclxuICogV2hlbiBsaW5raW5nIHRvIHRoaXMgYHVzZXIvOm5hbWVgIHJvdXRlLCB5b3UgdXNlIHRoZSBgUm91dGVyTGlua2AgZGlyZWN0aXZlLlxyXG4gKlxyXG4gKiBJZiB0aGUgbGluayBpcyBzdGF0aWMsIHlvdSBjYW4gdXNlIHRoZSBkaXJlY3RpdmUgYXMgZm9sbG93czpcclxuICogYDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIj5saW5rIHRvIHVzZXIgY29tcG9uZW50PC9hPmBcclxuICpcclxuICogSWYgeW91IHVzZSBkeW5hbWljIHZhbHVlcyB0byBnZW5lcmF0ZSB0aGUgbGluaywgeW91IGNhbiBwYXNzIGFuIGFycmF5IG9mIHBhdGhcclxuICogc2VnbWVudHMsIGZvbGxvd2VkIGJ5IHRoZSBwYXJhbXMgZm9yIGVhY2ggc2VnbWVudC5cclxuICpcclxuICogRm9yIGluc3RhbmNlIGBbJy90ZWFtJywgdGVhbUlkLCAndXNlcicsIHVzZXJOYW1lLCB7ZGV0YWlsczogdHJ1ZX1dYFxyXG4gKiBtZWFucyB0aGF0IHdlIHdhbnQgdG8gZ2VuZXJhdGUgYSBsaW5rIHRvIGAvdGVhbS8xMS91c2VyL2JvYjtkZXRhaWxzPXRydWVgLlxyXG4gKlxyXG4gKiBNdWx0aXBsZSBzdGF0aWMgc2VnbWVudHMgY2FuIGJlIG1lcmdlZCBpbnRvIG9uZVxyXG4gKiAoZS5nLiwgYFsnL3RlYW0vMTEvdXNlcicsIHVzZXJOYW1lLCB7ZGV0YWlsczogdHJ1ZX1dYCkuXHJcbiAqXHJcbiAqIFRoZSBmaXJzdCBzZWdtZW50IG5hbWUgY2FuIGJlIHByZXBlbmRlZCB3aXRoIGAvYCwgYC4vYCwgb3IgYC4uL2A6XHJcbiAqICogSWYgdGhlIGZpcnN0IHNlZ21lbnQgYmVnaW5zIHdpdGggYC9gLCB0aGUgcm91dGVyIHdpbGwgbG9vayB1cCB0aGUgcm91dGUgZnJvbSB0aGUgcm9vdCBvZiB0aGVcclxuICogICBhcHAuXHJcbiAqICogSWYgdGhlIGZpcnN0IHNlZ21lbnQgYmVnaW5zIHdpdGggYC4vYCwgb3IgZG9lc24ndCBiZWdpbiB3aXRoIGEgc2xhc2gsIHRoZSByb3V0ZXIgd2lsbFxyXG4gKiAgIGluc3RlYWQgbG9vayBpbiB0aGUgY2hpbGRyZW4gb2YgdGhlIGN1cnJlbnQgYWN0aXZhdGVkIHJvdXRlLlxyXG4gKiAqIEFuZCBpZiB0aGUgZmlyc3Qgc2VnbWVudCBiZWdpbnMgd2l0aCBgLi4vYCwgdGhlIHJvdXRlciB3aWxsIGdvIHVwIG9uZSBsZXZlbC5cclxuICpcclxuICogWW91IGNhbiBzZXQgcXVlcnkgcGFyYW1zIGFuZCBmcmFnbWVudCBhcyBmb2xsb3dzOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIFtxdWVyeVBhcmFtc109XCJ7ZGVidWc6IHRydWV9XCIgZnJhZ21lbnQ9XCJlZHVjYXRpb25cIj5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqIFJvdXRlckxpbmsgd2lsbCB1c2UgdGhlc2UgdG8gZ2VuZXJhdGUgdGhpcyBsaW5rOiBgL3VzZXIvYm9iI2VkdWNhdGlvbj9kZWJ1Zz10cnVlYC5cclxuICpcclxuICogKERlcHJlY2F0ZWQgaW4gdjQuMC4wIHVzZSBgcXVlcnlQYXJhbXNIYW5kbGluZ2AgaW5zdGVhZCkgWW91IGNhbiBhbHNvIHRlbGwgdGhlXHJcbiAqIGRpcmVjdGl2ZSB0byBwcmVzZXJ2ZSB0aGUgY3VycmVudCBxdWVyeSBwYXJhbXMgYW5kIGZyYWdtZW50OlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIHByZXNlcnZlUXVlcnlQYXJhbXMgcHJlc2VydmVGcmFnbWVudD5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gdGVsbCB0aGUgZGlyZWN0aXZlIGhvdyB0byBoYW5kbGUgcXVlcnlQYXJhbXMuIEF2YWlsYWJsZSBvcHRpb25zIGFyZTpcclxuICogIC0gYCdtZXJnZSdgOiBtZXJnZSB0aGUgcXVlcnlQYXJhbXMgaW50byB0aGUgY3VycmVudCBxdWVyeVBhcmFtc1xyXG4gKiAgLSBgJ3ByZXNlcnZlJ2A6IHByZXNlcnZlIHRoZSBjdXJyZW50IHF1ZXJ5UGFyYW1zXHJcbiAqICAtIGRlZmF1bHQvYCcnYDogdXNlIHRoZSBxdWVyeVBhcmFtcyBvbmx5XHJcbiAqXHJcbiAqIFNhbWUgb3B0aW9ucyBmb3Ige0BsaW5rIE5hdmlnYXRpb25FeHRyYXMjcXVlcnlQYXJhbXNIYW5kbGluZ1xyXG4gKiBOYXZpZ2F0aW9uRXh0cmFzI3F1ZXJ5UGFyYW1zSGFuZGxpbmd9LlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgW3JvdXRlckxpbmtdPVwiWycvdXNlci9ib2InXVwiIFtxdWVyeVBhcmFtc109XCJ7ZGVidWc6IHRydWV9XCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cIm1lcmdlXCI+XHJcbiAqICAgbGluayB0byB1c2VyIGNvbXBvbmVudFxyXG4gKiA8L2E+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIHByb3ZpZGUgYSBgc3RhdGVgIHZhbHVlIHRvIGJlIHBlcnNpc3RlZCB0byB0aGUgYnJvd3NlcidzIEhpc3Rvcnkuc3RhdGVcclxuICogcHJvcGVydHkgKFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeSNQcm9wZXJ0aWVzKS4gSXQnc1xyXG4gKiB1c2VkIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2JvYiddXCIgW3N0YXRlXT1cInt0cmFjaW5nSWQ6IDEyM31cIj5cclxuICogICBsaW5rIHRvIHVzZXIgY29tcG9uZW50XHJcbiAqIDwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEFuZCBsYXRlciB0aGUgdmFsdWUgY2FuIGJlIHJlYWQgZnJvbSB0aGUgcm91dGVyIHRocm91Z2ggYHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbmAuXHJcbiAqIEZvciBleGFtcGxlLCB0byBjYXB0dXJlIHRoZSBgdHJhY2luZ0lkYCBhYm92ZSBkdXJpbmcgdGhlIGBOYXZpZ2F0aW9uU3RhcnRgIGV2ZW50OlxyXG4gKlxyXG4gKiBgYGBcclxuICogLy8gR2V0IE5hdmlnYXRpb25TdGFydCBldmVudHNcclxuICogcm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAqICAgY29uc3QgbmF2aWdhdGlvbiA9IHJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpO1xyXG4gKiAgIHRyYWNpbmdTZXJ2aWNlLnRyYWNlKHtpZDogbmF2aWdhdGlvbi5leHRyYXMuc3RhdGUudHJhY2luZ0lkfSk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIHJvdXRlciBsaW5rIGRpcmVjdGl2ZSBhbHdheXMgdHJlYXRzIHRoZSBwcm92aWRlZCBpbnB1dCBhcyBhIGRlbHRhIHRvIHRoZSBjdXJyZW50IHVybC5cclxuICpcclxuICogRm9yIGluc3RhbmNlLCBpZiB0aGUgY3VycmVudCB1cmwgaXMgYC91c2VyLyhib3gvL2F1eDp0ZWFtKWAuXHJcbiAqXHJcbiAqIFRoZW4gdGhlIGZvbGxvd2luZyBsaW5rIGA8YSBbcm91dGVyTGlua109XCJbJy91c2VyL2ppbSddXCI+SmltPC9hPmAgd2lsbCBnZW5lcmF0ZSB0aGUgbGlua1xyXG4gKiBgL3VzZXIvKGppbS8vYXV4OnRlYW0pYC5cclxuICpcclxuICogU2VlIHtAbGluayBSb3V0ZXIjY3JlYXRlVXJsVHJlZSBjcmVhdGVVcmxUcmVlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQG5nTW9kdWxlIFJvdXRlck1vZHVsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJMaW5rIHtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSByb3V0ZTtcclxuICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICBmcmFnbWVudDogc3RyaW5nO1xyXG4gICAgcXVlcnlQYXJhbXNIYW5kbGluZzogUXVlcnlQYXJhbXNIYW5kbGluZztcclxuICAgIHByZXNlcnZlRnJhZ21lbnQ6IGJvb2xlYW47XHJcbiAgICBza2lwTG9jYXRpb25DaGFuZ2U6IGJvb2xlYW47XHJcbiAgICByZXBsYWNlVXJsOiBib29sZWFuO1xyXG4gICAgc3RhdGU/OiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueTtcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGNvbW1hbmRzO1xyXG4gICAgcHJpdmF0ZSBwcmVzZXJ2ZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHRhYkluZGV4OiBzdHJpbmcsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsOiBFbGVtZW50UmVmKTtcclxuICAgIHNldCByb3V0ZXJMaW5rKGNvbW1hbmRzOiBhbnlbXSB8IHN0cmluZyk7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIDQuMC4wIHVzZSBgcXVlcnlQYXJhbXNIYW5kbGluZ2AgaW5zdGVhZC5cclxuICAgICAqL1xyXG4gICAgc2V0IHByZXNlcnZlUXVlcnlQYXJhbXModmFsdWU6IGJvb2xlYW4pO1xyXG4gICAgb25DbGljaygpOiBib29sZWFuO1xyXG4gICAgZ2V0IHVybFRyZWUoKTogVXJsVHJlZTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBMZXRzIHlvdSBhZGQgYSBDU1MgY2xhc3MgdG8gYW4gZWxlbWVudCB3aGVuIHRoZSBsaW5rJ3Mgcm91dGUgYmVjb21lcyBhY3RpdmUuXHJcbiAqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGxldHMgeW91IGFkZCBhIENTUyBjbGFzcyB0byBhbiBlbGVtZW50IHdoZW4gdGhlIGxpbmsncyByb3V0ZVxyXG4gKiBiZWNvbWVzIGFjdGl2ZS5cclxuICpcclxuICogQ29uc2lkZXIgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiPkJvYjwvYT5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdoZW4gdGhlIHVybCBpcyBlaXRoZXIgJy91c2VyJyBvciAnL3VzZXIvYm9iJywgdGhlIGFjdGl2ZS1saW5rIGNsYXNzIHdpbGxcclxuICogYmUgYWRkZWQgdG8gdGhlIGBhYCB0YWcuIElmIHRoZSB1cmwgY2hhbmdlcywgdGhlIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZC5cclxuICpcclxuICogWW91IGNhbiBzZXQgbW9yZSB0aGFuIG9uZSBjbGFzcywgYXMgZm9sbG93czpcclxuICpcclxuICogYGBgXHJcbiAqIDxhIHJvdXRlckxpbms9XCIvdXNlci9ib2JcIiByb3V0ZXJMaW5rQWN0aXZlPVwiY2xhc3MxIGNsYXNzMlwiPkJvYjwvYT5cclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cIlsnY2xhc3MxJywgJ2NsYXNzMiddXCI+Qm9iPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBjb25maWd1cmUgUm91dGVyTGlua0FjdGl2ZSBieSBwYXNzaW5nIGBleGFjdDogdHJ1ZWAuIFRoaXMgd2lsbCBhZGQgdGhlIGNsYXNzZXNcclxuICogb25seSB3aGVuIHRoZSB1cmwgbWF0Y2hlcyB0aGUgbGluayBleGFjdGx5LlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmUtbGlua1wiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6XHJcbiAqIHRydWV9XCI+Qm9iPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhc3NpZ24gdGhlIFJvdXRlckxpbmtBY3RpdmUgaW5zdGFuY2UgdG8gYSB0ZW1wbGF0ZSB2YXJpYWJsZSBhbmQgZGlyZWN0bHkgY2hlY2tcclxuICogdGhlIGBpc0FjdGl2ZWAgc3RhdHVzLlxyXG4gKiBgYGBcclxuICogPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiIHJvdXRlckxpbmtBY3RpdmUgI3JsYT1cInJvdXRlckxpbmtBY3RpdmVcIj5cclxuICogICBCb2Ige3sgcmxhLmlzQWN0aXZlID8gJyhhbHJlYWR5IG9wZW4pJyA6ICcnfX1cclxuICogPC9hPlxyXG4gKiBgYGBcclxuICpcclxuICogRmluYWxseSwgeW91IGNhbiBhcHBseSB0aGUgUm91dGVyTGlua0FjdGl2ZSBkaXJlY3RpdmUgdG8gYW4gYW5jZXN0b3Igb2YgYSBSb3V0ZXJMaW5rLlxyXG4gKlxyXG4gKiBgYGBcclxuICogPGRpdiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlLWxpbmtcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OiB0cnVlfVwiPlxyXG4gKiAgIDxhIHJvdXRlckxpbms9XCIvdXNlci9qaW1cIj5KaW08L2E+XHJcbiAqICAgPGEgcm91dGVyTGluaz1cIi91c2VyL2JvYlwiPkJvYjwvYT5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGlzIHdpbGwgc2V0IHRoZSBhY3RpdmUtbGluayBjbGFzcyBvbiB0aGUgZGl2IHRhZyBpZiB0aGUgdXJsIGlzIGVpdGhlciAnL3VzZXIvamltJyBvclxyXG4gKiAnL3VzZXIvYm9iJy5cclxuICpcclxuICogQG5nTW9kdWxlIFJvdXRlck1vZHVsZVxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJMaW5rQWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBsaW5rPztcclxuICAgIHByaXZhdGUgbGlua1dpdGhIcmVmPztcclxuICAgIGxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XHJcbiAgICBsaW5rc1dpdGhIcmVmczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XHJcbiAgICBwcml2YXRlIGNsYXNzZXM7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcclxuICAgIHJlYWRvbmx5IGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgcm91dGVyTGlua0FjdGl2ZU9wdGlvbnM6IHtcclxuICAgICAgICBleGFjdDogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbGluaz86IFJvdXRlckxpbmsgfCB1bmRlZmluZWQsIGxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmtXaXRoSHJlZiB8IHVuZGVmaW5lZCk7XHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcclxuICAgIHNldCByb3V0ZXJMaW5rQWN0aXZlKGRhdGE6IHN0cmluZ1tdIHwgc3RyaW5nKTtcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIHByaXZhdGUgdXBkYXRlO1xyXG4gICAgcHJpdmF0ZSBpc0xpbmtBY3RpdmU7XHJcbiAgICBwcml2YXRlIGhhc0FjdGl2ZUxpbmtzO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIExldHMgeW91IGxpbmsgdG8gc3BlY2lmaWMgcm91dGVzIGluIHlvdXIgYXBwLlxyXG4gKlxyXG4gKiBTZWUgYFJvdXRlckxpbmtgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKlxyXG4gKiBAbmdNb2R1bGUgUm91dGVyTW9kdWxlXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlckxpbmtXaXRoSHJlZiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSByb3V0ZTtcclxuICAgIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTtcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIGZyYWdtZW50OiBzdHJpbmc7XHJcbiAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiBRdWVyeVBhcmFtc0hhbmRsaW5nO1xyXG4gICAgcHJlc2VydmVGcmFnbWVudDogYm9vbGVhbjtcclxuICAgIHNraXBMb2NhdGlvbkNoYW5nZTogYm9vbGVhbjtcclxuICAgIHJlcGxhY2VVcmw6IGJvb2xlYW47XHJcbiAgICBzdGF0ZT86IHtcclxuICAgICAgICBbazogc3RyaW5nXTogYW55O1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY29tbWFuZHM7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgcHJlc2VydmU7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5KTtcclxuICAgIHNldCByb3V0ZXJMaW5rKGNvbW1hbmRzOiBhbnlbXSB8IHN0cmluZyk7XHJcbiAgICBzZXQgcHJlc2VydmVRdWVyeVBhcmFtcyh2YWx1ZTogYm9vbGVhbik7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7fSk6IGFueTtcclxuICAgIG5nT25EZXN0cm95KCk6IGFueTtcclxuICAgIG9uQ2xpY2soYnV0dG9uOiBudW1iZXIsIGN0cmxLZXk6IGJvb2xlYW4sIG1ldGFLZXk6IGJvb2xlYW4sIHNoaWZ0S2V5OiBib29sZWFuKTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdXBkYXRlVGFyZ2V0VXJsQW5kSHJlZjtcclxuICAgIGdldCB1cmxUcmVlKCk6IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiBSb3V0ZXJNb2R1bGUgY2FuIGJlIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzOiBvbmNlIHBlciBsYXppbHktbG9hZGVkIGJ1bmRsZS5cclxuICogU2luY2UgdGhlIHJvdXRlciBkZWFscyB3aXRoIGEgZ2xvYmFsIHNoYXJlZCByZXNvdXJjZS0tbG9jYXRpb24sIHdlIGNhbm5vdCBoYXZlXHJcbiAqIG1vcmUgdGhhbiBvbmUgcm91dGVyIHNlcnZpY2UgYWN0aXZlLlxyXG4gKlxyXG4gKiBUaGF0IGlzIHdoeSB0aGVyZSBhcmUgdHdvIHdheXMgdG8gY3JlYXRlIHRoZSBtb2R1bGU6IGBSb3V0ZXJNb2R1bGUuZm9yUm9vdGAgYW5kXHJcbiAqIGBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGRgLlxyXG4gKlxyXG4gKiAqIGBmb3JSb290YCBjcmVhdGVzIGEgbW9kdWxlIHRoYXQgY29udGFpbnMgYWxsIHRoZSBkaXJlY3RpdmVzLCB0aGUgZ2l2ZW4gcm91dGVzLCBhbmQgdGhlIHJvdXRlclxyXG4gKiAgIHNlcnZpY2UgaXRzZWxmLlxyXG4gKiAqIGBmb3JDaGlsZGAgY3JlYXRlcyBhIG1vZHVsZSB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgZGlyZWN0aXZlcyBhbmQgdGhlIGdpdmVuIHJvdXRlcywgYnV0IGRvZXMgbm90XHJcbiAqICAgaW5jbHVkZSB0aGUgcm91dGVyIHNlcnZpY2UuXHJcbiAqXHJcbiAqIFdoZW4gcmVnaXN0ZXJlZCBhdCB0aGUgcm9vdCwgdGhlIG1vZHVsZSBzaG91bGQgYmUgdXNlZCBhcyBmb2xsb3dzXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChST1VURVMpXVxyXG4gKiB9KVxyXG4gKiBjbGFzcyBNeU5nTW9kdWxlIHt9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGb3Igc3VibW9kdWxlcyBhbmQgbGF6eSBsb2FkZWQgc3VibW9kdWxlcyB0aGUgbW9kdWxlIHNob3VsZCBiZSB1c2VkIGFzIGZvbGxvd3M6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBATmdNb2R1bGUoe1xyXG4gKiAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoUk9VVEVTKV1cclxuICogfSlcclxuICogY2xhc3MgTXlOZ01vZHVsZSB7fVxyXG4gKiBgYGBcclxuICpcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIEFkZHMgcm91dGVyIGRpcmVjdGl2ZXMgYW5kIHByb3ZpZGVycy5cclxuICpcclxuICogTWFuYWdpbmcgc3RhdGUgdHJhbnNpdGlvbnMgaXMgb25lIG9mIHRoZSBoYXJkZXN0IHBhcnRzIG9mIGJ1aWxkaW5nIGFwcGxpY2F0aW9ucy4gVGhpcyBpc1xyXG4gKiBlc3BlY2lhbGx5IHRydWUgb24gdGhlIHdlYiwgd2hlcmUgeW91IGFsc28gbmVlZCB0byBlbnN1cmUgdGhhdCB0aGUgc3RhdGUgaXMgcmVmbGVjdGVkIGluIHRoZSBVUkwuXHJcbiAqIEluIGFkZGl0aW9uLCB3ZSBvZnRlbiB3YW50IHRvIHNwbGl0IGFwcGxpY2F0aW9ucyBpbnRvIG11bHRpcGxlIGJ1bmRsZXMgYW5kIGxvYWQgdGhlbSBvbiBkZW1hbmQuXHJcbiAqIERvaW5nIHRoaXMgdHJhbnNwYXJlbnRseSBpcyBub3QgdHJpdmlhbC5cclxuICpcclxuICogVGhlIEFuZ3VsYXIgcm91dGVyIHNlcnZpY2Ugc29sdmVzIHRoZXNlIHByb2JsZW1zLiBVc2luZyB0aGUgcm91dGVyLCB5b3UgY2FuIGRlY2xhcmF0aXZlbHkgc3BlY2lmeVxyXG4gKiBhcHBsaWNhdGlvbiBzdGF0ZXMsIG1hbmFnZSBzdGF0ZSB0cmFuc2l0aW9ucyB3aGlsZSB0YWtpbmcgY2FyZSBvZiB0aGUgVVJMLCBhbmQgbG9hZCBidW5kbGVzIG9uXHJcbiAqIGRlbWFuZC5cclxuICpcclxuICogQHNlZSBbUm91dGluZyBhbmQgTmF2aWdhdGlvbl0oZ3VpZGUvcm91dGVyLmh0bWwpIGZvciBhblxyXG4gKiBvdmVydmlldyBvZiBob3cgdGhlIHJvdXRlciBzZXJ2aWNlIHNob3VsZCBiZSB1c2VkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXJNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoZ3VhcmQ6IGFueSwgcm91dGVyOiBSb3V0ZXIpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuZCBjb25maWd1cmVzIGEgbW9kdWxlIHdpdGggYWxsIHRoZSByb3V0ZXIgcHJvdmlkZXJzIGFuZCBkaXJlY3RpdmVzLlxyXG4gICAgICogT3B0aW9uYWxseSBzZXRzIHVwIGFuIGFwcGxpY2F0aW9uIGxpc3RlbmVyIHRvIHBlcmZvcm0gYW4gaW5pdGlhbCBuYXZpZ2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByb3V0ZXMgQW4gYXJyYXkgb2YgYFJvdXRlYCBvYmplY3RzIHRoYXQgZGVmaW5lIHRoZSBuYXZpZ2F0aW9uIHBhdGhzIGZvciB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gY29uZmlnIEFuIGBFeHRyYU9wdGlvbnNgIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRoYXQgY29udHJvbHMgaG93IG5hdmlnYXRpb24gaXMgcGVyZm9ybWVkLlxyXG4gICAgICogQHJldHVybiBUaGUgbmV3IHJvdXRlciBtb2R1bGUuXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIGZvclJvb3Qocm91dGVzOiBSb3V0ZXMsIGNvbmZpZz86IEV4dHJhT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um91dGVyTW9kdWxlPjtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG1vZHVsZSB3aXRoIGFsbCB0aGUgcm91dGVyIGRpcmVjdGl2ZXMgYW5kIGEgcHJvdmlkZXIgcmVnaXN0ZXJpbmcgcm91dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9yQ2hpbGQocm91dGVzOiBSb3V0ZXMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvdXRlck1vZHVsZT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogQWN0cyBhcyBhIHBsYWNlaG9sZGVyIHRoYXQgQW5ndWxhciBkeW5hbWljYWxseSBmaWxscyBiYXNlZCBvbiB0aGUgY3VycmVudCByb3V0ZXIgc3RhdGUuXHJcbiAqXHJcbiAqIEVhY2ggb3V0bGV0IGNhbiBoYXZlIGEgdW5pcXVlIG5hbWUsIGRldGVybWluZWQgYnkgdGhlIG9wdGlvbmFsIGBuYW1lYCBhdHRyaWJ1dGUuXHJcbiAqIFRoZSBuYW1lIGNhbm5vdCBiZSBzZXQgb3IgY2hhbmdlZCBkeW5hbWljYWxseS4gSWYgbm90IHNldCwgZGVmYXVsdCB2YWx1ZSBpcyBcInByaW1hcnlcIi5cclxuICpcclxuICogYGBgXHJcbiAqIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICogPHJvdXRlci1vdXRsZXQgbmFtZT0nbGVmdCc+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiA8cm91dGVyLW91dGxldCBuYW1lPSdyaWdodCc+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiBgYGBcclxuICpcclxuICogQSByb3V0ZXIgb3V0bGV0IGVtaXRzIGFuIGFjdGl2YXRlIGV2ZW50IHdoZW4gYSBuZXcgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCxcclxuICogYW5kIGEgZGVhY3RpdmF0ZSBldmVudCB3aGVuIGEgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICpcclxuICogYGBgXHJcbiAqIDxyb3V0ZXItb3V0bGV0XHJcbiAqICAgKGFjdGl2YXRlKT0nb25BY3RpdmF0ZSgkZXZlbnQpJ1xyXG4gKiAgIChkZWFjdGl2YXRlKT0nb25EZWFjdGl2YXRlKCRldmVudCknPjwvcm91dGVyLW91dGxldD5cclxuICogYGBgXHJcbiAqIEBuZ01vZHVsZSBSb3V0ZXJNb2R1bGVcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyT3V0bGV0IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRDb250ZXh0cztcclxuICAgIHByaXZhdGUgbG9jYXRpb247XHJcbiAgICBwcml2YXRlIHJlc29sdmVyO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjtcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU7XHJcbiAgICBwcml2YXRlIG5hbWU7XHJcbiAgICBhY3RpdmF0ZUV2ZW50czogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBkZWFjdGl2YXRlRXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgbmFtZTogc3RyaW5nLCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBnZXQgaXNBY3RpdmF0ZWQoKTogYm9vbGVhbjtcclxuICAgIGdldCBjb21wb25lbnQoKTogT2JqZWN0O1xyXG4gICAgZ2V0IGFjdGl2YXRlZFJvdXRlKCk6IEFjdGl2YXRlZFJvdXRlO1xyXG4gICAgZ2V0IGFjdGl2YXRlZFJvdXRlRGF0YSgpOiBEYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYFJvdXRlUmV1c2VTdHJhdGVneWAgaW5zdHJ1Y3RzIHRvIGRldGFjaCB0aGUgc3VidHJlZVxyXG4gICAgICovXHJcbiAgICBkZXRhY2goKTogQ29tcG9uZW50UmVmPGFueT47XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBgUm91dGVSZXVzZVN0cmF0ZWd5YCBpbnN0cnVjdHMgdG8gcmUtYXR0YWNoIGEgcHJldmlvdXNseSBkZXRhY2hlZCBzdWJ0cmVlXHJcbiAgICAgKi9cclxuICAgIGF0dGFjaChyZWY6IENvbXBvbmVudFJlZjxhbnk+LCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpOiB2b2lkO1xyXG4gICAgZGVhY3RpdmF0ZSgpOiB2b2lkO1xyXG4gICAgYWN0aXZhdGVXaXRoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB8IG51bGwpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHByZWxvYWRlciBvcHRpbWlzdGljYWxseSBsb2FkcyBhbGwgcm91dGVyIGNvbmZpZ3VyYXRpb25zIHRvXHJcbiAqIG1ha2UgbmF2aWdhdGlvbnMgaW50byBsYXppbHktbG9hZGVkIHNlY3Rpb25zIG9mIHRoZSBhcHBsaWNhdGlvbiBmYXN0ZXIuXHJcbiAqXHJcbiAqIFRoZSBwcmVsb2FkZXIgcnVucyBpbiB0aGUgYmFja2dyb3VuZC4gV2hlbiB0aGUgcm91dGVyIGJvb3RzdHJhcHMsIHRoZSBwcmVsb2FkZXJcclxuICogc3RhcnRzIGxpc3RlbmluZyB0byBhbGwgbmF2aWdhdGlvbiBldmVudHMuIEFmdGVyIGV2ZXJ5IHN1Y2ggZXZlbnQsIHRoZSBwcmVsb2FkZXJcclxuICogd2lsbCBjaGVjayBpZiBhbnkgY29uZmlndXJhdGlvbnMgY2FuIGJlIGxvYWRlZCBsYXppbHkuXHJcbiAqXHJcbiAqIElmIGEgcm91dGUgaXMgcHJvdGVjdGVkIGJ5IGBjYW5Mb2FkYCBndWFyZHMsIHRoZSBwcmVsb2FkZWQgd2lsbCBub3QgbG9hZCBpdC5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyUHJlbG9hZGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgcm91dGVyO1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgcHJlbG9hZGluZ1N0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBsb2FkZXI7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBtb2R1bGVMb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgY29tcGlsZXI6IENvbXBpbGVyLCBpbmplY3RvcjogSW5qZWN0b3IsIHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZGluZ1N0cmF0ZWd5KTtcclxuICAgIHNldFVwUHJlbG9hZGluZygpOiB2b2lkO1xyXG4gICAgcHJlbG9hZCgpOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzUm91dGVzO1xyXG4gICAgcHJpdmF0ZSBwcmVsb2FkQ29uZmlnO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgdGhlIHJvdXRlciBhcyBhIHRyZWUgb2YgYWN0aXZhdGVkIHJvdXRlcy5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogRXZlcnkgbm9kZSBpbiB0aGUgcm91dGUgdHJlZSBpcyBhbiBgQWN0aXZhdGVkUm91dGVgIGluc3RhbmNlXHJcbiAqIHRoYXQga25vd3MgYWJvdXQgdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycyxcclxuICogYW5kIHRoZSByZXNvbHZlZCBkYXRhLlxyXG4gKiBVc2UgdGhlIGBBY3RpdmF0ZWRSb3V0ZWAgcHJvcGVydGllcyB0byB0cmF2ZXJzZSB0aGUgdHJlZSBmcm9tIGFueSBub2RlLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XHJcbiAqICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XHJcbiAqICAgICBjb25zdCByb290OiBBY3RpdmF0ZWRSb3V0ZSA9IHN0YXRlLnJvb3Q7XHJcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcclxuICogICAgIGNvbnN0IGlkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBjaGlsZC5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XHJcbiAqICAgICAvLy4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHNlZSBgQWN0aXZhdGVkUm91dGVgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJvdXRlclN0YXRlIGV4dGVuZHMgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbTxBY3RpdmF0ZWRSb3V0ZT4ge1xyXG4gICAgLyoqIFRoZSBjdXJyZW50IHNuYXBzaG90IG9mIHRoZSByb3V0ZXIgc3RhdGUgKi9cclxuICAgIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHN0YXRlIG9mIHRoZSByb3V0ZXIgYXQgYSBtb21lbnQgaW4gdGltZS5cclxuICpcclxuICogVGhpcyBpcyBhIHRyZWUgb2YgYWN0aXZhdGVkIHJvdXRlIHNuYXBzaG90cy4gRXZlcnkgbm9kZSBpbiB0aGlzIHRyZWUga25vd3MgYWJvdXRcclxuICogdGhlIFwiY29uc3VtZWRcIiBVUkwgc2VnbWVudHMsIHRoZSBleHRyYWN0ZWQgcGFyYW1ldGVycywgYW5kIHRoZSByZXNvbHZlZCBkYXRhLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBcclxuICogQENvbXBvbmVudCh7dGVtcGxhdGVVcmw6J3RlbXBsYXRlLmh0bWwnfSlcclxuICogY2xhc3MgTXlDb21wb25lbnQge1xyXG4gKiAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XHJcbiAqICAgICBjb25zdCBzdGF0ZTogUm91dGVyU3RhdGUgPSByb3V0ZXIucm91dGVyU3RhdGU7XHJcbiAqICAgICBjb25zdCBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCA9IHN0YXRlLnNuYXBzaG90O1xyXG4gKiAgICAgY29uc3Qgcm9vdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCA9IHNuYXBzaG90LnJvb3Q7XHJcbiAqICAgICBjb25zdCBjaGlsZCA9IHJvb3QuZmlyc3RDaGlsZDtcclxuICogICAgIGNvbnN0IGlkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBjaGlsZC5wYXJhbXMubWFwKHAgPT4gcC5pZCk7XHJcbiAqICAgICAvLy4uLlxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGVyU3RhdGVTbmFwc2hvdCBleHRlbmRzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX208QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4ge1xyXG4gICAgLyoqIFRoZSB1cmwgZnJvbSB3aGljaCB0aGlzIHNuYXBzaG90IHdhcyBjcmVhdGVkICovXHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5LyNkaS10b2tlbikgZm9yIGEgcm91dGVyIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEBzZWUgYFJPVVRFU2BcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgUk9VVEVTOiBJbmplY3Rpb25Ub2tlbjxSb3V0ZVtdW10+O1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSByb3V0ZSBjb25maWd1cmF0aW9uIGZvciB0aGUgUm91dGVyIHNlcnZpY2UuXHJcbiAqIEFuIGFycmF5IG9mIGBSb3V0ZWAgb2JqZWN0cywgdXNlZCBpbiBgUm91dGVyLmNvbmZpZ2AgYW5kIGZvciBuZXN0ZWQgcm91dGUgY29uZmlndXJhdGlvbnNcclxuICogaW4gYFJvdXRlLmNoaWxkcmVuYC5cclxuICpcclxuICogQHNlZSBgUm91dGVgXHJcbiAqIEBzZWUgYFJvdXRlcmBcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBSb3V0ZXMgPSBSb3V0ZVtdO1xyXG5cclxuLyoqXHJcbiAqQW4gZXZlbnQgdHJpZ2dlcmVkIHdoZW4gcm91dGVzIGFyZSByZWNvZ25pemVkLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0ZXNSZWNvZ25pemVkIGV4dGVuZHMgUm91dGVyRXZlbnQge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHVybEFmdGVyUmVkaXJlY3RzOiBzdHJpbmc7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBpZDogbnVtYmVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB1cmw6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdXJsQWZ0ZXJSZWRpcmVjdHM6IHN0cmluZywgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEEgcG9saWN5IGZvciB3aGVuIHRvIHJ1biBndWFyZHMgYW5kIHJlc29sdmVycyBvbiBhIHJvdXRlLlxyXG4gKlxyXG4gKiBAc2VlIGBSb3V0ZSNydW5HdWFyZHNBbmRSZXNvbHZlcnNgXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUnVuR3VhcmRzQW5kUmVzb2x2ZXJzID0gJ3BhdGhQYXJhbXNDaGFuZ2UnIHwgJ3BhdGhQYXJhbXNPclF1ZXJ5UGFyYW1zQ2hhbmdlJyB8ICdwYXJhbXNDaGFuZ2UnIHwgJ3BhcmFtc09yUXVlcnlQYXJhbXNDaGFuZ2UnIHwgJ2Fsd2F5cycgfCAoKGZyb206IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHRvOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSA9PiBib29sZWFuKTtcclxuXHJcbi8qKlxyXG4gKiBBbiBldmVudCB0cmlnZ2VyZWQgYnkgc2Nyb2xsaW5nLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTY3JvbGwge1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYWRvbmx5IHJvdXRlckV2ZW50OiBOYXZpZ2F0aW9uRW5kO1xyXG4gICAgLyoqIEBkb2NzTm90UmVxdWlyZWQgKi9cclxuICAgIHJlYWRvbmx5IHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByZWFkb25seSBhbmNob3I6IHN0cmluZyB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICByb3V0ZXJFdmVudDogTmF2aWdhdGlvbkVuZCwgXHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0gfCBudWxsLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICBhbmNob3I6IHN0cmluZyB8IG51bGwpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIG1pZ3JhdGUgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyB0byBBbmd1bGFyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBVcmxIYW5kbGluZ1N0cmF0ZWd5IHtcclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgdGhlIHJvdXRlciBpZiB0aGlzIFVSTCBzaG91bGQgYmUgcHJvY2Vzc2VkLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gaXQgcmV0dXJucyB0cnVlLCB0aGUgcm91dGVyIHdpbGwgZXhlY3V0ZSB0aGUgcmVndWxhciBuYXZpZ2F0aW9uLlxyXG4gICAgICogV2hlbiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgcm91dGVyIHdpbGwgc2V0IHRoZSByb3V0ZXIgc3RhdGUgdG8gYW4gZW1wdHkgc3RhdGUuXHJcbiAgICAgKiBBcyBhIHJlc3VsdCwgYWxsIHRoZSBhY3RpdmUgY29tcG9uZW50cyB3aWxsIGJlIGRlc3Ryb3llZC5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNob3VsZFByb2Nlc3NVcmwodXJsOiBVcmxUcmVlKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdHMgdGhlIHBhcnQgb2YgdGhlIFVSTCB0aGF0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoZSByb3V0ZXIuXHJcbiAgICAgKiBUaGUgcmVzdCBvZiB0aGUgVVJMIHdpbGwgcmVtYWluIHVudG91Y2hlZC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZXh0cmFjdCh1cmw6IFVybFRyZWUpOiBVcmxUcmVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBNZXJnZXMgdGhlIFVSTCBmcmFnbWVudCB3aXRoIHRoZSByZXN0IG9mIHRoZSBVUkwuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IG1lcmdlKG5ld1VybFBhcnQ6IFVybFRyZWUsIHJhd1VybDogVXJsVHJlZSk6IFVybFRyZWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGZ1bmN0aW9uIGZvciBtYXRjaGluZyBhIHJvdXRlIGFnYWluc3QgVVJMcy4gSW1wbGVtZW50IGEgY3VzdG9tIFVSTCBtYXRjaGVyXHJcbiAqIGZvciBgUm91dGUubWF0Y2hlcmAgd2hlbiBhIGNvbWJpbmF0aW9uIG9mIGBwYXRoYCBhbmQgYHBhdGhNYXRjaGBcclxuICogaXMgbm90IGV4cHJlc3NpdmUgZW5vdWdoLiBDYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGBwYXRoYCBhbmQgYHBhdGhNYXRjaGAuXHJcbiAqXHJcbiAqIEBwYXJhbSBzZWdtZW50cyBBbiBhcnJheSBvZiBVUkwgc2VnbWVudHMuXHJcbiAqIEBwYXJhbSBncm91cCBBIHNlZ21lbnQgZ3JvdXAuXHJcbiAqIEBwYXJhbSByb3V0ZSBUaGUgcm91dGUgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICogQHJldHVybnMgVGhlIG1hdGNoLXJlc3VsdC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBtYXRjaGVyIG1hdGNoZXMgSFRNTCBmaWxlcy5cclxuICpcclxuICogYGBgXHJcbiAqIGV4cG9ydCBmdW5jdGlvbiBodG1sRmlsZXModXJsOiBVcmxTZWdtZW50W10pIHtcclxuICogICByZXR1cm4gdXJsLmxlbmd0aCA9PT0gMSAmJiB1cmxbMF0ucGF0aC5lbmRzV2l0aCgnLmh0bWwnKSA/ICh7Y29uc3VtZWQ6IHVybH0pIDogbnVsbDtcclxuICogfVxyXG4gKlxyXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzID0gW3sgbWF0Y2hlcjogaHRtbEZpbGVzLCBjb21wb25lbnQ6IEFueUNvbXBvbmVudCB9XTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgVXJsTWF0Y2hlciA9IChzZWdtZW50czogVXJsU2VnbWVudFtdLCBncm91cDogVXJsU2VnbWVudEdyb3VwLCByb3V0ZTogUm91dGUpID0+IFVybE1hdGNoUmVzdWx0O1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBtYXRjaGluZyBVUkxzIHdpdGggYSBjdXN0b20gbWF0Y2hpbmcgZnVuY3Rpb24uXHJcbiAqXHJcbiAqICogYGNvbnN1bWVkYCBpcyBhbiBhcnJheSBvZiB0aGUgY29uc3VtZWQgVVJMIHNlZ21lbnRzLlxyXG4gKiAqIGBwb3NQYXJhbXNgIGlzIGEgbWFwIG9mIHBvc2l0aW9uYWwgcGFyYW1ldGVycy5cclxuICpcclxuICogQHNlZSBgVXJsTWF0Y2hlcigpYFxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFVybE1hdGNoUmVzdWx0ID0ge1xyXG4gICAgY29uc3VtZWQ6IFVybFNlZ21lbnRbXTtcclxuICAgIHBvc1BhcmFtcz86IHtcclxuICAgICAgICBbbmFtZTogc3RyaW5nXTogVXJsU2VnbWVudDtcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgVVJMIHNlZ21lbnQuXHJcbiAqXHJcbiAqIEEgVXJsU2VnbWVudCBpcyBhIHBhcnQgb2YgYSBVUkwgYmV0d2VlbiB0aGUgdHdvIHNsYXNoZXMuIEl0IGNvbnRhaW5zIGEgcGF0aCBhbmQgdGhlIG1hdHJpeFxyXG4gKiBwYXJhbWV0ZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2VnbWVudC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICrCoCMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPSByb3V0ZXIucGFyc2VVcmwoJy90ZWFtO2lkPTMzJyk7XHJcbiAqICAgICBjb25zdCBnOiBVcmxTZWdtZW50R3JvdXAgPSB0cmVlLnJvb3QuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xyXG4gKiAgICAgY29uc3QgczogVXJsU2VnbWVudFtdID0gZy5zZWdtZW50cztcclxuICogICAgIHNbMF0ucGF0aDsgLy8gcmV0dXJucyAndGVhbSdcclxuICogICAgIHNbMF0ucGFyYW1ldGVyczsgLy8gcmV0dXJucyB7aWQ6IDMzfVxyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsU2VnbWVudCB7XHJcbiAgICAvKiogVGhlIHBhdGggcGFydCBvZiBhIFVSTCBzZWdtZW50ICovXHJcbiAgICBwYXRoOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIG1hdHJpeCBwYXJhbWV0ZXJzIGFzc29jaWF0ZWQgd2l0aCBhIHNlZ21lbnQgKi9cclxuICAgIHBhcmFtZXRlcnM6IHtcclxuICAgICAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIFRoZSBwYXRoIHBhcnQgb2YgYSBVUkwgc2VnbWVudCAqL1xyXG4gICAgcGF0aDogc3RyaW5nLCBcclxuICAgIC8qKiBUaGUgbWF0cml4IHBhcmFtZXRlcnMgYXNzb2NpYXRlZCB3aXRoIGEgc2VnbWVudCAqL1xyXG4gICAgcGFyYW1ldGVyczoge1xyXG4gICAgICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIGdldCBwYXJhbWV0ZXJNYXAoKTogUGFyYW1NYXA7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcHJlc2VudHMgdGhlIHBhcnNlZCBVUkwgc2VnbWVudCBncm91cC5cclxuICpcclxuICogU2VlIGBVcmxUcmVlYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsU2VnbWVudEdyb3VwIHtcclxuICAgIC8qKiBUaGUgVVJMIHNlZ21lbnRzIG9mIHRoaXMgZ3JvdXAuIFNlZSBgVXJsU2VnbWVudGAgZm9yIG1vcmUgaW5mb3JtYXRpb24gKi9cclxuICAgIHNlZ21lbnRzOiBVcmxTZWdtZW50W107XHJcbiAgICAvKiogVGhlIGxpc3Qgb2YgY2hpbGRyZW4gb2YgdGhpcyBncm91cCAqL1xyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXA7XHJcbiAgICB9O1xyXG4gICAgLyoqIFRoZSBwYXJlbnQgbm9kZSBpbiB0aGUgdXJsIHRyZWUgKi9cclxuICAgIHBhcmVudDogVXJsU2VnbWVudEdyb3VwIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgLyoqIFRoZSBVUkwgc2VnbWVudHMgb2YgdGhpcyBncm91cC4gU2VlIGBVcmxTZWdtZW50YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiAqL1xyXG4gICAgc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgXHJcbiAgICAvKiogVGhlIGxpc3Qgb2YgY2hpbGRyZW4gb2YgdGhpcyBncm91cCAqL1xyXG4gICAgY2hpbGRyZW46IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBVcmxTZWdtZW50R3JvdXA7XHJcbiAgICB9KTtcclxuICAgIC8qKiBXaGV0aGVyIHRoZSBzZWdtZW50IGhhcyBjaGlsZCBzZWdtZW50cyAqL1xyXG4gICAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbjtcclxuICAgIC8qKiBOdW1iZXIgb2YgY2hpbGQgc2VnbWVudHMgKi9cclxuICAgIGdldCBudW1iZXJPZkNoaWxkcmVuKCk6IG51bWJlcjtcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogU2VyaWFsaXplcyBhbmQgZGVzZXJpYWxpemVzIGEgVVJMIHN0cmluZyBpbnRvIGEgVVJMIHRyZWUuXHJcbiAqXHJcbiAqIFRoZSB1cmwgc2VyaWFsaXphdGlvbiBzdHJhdGVneSBpcyBjdXN0b21pemFibGUuIFlvdSBjYW5cclxuICogbWFrZSBhbGwgVVJMcyBjYXNlIGluc2Vuc2l0aXZlIGJ5IHByb3ZpZGluZyBhIGN1c3RvbSBVcmxTZXJpYWxpemVyLlxyXG4gKlxyXG4gKiBTZWUgYERlZmF1bHRVcmxTZXJpYWxpemVyYCBmb3IgYW4gZXhhbXBsZSBvZiBhIFVSTCBzZXJpYWxpemVyLlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBVcmxTZXJpYWxpemVyIHtcclxuICAgIC8qKiBQYXJzZSBhIHVybCBpbnRvIGEgYFVybFRyZWVgICovXHJcbiAgICBhYnN0cmFjdCBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWU7XHJcbiAgICAvKiogQ29udmVydHMgYSBgVXJsVHJlZWAgaW50byBhIHVybCAqL1xyXG4gICAgYWJzdHJhY3Qgc2VyaWFsaXplKHRyZWU6IFVybFRyZWUpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVwcmVzZW50cyB0aGUgcGFyc2VkIFVSTC5cclxuICpcclxuICogU2luY2UgYSByb3V0ZXIgc3RhdGUgaXMgYSB0cmVlLCBhbmQgdGhlIFVSTCBpcyBub3RoaW5nIGJ1dCBhIHNlcmlhbGl6ZWQgc3RhdGUsIHRoZSBVUkwgaXMgYVxyXG4gKiBzZXJpYWxpemVkIHRyZWUuXHJcbiAqIFVybFRyZWUgaXMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IHByb3ZpZGVzIGEgbG90IG9mIGFmZm9yZGFuY2VzIGluIGRlYWxpbmcgd2l0aCBVUkxzXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAQ29tcG9uZW50KHt0ZW1wbGF0ZVVybDondGVtcGxhdGUuaHRtbCd9KVxyXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XHJcbiAqICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpIHtcclxuICogICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPVxyXG4gKiAgICAgICByb3V0ZXIucGFyc2VVcmwoJy90ZWFtLzMzLyh1c2VyL3ZpY3Rvci8vc3VwcG9ydDpoZWxwKT9kZWJ1Zz10cnVlI2ZyYWdtZW50Jyk7XHJcbiAqICAgICBjb25zdCBmID0gdHJlZS5mcmFnbWVudDsgLy8gcmV0dXJuICdmcmFnbWVudCdcclxuICogICAgIGNvbnN0IHEgPSB0cmVlLnF1ZXJ5UGFyYW1zOyAvLyByZXR1cm5zIHtkZWJ1ZzogJ3RydWUnfVxyXG4gKiAgICAgY29uc3QgZzogVXJsU2VnbWVudEdyb3VwID0gdHJlZS5yb290LmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcclxuICogICAgIGNvbnN0IHM6IFVybFNlZ21lbnRbXSA9IGcuc2VnbWVudHM7IC8vIHJldHVybnMgMiBzZWdtZW50cyAndGVhbScgYW5kICczMydcclxuICogICAgIGcuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdLnNlZ21lbnRzOyAvLyByZXR1cm5zIDIgc2VnbWVudHMgJ3VzZXInIGFuZCAndmljdG9yJ1xyXG4gKiAgICAgZy5jaGlsZHJlblsnc3VwcG9ydCddLnNlZ21lbnRzOyAvLyByZXR1cm4gMSBzZWdtZW50ICdoZWxwJ1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXJsVHJlZSB7XHJcbiAgICAvKiogVGhlIHJvb3Qgc2VnbWVudCBncm91cCBvZiB0aGUgVVJMIHRyZWUgKi9cclxuICAgIHJvb3Q6IFVybFNlZ21lbnRHcm91cDtcclxuICAgIC8qKiBUaGUgcXVlcnkgcGFyYW1zIG9mIHRoZSBVUkwgKi9cclxuICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXM7XHJcbiAgICAvKiogVGhlIGZyYWdtZW50IG9mIHRoZSBVUkwgKi9cclxuICAgIGZyYWdtZW50OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgZ2V0IHF1ZXJ5UGFyYW1NYXAoKTogUGFyYW1NYXA7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqL1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3QgVkVSU0lPTjogVmVyc2lvbjtcclxuXHJcbi8qKlxyXG4gKiBAZG9jc05vdFJlcXVpcmVkXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9hOiBJbmplY3Rpb25Ub2tlbjx2b2lkPjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2IoKTogTmdQcm9iZVRva2VuO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfYyhyb3V0ZXI6IFJvdXRlciwgdmlld3BvcnRTY3JvbGxlcjogVmlld3BvcnRTY3JvbGxlciwgY29uZmlnOiBFeHRyYU9wdGlvbnMpOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9vO1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZChwbGF0Zm9ybUxvY2F0aW9uU3RyYXRlZ3k6IFBsYXRmb3JtTG9jYXRpb24sIGJhc2VIcmVmOiBzdHJpbmcsIG9wdGlvbnM/OiBFeHRyYU9wdGlvbnMpOiBIYXNoTG9jYXRpb25TdHJhdGVneSB8IFBhdGhMb2NhdGlvblN0cmF0ZWd5O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfZShyb3V0ZXI6IFJvdXRlcik6IGFueTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2YocmVmOiBBcHBsaWNhdGlvblJlZiwgdXJsU2VyaWFsaXplcjogVXJsU2VyaWFsaXplciwgY29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsIGxvY2F0aW9uOiBMb2NhdGlvbiwgaW5qZWN0b3I6IEluamVjdG9yLCBsb2FkZXI6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgY29tcGlsZXI6IENvbXBpbGVyLCBjb25maWc6IFJvdXRlW11bXSwgb3B0cz86IEV4dHJhT3B0aW9ucywgdXJsSGFuZGxpbmdTdHJhdGVneT86IFVybEhhbmRsaW5nU3RyYXRlZ3ksIHJvdXRlUmV1c2VTdHJhdGVneT86IFJvdXRlUmV1c2VTdHJhdGVneSk6IFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2cocm91dGVyOiBSb3V0ZXIpOiBBY3RpdmF0ZWRSb3V0ZTtcclxuXHJcbi8qKlxyXG4gKiBSb3V0ZXIgaW5pdGlhbGl6YXRpb24gcmVxdWlyZXMgdHdvIHN0ZXBzOlxyXG4gKlxyXG4gKiBGaXJzdCwgd2Ugc3RhcnQgdGhlIG5hdmlnYXRpb24gaW4gYSBgQVBQX0lOSVRJQUxJWkVSYCB0byBibG9jayB0aGUgYm9vdHN0cmFwIGlmXHJcbiAqIGEgcmVzb2x2ZXIgb3IgYSBndWFyZCBleGVjdXRlcyBhc3luY2hyb25vdXNseS5cclxuICpcclxuICogTmV4dCwgd2UgYWN0dWFsbHkgcnVuIGFjdGl2YXRpb24gaW4gYSBgQk9PVFNUUkFQX0xJU1RFTkVSYCwgdXNpbmcgdGhlXHJcbiAqIGBhZnRlclByZWFjdGl2YXRpb25gIGhvb2sgcHJvdmlkZWQgYnkgdGhlIHJvdXRlci5cclxuICogVGhlIHJvdXRlciBuYXZpZ2F0aW9uIHN0YXJ0cywgcmVhY2hlcyB0aGUgcG9pbnQgd2hlbiBwcmVhY3RpdmF0aW9uIGlzIGRvbmUsIGFuZCB0aGVuXHJcbiAqIHBhdXNlcy4gSXQgd2FpdHMgZm9yIHRoZSBob29rIHRvIGJlIHJlc29sdmVkLiBXZSB0aGVuIHJlc29sdmUgaXQgb25seSBpbiBhIGJvb3RzdHJhcCBsaXN0ZW5lci5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gge1xyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcclxuICAgIHByaXZhdGUgaW5pdE5hdmlnYXRpb247XHJcbiAgICBwcml2YXRlIHJlc3VsdE9mUHJlYWN0aXZhdGlvbkRvbmU7XHJcbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpO1xyXG4gICAgYXBwSW5pdGlhbGl6ZXIoKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgYm9vdHN0cmFwTGlzdGVuZXIoYm9vdHN0cmFwcGVkQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGlzTGVnYWN5RW5hYmxlZDtcclxuICAgIHByaXZhdGUgaXNMZWdhY3lEaXNhYmxlZDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaShyOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oKTogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG5cclxuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaihyOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9oKTogKGJvb3RzdHJhcHBlZENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9rKCk6ICh0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaCB8IHtcclxuICAgIHByb3ZpZGU6IEluamVjdGlvblRva2VuPCgoKSA9PiB2b2lkKVtdPjtcclxuICAgIG11bHRpOiBib29sZWFuO1xyXG4gICAgdXNlRmFjdG9yeTogdHlwZW9mIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2k7XHJcbiAgICBkZXBzOiAodHlwZW9mIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX2gpW107XHJcbiAgICB1c2VFeGlzdGluZz86IHVuZGVmaW5lZDtcclxufSB8IHtcclxuICAgIHByb3ZpZGU6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcbiAgICB1c2VGYWN0b3J5OiB0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfajtcclxuICAgIGRlcHM6ICh0eXBlb2YgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfaClbXTtcclxuICAgIG11bHRpPzogdW5kZWZpbmVkO1xyXG4gICAgdXNlRXhpc3Rpbmc/OiB1bmRlZmluZWQ7XHJcbn0gfCB7XHJcbiAgICBwcm92aWRlOiBJbmplY3Rpb25Ub2tlbjwoKGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkKVtdPjtcclxuICAgIG11bHRpOiBib29sZWFuO1xyXG4gICAgdXNlRXhpc3Rpbmc6IEluamVjdGlvblRva2VuPChjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZD47XHJcbiAgICB1c2VGYWN0b3J5PzogdW5kZWZpbmVkO1xyXG4gICAgZGVwcz86IHVuZGVmaW5lZDtcclxufSlbXTtcclxuXHJcblxyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9tPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3Q6IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX248VD4pO1xyXG4gICAgZ2V0IHJvb3QoKTogVDtcclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbjxUPiB7XHJcbiAgICB2YWx1ZTogVDtcclxuICAgIGNoaWxkcmVuOiDJtWFuZ3VsYXJfcGFja2FnZXNfcm91dGVyX3JvdXRlcl9uPFQ+W107XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgY2hpbGRyZW46IMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX248VD5bXSk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIMm1YW5ndWxhcl9wYWNrYWdlc19yb3V0ZXJfcm91dGVyX28gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gICAgcHJpdmF0ZSByb3V0ZXI7XHJcbiAgICAvKiogQGRvY3NOb3RSZXF1aXJlZCAqLyByZWFkb25seSB2aWV3cG9ydFNjcm9sbGVyOiBWaWV3cG9ydFNjcm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zO1xyXG4gICAgcHJpdmF0ZSByb3V0ZXJFdmVudHNTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIHNjcm9sbEV2ZW50c1N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgbGFzdElkO1xyXG4gICAgcHJpdmF0ZSBsYXN0U291cmNlO1xyXG4gICAgcHJpdmF0ZSByZXN0b3JlZElkO1xyXG4gICAgcHJpdmF0ZSBzdG9yZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBcclxuICAgIC8qKiBAZG9jc05vdFJlcXVpcmVkICovIHZpZXdwb3J0U2Nyb2xsZXI6IFZpZXdwb3J0U2Nyb2xsZXIsIG9wdGlvbnM/OiB7XHJcbiAgICAgICAgc2Nyb2xsUG9zaXRpb25SZXN0b3JhdGlvbj86ICdkaXNhYmxlZCcgfCAnZW5hYmxlZCcgfCAndG9wJztcclxuICAgICAgICBhbmNob3JTY3JvbGxpbmc/OiAnZGlzYWJsZWQnIHwgJ2VuYWJsZWQnO1xyXG4gICAgfSk7XHJcbiAgICBpbml0KCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGNyZWF0ZVNjcm9sbEV2ZW50cztcclxuICAgIHByaXZhdGUgY29uc3VtZVNjcm9sbEV2ZW50cztcclxuICAgIHByaXZhdGUgc2NoZWR1bGVTY3JvbGxFdmVudDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCBpbnRlcm5hbGx5IHdpdGhpbiB0aGUgcm91dGVyIHRvIGJlIGEgcGxhY2Vob2xkZXIgd2hlbiBhbiBlbXB0eVxyXG4gKiByb3V0ZXItb3V0bGV0IGlzIG5lZWRlZC4gRm9yIGV4YW1wbGUsIHdpdGggYSBjb25maWcgc3VjaCBhczpcclxuICpcclxuICogYHtwYXRoOiAncGFyZW50Jywgb3V0bGV0OiAnbmF2JywgY2hpbGRyZW46IFsuLi5dfWBcclxuICpcclxuICogSW4gb3JkZXIgdG8gcmVuZGVyLCB0aGVyZSBuZWVkcyB0byBiZSBhIGNvbXBvbmVudCBvbiB0aGlzIGNvbmZpZywgd2hpY2ggd2lsbCBkZWZhdWx0XHJcbiAqIHRvIHRoaXMgYEVtcHR5T3V0bGV0Q29tcG9uZW50YC5cclxuICovXHJcbmRlY2xhcmUgY2xhc3MgybVFbXB0eU91dGxldENvbXBvbmVudCB7XHJcbn1cclxuZXhwb3J0IHsgybVFbXB0eU91dGxldENvbXBvbmVudCB9XHJcbmV4cG9ydCB7IMm1RW1wdHlPdXRsZXRDb21wb25lbnQgYXMgybVhbmd1bGFyX3BhY2thZ2VzX3JvdXRlcl9yb3V0ZXJfbCB9XHJcblxyXG4vKipcclxuICogRmxhdHRlbnMgc2luZ2xlLWxldmVsIG5lc3RlZCBhcnJheXMuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiDJtWZsYXR0ZW48VD4oYXJyOiBUW11bXSk6IFRbXTtcclxuXHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IMm1Uk9VVEVSX1BST1ZJREVSUzogUHJvdmlkZXJbXTtcclxuXHJcbmV4cG9ydCB7IH1cclxuIl19