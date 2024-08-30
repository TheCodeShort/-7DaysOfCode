alert("ahora vamos hacer unas preguntas para saber que es lo que quieres llegar a ser");


i = 1;
while (i != 0) {
    let pregunta = prompt("1: te interesa segir aprendiendo Front-End \n2: te interesa segir aprendiendo Back-End.\n3: te interesa ser un fullStack"); 

    if (pregunta == 1) {
        alert("entiendo te interesa el diseño web, tienes que aprender react ovue");
        i = 0;
    }else if(pregunta == 2){
        alert("que interesante entonces tienes que aprender c# y java tambien algo de python");
        i = 0;
    }else if (pregunta == 3) {
        alert("prefexto un poco de todo pero si que nada se te escape vas a ser un gran fullstack");
        i = 0;
    }else{
        alert("no reconosco tu respuesta vuelve a digitarla")
    }
}

let preguntaTecnologia = prompt("bueno y cuentame en que tecnologias te gustaria especializarte");
