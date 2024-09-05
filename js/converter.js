const inputField = document.getElementById("input-temp");
const fromUnitField = document.getElementById("input-unit");
const toUnitField= document.getElementById("output-unit");
const outputField = document.getElementById("output-temp");
const form = document.getElementById("converter");

function convertTemp(value, fromUnit, toUnit){
if(fromUnit === 'c'){
    //La unidad de origen es celsius
    if(toUnit === 'f'){
        //la unidad de destino es farenheitt
        return (value * 9/5) + 32; 
    }else if(toUnit === 'k'){
        //la unidad de destino es kelvin
        return value + 273.15; 
    }else{
        //no ha seleccionado un tipo de destino
        return value;
    }
}

if(fromUnit === 'f'){
    //la unidad de origen es farenheitt
    if(toUnit === 'c'){
     //la unidad de destino es celsius
        return (value - 32) * (5 / 9);
    }else if(toUnit === 'k'){
        //la unidad de destino es kelvin
        return (value + 459.67) * (5 / 9);
    }else{
        //no se ha seleccionado un tipo de destino
        return value;
    }
}

if(fromUnit === 'k'){
    //la unidad de origen es kelvin
    if(toUnit === 'c'){
        //la unidad de destino es celsius
        return value - 273.15;
    }else if(toUnit === 'f'){
        //la unidad de destino es farenheitt
        return (value * 9 / 5) - 459.67;
    }else{
        //no ha seleccionado un tipo de destino
        return value;
    }
}

//No entro a ninguna validacion (if), por lo tanto se devuleve una exepcion
    throw new Error('Unidad de medida invalida');
}

form.addEventListener('input', ()=>{
    const inputTemp = parseFloat(inputField.value); //valor digitado por el usuario en el campo input
    const fromUnit = fromUnitField.value; //valor seleccionado por el usuario (unidad de medida origen)
    const toUnit = toUnitField.value;//valor seleccionado por el usuario(unidad de medida de destino)

    const outputTemp = convertTemp(inputTemp,fromUnit,toUnit); //Calculo de valores, conversion de valores
    outputField.value = (Math.round(outputTemp * 100) / 100) + ' ' + toUnit.toUpperCase(); //Impresion de la salida del calculo realizado
});
