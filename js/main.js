//Initial Phaser Engine. Create a 400x490x game!

var game = new Phaser.Game(400,490, Phaser.AUTO, 'gameDiv');

//Create our 'main' state that will contain the game 
//This is the body of the game itself
//It should contain all code related to the game itself

var mainState = {
  
  preload: function(){
    //This function will excute at the beginning
    //Which is where we'll load our assets for the game
    
    //Set the background color of the game
    
    game.stage.backgroundColor = "#71c5cf";
    
    game.load.image('bird','assets/bird.png');
    
    game.load.image('pipe', 'assets/pipe.png');
    
  },
  
  create:function (){
  //This function is called right after preload function
  //This is where we set up the game assets from earlier
  
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.bird =this.game.add.sprite(100,245,'bird');
  
    //Now that we have a bird and gravity... we need to tell the bird
    //to react to the gravity  
  
    game.physics.arcade.enable(this.bird);  
    
    this.bird.body.gravity.y = 1000;
    
  
  },
  
  update: function(){
  //This function runs 60 times per second
    
  },
  
};

//Add and start the 'mainState' to the start game
game.state.add('main', mainState);
game.state.start('main');
