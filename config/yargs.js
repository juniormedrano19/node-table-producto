const argv= require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true, //el valor es obligatorio
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'listar',
                        type:'boolean',
                     /*    demandOption:true, */
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                     /*    demandOption:true, */
                        default:12,
                        describe:'Hasta que número deseas multiplicar'
                    })
                    .check((argv, options)=>{
                       /*  console.log('yargs', argv); */
                       if(isNaN(argv.b)){
                           throw 'La base tiene que ser un número'
                       }
                      
                       return true;
                    })
                    .argv; //muestra los argumentos cuándo son mandados por consola


module.exports=argv
