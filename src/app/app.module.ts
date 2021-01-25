import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective,
  AdminLayoutComponent,
  AuthLayoutComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  SidebarComponent
} from "./core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxValidatorModule } from "@why520crazy/ngx-validator";
import { RouterModule } from "@angular/router";
import { SidebarModule } from "ng-sidebar";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuard } from "../app/guard/auth.guard";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
  required: "This field cannot be empty",
  maxlength: "The length of this field cannot be greater than {requiredLength}",
  minlength: "The length of this field cannot be less than {requiredLength}",
  ngxUniqueCheck: "The input value already exists, please re-enter",
  email: "The format of the input message is incorrect",
  repeat: "Inconsistent input twice",
  pattern: "The option input format is incorrect",
  number: "Must enter a number",
  url: "The input URL format is incorrect",
  max: "The input value of this field cannot be greater than {max}",
  min: "The input value of this field cannot be less than {min}"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    LayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    NgbModule,
    DataTablesModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_API"
    }),
    NgxValidatorModule.forRoot({
      globalValidationMessages: DEFAULT_GLOBAL_VALIDATION_MESSAGES,
      validateOn: "blur"
    }),
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
