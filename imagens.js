//Códigos referente a imagens e sons do jogo

//Variáveis Imagens do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("_imagens/estrada.png");
  imagemDoAtor = loadImage("_imagens/ator-1.png");
  imagemCarro1 = loadImage("_imagens/carro-1.png");
  imagemCarro2 = loadImage("_imagens/carro-2.png");
  imagemCarro3 = loadImage("_imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("_sons/trilha.mp3");
  somDaColisao = loadSound("_sons/colidiu.mp3");
  somDoPonto = loadSound("_sons/pontos.wav");
}
