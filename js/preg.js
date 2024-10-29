class preg{
    constructor (p,resp,op1,op2,op3){
        this.p=p;
        this.resp=resp;
        this.op1=op1;
        this.op2=op2;
        this.op3=op3;
        
    }    

    op(){
        
        return [this.resp,this.op1,this.op2,this.op3].sort((a,b)=>Math.random()-0.5);
    }
}

uno=new preg("¿A qué departamento debemos realizar el Reporte de Clientes interesados en comprar?","Soporte","Ventas","RRHH","TI");
dos=new preg("Las solicitudes de Llaves se deben realizar al departamento de:","Soporte","Ventas","Banco","RRHH");
tres=new preg("Las Fotografías que cada Asesor toma durante una visita deben ser enviadas a:","Soporte","Ventas","Banco","TI");
cuatro=new preg("El formato de Vídeos Horizontales se suelen utilizar para publicar principalmente en la siguiente Red Social:","YouTube","TikTok","Instagram","Twitter");
cinco=new preg("La cantidad de seguidores en Facebook que mantiene Bienes Adjudicados Costa Rica, son cerca de:","12.000","20.000","5.000","2.000");
seis=new preg("El Asesor debe completar las Ofertas y enviarlas a:","Soporte","Banco","Ventas","RRHH");
siete=new preg("Easypro actualmente trabaja con Bancos, Cooperativas, Financieras, Asociaciones, que actualmente juntas suman:","32","12","17","20");
ocho=new preg("Para conocer las Comisiones que pagan por ventas debo consultarlo en:","Intranet","Bienes Adjudicados","Soporte","Ventas");
nueve=new preg("La mayoría de vehículos que se colocan en Easypro son de la marca Toyota y pertenecen a la empresa Budget, uno de los estilos más vendidos es:","Fortuner","RAV4","Yaris","Corolla");
diez=new preg("Para solicitar el Permiso de Ingreso a un condominio se requiere indicar el nombre completo y la cédula del cliente, además de:","Placa del carro","Correo Electrónico","Teléfono","Dirección");
once=new preg("En el mundo de las Ventas los objetivos SMART deben ser Específicos, Medibles, Alcanzables, Tiempo y:","Realistas","Responsables","Adaptables","Confiables");
doce=new preg("Es una capacitación de Easy-U y disponible para los asesores de Easypro:","Hábitos Atómicos","El vendedor exigente","Piense y hágase rico","Vender o ser vendido");
trece=new preg("¿Cómo se llama la constructora con la que Easypro tiene una alianza para colocar casas modulares y construcción?","Almasa","Casamax","Agapantus","Grupo Diamante");
catorce=new preg("Si un cliente desea separar para su compra un vehículo de Budget deberá depositar:","$1.000","$2.500","ø300.000","$500");
quince=new preg("Es un término inglés que, en el mundo de los negocios, se utiliza para definir las reuniones para involucración del personal:","Kick Off","Coaching","Easypro","Set up");
dieciseis=new preg("En el año 2024 el siguiente medio de comunicación realizó un reportaje de la empresa Easypro:", "El Financiero", "La República", "La Teja", "Revista SUMA");
diecisiete=new preg("La propiedad Adjudicada de mayor valor disponible para la venta se encuentra en la zona de Santa Ana y su valor es cercano a:", "$16,000,000.00", "$50,000,000.00", "$6,000,000.00", "$9,500,000.00");
dieciocho=new preg("Cuando una persona Jurídica solicita un Crédito los bancos generalmente les solicitan:", "CPA", "CPI", "BPC", "OPC");
diecinueve=new preg("El monto máximo que puede costar una propiedad de Bono Crédito es de:", "65 millones", "37 millones", "92 millones", "25 millones");
veinte=new preg("Para conocer a qué banco pertenece una determinada propiedad o bien debo consultarlo:", "Intranet", "Soporte", "Página web", "Ventas");
veintiuno=new preg("El término Bienes Adjudicados se utiliza en Panamá como:", "Bienes Reposeídos", "Activos Extraordinarios", "Remate Bancario", "Bienes Adjudicados");
veintidos=new preg("Durante el año 2023 Easypro patrocinó el siguiente programa de Teletica Radio en el cual contaba con participación activa:", "Sábados con mi gente", "Siete días Radio", "Panorama", "Malas compañías");
veintitres=new preg("Los Asesores nuevos deben solicitar su firma de correo y su acceso a:", "TI", "Soporte", "RRHH", "Ventas");
veinticuatro=new preg("Una vez asignadas las propiedades, las pueden vender:", "Todos los Asesores", "Unicamente el asignado", "Asesores de la zona", "Asesores de élite");
veinticinco=new preg("En el año 2020 Easypro recibió para su venta un inventario poco común, este pertenecía a Banco Lafise y se trataba de lo siguiente:", "Ropa y Joyería de Lujo", "Una fábrica de Bebidas", "500 cabezas de ganado", "Inventario de Arte");
veintiseis=new preg("En la siguiente zona no se cuenta con una Sucursal de Bienes Adjudicados Costa Rica:", "Limón", "San José", "San Carlos", "Turrialba");
veintisiete=new preg("Bienes Adjudicados cuenta con un canal de TikTok, en esta red el video con más vista cuenta con cerca de:", "82 mil", "3 mil", "5 millones", "13 mil");
veintiocho=new preg("Easypro cuenta con sistemas propios desarrollados 100% para la gestión inmobiliaria, el siguiente no pertenece a la empresa:", "EasyEDA", "EasyChat", "Publisher", "Easy-U");
veintinueve=new preg("Dentro de la Página de Bienes Adjudicados también se incluyen Fondos Inmobiliarios, la siguiente es una de las instituciones:", "BCR", "Improsa", "INS", "BIC");
treinta=new preg("Easypro acepta para la venta de propiedades que no son Adjudicadas bajo las siguientes condiciones:", "Autorizacion del area de Ventas", "Bajo Precio", "Fácil de Vender", "Todo tipo de Propiedades");
treinta_uno=new preg("La actual Gerente de Convenios de Easypro es:", "Melissa Mora", "Maureen Gómez", "Silvia Mora", "Tatiana Badilla");
treinta_dos=new preg("Es un servicio adicional que ofrece Easypro a los Bancos para sus Sucursales y Bienes Adjudicados:", "Mantenimientos", "Seguros", "Mensajería", "Contables");
treinta_tres=new preg("Easypro cuenta con una Psicóloga encargada del área de Recursos Humanos, su nombre es el siguiente:", "Tatiana Badilla", "Natalia Chacón", "Patricia Morera", "Kattia Díaz");
treinta_cuatro=new preg("La siguiente es una Asociación solidarista a la que actualmente le brindamos servicio de venta de Bienes:", "Procter & Gamble", "Empleados de Samtec", "Boston Scientific", "Durman Esquivel y Afines");


const preguntas=[
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
    doce,
    trece,
    catorce,
    quince,
    dieciseis,
    diecisiete,
    dieciocho,
    diecinueve,
    veinte,
    veintiuno,
    veintidos,
    veintitres,
    veinticuatro,
    veinticinco,
    veintiseis,
    veintisiete,
    veintiocho,
    veintinueve,
    treinta,
    treinta_uno,
    treinta_dos,
    treinta_tres,
    treinta_cuatro
].sort((a,b)=>Math.random()-0.5);

//Funciones necesarias para el juego
function aparecer_ventana(){//ventana de comoddines y mensajes
    ventana.style.transform="scale(1)";
    document.getElementById(identificacion).style.display="block";
    clearInterval(intrv);
     
   

}

btn_comodin.onclick= ()=>{
    
    ventana.style.transform="scale(0)";
    document.getElementById(identificacion).style.display="none";
      
    if(identificacion=="resp_correcta"){
        
        cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());
        
    }
    temporizador();  
        
}

function cambiar_pregunta(p,r){ //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
    pregunta.innerText=p;
    
    for (var i=0;i<4;i++) {
        respuestas[i].innerText=r[i];
    }          
    
    cont_tiempo=31;
   
    
    
 
 }

function felicidades(){//Mensaje Ganador
    ventana2.style.transform="scale(1)";
    victoria.style.display="inline-block";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}

function perder(){//Mensaje Perdedor
    if (sonar) {
        intro.muted = true;
        m_perdiste.play();
    }
    ventana2.style.transform="scale(1)";
    clearInterval(intrv);
    victoria.innerHTML ="¡Haz perdido! Intenta nuevamente";
    victoria.style.display="inline-block";
    document.getElementById("img_vent").setAttribute("src","medios/img/perder.png");
    ganado.innerText=ganado.innerText + " " + dinero_ganado;

}


//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());

for (let i=0;i<respuestas.length;i++){
    resp[i].onclick=() =>{
        if (respuestas[i].innerText==preguntas[nivel].resp){
            
                                 
            identificacion="resp_correcta";
            if (sonar) m_correcto.play();
            nivel++;
            pasaste.innerText="Pasaste al nivel:"+ (nivel+1);
            aparecer_ventana();
            recompenza=recompenza+ 10000*(nivel);
            
            
            if(nivel> preguntas.length-1){
                dinero_ganado=recompenza;
                felicidades();
                
                
            }else{
                
                
                if((nivel)%5==0){
                    dinero_ganado=recompenza;//cada vez supera un nivel (5preguntas)
                    dinero.innerText=dinero_ganado;
                                    
                }
            }
            

        }else perder();
            
            
            
        
    
    }
}


//Comodines de ayuda a la resolución de las preguntas


cont_comodin.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("comodines")){
        
        e.target.style.backgroundColor="gray";
    }

    if(amigo==false & e.target.classList.contains("icon-phone")){
        amigo=true;
        identificacion="llamar";
        aparecer_ventana();
        document.getElementById("correcto").innerText= preguntas[nivel].resp;
    } else if(publico==false & e.target.classList.contains("icon-users")){
        publico=true;
        identificacion="audiencia";
        aparecer_ventana();
        for (var i=0;i<4;i++) {

            if(respuestas[i].innerText==preguntas[nivel].resp) barra[i].value="70";
            
        } 

    }else if(mitad==false & e.target.classList.contains("mitad")){
        mitad=true;
        let aux1=0;
        for (var i=0;i<4 & aux1<2;i++) {
            
            if(respuestas[i].innerText!=preguntas[nivel].resp){
                aux1++;
                respuestas[i].innerText="";
            } 
            
        } 

        
    }

    
    
        
});



//Botones para rendirse o terminar el juego
rendirse.onclick=()=>{
    ventana2.style.transform="scale(1)";
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
}

terminar.onclick=()=>{ //Una vez termina el juego se recarga la pagina y vuelve al inicio
    location.reload();
}





