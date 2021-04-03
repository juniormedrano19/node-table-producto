const fs = require ('fs'); //módulo de filesystem
const os= require('os');
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


/*Por ejemplo node app --base=5*/
/*{ _: [], base: 11, '$0': 'app' }*/

/*node app --help*/

//option('l');
//listar
//boolean
//default: false,





console.clear();


/* console.log(process.argv); */
/* console.log(argv); */

/* console.log('base: yargs', argv.b); */

//los argumentos que vienen de la consola

/* console.log(process.argv)
const [,,arg3= 'base=5' ]=process.argv;
const [, base=5 ]= arg3.split('='); 
console.log(base); */
//me interesa la nueva base

/* const base= 25 */
//argv.b = base
//arg.l = listar
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err=> console.log(err));

/* console.log("=============");
console.log("Tabla del 5");
console.log("============="); */
/* const tablaMultiplicar = (tabla,num)=>{
    for (let i= 1; i<=num; i++){
        console.log(`${tabla} x ${i}= ${tabla*i}`)
    }
} */

/* const arreglo = [1,2,3,4,5,6,7,8,9,10];

 arreglo.forEach(elemento =>{
    console.log(5* elemento);
}) */



/* tablaMultiplicar(5,10); */
//salida = salida + ...
/* const base = 4;
let salida = '';

for (let i =1;  i<=10;i++) {
   salida += `${base} x ${i} = ${ base * i}\n`;
   
    
}
console.log(salida); */

//FS WRITE FILE
//fs.writeFile, primer argumento el path donde va a escribir, sino le pones se graba en la ruta del archivo JS
//segundo parámetro la data
//tercero callback
/* 
fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`)
} ) */


/* const prueba= JSON.stringify(os.networkInterfaces());

fs.writeFile('interfaces.txt', prueba, (err)=>{
    if(err) throw err;
    console.log('interfaces.txt fue creado');
}) */


//FS WRITE FILE SYNC

/* fs.writeFileSync(`tabla-${base}.txt`,salida)
console.log(`tabla-${base}.txt creado`)
 */




//FS READFILE
/* fs.readFile('interfaces.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
}) */