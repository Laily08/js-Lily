//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;


//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let colidiu = false

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha(0);
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaBolinha(0);
  movimentaMinhaRaquete(0);
  movimentaRaqueteOponente(0);
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  verificaColisaoBorda(0);
  incluiPlacar(0);
  marcaPonto(0);
}

function mostraBolinha () {
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha () {
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

}

function verificaColisaoBorda () {
  
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= - 1;
    
}

  if(yBolinha + raio > height || yBolinha - raio < 0) {
  velocidadeYBolinha *= - 1;
  
  }
}

//variaveis da raquete
let xRaquete = 0;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

function mostraRaquete (x,y) {
  rect(x,y,raqueteLargura,raqueteAltura);
}

function movimentaMinhaRaquete () {
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
 
}

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;

function mostraRaqueteOponente () {
  rect(xRaqueteOponente,yRaqueteOponente,raqueteLargura,raqueteAltura);
}

function movimentaRaqueteOponente () 
{
 
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
  
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu) velocidadeXBolinha *= -1;
}

//variaveis da pontuacao
let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar () {
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill("purple") 
  
  //placar meusPontos
  
  fill("purple")
  rect(134,10,35,20)
  fill("white")
  text(meusPontos, 150, 26)
  
  //placar pontosOponente
  
  fill("purple")
  rect(433,10,35,20)
  fill("white")
  text(pontosOponente, 450, 26)

}

function marcaPonto() 
{
  if (xBolinha >590){
    meusPontos += 1;
  }
   
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}