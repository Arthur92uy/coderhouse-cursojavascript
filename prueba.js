
// Codigo de Prueba
let notaAcumulada = 0;
let notaAlumno = 0;
const claveDeSalida = "alto";
let i = 0;

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

while (notaAlumno !== claveDeSalida) {
    i++;
    notaAlumno = prompt(`Por favor, ingrese la nota del alumno Nro ${i}. Recuerde que si desea finalizar debe ingresar la palabra 'alto': `);
    if (notaAlumno >= 7) {
        console.log(`La nota del alumno ${i} es de: ${notaAlumno} y aprobo la asignatura. Felicidades!!!`);
        notaAcumulada = notaAcumulada + parseInt(notaAlumno);
    } else if (notaAlumno < 7) {
        console.log(`La nota del alumno ${i} es de: ${notaAlumno} y reprobo la asignatura. A estudiar!!!`);
        notaAcumulada = notaAcumulada + parseInt(notaAlumno);
    }

}
console.log(`El promedio de los ${i-1} alumnos es de: ${notaAcumulada/(i-1)}.`);