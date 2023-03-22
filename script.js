
function timer1(){
    ciclo(45,document.querySelector('#timer'),1000);
}

function timer2(){
   ciclo(45,document.querySelector('#timer1'),110);
}


function ciclo(duration, display,velo) {
    
    var duration = 60 * 45; // Converter para segundos
    //display = document.querySelector('#timer'); // selecionando o objeto 
    var data = new Date();
    var iniciou= document.querySelector('#marco1');
    iniciou.textContent =data; 
    var timer = duration, minutes, seconds;
    var ponteiro = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            clearInterval(ponteiro)
            var data1 = new Date;
            var finalizou = document.querySelector('#marco2');
            finalizou.textContent=data1;
            var temporeal = data1-data;
            console.log("Tempo Real: "+ temporeal);
        }
    }, velo);
    ;
}

/* 
//
       // Guardar cada pedaço em uma variável
       var dia     = data.getDate();           // 1-31
       var dia_sem = data.getDay();            // 0-6 (zero=domingo)
       var mes     = data.getMonth();          // 0-11 (zero=janeiro)
       var ano2    = data.getYear();           // 2 dígitos
       var ano4    = data.getFullYear();       // 4 dígitos
       var hora    = data.getHours();          // 0-23
       var min     = data.getMinutes();        // 0-59
       var seg     = data.getSeconds();        // 0-59
       var mseg    = data.getMilliseconds();   // 0-999
       var tz      = data.getTimezoneOffset(); // em minutos */
       