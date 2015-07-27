(function(){
  var MovingObject = window.MovingObject = window.MovingObject || {};
  function Asteroid(options) {
    options.color = this.COLOR;
    options.radius = this.RADIUS;
    options.vel = this.Util.randomVec(this.VECTOR_LENGTH);
    MovingObject.call(this, options);
  }

  Asteroid.prototype.VECTOR_LENGTH = 5;

  Asteroid.prototype.COLOR = function(){
    return "#ffffff";
  };
  Asteroid.prototype.RADIUS = function(){
    return 10;
  };

})();
