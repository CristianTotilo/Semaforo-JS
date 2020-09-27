/* ------------------------------------------------------ */
/*                  VARIABLES GLOBALES                    */
/* ------------------------------------------------------ */
var modoAuto = false
var refTimer
var estadoSemaforo = 0

/* ------------------------------------------------------ */
/*                  FUNCIONES GLOBALES                    */
/* ------------------------------------------------------ */
function cambiarColorLuzSemaforo(id, prender) {
    var color = 'gray'
    if(prender) color = id
    document.getElementById(id).style.backgroundColor = color
}

function cambiarSemaforoBoton() {
    if(!modoAuto) cambiarEstadoSemaforo()
}

function cambiarModoSemaforo() {
    modoAuto = !modoAuto

    console.log(modoAuto)
    document.getElementById('modo').innerText = modoAuto? 'MODO AUTOMÁTICO':'MODO MANUAL'

    if(modoAuto) {
        refTimer = setInterval(cambiarEstadoSemaforo,2000)
    }
    else {
        clearInterval(refTimer)
    }
}

function cambiarEstadoSemaforo() {

    console.log(estadoSemaforo)

    switch(estadoSemaforo) {
        case 0:
            cambiarColorLuzSemaforo('red',true)
            cambiarColorLuzSemaforo('yellow',false)
            cambiarColorLuzSemaforo('green',false)  
            break
            
        case 1:
            cambiarColorLuzSemaforo('red',true)
            cambiarColorLuzSemaforo('yellow',true)
            cambiarColorLuzSemaforo('green',false)
            break
            
        case 2: 
            cambiarColorLuzSemaforo('red',false)
            cambiarColorLuzSemaforo('yellow',false)
            cambiarColorLuzSemaforo('green',true)    
            break
            
        case 3: 
            cambiarColorLuzSemaforo('red',false)
            cambiarColorLuzSemaforo('yellow',true)
            cambiarColorLuzSemaforo('green',false)
            break
            
        default:
            cambiarColorLuzSemaforo('red',true)
            cambiarColorLuzSemaforo('yellow',true)
            cambiarColorLuzSemaforo('green',true)
            estadoSemaforo = 0
    }

    estadoSemaforo++
    if(estadoSemaforo > 3) estadoSemaforo = 0
}

function start() {
    console.log('Semáforo en JS')

    cambiarColorLuzSemaforo('red',false)
    cambiarColorLuzSemaforo('yellow',false)
    cambiarColorLuzSemaforo('green',false)
}

/* ------------------------------------------------------ */
/*                     EJECUCIONES                        */
/* ------------------------------------------------------ */
//start()
window.onload = start //(antes estaba -> onload en null)
//if(window.onload) window.onload()  --> cuando termina de cargar todo el HTML
