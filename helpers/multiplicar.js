const fs = require ('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar= false, hasta=12)=>{


try {
    console.log("=============".green);
    console.log('Tabla del:'.green, colors.blue(base));
    console.log("=============".green);
    
        let salida = '';
        let salida1= ''
    
    for (let i =1;  i<=hasta;i++) {
       salida1 += `${base} ${'x'.green} ${i} ${'='.green} ${ base * i}\n`;
       //salida = salida + ...
       salida += `${base} x ${i} = ${ base * i}\n`;
    }
    if(listar){
        console.log(salida1);
        /* console.log(colors.green('hello')); // outputs green text
        console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
        console.log(colors.inverse('inverse the color')); // inverses the color
        console.log(colors.rainbow('OMG Rainbows!')); // rainbow
        console.log(colors.trap('Run the trap')); // Drops the bass */
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    return `tabla-${base}.txt`;
    
} catch (err) {
    throw err
}
    
   
}


module.exports= {
    crearArchivo,
};