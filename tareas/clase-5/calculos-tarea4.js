function obtenerMayorNumero(numeros){
    let mayorNumero = numeros[0];
    for(let i = 1 ; i < numeros.length ; i++){
        if( numeros[i] > mayorNumero ){
            mayorNumero = numeros[i];
        }
    }

    return mayorNumero; 
}

function obtenerMenorNumero(numeros){
    let menorNumero = numeros[0];
    for(let i = 1 ; i < numeros.length ; i++){
        if( numeros[i] < menorNumero ){
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

function obtenerPromedio(numeros){
    let acumulador = 0;    
    for(let i = 0; i < numeros.length ; i++){
        acumulador += numeros[i];
    }
    return (acumulador / numeros.length).toFixed(2);
    
}

function obtenerMasFrecuente(numeros){
    const arr1= numeros;
    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<arr1.length; i++)
    {
            for (let j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                    m++;
                    if (mf<m)
                    {
                    mf=m; 
                    item = arr1[i];
                    }
            }
            m=0;
    }
    return item;

}

