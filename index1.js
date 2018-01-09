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
 this.stage.
 
   
   
  
