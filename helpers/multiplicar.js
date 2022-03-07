const fs = require('fs');
const colors = require ('colors');


const crearArchivo= async(base = 5, listar=false, hasta= 10)=>{

    
    try{      
    
    let consola = '';
    let salida = '';

    for (let i=1 ; i<=hasta; i++){

        resp= i*base;
        salida +=`${base} x ${i} = ${base*i}\n`;   
        consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`; 
    }

    if(listar){
        console.log('==========================='.green);
        console.log(`      Tabla del `.green, colors.blue(base));
        console.log('==========================='.green);
        console.log(consola)
    }
   
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt creado`;
    } catch(err){
    throw err;
    }   

}


// exportar o volver nuestra funcion crear archivo de manera publica y pueda ser utilizado desde otros docs
module.exports={
    crearArchivo
}
