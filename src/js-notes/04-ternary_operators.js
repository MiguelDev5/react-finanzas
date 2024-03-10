const activo = true;

// 01 - IF
let mensaje = '';
if(activo) {
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

// 02 - SHORT IF
const mensaje2 = (!activo)?'Activo':'Inactivo';

// 03 - AND
const mensaje3 = (!activo)&&'Activo';
const mensaje4 = (activo)&&'Un mensaje si está activo';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
console.log(mensaje4);