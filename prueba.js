// Codigo de Prueba
// let notaAcumulada = 0;
// let notaAlumno = 0;
// const claveDeSalida = "alto";
// let i = 0;

// for (claveDeSalida; notaAlumno !== claveDeSalida; i ++) {
//     notaAlumno = prompt(`Ingrese la nota del alumno Nro ${i+1}: `);
//     if (notaAlumno >= 7) {
//         console.log(`La nota del alumno ${i+1} es de: ${notaAlumno} y aprobo la asignatura. Felicidades!!!`);
//         notaAcumulada = notaAcumulada + parseInt(notaAlumno);
//     } else if (notaAlumno < 7) {
//         console.log(`La nota del alumno ${i+1} es de: ${notaAlumno} y reprobo la asignatura. A estudiar!!!`);
//         notaAcumulada = notaAcumulada + parseInt(notaAlumno);
//     }
// }
// console.log(`El promedio de los ${i-1} alumnos es de: ${notaAcumulada/(i-1)}.`);

// while (notaAlumno !== claveDeSalida) {
//     i++;
//     notaAlumno = prompt(`Por favor, ingrese la nota del alumno Nro ${i}. Recuerde que si desea finalizar debe ingresar la palabra 'alto': `);
//     if (notaAlumno >= 7) {
//         console.log(`La nota del alumno ${i} es de: ${notaAlumno} y aprobo la asignatura. Felicidades!!!`);
//         notaAcumulada = notaAcumulada + parseInt(notaAlumno);
//     } else if (notaAlumno < 7) {
//         console.log(`La nota del alumno ${i} es de: ${notaAlumno} y reprobo la asignatura. A estudiar!!!`);
//         notaAcumulada = notaAcumulada + parseInt(notaAlumno);
//     }

// }
// console.log(`El promedio de los ${i-1} alumnos es de: ${notaAcumulada/(i-1)}.`);


// Funciones de prueba.
// function sumar(a,b) {
//     return a + b;
// }

// function restar(a,b) {
//     return a - b;
// }

// function multiplicar(a,b) {
//     return a * b;
// }

// function dividir(a,b) {
//     if (b==0) {
//         alert("No se puede dividir entre 0.")
//         return 0;
//     }
//     return a / b;
// }

// let opcion = parseInt(prompt("Ingrese la opcion que desee: 1 -suma, 2 -resta, 3 -multiplicar, 4 -dividir o 5 -salir."))
// while (parseInt(opcion) !== 5) {
//     let a = parseInt(prompt("Ingrese el primer numero: "))
//     let b = parseInt(prompt("Ingrese el segundo numero: "))

//     switch (opcion) {

//     case 1 :
//         alert(`El resultado es ${sumar(a,b)}.`)
//         break
//     case 2:
//         alert(`El resultado es ${restar(a,b)}.`)
//         break
//     ;
//     case 3:
//         alert(`El resultado es ${multiplicar(a,b)}.`)
//         break
//     ;
//     case 4:
//         alert(`El resultado es ${dividir(a,b)}.`)
//         break
//         ;
//     case 5:
//         break
// }
//     opcion = prompt("Ingrese la opcion que desee: suma, resta, multiplicar, dividir o salir.")
// }


// function pedirNombreCompleto () {
// let nombre = prompt("Ingrese su nombre: ")
// let apellido
// if (nombre && nombre) {
//     apellido = prompt("Ingrese su apellido: ")
//     if (!apellido || !apellido) {
//         alert("Los campos no deben estar vacios")
//     }
// } else {
//     alert("Los campos no deben estar vacios")
// }
// console.log(typeof(nombre))
// console.log(typeof(apellido))
// return nombreCompleto = nombre + " " + apellido
// }

// alert(`Su nombre completo es ${pedirNombreCompleto()}`)


// Arrays y Objetos

