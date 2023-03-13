import { Cliente, Empleado, TerminalDeCobroAutomatico,
TerminalDeVenta, VentaMedianteEmpleado, VentaPorCobroAutomatico } from "./Modelo.js";

import { OclEngine } from "@stekoe/ocl.js"

//Definimos todas las restricciones OCL

const idTerminalMayorACero = "context Terminal inv: self.idDeTerminal > 0";

const dni9Caracteres = "context Empleado inv: self.dni->size() = 9";

const cobradoMayorADevueltoVentaMedianteEmpleado = 
"context VentaMedianteEmpleado inv: (self.montoCobrado - self.cambioDevuelto) > 0";

const cobradoMayorADevueltoVentaCobroAutomatico =
"context VentaPorCobroAutomatico inv: (self.montoCobrado - self.cambioDevuelto) > 0";

const numeroDeTarjeta16Digitos = "context Cliente inv: self.numeroDeTarjeta->size() = 16";

let restriccionesOCL = [
    idTerminalMayorACero,
    dni9Caracteres,
    cobradoMayorADevueltoVentaCobroAutomatico,
    cobradoMayorADevueltoVentaMedianteEmpleado,
    numeroDeTarjeta16Digitos
];

//Creamos motor OCL
const oclEngine = OclEngine.create();

//Añadimos restricciones OCL previamente definidas
//oclEngine.addOclExpressions(restriccionesOCL);
//oclEngine.addOclExpression('context Empleado inv: self.dni->notEmpty()', ["dni9Caracteres"]);
oclEngine.addOclExpression(`context TerminalDeVenta inv: self.idDeTerminal > 0`)
let empleadoJuan = new Empleado();

empleadoJuan.nombre = "Juan";
empleadoJuan.apellidos = "Rodriguez Hernandez";
empleadoJuan.idEmpleado = 1;
empleadoJuan.codigoDeEmpleado = 1;
empleadoJuan.fechaDeNacimiento = "12/09/1998";
//empleadoJuan.dni = "12345678ZA";
empleadoJuan.dni = [];

//let result = oclEngine.evaluate(empleadoJuan, ["dni9Caracteres"]);

let terminalDeVenta = new TerminalDeVenta();

terminalDeVenta.idDeTerminal = -1;

let result = oclEngine.evaluate(terminalDeVenta);

console.log(result);

