import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input()
  heading: string;
  @Output()
  toggleSidebar = new EventEmitter<void>();
  @Output()
  openSearch = new EventEmitter<void>();
  @Output()
  toggleFullscreen = new EventEmitter<void>();
  @Output() logoutUser = new EventEmitter<void>();
}
