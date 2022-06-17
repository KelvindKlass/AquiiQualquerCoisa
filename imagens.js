let imagemDaEstrada; 
let imagemDoAtor; 
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let SomDaTrilha
let somDaColisao
let somDoPonto

function preload(){
  imagemDaEstrada =loadImage("Images/estrada.png");
  imagemDoAtor =loadImage("Images/XicAtor1.png")
  imagemCarro =loadImage("Images/carro-1.png")
  imagemCarro2 =loadImage("Images/carro-2.png")
  imagemCarro3 =loadImage("Images/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  
  somDaTrilha = loadSound("sons/CloudsKayne.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");

}