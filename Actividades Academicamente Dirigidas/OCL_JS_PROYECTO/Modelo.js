export class Empleado {
    typeName = "Empleado";
    idEmpleado;
    dni;
    codigoDeEmpleado;
    nombre;
    apellidos;
    fechaDeNacimiento;
}

export class Cliente {
    typeName = "Cliente";
    idCliente;
    nombre;
    apellidos;
    numeroDeTarjeta;
}

class Terminal {
    typeName = "Terminal";
    idDeTerminal;
    codigoDeTerminal;
    cantidadDeDineroAlmacenado;

    ejecutarServicioDeTerminal() {

    }
}

export class TerminalDeVenta extends Terminal {
    empleadosPermitidos;
}

export class TerminalDeCobroAutomatico extends Terminal {}

class Operacion {}

export class VentaMedianteEmpleado extends Operacion {
    typeName = "VentaMedianteEmpleado";
    autorDeLaVenta;
    cliente;
    montoCobrado;
    cambioDevuelto;
}

export class VentaPorCobroAutomatico extends Operacion {
    typeName = "VentaPorCobroAutomatico";
    cliente;
    montoCobrado;
    cambioDevuelto;
}