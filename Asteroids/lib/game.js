(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    // this.asteroids = [];
    this.spaceObjects = [];
    this.ship = {};
    this.addAsteroids();
    this.addShip();
    // this.spaceObjects = this.asteroids.concat(this.bullets);
  };

  Game.prototype.DIM_X = 500;
  Game.prototype.DIM_Y = 500;
  Game.prototype.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function (){
    return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)];
  };

  Game.prototype.addAsteroids = function () {
    var that = this;
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var a = new Asteroids.Asteroid({ pos : that.randomPosition(), game : that});
      that.spaceObjects.push(a);
    }
  };

  Game.prototype.addShip = function () {
    this.ship = new Asteroids.Ship(this);
    this.spaceObjects.push(this.ship);
  };

  Game.prototype.addBullet = function(b) {
    this.spaceObjects.push(b);
  };

  Game.prototype.draw = function (ctx) {
    var that = this;
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = "#FF0000";
    that.spaceObjects.forEach( function(spaceObject){
      spaceObject.draw(ctx);
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];
    if (x >= this.DIM_X) {
      x = 0;
    } else if (y >= this.DIM_Y){
      y = 0;
    } else if (x <= 0) {
      x = this.DIM_X - 1;
    } else if (y <= 0) {
      y = this.DIM_Y - 1;
    }
    return [x, y];
  };

  Game.prototype.checkCollisions = function(){
    var that = this;
    //console.log("checking collisions")
    that.spaceObjects.forEach(function(firstSpaceObject){
      that.spaceObjects.forEach(function(secondSpaceObject){
        if (firstSpaceObject.isCollidedWith(secondSpaceObject)) {
          if (firstSpaceObject.pos !== secondSpaceObject.pos){
            firstSpaceObject.collideWith(secondSpaceObject);
          }
        }
      });
    });
  };

  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.moveObjects = function () {
    var that = this;
    that.spaceObjects.forEach( function(spaceObject){
      spaceObject.move();
      if (spaceObject.__proto__ !== Asteroids.Bullet.prototype){
          spaceObject.pos = that.wrap(spaceObject.pos);
      } else {
        if (spaceObject.pos[0] > that.DIM_X || spaceObject.pos[0] < 0){
          that.remove(spaceObject);
        }
        if (spaceObject.pos[1] > that.DIM_Y || spaceObject.pos[1] < 0){
          that.remove(spaceObject);
        }
      }
    });
  };

  Game.prototype.remove = function (spaceObject) {
    var i = this.spaceObjects.indexOf(spaceObject);
    var left = this.spaceObjects.slice(0,i);
    var right = this.spaceObjects.slice(i+1);
    this.spaceObjects = left.concat(right);
  };



})();
