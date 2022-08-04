$(document).ready(function(){
/* Escrever Nome */
  var texto = "Wellington Américo";
  var result;

  var count = 0;
  function digitar() {
    result = document.getElementById("nome");
    window.setTimeout(function() { inserir(texto[count]) }, 200);
  }

  function inserir(letra) {
    result.innerHTML += letra;
    count++;
    if(count < texto.length)
      window.setTimeout(function() { inserir(texto[count]) }, 200);
  }

  window.onload = digitar;

/* HTML SHOW/HIDE */
    $("#html").mouseover(function(){
      $(".html").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#html").mouseout(function(){
      $(".html").css("display", "none");
      $("#p").css("display", "block");
    });

/* JS SHOW/HIDE */
    $("#js").mouseover(function(){
      $(".js").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#js").mouseout(function(){
      $(".js").css("display", "none");
      $("#p").css("display", "block");
    });

/* PHP SHOW/HIDE */
    $("#php").mouseover(function(){
      $(".php").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#php").mouseout(function(){
      $(".php").css("display", "none");
      $("#p").css("display", "block");
    });

/* SQL SHOW/HIDE */
    $("#sql").mouseover(function(){
      $(".sql").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#sql").mouseout(function(){
      $(".sql").css("display", "none");
      $("#p").css("display", "block");
    });

/* C C++ SHOW/HIDE */
    $("#c").mouseover(function(){
      $(".c").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#c").mouseout(function(){
      $(".c").css("display", "none");
      $("#p").css("display", "block");
    });

/* PYTHON SHOW/HIDE */
    $("#python").mouseover(function(){
      $(".python").css("display", "block");
      $("#p").css("display", "none");
    });
    $("#python").mouseout(function(){
      $(".python").css("display", "none");
      $("#p").css("display", "block");
    });
});

/* Carosel */
var angle = 0;
function girarSpin(sign) { 
  spinner = document.querySelector("#spinner");
  if (!sign) {
    angle = angle + 60;
  } else {
    angle = angle - 60;
  }
  spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}