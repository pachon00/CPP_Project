import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";

import { AccordionDirective } from "../menu-accordion/accordion.directive";
import { AccordionLinkDirective } from "../menu-accordion/accordionlink.directive";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  providers: [AccordionDirective]
})
export class SidebarComponent {
  @Input()
  mode: string;
  @Output()
  toggleSidebar = new EventEmitter<void>();

  protected nav: AccordionDirective;

  constructor(@Inject(AccordionDirective) nav: AccordionDirective) {
    this.nav = nav;
  }

  closeAccordion() {
    this.nav.navlinks.forEach((link: AccordionLinkDirective) => {
      link.open = false;
    });
  }
}
