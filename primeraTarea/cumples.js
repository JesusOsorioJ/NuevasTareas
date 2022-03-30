//const date = require('date');

/**
 * Funcion que te dice cuanto falta para cumplir
 * @param {number} mes 
 * @param {number} dia 
 * @returns dias para cumplir 
 */
function fecha(mes,dia){
    var f1 = new Date(2022, mes-1, dia)
    var f2 = new Date()
    console.log(f1,f2)
    var f3 = parseInt((f1-f2)/(1000 * 3600 * 24))
    if (f3>=0) {
        return console.log('Faltan ',f3,' dias para tu cumpleaños')
    }else{
        return console.log('¡¡Ya cumpliste!! te quedo debiendo el regalito')
    }
}

fecha(2,28)
