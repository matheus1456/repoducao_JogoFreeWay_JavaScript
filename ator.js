//Códigos referente ao ator

//Variáveis do Ator
let xAtor = 100;
let yAtor = 366;
let meusPontos = 0;

let colisao = false;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if (podeMoverParaBaixo())
      yAtor += 3;
  }
  
}

function verificaColisao(){
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i =0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    
    if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial (){
  yAtor = 366;
  xAtor= 100;
}

function exibirMeusPontos (){
  
  fill(255,0,255);
  textAlign(CENTER);
  textSize(25); 
  text(meusPontos, width / 5, 27);
  
}

function marcaPonto() {
  if (yAtor < 20){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeMoverParaBaixo(){
  return yAtor < 366;
}