
const {crearArchivo} = require('./helpers/multiplicar');


const argv=require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number'
                })
                .argv;

console.clear();
console.log(process.argv);
console.log(argv);


crearArchivo(1)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(err=>console.log(err));
