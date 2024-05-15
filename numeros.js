//Números
console.log('// Numeros:');


const numeroA = 15;
const numeroB = 7;
const numeroC = 0.25;
let value;

// Suma
value = numeroA + numeroB; 
console.log('Suma:', value);

// Resta
value= numeroA - numeroB; 
console.log('Resta:', value);

// Multiplicación
value = numeroA * numeroC;
console.log('Multiplicación:', value);

// División
value = numeroA / numeroB; 
console.log('División:', value);

// Módulo
value = numeroA % numeroB; 
console.log('Módulo:', value);

// Operaciones combinadas
value = (numeroA + numeroB) * numeroC;
console.log('Operaciones combinadas:', value);


//Example:

// Definir precios de productos
const laptopPrice = 1200;
const mousePrice = 30;
const keyboardPrice = 80;

// Calcular subtotal antes de descuento
const subtotal = laptopPrice + mousePrice + keyboardPrice;

// Calcular descuento del 15%
const discount = (laptopPrice + mousePrice + keyboardPrice) * 0.15;

// Calcular costo final con descuento
const finalCost = subtotal - discount;

// Mostrar en la consola la información
console.log("Subtotal antes del descuento: $" + subtotal);
console.log("Descuento aplicado: $" + discount);
console.log("Costo final con descuento: $" + finalCost);
