var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var score=0;
var form, player, game,home;

var baskets,b1,b2,b3,g1,g2,g3;

var bg,bg2, b1_img, b2_img,bb;
var timer =500;
function preload(){
 bg=loadImage("images/bg.jpeg")
 
 b1_img=loadImage("images/b2.png")
 b2_img=loadImage("images/b2.png")
 b3_img=loadImage("images/b3.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 g1=new Group();
  g2=new Group();
  g3=new Group();
}


function draw(){
  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(g1.collide(b1)){
    player.score+=1;
   g1.destroyEach();
   player.update();
  
  }
  if(g2.collide(b2)){
    player.score+=1;
    g2.destroyEach();
    player.update();
  }
  if(g3.collide(b3)){
    player.score+=1;
    g3.destroyEach();
    player.update();
  }
}
