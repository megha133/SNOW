var anna
var elsa
var krisshans 
var snowy1
var snowy2
var olaf
var iglo
var castle
var flake
var dot

function preload(){
  bg=loadImage("bg.gif");
  an=loadImage("Anna.png");
  el=loadImage("elsa.png");
  kh=loadImage("krisstofhans.png");
  s1=loadImage("snowy1.png");
  s2=loadImage("snowy2.png");
  ol=loadImage("olaf.png");
  ig=loadImage("Igloo.png");
  cs=loadImage("castle.png");
  f=loadImage("snowf.png");
  d=loadImage("dot.png");
}

function setup() {
  createCanvas(1500,900);
  anna = createSprite(760,650);
  anna.addImage(an);
  anna.scale = 1.2;

  elsa = createSprite(520,600);
  elsa.addImage(el);
  elsa.scale = 1.2;

  krisshans  = createSprite(220,620);
  krisshans.addImage(kh);
  krisshans.scale = 1.2;
  
  snowy1 = createSprite(780,770);
  snowy1.addImage(s1);
  snowy1.scale = 1;

  snowy2 = createSprite(780,840);
  snowy2.addImage(s2);
  snowy2.scale = 1;

  olaf = createSprite(870,735);
  olaf.addImage(ol);
  olaf.scale = 1;

  iglo = createSprite(1200,670);
  iglo.addImage(ig);
  iglo.scale = 1.5;

  castle = createSprite(620,770);
  castle.addImage(cs);
  castle.scale = 1.1;

  dot = createSprite();
  dot.addImage(d);
  dot.scale = 1.1;
  this.dot.positionX=mouseX
  this.dot.positionY=mouseY
}

function draw() {
  background(bg); 
  drawSprites();
}
