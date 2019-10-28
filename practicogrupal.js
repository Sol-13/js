let Tanga = 100;
let Culotte = 200; 

let codigoLaura= "LAURA";

let descuento= 100;

const nombreDeLaTienda = prompt(`Bienvenido a: Tu vieja en tanga 👙 
Ingresá tu nombre:`)

alert (` 📣 Hola, tenemos en oferta los siguientes productos:
♠️ Tanga
🖤 Culotte`)

const comprarTanga = prompt("Desea comprar ♠️ tanga?");
let cantidadTanga = comprarTanga == "SI" && prompt("que cantidad desea comprar?") || "NO" && "0";



const comprarCulotte = prompt("Desea comprar 🖤 culotte?");
let cantidadCulotte = comprarCulotte == "SI" && prompt("que cantidad desea comprar?") || "NO" && "0";



const abonarConTarjeta = prompt(`🧾 El detalle de tu compra es:
♠️ Tanga: ${cantidadTanga} x $100
🖤 Culotte: ${cantidadCulotte} x $200
💵 Total: ${(cantidadTanga * Tanga) + (cantidadCulotte * Culotte)}
💳 ¿Desea abonar con tarjeta?`)

const cuantasCuotas = prompt("En cuantas cuotas desea abonarlo?")

const codigoDeDescuento = prompt(`🧾 El detalle de tu compra es:
♠️ Tanga: ${cantidadTanga} x $100
🖤 Culotte: ${cantidadCulotte} x $200
💵 Total: ${(cantidadTanga * Tanga) + (cantidadCulotte * Culotte)}
A pagar en ${cuantasCuotas} cuotas de ${((cantidadTanga * Tanga) + (cantidadCulotte * Culotte)) / (cuantasCuotas)} pesos
💳 ¿Tenés un código de descuento?`) 

const codigo = codigoDeDescuento == "SI"&& prompt("ingrese codigo de descuento");

codigo == codigoLaura &&  prompt(`🧾 El detalle de tu compra es:
♠️ Tanga: ${cantidadTanga} x $100
🖤 Culotte: ${cantidadCulotte} x $200
💵 Total: ${(cantidadTanga * Tanga) + (cantidadCulotte * Culotte)}
descuento= -100
Total final: Total: ${(cantidadTanga * Tanga) + (cantidadCulotte * Culotte)- descuento}
A pagar en ${cuantasCuotas} cuotas de ${((cantidadTanga * Tanga) + (cantidadCulotte * Culotte)- descuento)/ (cuantasCuotas)} pesos

Que disfrutes tu compra!`);



