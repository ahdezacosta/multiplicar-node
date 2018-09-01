//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivoAsync = async(base) => {
    let data = '';
    for (let index = 1; index <= 10; index++) {
        data += `${base} * ${index}= ${base*index}\n`;
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

        if (err) throw new err;

        return (`tabla-${ base }.txt`);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado para el limite ${ limite } no es un número`);
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index}= ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-base${ base }-limite${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-base ${ base }-limite${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado para la base ${ base } no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado para el limite ${ limite } no es un número`);
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index}= ${base*index}\n`;
        }

        console.log('==========================='.green);
        console.log(`=== tabla de  ${ base }====`.yellow);
        console.log('==========================='.green);
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}