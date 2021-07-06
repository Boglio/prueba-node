clearconst fs = require('fs');
let accion = process.argv[2]; // esto me toma los parametros que le paso al ejecutar desde consola.... //puede romar los valores listar /crear /leerPorEstado
let parametro2 = process.argv[3];  //este parametro puede tomar el nombre de la tarea a Crear  /puede tomar los valores de nombredenuevatarea / estado que se desea filtrar

function escribirJSON(unArrayDeTareas){
    let tareasJSON =JSON.stringify(unArrayDeTareas);
    fs.writeFileSync(__dirname+'/tareas.json',tareasJSON,'utf-8');

}

function leerTareas(){
    let archivo = fs.readFileSync(__dirname + '/tareas.json','utf-8')
    let tareas = JSON.parse(archivo);
    return tareas;
}

function guardarTarea(tituloTarea){

    let unaTarea={titulo: tituloTarea ,estado:'pendiente'};
    listadoTareas = leerTareas();
    listadoTareas.push(unaTarea);
    escribirJSON(listadoTareas);
    console.log('tarea guardad con exito');

}

function listarTituloTareas(unListado){
 //   let listado= leerTareas();
        unListado.forEach(
            function (elemento){
                console.log(elemento.titulo);
            }
        )
}


function listarPorEstado(unArray,unEstado){
        let listadoResultante=unArray.filter(
        function filtro(unObjeto){
          return unObjeto.estado == unEstado
        }
    )
return listadoResultante;
}

//----------------------------------------------------------------------------------------------inicio switch
switch(accion){

    case 'filtrar':
        console.log('listado de tareas:  ');
        console.log('====================');
        let listadoCompleto = leerTareas();
        let listadoFiltrado = listarPorEstado(listadoCompleto,parametro2);
        listarTituloTareas(listadoFiltrado);
        console.log('====================');
        //console.log(listadoFiltrado);
    break;


    case 'listar':
        console.log('listado de tareas:  ');
        console.log('====================');
        let x=leerTareas();
        listarTituloTareas(x);
        console.log('====================');
           
    break;

    case 'crear':
        guardarTarea(parametro2);
    break;

    case undefined:
        console.log('tenes que pasarme una accion');
    break;

    default:
        console.log('no entiendo que me estas pidiendo');
    break;


}

