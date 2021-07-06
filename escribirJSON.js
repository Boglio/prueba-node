const fs = require('fs');

//let archivo = fs.readFileSync(__dirname + '/tareas.json','utf-8')

//let accion = process.argv[2]; // esto me toma los parametros que le paso al ejecutar desde consola....

let tareas=[{titulo:'hacer cafe',estado:'terminado'},{titulo:'descansar',estado:'pendiente'}];
console.log(tareas);


let tareasJSON = JSON.stringify(tareas);

console.log(tareasJSON);

fs.writeFileSync(__dirname+'/tareas.json',tareasJSON,'utf-8');



/*

let tareas = JSON.parse(archivo)

function escribirJSON(unArrayDeTareas){
    JSON.stringify(unArrayDeTareas)
}

*/