var listaDeHexagramas = [];
listaDeHexagramas[0] = new Array(6);
var cont = 0;
var contadorDeHexagramas = 0;

function agregarLinea() {
  var n1 = parseInt(document.formulario.n1.value);
  var n2 = parseInt(document.formulario.n2.value);
  var n3 = parseInt(document.formulario.n3.value);
  if(sonCorrectasEntradas(n1,n2,n3)) {
    var tipo = obtenerLinea(n1,n2,n3);

    for(var i=0;i<listaDeHexagramas.length;i++) {
      listaDeHexagramas[i][cont] = tipo;
    }

    if (tipo==1 || tipo==4) {
      contadorDeHexagramas++;
      listaDeHexagramas[contadorDeHexagramas] = new Array(6);
      for(var i=0;i<6;i++) {
        listaDeHexagramas[contadorDeHexagramas][i] = listaDeHexagramas[0][i];
      }
      listaDeHexagramas[contadorDeHexagramas][cont] = obtenerMutacion1(tipo);
      contadorDeHexagramas++;
      listaDeHexagramas[contadorDeHexagramas] = new Array(6);
      for(var i=0;i<6;i++) {
        listaDeHexagramas[contadorDeHexagramas][i] = listaDeHexagramas[0][i];
      }
      listaDeHexagramas[contadorDeHexagramas][cont] = obtenerMutacion2(tipo);
    }
      cont++;
    imprimirHexagramas();
    // Aqui supongo que le agregaremos un if cont==5, para saber que se completó el hexagrama,
    // mandamos los hexagramas y obtenemos el numero de cada uno, y ya de ahí el nombre
    // si necesitas ayuda metiendo los nombres y las descripciones me dices
  }
  else {
    alert("No introdujiste valores correctos");
  }
  limpiarLineas();
}

function sonCorrectasEntradas(n1,n2,n3) {
  if(n1!=2 && n1!=3) {
    return false;
  }
  if(n2!=2 && n2!=3) {
    return false;
  }
  if(n3!=2 && n3!=3) {
    return false;
  }
    return true;
}

function limpiarLineas() {
  document.formulario.reset();
}

function imprimirHexagramas() {
  var padre = document.getElementById("container-hexa");
  padre.innerHTML = "";
  for (var i=0;i<listaDeHexagramas.length;i++) {
    var hijo = document.createElement("div");
    hijo.id = "hexagrama";
    padre.appendChild(hijo);
    imprimirHexagrama(listaDeHexagramas[i],hijo);
  }
}

function obtenerMutacion1(tipo) {
  if(tipo==1) {
    return 3;
  }
  else{
    return 2;
  }
}

function obtenerMutacion2(tipo) {
  if(tipo==1) {
    return 2;
  }
  else{
    return 3;
  }
}

function obtenerLinea(n1,n2,n3){
  var suma = n1+n2+n3;
  if(suma==6) {
    return 1;
  }
  else if(suma==7) {
    return 2;
  }
  else if(suma==8) {
    return 3;
  }
  else if(suma==9){
    return 4;
  }
}

function imprimirHexagrama(hexagrama,padre) {
  var parrafo;
  var texto;
  padre.innerHTML = "";
  for(var i=hexagrama.length-1; i>=0; i--) {
    imagen = document.createElement("IMG");
    imagen.src = obtenerImagen(hexagrama[i]);
    imagen.id = "image";
    padre.appendChild(imagen);
    saltoLinea = document.createElement("br");
    padre.appendChild(saltoLinea);
  }
}

function obtenerImagen(numero) {
  if(numero==1) {
    return "imagen1.png";
  }
  else if(numero==2) {
    return "imagen2.png";
  }
  else if(numero==3) {
    return "imagen3.png";
  }
  else if(numero==4) {
    return "imagen4.png";
  }
  else {
    return "";
  }
}

function borrarHexagrama() {
  cont = 0;
  contadorDeHexagramas = 0;
  listaDeHexagramas = [];
  listaDeHexagramas[0] = new Array(6);
  var padre = document.getElementById("container-hexa");
  padre.innerHTML = "";
}
