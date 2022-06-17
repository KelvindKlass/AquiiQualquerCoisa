let yAtor = 366 
let xAtor = 100
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image (imagemDoAtor,xAtor, yAtor, 35, 35)
} 

function movimentaAtor(){
    if (keyIsDown(UP_ARROW))
        yAtor -= 2;

    if (keyIsDown(DOWN_ARROW))
        yAtor -= -3.5
    
    if (keyIsDown(RIGHT_ARROW))  
      xAtor -= -2

    if (keyIsDown(LEFT_ARROW))
      xAtor -= 2}


function verificaColisao(){
for (let i = 0; i<imagemCarros.length; i = i+1){
       colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 3)
if (colisao){
voltaAtorParaPosicaoInicial();
    meusPontos = 0
    somDaColisao.play()
}
  }  
    }

function voltaAtorParaPosicaoInicial(){
 yAtor = 366}
  
function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255,0,0))
  text(meusPontos, width/ 5, 25 );
}

function marcaPonto(){
if (yAtor < 15){
meusPontos++;
  voltaAtorParaPosicaoInicial();
  }
}
