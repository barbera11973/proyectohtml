
function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u23F5'; //\u25BA
        document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='\u23F9';
        document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
    if(medio.play)
    {
        medio.currentTime='0';
        play.value="\u23F9";
        medio.play();
    }
}
function accionRetrasar()
{
    
    if(medio.currentTime >= 5)
    {
        medio.currentTime=medio.currentTime - 5;
    }
}
function accionAdelantar()
{
  if(medio.play)
  {
      medio.currentTime=medio.currentTime + 5;     
  }
}
function accionSilenciar()
{
    if(medio.muted)
    {
		medio.muted = false;
		silenciar.value="\uD83D\uDD0A";
    }
    else 
    {
		medio.muted = true;
		silenciar.value = "\uD83D\uDD07";
	}
}
function accionMasVolumen()
{
	medio.volume=medio.volume + 0.1;
}
function accionMenosVolumen()
{
	medio.volume=medio.volume - 0.1;
}

function iniciar() 
{	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}   
window.addEventListener('load', iniciar, false);

var ctx=null, canvas=null;

function iniciar2()
{
    canvas=document.getElementById('lienzo');
    ctx=canvas.getContext('2d');
    ctx.fillStyle = "rgba(168, 97, 97, 1)";
    ctx.fillRect(170, 220, 70, 25);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.strokeRect(175, 100, 60, 100)

    ctx.beginPath();
    ctx.moveTo(15, 15);
    ctx.lineTo(15, 200);
    ctx.moveTo(15, 15);
    ctx.lineTo(400, 15);
    ctx.moveTo(400,200);
    ctx.lineTo(15,200);
    ctx.moveTo(400,15);
    ctx.lineTo(400,200);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#0E1905";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(205, 200, 90, 0, (Math.PI / 180) * 180);
    ctx.lineWith = 10;
    ctx.strokeStyle = "blue";
    ctx.stroke();

    ctx.font = 'Bold 30px Calibri';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText('CASA', 200, 50);

    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.strokeRect(270, 70, 60, 50);

    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.strokeRect(70, 70, 60, 50);

}
window.addEventListener('load', iniciar2, false);

function accionPlay2()
{ 
    var reproducir = new Audio();
    reproducir.src= "https://www.sshhtt.com/images/sampledata/ambient/Amaneceramanecer%20en%20el%20campo%20con%20aves34.mp3";
    reproducir.play();
}
function iniciar3()
{
    button= document.querySelectorAll("button");
    button[0].addEventListener("click", accionPlay2, false);
}
window.addEventListener("load", iniciar3, false);

function accionPlay3()
{ 
    var reproducir = new Audio();
    reproducir.src= "https://www.sshhtt.com/images/sampledata/city/sirenaefectos%20sonidos%20-%20sirena%20policia%20-%20copia.mp3";
    reproducir.play();
}
function iniciar4()
{
    button= document.querySelectorAll("button");
    button[1].addEventListener("click", accionPlay3, false);
}
window.addEventListener("load", iniciar4, false);

function accionPlay4()
{ 
    var reproducir = new Audio();
    reproducir.src= "https://www.sshhtt.com/images/sampledata/christmas/white%20christmas%20songWhite_Xmas_Vox_39777.mp3";
    reproducir.play();
}
function iniciar5()
{
    button= document.querySelectorAll("button");
    button[2].addEventListener("click", accionPlay4, false);
}
window.addEventListener("load", iniciar5, false);

function accionPlay5()
{ 
    var reproducir = new Audio();
    reproducir.src= "https://www.sshhtt.com/images/sampledata/city/autopista1.mp3";
    reproducir.play();
}
function iniciar6()
{
    button= document.querySelectorAll("button");
    button[3].addEventListener("click", accionPlay5, false);
}
window.addEventListener("load", iniciar6, false);

////////////////////////////////////////////////////////////////

var x=50,y=50;
var lastPress=null;  //Variable para guardar la tecla presionada
//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos valores numéricos son 37, 38, 39 y 40 respectivamente.
const KEY_LEFT=37;
const KEY_UP=38;
const KEY_RIGHT=39;
const KEY_DOWN=40;
const KEY_P=80;
var pause=true;

function iniciar7()
{
    canvas=document.getElementById('lienzo2');
    lienzo=canvas.getContext('2d'); //obtenemos el contexto de dibujo
    run();
}

function run(){
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    requestAnimationFrame(run); //animación optimizada
    accionesJuego();
    pintarLienzo(lienzo);
}

function accionesJuego()
{
    
    if(!pause)
    {  
    //Modificamos la dirección que tendrá nuestro player en función de la tecla presionada   
        if(lastPress==KEY_RIGHT)
        {
            x+=5;
        }
        else if(lastPress==KEY_UP)
        {
            y+=-5;
        }
        else if(lastPress==KEY_DOWN)
        {
            y+=5;
        }
        else if(lastPress==KEY_LEFT)
        {
            x+=-5;
        }
    
        //verificaremos si el player ha salido del canvas, en cuyo caso, haremos que aparezca por el otro lado:
        if(x>=canvas.width)
        {
            x=0;
        }
    
        if(y>=canvas.width)
        {
            y=0;
        }
    }
    else if(lastPress==KEY_P)
    {
        pause=!pause;
        lastPress=null;     
    }

}

function pintarLienzo(lienzo)
{
    lienzo.fillStyle="#F7F9FA"; 
    lienzo.fillRect(0,0,canvas.width,canvas.height);
    lienzo.fillStyle='#0f0';
    lienzo.fillRect(x,y,10,10); //Dibujamos el jugador: va por posición x,y y es de 10x10 
    
    if(pause==true)
    {
        lienzo.textAlign='center'; 
        lienzo.fillText('PAUSE',150,75); 
        lienzo.textAlign='left';
    }
        
    
        
}

document.addEventListener('keydown', function(evt) { 
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress=evt.keyCode;
}, false);
window.addEventListener("load", iniciar7, false);

