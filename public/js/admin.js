$("#usuario").focus();

function ingresar() {
  console.log("ingresar");
  // XMLHttpRequests -> ajax -> callback -> promesas
  // Recuperar datos del formulario html
  var usuario = $('#usuario').val();
  var clave = $('#clave').val();
  // Armar la direccion para enviar la peticion al servidor
  var url = "/api/login/"+usuario+"/"+clave;
  axios
    .get(url)
    .then(function(response) { // Si no hay error ejecuta esta seccion
      // handle success
      console.log(response);
    })
    .catch(function(error) { // Si hay Error ejecuta esta seccion
      // handle error
      console.log(error);
    })
    .finally(function() { // Siempre ejecuta esta seccion 
      // always executed
      console.log('finally');
    });
}
function salir_acceso() {
  location.href = "./";
}
