class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

 b1 = createSprite(250,displayHeight/2);
 b1.addImage("1", b1_img);
 
 b2 = createSprite(400,displayHeight/2);
 b2.addImage("2",b2_img);
 
 b3 = createSprite(600,displayHeight/2);
 b3.addImage("2",b3_img);

    baskets = [b1, b2, b3];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    
    if(allPlayers !== undefined){
      background("lightblue");
      image(bg, 0,0,displayWidth, displayHeight);
      
      var index = 0;

      var x = 200;
      var y=600;

      for(var plr in allPlayers){

        index = index + 1 ;
        form.scoreB.html("Timer: "+timer);
        form.scoreB.position(50,20);
        x=x+200;
        x =  allPlayers[plr].distance;
        baskets[index-1].x = x;
        baskets[index-1].y = y;

        if (index === player.index){
        
          fill("red");
          ellipse(x,y+70,200,80);
          
        if(timer>0){
          timer=timer-1;
        if(frameCount % 60 === 0){
            
             var fruits=createSprite(random(50,200),60,40,40);
             fruits.velocityY=12;
             fruits.shapeColor="yellow";
         
            g1.add(fruits)
         
        }
        if(frameCount % 60 === 0){
            
          var fruits=createSprite(random(500,700),60,40,40);
          fruits.velocityY=12;
          fruits.shapeColor="red";
      
         g2.add(fruits)
      
     }
     if(frameCount % 60 === 0){
            
      var fruits=createSprite(random(1000,1280),60,40,40);
      fruits.velocityY=12;
      fruits.shapeColor="blue";
  
     g3.add(fruits)
  
 }
}else{
  gameState =2;
}
      }
       

      }

    }


   
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance -=27
      player.update();
    }
   

   
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=27
      player.update();
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");  
    
  }
}
