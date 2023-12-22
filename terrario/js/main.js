dragElement(document.getElementById('planta1'));
dragElement(document.getElementById('planta2'));
dragElement(document.getElementById('planta3'));
dragElement(document.getElementById('planta4'));
dragElement(document.getElementById('planta5'));
dragElement(document.getElementById('planta6'));
dragElement(document.getElementById('planta7'));
dragElement(document.getElementById('planta8'));
dragElement(document.getElementById('planta9'));
dragElement(document.getElementById('planta10'));
dragElement(document.getElementById('planta11'));
dragElement(document.getElementById('planta12'));
dragElement(document.getElementById('planta13'));
dragElement(document.getElementById('planta14'));

//funcion principal para hacer arrastrables los elemntos en el terrario

function dragElement(terrariumElement){

    //Se establecen cuatro variables para manejar la posicion del elemento en la pantalla

    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    // se asignan el evento onpointerdown al elemnto para detectar cuando se toca el ratón

    terrariumElement.onpointerdown = pointerDrag;

    //Funcion que se ejecuta cuando se presiona el ratón o se toca la pantalla
    function pointerDrag(e){
            e.preventDefault(); //Evita el comportamiento por defecto que el ratón no 
                                // recoga dos elemntos al pasar por encima de otro.
    
        
    //se capturan las coordenadas del puntero al momento de presionar
            pos3 = e.clientX;
            pos4 = e.clientY;

    //Se asignan eventos adicionales para seguir el movimiento del ratón
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    // Funcion que se ejecuta cuando se está arrastrando el elemento
    function elementDrag(e) {

        //Se calcula el cambio de posicion respecto al punto de presion icicial
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        //se actualiza la posicion del elemento para seguir el movimineto del puntero
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
    }
        // Funcion que se ejecuta cuando se suelta el elemento

        function stopElementDrag(){
            //Se eliminan los eventos de movimiento y soltar para dejar de seguir el elemento 
            document.onpointerup = null;
            document.onpointermove = null;
        }
    
}