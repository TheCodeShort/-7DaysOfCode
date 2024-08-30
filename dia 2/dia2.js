let nombre = prompt("cual es tu nombre");
let anos = prompt("cuantos años tienes");
let lenguajeDeProgramacion = prompt("cual es tu leguaje de programacion");

alert(`ahora te mostrare la informacion que me diate:
        \nTu nombre es: ${nombre}
        \nTu año de nacimiento es: ${anos} años
        \nTu lengiaje de programacion es: ${lenguajeDeProgramacion}`);


i = 1
while(i != 0){
    let pregunta = prompt("ahora tengo una pregunta para ti\nte gusta la programacion\n 1: si\n2: no");
    

    if (pregunta == 1) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        i = 0;
    }else if(pregunta == 2){
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        i = 0;
    }else{
        alert("no reconosco la respues recuerda que es un numero");
    }
}
