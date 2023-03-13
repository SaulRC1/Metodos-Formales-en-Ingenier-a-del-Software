import { empleadoAntonio, empleadoFederico, clienteJuan, terminalDeVenta, venta1, venta2 } from "./demo_objects.js";
import { logOCLEvaluationResult } from "./util.js";
import { OclEngine } from "@stekoe/ocl.js"

//Definimos todas las restricciones OCL

const idTerminalMayorACero = "context Terminal inv idTerminalMayorACero: self.idDeTerminal > 0";

const dni9Caracteres = "context Empleado inv dni9Caracteres: self.dni->size() = 9";

const cobradoMayorADevueltoVentaMedianteEmpleado = 
"context VentaMedianteEmpleado inv cobradoMayorADevueltoVentaMedianteEmpleado: (self.montoCobrado - self.cambioDevuelto) > 0";

const cobradoMayorADevueltoVentaCobroAutomatico =
"context VentaPorCobroAutomatico inv cobradoMayorADevueltoVentaCobroAutomatico: (self.montoCobrado - self.cambioDevuelto) > 0";

const numeroDeTarjeta16Digitos = "context Cliente inv numeroDeTarjeta16Digitos: self.numeroDeTarjeta->size() = 16";

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
oclEngine.addOclExpressions(restriccionesOCL);

//Evaluamos las restricciones OCL
let resultadoAntonio = oclEngine.evaluate(empleadoAntonio);

logOCLEvaluationResult("empleadoAntonio", resultadoAntonio);

let resultadoFederico = oclEngine.evaluate(empleadoFederico);

logOCLEvaluationResult("empleadoFederico", resultadoFederico);

let resultadoJuan = oclEngine.evaluate(clienteJuan);

logOCLEvaluationResult("clienteJuan", resultadoJuan);

let resultadoTerminalDeVenta = oclEngine.evaluate(terminalDeVenta);

logOCLEvaluationResult("terminalDeVenta", resultadoTerminalDeVenta);

let resultadoVenta1 = oclEngine.evaluate(venta1);

logOCLEvaluationResult("venta1", resultadoVenta1);

let resultadoVenta2 = oclEngine.evaluate(venta2);

logOCLEvaluationResult("venta2", resultadoVenta2);


