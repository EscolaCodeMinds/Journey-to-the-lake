var ceu, ceuImage;
var floresta, florestaImage;
var aranha, aranhaAnimation;
var morcego, morcegoAnimation;
var sapo, sapoAnimation;
var cobra, cobraAnimation;
var cinos, cinosAnimation;
var formiga, formigaAnimation;
var nyjag, nyjagAnimation;

function preload() {
  aranhaAnimation = loadAnimation("./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
  morcegoAnimation = loadAnimation("./assets/morcego1.png", "./assets/morcego2.png", "./assets/morcego3.png");
  sapoAnimation = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", 
    "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png","./assets/cobra1.png", "./assets/cobra2.png", 
    "./assets/cobra3.png", "./assets/cobra4.png");
  cinosAnimation = loadAnimation("./assets/Cinos0.png", "./assets/Cinos1.png");
  formigaAnimation = loadAnimation("./assets/formiga0.png", "./assets/formiga1.png", "./assets/formiga2.png", 
    "./assets/formiga3.png", "./assets/formiga4.png");
  nyjagAnimation = loadAnimation("./assets/nyjag_2.png", "./assets/nyjag_1.png");
  ceuImage = loadImage("./assets/ceu.png");
  florestaImage = loadImage("./assets/grama.png"); 

}

function setup() {
  createCanvas(1420, 500);
  ceu = createSprite(400, 200);
  ceu.addImage(ceuImage); 
  floresta = createSprite(400, 200);
  floresta.addImage(florestaImage);
  floresta.velocityX = -2
  aranha = createSprite(400, 200);
  morcego = createSprite(200, 200);
  aranha.addAnimation("crawling", aranhaAnimation);
  aranha.scale = 2;
  morcego.addAnimation("flying", morcegoAnimation);
  morcego.scale = 2;
  sapo = createSprite(200, 400);
  sapo.addAnimation("jumping", sapoAnimation);  
  sapo.scale = 5;
  cobra = createSprite(300, 200);
  cobra.addAnimation("slithering", cobraAnimation);
  cobra.scale = 2;
  cinos = createSprite(500, 200);
  cinos.addAnimation("crawling", cinosAnimation);
  cinos.scale = 2;
  formiga = createSprite(700, 200);
  formiga.addAnimation("crawling", formigaAnimation);
  formiga.scale = 2;
  nyjag = createSprite(300, 80);
  nyjag.addAnimation("crawling", nyjagAnimation);
  
  
}

function draw() {
  background(125, 125, 125);
  //console.log(floresta.x);
  if (floresta.x < -90) {
    floresta.x = floresta.width / 2;
  }
  
  drawSprites();
}




