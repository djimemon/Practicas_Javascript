var max = 100;

var min = 1;

var numero_secreto = Math.random() * (max-min) + min;

numero_secreto = parseInt(numero_secreto);

console.log(numero_secreto);

var mensaje = "Ingresa un numero para adivinar el numero magico";

while(true){

    var numero_del_usuario = prompt(mensaje,"0");
    numero_del_usuario = parseInt(numero_del_usuario)

    if(numero_del_usuario === numero_secreto){
        alert("Lo adivinaste!!!");
        break;
    }else if (numero_del_usuario === 0){
        break;
    }else if (numero_del_usuario > numero_secreto){
        alert("El numero que has ingresado es mayor al numero magico");
    }else if(numero_del_usuario < numero_secreto){
        alert("El numero que has ingresado es menor al numero magico")
    }

}