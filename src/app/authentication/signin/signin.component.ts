import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router } from "@angular/router";
import { authService } from "../../services/auth/auth.service";
import { UsuarioAutenticado, UsuarioViewModel } from "../../model/usuario/usuarioAutenticado.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  public userAuth: UsuarioAutenticado;
  public parameter: UsuarioViewModel;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: authService,
    private toastr: ToastrService,
  ) {
    this.parameter = new UsuarioViewModel();
  }

  ngOnInit() {
    this.form = this.fb.group({
      nombreUsuario: [this.parameter.nombreUsuario, Validators.compose([Validators.required])],
      password: [this.parameter.password, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    const objData = Object.assign({}, this.form.value);
    const viewModel = { ...objData};

    this.usuarioService.authenticate(viewModel)
      .subscribe(usuario => {
        this.userAuth = usuario;

        if (usuario === null || usuario === undefined) {
          this.toastr.error("Usuario no encontrado");
        }
        else {
          if (this.userAuth.isValid) {
            this.usuarioService.setLoggedUser(this.userAuth);
            this.router.navigate(["dashboard/inicio"]);
          }
          else {
            this.toastr.error("Usuario o contraseña invalidos");
          }
        }
      },
        error => {
          this.toastr.error(error);
        }
      );

  }
}
