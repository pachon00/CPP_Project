import { Error4Component } from "./error4/error4.component";
import { Error503Component } from "./error503/error503.component";
import { Error5Component } from "./error5/error5.component";
import { Routes } from "@angular/router";

export const ErrorRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "404",
        component: Error4Component
      },
      {
        path: "500",
        component: Error5Component
      },
      {
        path: "503",
        component: Error503Component
      }
    ]
  }
];
