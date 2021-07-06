const fs = require('fs');

    let archivo = fs.readFileSync(__dirname + '/tareas.json','utf-8')
    let tareas = JSON.parse(archivo);


    console.log(tareas);

