function ejercicio1(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
        
    }
}
function ejercicio2() {
   let valores = [true, 5, false, "hola", "adios",2];
        if (valores[3].length < valores[4].length){
            console.log(valores[0]);
            console.log("adios es mayor que hola.");
        }else{
            console.log(valores[2]);
            console.log("No se cumple la consigna.");

        }
            console.log(valores[1] + valores[5])
            console.log(valores[1] - valores[5])
            console.log(valores[1] * valores[5])
            console.log(valores[1] / valores[5])
}
function ejercicio3(){
    var numero1= 5;
    var numero2= 8;
    if(numero1<numero2) {
        console.log("numero1 no es mayor que numero2");
        }
        if(numero2>0) {
        console.log("numero2 es positivo");
        }
        if(numero1 <0) {
        console.log("numero1 es negativo o distinto de cero");
        }
        if(numero1 +1 <numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
}
function ejercicio4(){
    var DNI=prompt("el mensaje");
    var pos= DNI%23;
    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

    if(pos>0 && pos<99999999){
        var letrauser=prompt("ingrese letra de su DNI");
        var letra = letrasDNI[letrauser];

        if(letra == letrauser){
            console.log("Las letras son iguales.");
        } 
        else{
            console.log("LA letra introducida es incorrecta.")
        }
        console.log("El numero introducido es valido.");
        console.log("La letra de tu DNI es: "+ letra);
  }
    else{
        console.log("El numero introducido NO es valido");
    }

}
function ejercicio5(){
    var factorial= prompt("Ingrese un número para hallar su factorial.");

    let pro = 1;
    for (let i = 1; i <= factorial; i++) {
       pro = pro *i
    }
    console.log("El factorial es: "+ pro);
}
function ejercicio6(){
    
    var numero= prompt("Ingrese un número para determinar si es par o impar.");
    var resto= numero%2;

    if(resto == 0){
        console.log("El número es par");
    }
    else if(numero==0){
        console.log("El número introducido es invalido.");
    }

    else{
        console.log("El numero es impar");
    }

}