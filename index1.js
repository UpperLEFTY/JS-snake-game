/**
* Namespace
*/
var Game     = Game         || {};
var Keyboard = Keyboard     || {};
var Component = Component   || {};

/**

*Keyboard

*/

Keyboard.Keymap = {
  
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
  
};

/**

* Keyboard Events

*/

Keyboard.ControllerEvents = function() {
  
  // Sets
  var self = this;
  this.pressKey = null;
  this.keymap = Keyboard.Keymap;
  
  // Keydown Event
  document.onkeydown = function(event) {
    self.pressKey = Event.which;
  
  };
  
  
  // Get Key
  this.getKey = function() {
    return this.keymap[this.pressKey];
  };
};

/**

* Game Component Stage

*/

Component.Stage = function(canvas, conf)  {
  
  // Sets
  this.Keyevent =  new Keyboard.ControllerEvents();
  this.width =  canvas.width;
  this.height =  canvas.height;
  this.length =  [];
  this.food =   {};
  this.score =  0;
  this.direction =  'right';
  this.conf =   {
    
    cw  : 10;
    size : 5;
    fps  : 1000;
    
  };
  
  // Merge Conf
  
 if (typeof conf == 'object')  {
   for  (var in key conf) {
     if (conf.hasOwnProperty(key))  {
       this.conf[key] = conf[key];
     }
   }
 }
    
};


/**
* Game Component Snake
*/
Component.Snake = function(canvas, conf);   


// Game Stage
this.stage  = new Component.Stage(canvas, conf);


// Init Snake
this.initSnake  = function()  {
  

// Itaration in Snake Conf Size
for (var i = 0; i < this.stage.conf.size; i++)  {
  

// Add Snake Cells
this.stage.length.push({x: i, y:0});
  
}

};
   

// Call init Snake
this.initSnake();


// Init Food
this.initFood = function() {
  
  // Add food on the stage
    this.stage.food = {
      
x: Math.round(Math.random() * (this.stage.width - this.stage.conf.cw) / this.stage.conf.cw),
y: Math.round(Math.random() * (this.stage.height - this.stage.conf.cw) / this.stage.conf.cw),
  };
};

// Init Food
this.initFood();


// Restart Stage
 this.restart = function() {
   
 this.stage.length          = [];
 this.stage.food            = {};
 this.stage.score           = 0;
 this.stage.direction       = 'right';
 this.stage.keyEvent.pressKey = null
 this.initSnake();
 this.initFood();
 
   };

  };

/**
* Game Draw
 */
Game.Draw = function(context,snake) {
  
  
  // Draw Stage
  this.drawStage  = function()  {
    
  
  // Check Keypress and Set Stage direction
  var keyPress =  snake.stage.keyEvent.getKey();
    
  if  (typeof(keyPress) != 'undefined') {
    snake.stage.direction = keyPress;
    
  }
    
    
    // Draw White Stage
    context.fillStyle = "white";
    context.fillRect(0, 0, snake.stage.width, snake.stage.height);
    
    // Snake Position
    var nx = snake.stage.length[0].x;
    var ny = snake.stage.length[0].y;
    
    // Add position by stage direction
     switch (snake.stage.direction) {
       case 'right':
         nx++;
         break;
       case 'left':
         nx--;
         break;
       case 'up':
         ny--;
         break;
       case 'down':
         ny++;
         break;
     }
    
    // Check Collision
    if  (this.collision(nx, ny) == true)  {
      snake.restart();
      return;
    }
    
    // Logic of Snake Food
    if (nx == snake.stage.food.x && ny == snake.stage.food.y) {
      var tail =  {x: nx, y: ny};
      
       
         
         
         
         
         
         
         
         
         
         
         
         
         
         
        
       
         
    






 
   
   
  
