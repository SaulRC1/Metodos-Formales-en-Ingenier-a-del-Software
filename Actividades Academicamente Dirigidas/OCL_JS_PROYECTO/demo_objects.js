import { Cliente, Empleado, TerminalDeCobroAutomatico,
TerminalDeVenta, VentaMedianteEmpleado, VentaPorCobroAutomatico } from "./Modelo.js";
//Creamos los objetos
export let empleadoAntonio = new Empleado();

empleadoAntonio.nombre = "Antonio";
empleadoAntonio.apellidos = "Molina Alonso";
empleadoAntonio.idEmpleado = 1;
empleadoAntonio.codigoDeEmpleado = 1;
empleadoAntonio.fechaDeNacimiento = "12/09/1998";
empleadoAntonio.dni = "12345678ZA";

export let empleadoFederico = new Empleado();

empleadoFederico.idEmpleado = 2;
empleadoFederico.codigoDeEmpleado = 2;
empleadoFederico.dni = "12345678A";
empleadoFederico.nombre = "Federico";
empleadoFederico.apellidos = "Guerrero Yucan";
empleadoFederico.fechaDeNacimiento = "23/02/2001";

export let clienteJuan = new Cliente();

clienteJuan.idCliente = 1;
clienteJuan.nombre = "Juan";
clienteJuan.apellidos = "Rodriguez Hernandez";
clienteJuan.numeroDeTarjeta = "1234567891234567";

export let terminalDeVenta = new TerminalDeVenta();

terminalDeVenta.idDeTerminal = 1;
terminalDeVenta.cantidadDeDineroAlmacenado = 500.0;
terminalDeVenta.codigoDeTerminal = 1;
terminalDeVenta.empleadosPermitidos = [empleadoAntonio, empleadoFederico];

export let venta1 = new VentaMedianteEmpleado();

venta1.autorDeLaVenta = empleadoFederico;
venta1.cliente = clienteJuan;
venta1.montoCobrado = 5.6;
venta1.cambioDevuelto = 2.3;

export let venta2 = new VentaPorCobroAutomatico();

venta2.cliente = clienteJuan;
venta2.montoCobrado = 10;
venta2.cambioDevuelto = 0.89;