import { ForgotComponent } from "./forgot/forgot.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

export const AuthenticationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SigninComponent
      },
      {
        path: "signin",
        component: SigninComponent
      }
    ]
  }
];
