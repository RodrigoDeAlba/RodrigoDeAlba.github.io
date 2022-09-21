let palabras = Array("vaca", "toro", "loro", "perro", "gato", "serpiente", "mula", "caballo", "cerdo", "hamster", "serpiente", "cocodrilo");
            let palabraOc = ""; //Palabra oculta
            let palabraAdi = ""; //Palabra que va adivinando el usuario
            let vidas = 4;
            document.getElementById("boton").addEventListener("click", comprobar);

            iniciar();

            function iniciar(){
                palabraOc=palabras[Math.floor(Math.random()*palabras.length)];  
                console.log(palabraOc);
                for (let i = 0;i<palabraOc.length;i++){
                palabraAdi=palabraAdi+"_ ";
                }
                document.getElementById("frase").innerHTML=palabraAdi;
            }
            
            function comprobar(){
                let letra = document.getElementById("letra").value.toUpperCase();
                palabraOc = palabraOc.toUpperCase();
                let nuevo = "";
                for (let i = 0;i<palabraOc.length;i++){
                    if(letra==palabraOc[i]){
                        nuevo = nuevo + letra + " ";   
                    }else{
                        nuevo = nuevo + palabraAdi[i*2] + " ";
                    }
                }
                if(nuevo==palabraAdi){
                    vidas--;
                    document.getElementById("vida").innerHTML= "VIDAS: " + vidas;
                }
                palabraAdi = nuevo;
                document.getElementById("frase").innerHTML=palabraAdi;

                if(vidas==0){
                    alert("perdiste :( ");
                }
                if(palabraAdi.search("_")==-1){
                    alert("ganaste :) ");

                }

                document.getElementById("letra").value = "";
                document.getElementById("letra").focus();

                dibujar ();
            }

            function dibujar(){
                var canvas = document.getElementById("lienzo");
                if (canvas.getContext){
                    var ctx = canvas.getContext("2d");

                //esto dibuja la base del ahorcado
                    ctx.beginPath();
                    ctx.moveTo(30,200);
                    ctx.lineTo(30,10);
                    ctx.lineTo(150,10);
                    ctx.lineTo(150,20);
                    ctx.stroke();
                    ctx.strokeStyle="darkblue";
                    ctx.lineWidth = 10;

                    ctx.stroke();
                    ctx.strokeStyle="brown";
                    if(vidas<=3){ //dibujar cabeza 
                        ctx.beginPath();
                        ctx.arc(150, 40, 20, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.lineWidth = 5;
                    }
                    if(vidas<=2){ //Dibujar cuerpo
                        ctx.beginPath();
                        ctx.moveTo(150,60);
                        ctx.lineTo(150,100);
                        ctx.stroke();
                        ctx.lineWidth = 5;
                    }
                    if(vidas<=1){ //Dibujar brazos
                        ctx.beginPath();
                        ctx.moveTo(150,60);
                        ctx.lineTo(130,100);
                        ctx.stroke();
                        ctx.lineWidth = 5;

                        ctx.beginPath();
                        ctx.moveTo(150,60);
                        ctx.lineTo(170,100);
                        ctx.stroke();
                        ctx.lineWidth = 5;
                        
                    }
                    if(vidas==0){ //Dibujar piernas
                        ctx.beginPath();
                        ctx.moveTo(150,100);
                        ctx.lineTo(170,130);
                        ctx.stroke();
                        ctx.lineWidth = 5;

                        ctx.beginPath();
                        ctx.moveTo(150,100);
                        ctx.lineTo(130,130);
                        ctx.stroke();
                        ctx.lineWidth = 5;

                    }

                }
            
            }

const reload = document.getElementById("btn-agregar");

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});
        

            
