let edadAlumnos = [19, 22, 21, 20, 23];
let i = 0;
for (i = 0; i < edadAlumnos.length; i++ ) {
    if (edadAlumnos[i] % 2 === 0) {
    console.log("Edad par del alumno: ", edadAlumnos[i]);
    i++;
    }
}
