var PLAY = 1;
var END = 0;
var PLUTON = 2;
var NEPTUNO = 3;
var URANO = 4;
var SATURNO = 5;
var JÚPITER = 6;
var MARTE = 7;
var VENUS = 8;
var MERCURIO = 9;
var gameState = PLAY;
var scoreAstronauta=0;
var scoreAlien=0;
var fire,fireImg,fireGroup;
var fireblue,fireblueImg,fireblueGroup;
var meteorito,meteoritoImg,meteoritoGroup;
var diamante, diamanteImg, diamanteGroup;
var groundAlien;
var rocaPluton, rocaPlutonImg, rocaPlutonGroup;
var merObs, merObsImg, merObsGroup;
var burbujaJup, burbujaJupImg, buburjaJupGroup;
var hieloUra, hieloUraImg, hieloUraGroup;
var lluviaNep, lluviaNepImg, lluviaNepGroup;
var rocaVen, rocaVenImg, rocaVenGroup;
var astronautaPistola, astronautaPistolaImg,astronautaSalta, astronautaSaltaImg, astronautaEscudo,
astronautaEscudoImg;
var astronautaStatic,astronautaStaticImg,astronautaGana,astronautaGanaImg,astronautaPierde,
astronautaPierdeImg;
var bg, bgImgPlu, bgImgNep,bgImgUra,bgImgSat,bgImgJup,bgImgMar,bgImgVen,bgImgMer;
var alien,alienImg,alienPistola,alienPistolaImg,alienPistola2,alienPistola2Img, alienSalta,alienSaltaImg,alienDerrotado,
alienDerrotadoImg;
var escudo, escudoImg, escudo2, escudo2Img;
var nave,naveImg;
var disparoSound;
var naveEsp, naveEspImg, naveEsp2,naveEsp2Img, espacio, waitpluton, waitplutonImg, waittierra,waittierraImg;

function preload(){
  naveEsp2Img = loadAnimation("Introduccion/nave2wait.png","Introduccion/nave3wait.png",
  "Introduccion/nave2wait.png","Introduccion/nave2wait.png","Introduccion/nave3wait.png",
  "Introduccion/nave2wait.png","Introduccion/nave3wait.png","Introduccion/nave2wait.png",
  "Introduccion/nave3wait.png");
  bgImgPlu= loadImage("planetas/Pluton3.jpg");
  bgImgNep = loadImage("planetas/Neptuno.jpg");
  bgImgUra = loadImage("planetas/Urano.jpg");
  bgImgSat= loadImage("planetas/Saturno.jpg");
  bgImgJup = loadImage("planetas/Jupiter.jpg");
  bgImgMar = loadImage("planetas/Marte.jpg");
  bgImgVen = loadImage("planetas/Venus.jpg");
  bgImgMer = loadImage("planetas/Mercurio.jpg");


  astronautaEscudoImg = loadImage("AstronautaSprite/asEscudo.png")
  astronautaPistolaImg = loadImage("AstronautaSprite/asPistola.png");
  astronautaStaticImg= loadImage("AstronautaSprite/astronautaStatic.png");
  astronautaSaltaImg = loadImage("AstronautaSprite/astronautaSalta.png");
  astronautaGanaImg = loadImage("AstronautaSprite/astronautaGana.png");
  astronautaPierdeImg = loadImage("AstronautaSprite/astronautaPierde.png");
  alienImg = loadImage("AlienSprite/alienMorado.png");
  alienPistolaImg = loadImage("AlienSprite/AlienMoradoPistola11.png");
  alienPistola2Img = loadImage("AlienSprite/AlienMoradoPistola11.png");
  alienSaltaImg = loadAnimation("AlienSprite/alienSalta.png","AlienSprite/alienSalta.png",
  "AlienSprite/alienSalta.png","AlienSprite/alienSalta.png","AlienSprite/alienSalta.png","AlienSprite/alienSalta.png",
  "AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png",
  "AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png",
  "AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png","AlienSprite/alienSalta2.png",
  "AlienSprite/alienSalta3.png","AlienSprite/alienSalta3.png","AlienSprite/alienSalta3.png","AlienSprite/alienSalta3.png",
  "AlienSprite/alienSalta3.png","AlienSprite/alienSalta3.png");
  alienDerrotadoImg = loadImage("AlienSprite/alienDerrotado.png");
  fireImg = loadImage("AstronautaSprite/balasAs11.png");
  fireblueImg = loadImage("AlienSprite/fuegoAzul.png");
  meteoritoImg= loadImage("Obstaculos/meteoritoMarte.png");
  diamanteImg = loadImage("Obstaculos/diamanteSat.png");
  rocaPlutonImg = loadImage("Obstaculos/rocaPluton.png");
  merObsImg = loadImage("Obstaculos/bolasdefuegoMercurio.png");
  burbujaJupImg = loadImage("Obstaculos/burbujaJupiter.png");
  hieloUraImg = loadImage("Obstaculos/hieloUrano.png");
  lluviaNepImg = loadImage("Obstaculos/lluviaNeptuno.png");
  rocaVenImg = loadImage("Obstaculos/rocaVenus.png");
  naveImg= loadImage("AlienSprite/naveAlien2.png");
  disparoSound= loadSound("disparoSound.mp3");
  naveEspImg = loadImage("Introduccion/nave1wait.png");
  espacio = loadImage("Introduccion/galaxia5.webp");
  waitplutonImg = loadImage("Introduccion/plutonSprite.png");
  waittierraImg = loadImage("Introduccion/TierraSprite.png");
  escudoImg= loadImage("AstronautaSprite/escudo.png");
  escudo2Img = loadImage("AstronautaSprite/escudo2.png");


}

function setup() {
  createCanvas(1360,610);
 
  astronautaPistola = createSprite(1000,400,100,200);
  astronautaPistola.addAnimation("pistola",astronautaPistolaImg);
  astronautaPistola.visible=false;
 
  astronautaStatic = createSprite(1000,400,100,200);
  astronautaStatic.addAnimation("static",astronautaStaticImg);
  astronautaStatic.scale=0.9;
  astronautaStatic.visible=false;

  astronautaPierde = createSprite(1000,400,100,200);
  astronautaPierde.addAnimation("gameover",astronautaPierdeImg);
  astronautaPierde.scale=0.9;
  astronautaPierde.visible=false;

  astronautaEscudo = createSprite(1000,400,100,200);
  astronautaEscudo.addImage("escudo",astronautaEscudoImg);
  astronautaEscudo.visible=false;

  astronautaSalta = createSprite(1000,400,100,200);
  astronautaSalta.addAnimation("jump",astronautaSaltaImg);
  astronautaSalta.visible=false;
  
  escudo = createSprite(930,270,60,60);
  escudo.addImage(escudoImg);
  escudo.rotation= 289;
  escudo.scale=0.5;
  escudo.visible=false;

  escudo2 = createSprite(916,390,60,60);
  escudo2.addImage(escudo2Img);
  escudo2.rotation= 270;
  escudo2.scale=0.5;
  escudo2.visible=false;

  alien = createSprite(270,386,400,20);
  alien.addAnimation("static",alienImg);
  alien.visible=false;

  alienPistola= createSprite(270,386,400,20);
  alienPistola.addAnimation("pistola",alienPistolaImg);
  alienPistola.scale=0.7;
  alienPistola.visible=false;

  alienPistola2= createSprite(270,386,400,20);
  alienPistola2.addAnimation("pistola",alienPistolaImg);
  alienPistola2.scale=0.7;
  alienPistola2.visible=false;

  alienSalta = createSprite(270,386,400,20);
  alienSalta.addAnimation("jump",alienSaltaImg);
  alienSalta.visible=false;

  alienDerrotado = createSprite(270,386,400,20);
  alienDerrotado.addImage(alienDerrotadoImg);
  alienDerrotado.rotation=300;
  alienDerrotado.visible=false;

  nave = createSprite(270,350,200,200);
  nave.addImage(naveImg);
  nave.scale=1;
  nave.visible=false;

  waittierra = createSprite(100,580,70,70);
  waittierra.addImage(waittierraImg);
  waittierra.scale=0.2;
  waittierra.visible=false;

  naveEsp = createSprite(150,400,70,70);
  naveEsp.addAnimation("moving",naveEspImg);
  naveEsp.scale=0.3;
  naveEsp.visible=false;

  naveEsp2 = createSprite(350,400,70,70);
  naveEsp2.addAnimation("spin",naveEsp2Img);
  naveEsp2.scale=0.3;
  naveEsp2.visible=false;

  waitpluton = createSprite(1200,120,70,70);
  waitpluton.addImage(waitplutonImg);
  waitpluton.scale=0.3;
  waitpluton.visible=false;

  fireGroup = new Group();
  fireblueGroup = new Group();
  rocaPlutonGroup = new Group();
  diamanteGroup = new Group();
  meteoritoGroup = new Group();
  merObsGroup = new Group();
  buburjaJupGroup = new Group();
  hieloUraGroup = new Group();
  lluviaNepGroup = new Group();
  rocaVenGroup = new Group();

}

function draw() {

  /*swal({ title: `¡BIENVENIDO!${"\n"} A Pluton ${"\n"} El planeta más alejado del sol `,
  text: "Listo para atacar a los aliens?", 
 imageUrl: "planeta.png",
 imageSize: "100x100", 
 confirmButtonText: "Ok" });*/
  //text("Puntuación: "+ score, 500,50);
  if(gameState === PLAY){
    background(espacio);
    fill("white");
    textSize(70);
    text("I N V A S I Ó N    A L I E N",250,300);
    textSize(30);
    text("UN RETO PARA VALIENTES, ¿ESTÁS LISTO?",400,400);
    textSize(20);
    text("Presiona D para la aventura", 600,450);
    naveEsp.visible=true;
    waitpluton.visible=true;
    waittierra.visible=true;
    astronautaStatic.visible=false;
    alien.visible=false;
    nave.visible=false;
    
   
    if(keyDown("D")){
      naveEsp.destroy();
      naveEsp2.visible=true;
      naveEsp2.velocityY=-4;
      naveEsp2.velocityX=10;
    }else if(naveEsp2.isTouching(waitpluton)){
       gameState = PLUTON;
    }
  }
   if(gameState === PLUTON){
    waittierra.visible=false;
    waitpluton.visible=false;
    naveEsp2.visible=false;
    background(bgImgPlu);
    scoreAstro();
    scoreAli();
    over();
    spawnRocas();
    spawnFireblue();
    groundAlien = createSprite(150,532,600,0.5);
    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }

    if(keyDown("DOWN_ARROW")) {
     spawnFire();
      //alienSalta.velocityY = -12;
      astronautaStatic.destroy();
      astronautaPistola.visible=true;
      astronautaSalta.visible=false;
      escudo.visible=false;
      escudo2.visible=false;
    }
    
  }
   
  if(gameState === NEPTUNO){
    background(bgImgNep)
    spawnLluviaNeptuno();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }

  
    }

  if(gameState === URANO){
    background(bgImgUra);
    spawnHieloUrano();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }

   
    
      }

  if(gameState === SATURNO){
    background(bgImgSat);
    spawnDiamonds();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }

      
    }

  if(gameState === JÚPITER){
    background(bgImgJup);
    spawnBurbujasJupiter();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }

     
    
  }

  if(gameState === MARTE){
      background(bgImgMar);
      spawnMeteorito();
      scoreAstro();
      scoreAli();
      over();
      spawnFireblue();
  
      astronautaStatic.visible=true;
      alienPistola.visible=true;
      nave.visible=true;
  
      textSize(40);
      fill("purple");
      text(scoreAlien,520,60);
      text("Vidas Alien:",300,60);
  
      textSize(40);
      fill("blue");
      text("Vidas Astronauta:",880,60);
      text(scoreAstronauta,1200,60);
     // alienSalta.velocityY = alienSalta.velocityY + 0.8
  
      if(keyDown("UP_ARROW")){ 
        astronautaEscudo.visible=false;
        escudo2.visible=false;
        astronautaStatic.destroy();
        astronautaPistola.visible=false;
        astronautaSalta.visible=true;
        escudo.visible=true;
      }
  
      if(keyDown("LEFT_ARROW")){
         astronautaEscudo.visible=true;
         astronautaPistola.visible=false;
         astronautaSalta.visible=false;
         astronautaStatic.destroy();
         escudo.visible=false;
         escudo2.visible=true;
      }
      if(keyDown("DOWN_ARROW")) {
        spawnFire();
         //alienSalta.velocityY = -12;
         astronautaStatic.destroy();
         astronautaPistola.visible=true;
         astronautaSalta.visible=false;
         escudo.visible=false;
         escudo2.visible=false;
       }
  
       
      
  }

  if(gameState === VENUS){
    background(bgImgVen);
    spawnRocaVenus();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }

  
  }
  if(gameState === MERCURIO){
    background(bgImgMer);
    spawnFuegoMercurio();
    scoreAstro();
    scoreAli();
    over();
    spawnFireblue();

    astronautaStatic.visible=true;
    alienPistola.visible=true;
    nave.visible=true;

    textSize(40);
    fill("purple");
    text(scoreAlien,520,60);
    text("Vidas Alien:",300,60);

    textSize(40);
    fill("blue");
    text("Vidas Astronauta:",880,60);
    text(scoreAstronauta,1200,60);
   // alienSalta.velocityY = alienSalta.velocityY + 0.8

    if(keyDown("UP_ARROW")){ 
      astronautaEscudo.visible=false;
      escudo2.visible=false;
      astronautaStatic.destroy();
      astronautaPistola.visible=false;
      astronautaSalta.visible=true;
      escudo.visible=true;
    }

    if(keyDown("LEFT_ARROW")){
       astronautaEscudo.visible=true;
       astronautaPistola.visible=false;
       astronautaSalta.visible=false;
       astronautaStatic.destroy();
       escudo.visible=false;
       escudo2.visible=true;
    }
    if(keyDown("DOWN_ARROW")) {
      spawnFire();
       //alienSalta.velocityY = -12;
       astronautaStatic.destroy();
       astronautaPistola.visible=true;
       astronautaSalta.visible=false;
       escudo.visible=false;
       escudo2.visible=false;
     }
 }


drawSprites();

}
function spawnFire() {
  if (keyDown("DOWN_ARROW")) {
   // disparoSound.loop();
    fire= createSprite(850,400,60,60);
    fire.addImage(fireImg);
    fire.velocityX=-30;
    fire.lifetime=21;
    fireGroup.add(fire);
  }
  
}
  
function spawnFireblue() {
  if(frameCount % 40 === 0) {
    //disparoSound.play();
    fireblue= createSprite(390,400,60,60);
    fireblue.addImage(fireblueImg);
    fireblue.velocityX=25;
    fireblue.lifetime=22;
    fireblue.scale=0.6;
    fireblueGroup.add(fireblue);
  }
  
}

function spawnMeteorito(){
if(frameCount % 60 === 0){
  meteorito = createSprite(random(10,1360));
  meteorito.addImage("down",meteoritoImg);
  meteorito.velocityY = 19;
  meteorito.velocityX=30;
  meteorito.scale=0.2;
  meteorito.lifetime=40;
 
   meteoritoGroup.add(meteorito);
  }
  
}

function spawnDiamonds(){
  if(frameCount % 60 === 0){
    diamante = createSprite(random(10,1360));
    diamante.addImage("down",diamanteImg);
    diamante.velocityY = 19;
    diamante.velocityX=25;
    diamante.scale=0.2;
    diamante.lifetime=40;
   
     diamanteGroup.add(diamante);
    }
  }

  function spawnFuegoMercurio(){
    if(frameCount % 60 === 0){
      merObs = createSprite(random(10,1360));
      merObs.addImage("down",merObsImg);
      merObs.velocityY = 19;
      merObs.velocityX=30;
      merObs.scale=0.2;
      merObs.lifetime=40;
     
       merObsGroup.add(merObs);
      }
      
    }

 function spawnBurbujasJupiter(){
   burbujaJup= createSprite(Math.round(random(0,1300)),Math.round(random(0,1300)));
   burbujaJup.addAnimation("moving",burbujaJupImg);
   burbujaJup.visible = false;

  if(frameCount % 70 === 0){
     burbujaJup.visible = true;
      burbujaJup.velocityX = Math.round(random(-6,6));
      burbujaJup.velocityY = Math.round(random(-6,6));
      burbujaJup.scale=0.1;
      burbujaJup.lifetime=200;
    }
  
  }
  function spawnHieloUrano(){
    if(frameCount % 60 === 0){
      hieloUra = createSprite(random(10,1360));
      hieloUra.addImage("down",hieloUraImg);
      hieloUra.velocityY = 19;
      hieloUra.velocityX=30;
      hieloUra.scale=0.1;
      hieloUra.lifetime=40;
         
      hieloUraGroup.add(hieloUra);
      }
          
    }
  
  function spawnLluviaNeptuno(){
    if(frameCount % 40 === 0){
      lluviaNep = createSprite(random(10,1360));
      lluviaNep.addImage("down",lluviaNepImg);
      lluviaNep.velocityY = 30;
      lluviaNep.velocityX=15;
      lluviaNep.scale=0.1;
      lluviaNep.lifetime=40;
       
      lluviaNepGroup.add(lluviaNep);
      }
        
  }
  function spawnRocaVenus(){
    if(frameCount % 60 === 0){
      rocaVen = createSprite(20,560,60,60);
      rocaVen.addImage("down",rocaVenImg);
      rocaVen.velocityY =0;
      rocaVen.velocityX=30;
      rocaVen.scale=0.2;
      rocaVen.lifetime=40;
     
      rocaVenGroup.add(rocaVen);
      }
      
    }

  function spawnRocas(){
    if(frameCount % 60 === 0){
      rocaPluton = createSprite(random(10,1360));
      rocaPluton.addImage("down",rocaPlutonImg);
      rocaPluton.velocityY = 19;
      rocaPluton.velocityX=25;
      rocaPluton.scale=0.2;
      rocaPluton.lifetime=40;
     
      rocaPlutonGroup.add( rocaPluton);
      }
      
    }

  function scoreAli(){

    if(fireblueGroup.isTouching(astronautaPistola)){
      scoreAlien = scoreAlien+1;
    }
    if(fireGroup.isTouching(alienPistola)){
      scoreAlien = scoreAlien-1;
    }
    if(fireblueGroup.isTouching(escudo2)){
      scoreAlien = scoreAlien;
    }
  }

  function scoreAstro(){

    if(fireGroup.collide(alienPistola)){
       scoreAstronauta = scoreAstronauta+1;
    }
    if(rocaPlutonGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }
    if(merObsGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }

    if(hieloUraGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }

    if(lluviaNepGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }
    if(rocaVenGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }

    if(buburjaJupGroup.collide(astronautaPistola)){
      scoreAstronauta = scoreAstronauta-1;
    }
    
  }


  function over(){
    if (gameState === END) {
    textSize(100);
    fill("white");
    text("G A M E  O V E R",280,300)
    astronautaPierde.visible=true;
    astronautaPistola.visible=false;
    astronautaStatic.visible=false;
    astronautaEscudo.visible=false;
    astronautaSalta.visible=false;
    escudo.visible=false;
    //fireblue.destroy();
    //fire.destroy();
    escudo2.visible=false;
}

  }