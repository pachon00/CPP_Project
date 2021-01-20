export class UsuarioAutenticado {
  public id: number;
  public rol: Rol;
  public user: string;
  public nombre: string;
  public sucursal: Sucursal;
  public isValid: boolean;
  public token: string;

  constructor () {

  }
}

export class UsuarioViewModel {
  public nombreUsuario: string;
  public password: string;

  constructor() {

  }
}

export class Rol {
  public id: number;
  public description: string;

  constructor() {

  }
}

export class Sucursal {
  public id: number;
  public nombre: string;

  constructor() {

  }
}
