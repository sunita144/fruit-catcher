class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.scoreA = createElement('h2');
    this.scoreB = createElement('h2');
    this.scoreC = createElement('h2');
    this.greeting = createElement('h3');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background("green")
    this.title.html("Fruit Catcher ");
    this.title.position(displayWidth/2 - 180, 40);
    this.input.position(displayWidth/2 - 140, displayHeight/2 - 140);
    this.button.position(displayWidth/2 - 80, displayHeight/2-100);
   
    this.reset.position(displayWidth-100,50);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome to the game " + player.name +", catch as many fruits as possible in 1 minute");
      this.greeting.position(displayWidth/2 - 250, displayHeight/2-200);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);

    });

  }
}
