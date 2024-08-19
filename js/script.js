//1 piedra, 2 papel, 3 tijera
let jugador=0
let pc=2

jugador=window.prompt("Elije una opcion: \n1 para piedra \n2 para papel \n3 para tijera")
//alert("Elegiste: "+jugador)

//Eleccion de opciones
if (jugador==1) {
    alert("Elegiste 🥌")
} else if (jugador==2) {
    alert("Elegiste 🧻")
} else if (jugador==3){
    alert("Elegiste ✂")
} else{
    alert("Elegiste PERDER!")
}

if (pc==1) {
    alert("PC elige🥌")
} else if (pc==2) {
    alert("PC elige 🧻")
} else if (pc==3){
    alert("PC elige ✂")
}

//Combate de opciones
if (pc==jugador) {
    alert("empate")
}else if (jugador==1 && pc==3){
    alert("GANASTE")
}else if(jugador==2 && pc==1){
    alert("GANASTE")
}else if(jugador==3 && pc==2){
    alert("GANASTE")
}else{
    alert("PERDISTE")
}

