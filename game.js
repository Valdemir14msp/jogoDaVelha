const player1 = 'X'
const player2 = '0'
var playTime = player1
var gameOver = false

var classVazia = document.querySelector('.classVazia')
var btn = document.querySelector('#btn')

var mostrador = document.querySelector('.mostrador')
var mostradorFinal = document.querySelector('.mostradorVazioFinal')

var contador =0

atualizaMostrador()
inicializarEspacos()

function atualizaMostrador(){
  if (gameOver) {return;}
  if (playTime == player1) {
    var player = document.querySelectorAll('div.mostrador img')[0]
    player.setAttribute('src', 'x.png')
  } else {
    var player = document.querySelectorAll('div.mostrador img')[0]
    player.setAttribute('src', 'bola.png')
  }
}

function inicializarEspacos() {
  var espacos = document.getElementsByClassName("espaço")
  for (var i = 0; i < espacos.length; i++) {
   
    espacos[i].addEventListener("click", function(){
      
      if (gameOver) {return;}

      if (this.getElementsByTagName("img").length == 0) {
        if (playTime == player1){
          this.innerHTML = "<img src='x.png' height='50'>"
          this.setAttribute("jogada", player1)
          contador++
          playTime = player2
        } else {
          this.innerHTML = "<img src='bola.png' height='70'>"
          this.setAttribute("jogada", player2)
          playTime = player1
          contador++
        }
        atualizaMostrador()
        verificarVencedor()
      }
    });
  }
}

async function verificarVencedor(){

var a1 = document.getElementById('a1').getAttribute('jogada')
var a2 = document.getElementById('a2').getAttribute('jogada')
var a3 = document.getElementById('a3').getAttribute('jogada')

var b1 = document.getElementById('b1').getAttribute('jogada')
var b2 = document.getElementById('b2').getAttribute('jogada')
var b3 = document.getElementById('b3').getAttribute('jogada')

var c1 = document.getElementById('c1').getAttribute('jogada')
var c2 = document.getElementById('c2').getAttribute('jogada')
var c3 = document.getElementById('c3').getAttribute('jogada')

var vencedor=""

if(((a1==b1 && a1==c1) || (a1==a2 && a1==a3) || (a1==b2 && a1==c3))&& a1!=""){
  vencedor = a1
}else if(((b2==b1 && b2==b3)||(b2==a2 && b2==c2)||(b2==a3 && b2==c1))&& b2!=""){
  vencedor = b2
}else if(((c3==c2 && c3==c1)||(c3==b3 && c3==a3))&& c3!=""){
  vencedor = c3
}

if(vencedor!=""){
  gameOver=true 
  classVazia.classList.remove('classVazia')
  classVazia.classList.add('classFim')

  mostrador.classList.remove('mostrador')
  mostrador.classList.add('mostradorVazio')

  mostradorFinal.classList.remove('mostradorVazioFinal')
  mostradorFinal.classList.add('mostradorFinal')

  if (playTime == player1) {
    var player = document.querySelectorAll('div.mostradorFinal img')[0]
    player.setAttribute('src', 'bola.png')
  } else {
    // document.getElementById("txt1").textContent="GANHOU";
    var player = document.querySelectorAll('div.mostradorFinal img')[0]
    player.setAttribute('src', 'x.png')
  }

  btn.addEventListener('click', ()=>{
    location.reload()
  })

}else if(contador>=9){
  classVazia.classList.remove('classVazia')
  classVazia.classList.add('classFim')

  mostrador.classList.remove('mostrador')
  mostrador.classList.add('mostradorVazio')

  mostradorFinal.classList.remove('mostradorVazioFinal')
  mostradorFinal.classList.add('mostradorFinal')

  document.getElementById("txt1").textContent="DEU VELHA"
  var player = document.querySelectorAll('div.mostradorFinal img')[0]
  player.setAttribute('src', 'velha.gif')

  btn.addEventListener('click', ()=>{
    location.reload()
  })
}
}
