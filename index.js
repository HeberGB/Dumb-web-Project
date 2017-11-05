var listaDeHexagramas = new Array(3); // Ya es un arreglo de tres elementos
var significados = [
  'Cielo. Lo creativo. El principio generador',
  'Tierra. Lo receptivo. El principio pasivo',
  'Acumular. El obstáculo inicial. La dificultad del comienzo',
  'Juventud. El joven necio. La inmadurez.',
  'Esperarla espera. La maduración.',
  'Disputar. El conflicto. El pleito.',
  'Ejército. La legión.',
  'Solidaridad. La unión',
  'Animalito doméstico. La pequeña fuerza',
  'Caminar. El porte. El paso cauteloso',
  'Prosperidad. La paz. La armonía.',
  'Cierre. El estancamiento. Lo inerte.',
  'Hombres Reunidos. La unión comunitaria',
  'Gran dominio. La gran posesión. Lo que se tiene de más.',
  'Condescendencia. La modestia. La humildad',
  'Ocuparse. El entusiasmo. La algarabía.',
  'Conformarse. La continuidad. El seguimiento.',
  'Destrucción. La reconstrucción. La labor en lo corrompido.',
  'Acercarse. Lo que va llegando.',
  'Observar. La contemplación.',
  'Quebrar mordiendo. La dentellada. La filosa mordedura',
  'Adornar. La elegancia. La gracia.',
  'Resquebrajar. La desintegración. El derrumbe',
  'Regresar. El retorno. Lo que vuelve.',
  'Sinceridad. La inocencia. La naturalidad.',
  'Fuerza educadora. El poder de lo fuerte. La gran acumulación.',
  'Nutrirse. La alimentación. Las fauces.',
  'Excesos. La preponderancia de lo grande.',
  'Peligro. Lo abismal. La caída.',
  'Distinguir. El resplandor. Lo adherente.',
  'Unirla influencia. La atracción.',
  'Luna Creciente. La duración. La permanencia.',
  'Retirarse. EL repliegue.',
  'Gran fuerza. El gran vigor.',
  'Progresar. El avance.',
  'Luz que se apaga. El oscurecimiento.',
  'Gente de familia. El clan.',
  'Contraste. La oposición. El antagonismo.',
  'Dificultad. El obstáculo. El impedimento.',
  'Explicar. La liberación. El alivio.',
  'Perder. La disminución.',
  'Evolución. El aumento. La ganancia.',
  'Decidir. El desbordamiento. La resolución.',
  'Encontrarse. El acoplamiento.',
  'Cosechar. La reunión. La convergencia.',
  'Subir. El ascenso. La escalada.',
  'Angustia. La pesadumbre. El agotamiento.',
  'El pozo de agua. La fuente.',
  'Renovar. La revolución. El cambio',
  'La caldera. Lo alquímico',
  'Trueno. La conmoción. Lo suscitativo.',
  'Cimientos. La quietud. La detención.',
  'Evolución. El progreso gradual.',
  'Desposar a la hija menor. La doncella.',
  'Abundancia. La plenitud.',
  'Viajero. El andariego',
  'Viento. Lo penetrante. Lo suave.',
  'Recogerse. La serenidad. La satisfacción.',
  'Confusión. La dispersión. La disolución',
  'Moderación. La restricción. La limitación',
  'Fe Interior. La verdad interior. La sinceridad interna.',
  'Pequeñas cosas importantes. La pequeña preponderancia.',
  'Conclusiones. Después de la realización.',
  'Inconcluso. Antes de la realización.'
];

var nombres = [
  "Ch'ien", "K´un", "Chug", "Meng", "Hsu", "Sung", "Shih", "Pi",
  "Hsiao ch´u", "Lü", "Tai", "P´i", "T´ung jen", "Ta yu", "Ch´ien", "Yü", "Sui",
  "Ku", "Lin", "Kuan", "Shih ho", "Pi gracias", "Po", "Pu", "Wu wang", "Ta chu",
  "I", "TA KUO", "Kan", "Li", "Hsien", "Heng", "Tun", "Ta chuang", "Chin", "Ming",
  "Chia jen", "K´uei", "Chien", "Hsieh", "Sun", "I chi", "Kuai", "Kou", "Ts´ui",
  "Sheng", "k´un", "Ching", "Ko", "Ting", "Chen", "Ken", "Chien", "Kuei mei",
  "Feng", "Lu", "Sun", "Tui", "Huan", "Chieh", "Chung fu", "Hsiao kuo", "Chi chi",
  "We i chi"
];

for (var i = 0; i < listaDeHexagramas.length; i++) { // Todos van a tener 6
  listaDeHexagramas[i] = new Array(6);
}
var cont = 0;
var tieneMutacion = false; // Para saber si ya muto y así saber si imprimimos 1 o 3 hexagramas

function agregarLinea() {
  if (cont == 6) {
    alert("Ya esta completo el hexagrama");
    limpiarLineas();
    return;
  }
  var n1 = parseInt(document.formulario.n1.value);
  var n2 = parseInt(document.formulario.n2.value);
  var n3 = parseInt(document.formulario.n3.value);
  if (sonCorrectasEntradas(n1, n2, n3)) {
    var tipo = obtenerLinea(n1, n2, n3);

    for (var i = 0; i < listaDeHexagramas.length; i++) {
      listaDeHexagramas[i][cont] = tipo;
    }

    if (tipo == 1 || tipo == 4) {
      listaDeHexagramas[1][cont] = obtenerMutacion1(tipo); // Como ya no tengo que crear nuevos hexagramas entonces se reduce aqui
      listaDeHexagramas[2][cont] = obtenerMutacion2(tipo);
      tieneMutacion = true;
    }
    cont++;
    if (tieneMutacion == false) {  // Para imprimir solo un hexagrama
      var padre = document.getElementById("container-hexa");
      padre.innerHTML = "";
      var hijo = document.createElement("div");
      hijo.className = "hexagrama";
      hijo.id = 2;
      padre.appendChild(hijo);
      imprimirHexagrama(listaDeHexagramas[0], hijo);
    }
    else { // Para imprimir los tres hexagramas
      imprimirHexagramas();
    }
    console.log(cont);
    if (cont == 6) {
      var hexagrama2 = document.getElementById("hexagrama-2");
      var valor2 = valorHexagrama(hexagrama2);
      hexagrama2.addEventListener('mouseover', function () {
        mostrarDescripcion(valor2);
      });
      prenderCelda(valor2);
      hexagrama2.appendChild(document.createTextNode(String(valor2) + ". " + nombres[valor2 - 1]));

      if (document.getElementById("hexagrama-1")) {
        var hexagrama1 = document.getElementById("hexagrama-1");
        var valor1 = valorHexagrama(hexagrama1);
        hexagrama1.addEventListener('mouseover', function () {
          mostrarDescripcion(valor1);
        });
        prenderCelda(valor1);
        hexagrama1.appendChild(document.createTextNode(String(valor1) + ". " + nombres[valor1 - 1]));
      }
    }
  }
  else {
    alert("No introdujiste valores correctos");
  }
  limpiarLineas();
}

function sonCorrectasEntradas(n1, n2, n3) {
  if (n1 != 2 && n1 != 3) {
    return false;
  }
  if (n2 != 2 && n2 != 3) {
    return false;
  }
  if (n3 != 2 && n3 != 3) {
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
  for (var i = 0; i < listaDeHexagramas.length; i++) {
    var hijo = document.createElement("div");
    hijo.className = "hexagrama";
    hijo.id = "hexagrama-" + String(i);
    padre.appendChild(hijo);
    imprimirHexagrama(listaDeHexagramas[i], hijo);
  }
}

function obtenerMutacion1(tipo) {
  if (tipo == 1) {
    return 3;
  }
  else {
    return 2;
  }
}

function obtenerMutacion2(tipo) {
  if (tipo == 1) {
    return 2;
  }
  else {
    return 3;
  }
}

function obtenerLinea(n1, n2, n3) {
  var suma = n1 + n2 + n3;
  if (suma == 6) {
    return 1;
  }
  else if (suma == 7) {
    return 2;
  }
  else if (suma == 8) {
    return 3;
  }
  else if (suma == 9) {
    return 4;
  }
}

function imprimirHexagrama(hexagrama, padre) {
  var parrafo;
  var texto;
  padre.innerHTML = "";
  for (var i = hexagrama.length - 1; i >= 0; i--) {
    imagen = document.createElement("IMG");
    if (obtenerImagen(hexagrama[i])) {
      imagen.src = obtenerImagen(hexagrama[i]);
      imagen.className = "image";
    }
    padre.appendChild(imagen);
    saltoLinea = document.createElement("br");
    padre.appendChild(saltoLinea);
  }
}

function obtenerImagen(numero) {
  if (numero == 1) {
    return "imagen1.png";
  }
  else if (numero == 2) {
    return "imagen2.png";
  }
  else if (numero == 3) {
    return "imagen3.png";
  }
  else if (numero == 4) {
    return "imagen4.png";
  }
  else {
    return "";
  }
}

function borrarHexagrama() {
  if (cont == 6) {
    //Se usa para quitar las celdas ya marcadas
    var hexagrama2 = document.getElementById("hexagrama-2");
    var valor2 = valorHexagrama(hexagrama2);
    apagarCelda(valor2);
    if (document.getElementById("hexagrama-1")) {
      var hexagrama1 = document.getElementById("hexagrama-1");
      var valor1 = valorHexagrama(hexagrama1);
      apagarCelda(valor1);
    }
  }
  //
  cont = 0;
  listaDeHexagramas = new Array(3);
  tieneMutacion = false;
  for (var i = 0; i < listaDeHexagramas.length; i++) { // Todos van a tener 6
    listaDeHexagramas[i] = new Array(6);
  }
  var padre = document.getElementById("container-hexa");
  padre.innerHTML = "";
}

function union(hexSuperior, hexInferior) {
  while (hexInferior.hasChildNodes()) {
    hexSuperior.id = "";
    hexSuperior.appendChild(hexInferior.firstChild);
  }

}

function valorHexagrama(hexa) {
  var images = hexa.getElementsByClassName("image");
  var unaLinea = new RegExp("imagen2");
  var dosLineas = new RegExp("imagen3");
  console.log(valorPorSeccion("superior"));
  console.log(valorPorSeccion("inferior"));
  return cambiandoValor(String(valorPorSeccion("superior")) + String(valorPorSeccion("inferior")));
  function valorPorSeccion(seccion) {
    var i = seccion == "superior" ? 0 : 3;
    if (unaLinea.test(images[i + 0].src)) {
      if (unaLinea.test(images[i + 1].src)) {
        if (unaLinea.test(images[i + 2].src)) {
          return 1;
        } else if (dosLineas.test(images[i + 2].src)) {
          return 6;
        }
      } else if (dosLineas.test(images[i + 1].src)) {
        if (dosLineas.test(images[i + 2].src)) {
          return 4;
        } else if (unaLinea.test(images[i + 2].src)) {
          return 7;
        }
      }
    } else if (dosLineas.test(images[i + 0].src)) {
      if (dosLineas.test(images[i + 1].src)) {
        if (dosLineas.test(images[i + 2].src)) {
          return 5;
        } else if (unaLinea.test(images[i + 2].src)) {
          return 2;
        }
      } else if (unaLinea.test(images[i + 1].src)) {
        if (dosLineas.test(images[i + 2].src)) {
          return 3;
        } else if (unaLinea.test(images[i + 2].src)) {
          return 8;
        }
      }
    }
  }
  function cambiandoValor(valor) {
    switch (valor) {
      case "11":
        return 1;
      case "12":
        return 25;
      case "13":
        return 6;
      case "14":
        return 33;
      case "15":
        return 12;
      case "16":
        return 44;
      case "17":
        return 13;
      case "18":
        return 10;
      case "21":
        return 34;
      case "22":
        return 51;
      case "23":
        return 40;
      case "24":
        return 62;
      case "25":
        return 16;
      case "26":
        return 32;
      case "27":
        return 55;
      case "28":
        return 54;
      case "31":
        return 5;
      case "32":
        return 3;
      case "33":
        return 29;
      case "34":
        return 39;
      case "35":
        return 8;
      case "36":
        return 48;
      case "37":
        return 63;
      case "38":
        return 60;
      case "41":
        return 26;
      case "42":
        return 27;
      case "43":
        return 4;
      case "44":
        return 52;
      case "45":
        return 23;
      case "46":
        return 18;
      case "47":
        return 22;
      case "48":
        return 41;
      case "51":
        return 11;
      case "52":
        return 24;
      case "53":
        return 7;
      case "54":
        return 15;
      case "55":
        return 2;
      case "56":
        return 46;
      case "57":
        return 36;
      case "58":
        return 19;
      case "61":
        return 9;
      case "62":
        return 42;
      case "63":
        return 59;
      case "64":
        return 53;
      case "65":
        return 20;
      case "66":
        return 57;
      case "67":
        return 37;
      case "68":
        return 61;
      case "71":
        return 14;
      case "72":
        return 21;
      case "73":
        return 64;
      case "74":
        return 56;
      case "75":
        return 35;
      case "76":
        return 50;
      case "77":
        return 30;
      case "78":
        return 38;
      case "81":
        return 43;
      case "82":
        return 17;
      case "83":
        return 47;
      case "84":
        return 31;
      case "85":
        return 45;
      case "86":
        return 28;
      case "87":
        return 49;
      case "88":
        return 58;
    }
  }
}

function prenderCelda(valor) {
  var tabla = document.getElementById("table-hexa");
  var valores = tabla.getElementsByTagName("td");
  for (let i = 0; i < valores.length; i++) {
    if (String(valor) == valores[i].textContent) {
      valores[i].className = "seleccionado";
    }
  }
}

function apagarCelda(valor) {
  var tabla = document.getElementById("table-hexa");
  var valores = tabla.getElementsByTagName("td");
  for (let i = 0; i < valores.length; i++) {
    if (String(valor) == valores[i].textContent) {
      valores[i].className = "";
    }
  }
}

function mostrarDescripcion(valor) {
  alert(significados[valor - 1]);
}