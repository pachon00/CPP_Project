import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

import { BreakpointObserver } from "@angular/cdk/layout";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Title } from "@angular/platform-browser";
import { TranslateService } from "@ngx-translate/core";

const SMALL_WIDTH_BREAKPOINT = 991;

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: "app-layout",
  template: `
    <app-layout-inner
      [isScreenSmall]="isScreenSmall | async"
    ></app-layout-inner>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent {
  isScreenSmall: Observable<boolean>;

  constructor(public breakpoints: BreakpointObserver) {
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }
}

@Component({
  selector: "app-layout-inner",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  private _router: Subscription;
  @Input() isScreenSmall: boolean;

  routeOptions: Options;

  options = {
    lang: "en",
    theme: "light",
    settings: false,
    docked: false,
    boxed: false,
    opened: true,
    mode: "push"
  };

  _mode = this.options.mode;
  _autoCollapseWidth = 991;

  currentLang = "en";

  @ViewChild("sidebar")
  sidebar;

  constructor(
    private _element: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private modalService: NgbModal,
    private titleService: Title
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit(): void {
    this._router = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Scroll to top on view load
        document.querySelector(".main-content").scrollTop = 0;

        if (this.isOver()) {
          this._mode = "over";
          this.options.opened = false;
        }

        this.runOnRouteChange();
      });

    this.runOnRouteChange();
  }

  ngAfterViewInit(): void {
    setTimeout(_ => this.runOnRouteChange());
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  runOnRouteChange(): void {
    if (this.isOver() || this.router.url === "/maps/fullscreen") {
      this.options.opened = false;
    }

    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.routeOptions = activeRoute.snapshot.data;
    });

    if (this.routeOptions) {
      if (this.routeOptions.hasOwnProperty("heading")) {
        this.setTitle(this.routeOptions.heading);
      }
    }
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(
      "CPP - Control Pago a Proveedores| " + newTitle
    );
  }

  isOver(): boolean {
    return this.isScreenSmall;
  }

  toogleSidebar(): void {
    this.options.opened = !this.options.opened;
  }

  receiveMessage($event) {
    this.options = $event;
  }

  openSearch(search) {
    this.modalService.open(search, { windowClass: "search", backdrop: false });
  }

  toggleFullscreen(): void {
    const elem = this._element.nativeElement.querySelector(".main-content");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }
}
