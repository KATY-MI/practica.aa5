setInterval(function(){
    const date = new Date()
    hora.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    fecha.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  },1000);

function cargarEjemplo(){
    document.getElementById("numerosEjem").value="6,99,56,15,68";
}
function Reiniciar(){
    location.reload();
}
function Calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/);
    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;
  //sumar
    for(let i=0;i<valores_array.length;i++){
        suma=parseInt(valores_array[1])+suma;
    }
// obtener el mayor
    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[1])>mayor) mayor=valores_array[i];
    }
  // obtener el menor
    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[1])<menor) menor=valores_array[i]; 
    }
    
    
    document.getElementById("Resultado").innerHTML="La suma es: "+ suma+"<br>"+
                                                    "El mayor numero es: "+ mayor+"<br>"+
                                                    "El menor numero es: "+ menor;
    
  }

//===========================================================================
setInterval(muestraFrase,2000);

let frases=["Solo se que nada se","El que la persigue la consigue","Dime con quien andas y te dire quien eres","El que estudia triunfa"];
let indice=0;
    function muestraFrase(){
        indice++;
        if(indice>=frases.length){
            indice=0;
        }
        document.getElementById("frases").innerHTML=frases[indice];
    }
 //=======================================================================

let colores=[];

function agregaColor(evt){
    evt.preventDefault();
    
    let nom=document.getElementById("colores").value;
    
    if(nom==""){
        alert("El campo no puede estar vacio");
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listaC");

        lista.innerHTML+=opcion;
        colores.push(nom);
    }else {
        alert("El color existe");
    }

}
function existeNombre(nombre){
    //busca un nombre
    
    for(let i=0;i<colores.length;i++){
        const elemento=colores[i];
        if(elemento.trim().tolowerCase()===nombre.trim().tolowerCase()){
            return true;
        }
    }
    return false;
 }

//==================================================================================
 //cronometro
 document.addEventListener("DOMContentLoaded", () => {
    const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
        $medinaIniciar = document.querySelector("#Iniciar"),
        $medinaPausar = document.querySelector("#Pausar"),
        $medinaDetener = document.querySelector("#Detener");
    let	idInterval =[],
        tiempoInicio = null;
    let diferenciaTemporal = 0; 
 
    const ocultarElemento = elemento =>{
        elemento.style.display = "none";
    }

    const mostrarElemento = elemento => {
        elemento.style.display = "";
    }

    const aumentarCero = valor => {
        if (valor < 10) {
            return "0" + valor;
        } else {
            return "" + valor;
        }
    }
    const milisegundosAMinutosYSegundos = (milisegundos) => {
        const minutos = parseInt(milisegundos / 1000 / 60);
        milisegundos -= minutos * 60 * 1000;
        segundos = (milisegundos / 1000);
        return `${aumentarCero(minutos)}:${aumentarCero(segundos.toFixed(1))}`;
    };
    const iniciarStart = () => {
        const ahora = new Date();
        tiempoInicio = new Date(ahora.getTime() - diferenciaTemporal);
        clearInterval(idInterval);
        idInterval = setInterval(refrescarTiempo, 100);
        ocultarElemento($medinaIniciar);
        ocultarElemento($medinaDetener);
        mostrarElemento($medinaPausar);
    };
    const pausarPause = () => {
        diferenciaTemporal = new Date() - tiempoInicio.getTime();
        clearInterval(idInterval);
        mostrarElemento($medinaIniciar);
        ocultarElemento($medinaPausar);
        mostrarElemento($medinaDetener);
    };
    const refrescarTiempo = () => {
        const ahora = new Date();
        const diferencia = ahora.getTime() - tiempoInicio.getTime();
        $tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
    };
    const detenerHaving = () => {
        if (!confirm("¿Quiere reiniciar su tiempo?")){
            return;
        }
        clearInterval(idInterval);
        init();
    idInterval =[];
        diferenciaTemporal = 0;
    }

    const init = () => {
        $tiempoTranscurrido.textContent = "00:00.0";
        ocultarElemento($medinaPausar);
        ocultarElemento($medinaDetener);
    };
    init();

    $medinaIniciar.onclick = iniciarStart;
    $medinaPausar.onclick = pausarPause;
    $medinaDetener.onclick = detenerHaving;
});





