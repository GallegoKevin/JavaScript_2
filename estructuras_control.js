//ESTRUCTURAS DE CONTROL 

console.log('// Estructuras de Control:');


//CONDICIONALES

//EXAMPLE 1
const amount = 800; 
const debt = 500; 
if (amount >= debt) {
    console.log('Tienes suficiente dinero para pagar la deuda');
} else {
    console.log('No tienes suficiente dinero para pagar la deuda');
}




//EXAMPLE 2


const username = 'Ana'; 

if (username === 'Juan') {
    console.log('Estás logeado como Juan');
} else {
    console.log('No estás logeado como Juan');
}


//EXAMPLE 3
const travelExpenses = 1250; 
const availableFunds = 1100;
const creditCardLimit = 800;
const bankTransferFee = 400; 
if (availableFunds >= travelExpenses) {
    console.log('Puedes pagar los gastos del viaje con tu dinero');
} else if (availableFunds >= creditCardLimit && availableFunds < travelExpenses) {
    console.log('No tienes suficiente dinero para pagar los gastos del viaje, pero puedes financiarlo con tarjeta de crédito');
} else if (availableFunds >= bankTransferFee && availableFunds < creditCardLimit && availableFunds < travelExpenses) {
    console.log('No tienes suficiente dinero para pagar los gastos del viaje ni para financiarlo con tarjeta de crédito, pero puedes hacer una transferencia bancaria con una comisión de ' + bankTransferFee + ' dólares');
} else {
    console.log('No tienes suficiente dinero para pagar los gastos del viaje');
}

const paymentMethod = "bankTransfer"; 
switch(paymentMethod){
    case 'creditCard': {
        console.log('Financiarás el viaje con tarjeta de crédito');
        break;
    }
    case 'bankTransfer': {
        console.log('Realizarás una transferencia bancaria para pagar el viaje');
        break;
    }
    default: console.log('Método de pago no válido');
    break;
}


//condicionales

const isLoggedIn = false;

// Condicionales con if y else
if (isLoggedIn) {
    console.log('Estás logueado');
} else {
    console.log('No estás logueado');
}


// Operador ternario
isLoggedIn ? console.log('Estás logueado') : console.log('No estás logueado');
