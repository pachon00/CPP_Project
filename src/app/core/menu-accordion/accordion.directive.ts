import {
  AfterContentChecked,
  AfterViewInit,
  Directive,
  OnInit
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

import { AccordionLinkDirective } from "./accordionlink.directive";
import { filter } from "rxjs/operators";

@Directive({
  selector: "[appAccordion]"
})
export class AccordionDirective implements AfterContentChecked {
  public navlinks: Array<AccordionLinkDirective> = [];

  closeOtherLinks(openLink: AccordionLinkDirective): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }

  addLink(link: AccordionLinkDirective): void {
    this.navlinks.push(link);
  }

  removeGroup(link: AccordionLinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  checkOpenLinks() {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link.group) {
        const routeUrl = this.router.url;
        const currentUrl = routeUrl.split("/");
        if (currentUrl.indexOf(link.group) > 0) {
          link.open = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

  ngAfterContentChecked(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => this.checkOpenLinks());
  }

  constructor(private router: Router) {
    setTimeout(() => this.checkOpenLinks());
  }
}
