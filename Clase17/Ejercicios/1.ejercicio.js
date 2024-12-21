/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
Crea un objeto literal que represente un estudiante. El mismo debe tener 
las siguientes propiedades: nombre, edad y un array de notas (con 5 
notas).  
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo 
realizar las siguientes tareas: 
1. Agregar una nueva nota al array de notas. 
2. Eliminar la primera nota del array. 
3. Calcular el promedio de las notas restantes. 
4. Convertir el nombre del estudiante a mayúsculas. Para esto 
investiga sobre el método “toUpperCase()” 
https://www.w3schools.com/jsref/jsref_touppercase.asp 
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de 
las notas. */

const estudiante = {
    nombre: "Javier Torres",
    edad: 26,
    notas: [5,2,10,7,8]
};

function procesarEstudiante(estudiante){
    estudiante.notas.push(6);
    estudiante.notas.shift();
    let promedio = estudiante.notas.reduce(function(acumulador, nota){
        return acumulador + nota / estudiante.notas.length;
    },0);
    estudiante.nombre = estudiante.nombre.toUpperCase();
    return {nombre: estudiante.nombre, promedio: promedio};
};

console.log(procesarEstudiante(estudiante));

