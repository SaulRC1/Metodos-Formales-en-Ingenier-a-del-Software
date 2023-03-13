export class Empleado {
    idEmpleado;
    dni;
    codigoDeEmpleado;
    nombre;
    apellidos;
    fechaDeNacimiento;
}

export class Cliente {
    idCliente;
    nombre;
    apellidos;
    numeroDeTarjeta;
}

class Terminal {
    idDeTerminal;
    codigoDeTerminal;
    cantidadDeDineroAlmacenado;

    ejecutarServicioDeTerminal() {

    }
}

export class TerminalDeVenta extends Terminal {
    empleadosPermitidos;
    typeName = "TerminalDeVenta";
}

export class TerminalDeCobroAutomatico extends Terminal {}

class Operacion {}

export class VentaMedianteEmpleado extends Operacion {
    autorDeLaVenta;
    cliente;
    montoCobrado;
    cambioDevuelto;
}

export class VentaPorCobroAutomatico extends Operacion {
    cliente;
    montoCobrado;
    cambioDevuelto;
}