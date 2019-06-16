
var $derecha= $(".right");
var $abajo=$(".down");
var $izquierda=$(".left");
var $arriba=$(".up");
var $stop=$(".stop");
var $ladybug = $(".ladybug");

$derecha.click(deslizaDerecha);
$derecha.keypress(39,deslizaDerecha);
$abajo.click(deslizaAbajo);
$stop.click(parar);
$izquierda.click(deslizaIzquierda);
$arriba.click(deslizaArriba);

function removeRotate() {
    $ladybug.removeClass("ladyRotateDown"); 
    $ladybug.removeClass("ladyRotateLeft");
    $ladybug.removeClass("ladyRotateUp"); 
    $ladybug.removeClass("ladyRotateLeft");
    $ladybug.removeClass("ladyRotateUp");  
}

function deslizaDerecha(){
    removeRotate();
    $ladybug.addClass("ladyRotateRight");
    $ladybug.stop().animate({left:"90%"},800);
}

function deslizaAbajo(){
    removeRotate();
    $ladybug.addClass("ladyRotateDown");
    $ladybug.stop().animate({top:"55%"},800);
}

function deslizaIzquierda() {
    removeRotate();
    $ladybug.addClass("ladyRotateLeft");
    $ladybug.stop().animate({left:"0%"},800);
}

function deslizaArriba() {
    removeRotate();
    $ladybug.addClass("ladyRotateUp");
    $ladybug.stop().animate({top:"0%"},800);
}

function parar() {
    $ladybug.stop();
}

// keydown:
var velocidad= 20;
$("body").keydown(moverladybug);

function moverladybug(evento) {
    
    var codTecla=evento.which;
    if (codTecla===39){
        var posX=parseInt($ladybug.css("left"));
        var nuevaPosX=posX + velocidad;
        $ladybug.css("left", nuevaPosX + "px");
        

    }
    
}



