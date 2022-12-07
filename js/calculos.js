$(document).ready(function() {
    var valor = 0;
    document.getElementById("poblacion").style.visibility = "hidden";
    var video = document.getElementById("mivideo");
    
    function manipuloTextos2(){
        if(video.currentTime >= 3 && video.currentTime < 9){
            document.getElementById("poblacion").style.visibility = "visible";
            const dateToday = new Date() // Mon Jun 08 2020 16:47:55 GMT+0800 (China Standard Time)
            currentEpoch = epoch(dateToday);
            //console.log(currentEpoch);
            difference = currentEpoch - 1669993146000;
            valor = (difference/60000)*127.3;
            valor = valor+1+8003168725+16;
            valor = parseInt(valor);
            var cadena2 = valor.toString();
            var i = 0;
            var newValor = "";
            for(var j = cadena2.length; j--; j>0)
            {
                if(i%3==0 && i!=0)
                {
                    newValor = cadena2[j]+"."+newValor;
                }
                else
                {
                    newValor = cadena2[j]+newValor;
                }
                i++;
                //console.log(newValor);
            }
            //console.log(newValor);
            $("#poblacion").text(newValor);
        }
        else{
            document.getElementById("poblacion").style.visibility = "hidden";
        }
        //console.log(video.currentTime);				
        setTimeout(manipuloTextos2, 200);
    }

    function manipuloTextos(){
        if(video.currentTime >= 3 && video.currentTime < 9){
            document.getElementById("poblacion").style.visibility = "visible";
            valor++;
            var cadena2 = valor.toString();
            var i = 0;
            var newValor = "";
            for(var j = cadena2.length; j--; j>0)
            {
                if(i%3==0 && i!=0)
                {
                    newValor = cadena2[j]+"."+newValor;
                }
                else
                {
                    newValor = cadena2[j]+newValor;
                }
                i++;
                //console.log(newValor);
            }
            console.log(newValor);
            $("#poblacion").text(newValor);
        }
        else{
            document.getElementById("poblacion").style.visibility = "hidden";
        }
        //console.log(video.currentTime);				
        setTimeout(manipuloTextos, 200);
    }
    
    function getLogdata() {
    $.ajax({
    cache: false,
    url: "PoblacionMundial.txt",
    dataType: "text",
    success: function(text) {
                var lines = text.split("\r");
                for(var i = 0 ; i < lines.length; i++){
                    //console.log(lines[i]);
                    var variables = lines[i].split("=");
                    var cadena = variables[1].split('.').join("");
                    valor = parseInt(cadena);
                }
                setTimeout(getLogdata, 10000); // refresh every 10 seconds	
            }
        })
    }

    function epoch (date) {
        return Date.parse(date)
      }

    getLogdata();
    manipuloTextos2();
});