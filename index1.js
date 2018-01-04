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
  
   
  
