
const argv = require ('yargs')
            .option('b',{
                alias:'base',
                type: 'number',
                demandOption: true,
                description : 'Es la base de la tabla'
            }).option('l',{
                alias:'listar',
                type: 'boolean',
                default : false,
            description : 'Muestra la tabla en consola'                
            }).option('h',{
                alias:'hasta',
                type: 'number',
                description : 'marca el limite de la tabla'
            }
            )
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'la base tiene que ser un numero'
                }
                return true;
            })
            .argv;

            module.exports=argv;