function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);  
  mostraAtor()
  mostraCarro();
  voltaPosicaoInicialDoCarro();
  movimentaCarro();
  movimentaAtor();
  verificaColisao();
  exibirMeusPontos();
  marcaPonto();
}