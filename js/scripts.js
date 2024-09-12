
const requestNotificationPermission = async () =>{
    const permission = await Notification.requestPermission();
    if(permission !==  'granted'){
        throw new Error("No se ha podido otorgar permisos para la notificacion");
    }else{
        new Notification("Hola, mi nombre es Melissa Yamileth Cruz Pineda");
    }
}


function geolocalizacion(){
    if(navigator.perissions && navigator.permissions.query){
     navigator.permissions.query({name: 'geolocation '}).then(function(result){
          const permission = result.state;
          if(permission ===  'granted ' || permission ===  'prompt '){
              obtenergeolocalizacion();
         }
        });
    }else if (navigator.geolocation){
      obtenergeolocalizacion();
    }
}

function obtenergeolocalizacion(){
const options = {
    precision : true, 
    timeout: 5000,
    maximunage: 0
};

navigator.geolocation.getCurrentPosition(function(position){

    const marcador = {
        lat: position.coords.latitude,
        long: position.coords.longitude
};

let enlace = document.getElementById("ir_mapa");
enlace.href =  `https://maps.google.com/?q=${marcador.lat},${marcador.long}`; 
enlace.target = "_blank";
enlace.text = "Ir al mapa";

},function(error){
    throw new Error("Hubo un error");
}.options);

}