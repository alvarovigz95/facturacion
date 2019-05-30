$("#usuario").focus();

function ingresar() {
  console.log("ingresar");
  if (validar_formulario()) {
    // XMLHttpRequests -> ajax -> callback -> promesas
    // Recuperar datos del formulario html
    var usuario = $("#usuario").val();
    var clave = $("#clave").val();
    // Armar la direccion para enviar la peticion al servidor
    var url = "/api/login/" + usuario + "/" + clave;
    axios
      .get(url)
      .then(function(response) {
        // Si no hay error ejecuta esta seccion
        // handle success
        console.log(response);
        if(response.data.length > 0){
          location.href='./menu.html'
        } else {
          mensajes('#mensajes','Credencial incorrecta.','danger');
          $('#usuario').focus();
          $('#usuario').select();  
        }
      })
      .catch(function(error) {
        // Si hay Error ejecuta esta seccion
        // handle error
        console.log(error);
        mensajes('#mensajes','Error de conexion.','danger');
        $('#usuario').focus();
        $('#usuario').select();
      })
      .finally(function() {
        // Siempre ejecuta esta seccion
        // always executed
        console.log("finally");
      });
  }
}
function salir_acceso() {
  location.href = "./";
}

function validar_formulario() {
  var ok = true;
  var usuario = $("#usuario").val();
  var clave = $("#clave").val();
  if(usuario.trim() === ''){
    mensajes('#mensajes','Usuario vacio.','danger');
    $('#usuario').focus();
    $('#usuario').select();
    ok = false;
  } else if(clave.trim() === ''){
    mensajes('#mensajes','Contraseña vacia.','danger');
    $('#clave').focus();
    $('#clave').select();
    ok = false;
  }
  return ok;
}

function mensajes(lugar, mensaje, tipo) {
  var alerta = `<div class="alert alert-${tipo} mt-1" role="alert">
                   ${mensaje}
                </div>`;
  $(lugar).html(alerta);
  setTimeout(()=>{$(lugar).html('');},3000);
}
