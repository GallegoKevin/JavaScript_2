//METODOS STRING

console.log('// Metodo string:');

//LENGTH

//Primer ejemplo:
const surname = ' Gallego Gonzales '

// Conteo con espacios
console.log(surname.length);
// conteo sin espacios en extremos
console.log(surname.trim().length)


//PROMPT

const age = prompt ('Ingresa tu edad')
console.log(age)


// Convertir caracteres a minúscula

console.log('EStados UnI23Dos'.toLowerCase());

// Convertir caracteres a mayúscula

console.log ('peru'.toUpperCase());
24

//question-prompt

const primaryLanguage = prompt('What is the primary language of China?');

if (primaryLanguage.toLowerCase() === 'mandarin') {
    console.log('¡Excelente!');
} else {
  console.log('Incorrecto');
}24

//CONCATENACION

const fruit = 'manzana';
const color = 'roja';

//ES5 (Manual)
console.log ('la' + ' '+ fruit + ' ' +'es' +' ' + color)

//ES6 (TEMPLATE STRING)

console.log (`la ${fruit} es ${color}`)