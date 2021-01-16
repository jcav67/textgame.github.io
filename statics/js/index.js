var clasepj;

function inicarjuego(){
    location.replace('pantalla1.html');
    console.log("entre")
}


function seleccionarclase(clase){
    localStorage.setItem('clase', clase);
    location.replace('s1-1.html');
}

function s1Respuesta(res){
    var button = document.createElement("button");
    button.innerHTML="Siguiente"
    switch(res){
        case 'a':
            document.getElementById("Respuesta").innerHTML='“Alguien se ha llevado a mi hijo Angu, estábamos recogiendo materiales en las cuevas de la montaña, cuando alguien en una capucha negra se ha golpeado en la cabeza. Caí inconsciente y cuando desperté solo estaba el costal de piedras regado en el suelo.”';
            document.getElementById("b").disabled=true;
            document.getElementById("c").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'b':
            document.getElementById("Respuesta").innerHTML='“Por favor, tienes que ayudarme. Alguien se ha llevado a mi hijo Angu, estábamos recogiendo materiales en las cuevas de la montaña, cuando alguien en una capucha negra se ha golpeado en la cabeza. Caí inconsciente y cuando desperté solo estaba el costal de piedras regado en el suelo.”';
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'c':
            document.getElementById("Respuesta").innerHTML='Te agarra fuertemente el brazo y no te deja escapar. “Alguien se ha llevado a mi hijo Angu, estábamos recogiendo materiales en las cuevas de la montaña, cuando alguien en una capucha negra se ha golpeado en la cabeza. Caí inconsciente y cuando desperté solo estaba el costal de piedras regado en el suelo.”'
            document.getElementById("a").disabled=true;
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'd':
            document.getElementById("Respuesta").innerHTML='Cuando estabas a punto de pegarle, lo miraste fijamente a los ojos y notaste el miedo que sentía. Esto te conmovió, bajas la mano y le preguntas que qué ocurre. Asustado, empieza a hablar: “Alguien se ha llevado a mi hijo Angu, estábamos recogiendo materiales en las cuevas de la montaña, cuando alguien en una capucha negra se ha golpeado en la cabeza. Caí inconsciente y cuando desperté solo estaba el costal de piedras regado en el suelo.”'
            document.getElementById("b").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            window.location.href ='#Respuesta'
            break;    
    }
    var div= document.getElementById("div-respuesta");
    div.appendChild(button);
    button.addEventListener("click",function(){
        location.replace('s1-2.html');
    })
}

function s12Respuesta(res){
    switch(res){
        case 'a':
            /* se mueve a la siguiente*/ 
            location.replace('s2-1.html')
            break;
        case 'b':
            document.getElementById("Respuesta").innerHTML='Ceses te mira y se inclina todavía más, su cara contra el suelo, llorando. Te ruega la ayuda que tanto necesita.(intenta otra respuesta)';
            window.location.href ='#Respuesta'
            setTimeout(recargar,5000);
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            document.getElementById("d").disabled=true;
            break;
        case 'c':
            document.getElementById("Respuesta").innerHTML='Ceses te mira y se inclina todavía más, su cara contra el suelo, llorando. Te ruega la ayuda que tanto necesita.(intenta otra respuesta)'
            window.location.href ='#Respuesta'
            setTimeout(recargar,5000);
            document.getElementById("b").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("d").disabled=true;
            break;
        case 'd':
            /* Game Over*/
            location.replace('GameOver.html')
            localStorage.setItem('final', 'ignorante');
            break;    
    }
}
function recargar(){
    location.reload();
}

function s2Respuesta(res){
    var button = document.createElement("button");
    button.innerHTML="Siguiente"
    switch(res){
        case 'a':
            document.getElementById("Respuesta").innerHTML='La figura se voltea y te das cuenta de que realmente no es un ser humano. Parece más bien una mezcla entre un orco y un ogro, con ojos rojos como la sangre, sin pupilas, unos colmillos de marfil, una piel verde oscura y una túnica negra. Coge su mazo en la mano, hecho de madera oscura con manchas de sangre tanto roja como azul. Gruñe furiosamente y se lanza para atacarte.';
            document.getElementById("b").disabled=true;
            document.getElementById("c").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'b':
            document.getElementById("Respuesta").innerHTML='La figura se voltea y te das cuenta de que realmente no es un ser humano. Parece más bien una mezcla entre un orco y un ogro, con ojos rojos como la sangre, sin pupilas, unos colmillos de marfil, una piel verde oscura y una túnica negra. Coge su mazo en la mano, hecho de madera oscura con manchas de sangre tanto roja como azul. Gruñe furiosamente y se lanza para atacarte.';
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'c':
            document.getElementById("Respuesta").innerHTML='El cuchillo penetra la piel y escuchas un gruñido que no es humano. La sangre que sale es de color azul brillante, más brillante que el cielo en pleno medio día, pero más viscosa que jarabe de dulce. Retrocedes unos pasos y te limpias la sangre en tu camisa. La figura se voltea y te das cuenta de que parece más bien una mezcla entre un orco y un ogro, con ojos rojos como la sangre, sin pupilas, unos colmillos de marfil, una piel verde oscura y una túnica negra. Coge su mazo en la mano, hecho de madera oscura con manchas de sangre tanto roja como azul. Gruñe furiosamente y se lanza para atacarte.'
            document.getElementById("a").disabled=true;
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            window.location.href ='#Respuesta'
            break;
        case 'd':
            document.getElementById("Respuesta").innerHTML='Empezaste a escalar, pero la pared es muy lisa y te caes, gritando por el dolor de una gran piedra en tu espalda. Esto alerta a la figura, se voltea y empieza a acercarse. Cuando está más cerca, te das cuenta de que realmente no es un ser humano. Parece más bien una mezcla entre un orco y un ogro, con ojos rojos como la sangre, sin pupilas, unos colmillos de marfil, una piel verde oscura y una túnica negra. Coge su mazo en la mano, hecho de madera oscura con manchas de sangre tanto roja como azul. Gruñe furiosamente y se lanza para atacarte.'
            document.getElementById("b").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            window.location.href ='#Respuesta'
            break;    
    }
    var div= document.getElementById("div-respuesta");
    div.appendChild(button);
    button.addEventListener("click",function(){
        location.replace('s2-2.html');
    })
}

function s22Respuesta(res){
    clasepj=localStorage.getItem('clase');
    switch(res){
        case 'a':
            /* se mueve a la siguiente*/ 
            if(clasepj=='espada'){
                document.getElementById('Respuesta').innerHTML='Coges tu espada y golpeas al orco en la mano del mazo, desviando el golpe y salvándote por poco. Te mira fijamente y sabes que te va a asesinar si no haces algo pronto.';
            }
            else if(clasepj=='arco'){
                document.getElementById('Respuesta').innerHTML='Coges tu arco y lanzas una flecha apuntando al ojo derecho del orco. Te tomas un segundo en apuntar bien y disparas, dando en tu objetivo. El orco gruñe, te mira fijamente con su único ojo mientras el otro escurre sangre. Sabes que te va a asesinar si no haces algo pronto.';
            }
            else if(clasepj=='mago'){
                document.getElementById('Respuesta').innerHTML='Coges tu báculo e invocas una bola de fuego, el orco la esquiva por poco, pero para por completo en su ataque. Te mira fijamente y sabes que te va a asesinar si no haces algo pronto.';
            }
            else{
                document.getElementById('Respuesta').innerHTML='Coges una piedra de buen tamaño y apenas el orco se acerca se la tiras a los ojos, dando en tu objetivo. El orco gruñe, te mira fijamente con su único ojo mientras el otro escurre sangre. Sabes que te va a asesinar si no haces algo pronto.';
            }
            
            
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            document.getElementById("c").disabled=true;
            break;
        case 'b':
            document.getElementById("Respuesta").innerHTML='El mazo te golpea la espalda, sientes un dolor insoportable y varias costillas quebradas. Caes al piso y recibes varios golpes más.';
            setTimeout(dead,8000);
            window.location.href ='#Respuesta'
            document.getElementById("d").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            break;
        case 'c':
            document.getElementById("Respuesta").innerHTML='El mazo de golpea el lado de la cabeza, todo te da vueltas y empiezas a perder la visión. Caes al suelo y recibes varios golpes más. '
            setTimeout(dead,8000);
            window.location.href ='#Respuesta'
            document.getElementById("a").disabled=true;
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            break;
        case 'd':
            /* Game Over*/
            document.getElementById("Respuesta").innerHTML='Intentas hablar y recibes un golpe de mazo debajo de la cumbamba, te causa un dolor insoportable y finalmente caes de espaldas. El orco te dice "cállate, serás un excelente sacrificio". Recibes otros golpes del mazo.'
            setTimeout(dead,12000);
            window.location.href ='#Respuesta'
            document.getElementById("b").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            break;    
    }
}

function s22Respuesta(res){
    clasepj=localStorage.getItem('clase');
    switch(res){
        case 'a':
            /* se mueve a la siguiente*/ 
            if(clasepj=='espada'){
                document.getElementById('Respuesta').innerHTML='Tomas la espada, esquivas el ataque lateral del orco mientras te agacha. Coges impulso y con mucha fuerza atraviesas el abdomen del orco. Cae de rodillas frente a ti, escupiendo sangre azul de la boca. Tomas la espada, le cortas el cuello y se desploma al piso. Esperas un momento para recuperarte, tomas la llave y te dirijes a la puerta.';
            }
            else if(clasepj=='arco'){
                document.getElementById('Respuesta').innerHTML='Rápidamente cargas el arco con dos flechas más y las disparas a la cabeza del orco. Se mueve y esquiva una, pero la otra se entierra en el cuello. Aprovechas el descuido para volverlo a disparar otra flecha, esta atraviesa complemente el cráneo del orco y se desploma hacia atrás. Esperas un momento para recuperarte, tomas la llave y te dirijes a la puerta.';
            }
            else if(clasepj=='mago'){
                document.getElementById('Respuesta').innerHTML='Conjuras unos pilares de roca que detienen al orco en su sitio Luego, recitando un viejo conjuro que pocos saben, extraes el alma del orco, una especie de humo verde sale de él y lo absorbes con tu báculo. Finalmente, el orco se queda quieto, y el brillo de sus ojos desaparece. Esperas un momento para recuperarte, tomas la llave y te dirijes a la puerta.';
            }
            else{
                document.getElementById('Respuesta').innerHTML='Tomas una piedra puntiaguda del suelo y le saltas del sorpresa a la cara. Él intenta quitarte de encima. Le clavas la piedra en el cuello y grita. Te tira contra el suelo, pero a su ves tira su mazo. Aprovechas que está distraído para agarrar el mazo, pesa más de lo que pensabas pero con toda la energía que te queda golpeas al orco en la cabeza. Él cae al suelo y lo golpeas hasta estar convencido de que no se va a volver a parar. Esperas un momento para recuperarte, tomas la llave y te dirijes a la puerta.';
            }
            
            
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            document.getElementById("c").disabled=true;
            break;
        case 'b':
            document.getElementById("Respuesta").innerHTML='Tomas un puñado de arena del suelo y se lo tiras al orco a los ojos. Esto lo deja ciego y tambaleándose, por lo que aprovechas para hacerlo caer. Una vez está en el suelo, le arrebatas la llave del cuello y sales corriendo hacia la puerta. La abres apresuradamente mientras ves que el orco se recupera. Entras a una habitación oscura y cierras rápidamente la puerta, le pones la llave y la tiras lejos.';
            window.location.href ='#Respuesta'
            document.getElementById("d").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            break;
        case 'c':
            document.getElementById("Respuesta").innerHTML='Intentas hablar y recibes un golpe de mazo debajo de la cumbamba, te causa un dolor insoportable y finalmente caes de espaldas. El orco te dice "cállate, serás un excelente sacrificio". Recibes otros golpes del mazo. '
            setTimeout(dead,8000);
            window.location.href ='#Respuesta'
            document.getElementById("a").disabled=true;
            document.getElementById("b").disabled=true;
            document.getElementById("d").disabled=true;
            break;
        case 'd':
            /* Game Over*/
            document.getElementById("Respuesta").innerHTML='El mazo te golpea la espalda, sientes un dolor insoportable y varias costillas quebradas. Caes al piso y recibes varios golpes más.'
            setTimeout(dead,5000);
            window.location.href ='#Respuesta'
            document.getElementById("b").disabled=true;
            document.getElementById("a").disabled=true;
            document.getElementById("c").disabled=true;
            break;    
    }
}
function gameover(){
    bandera=localStorage.getItem('final');
    if( bandera=="ignorante"){
        document.getElementById("Final").innerHTML="Te fuiste de la ciudad"
    }
}
function dead(){
    window.location.href ='GameOver.html'
}

function reset(){
    location.replace('index.html')
}