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
        path: "signin",
        component: SigninComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "forgot",
        component: ForgotComponent
      },
      {
        path: "lockscreen",
        component: LockscreenComponent
      }
    ]
  },
  {
    path: "dashboard",
    children:[
      {
        path:"dashboard",
        component: DashboardComponent
      }
      ]
  }
];
