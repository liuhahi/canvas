function Drop() {}
Drop.prototype = {
  init: function() {
    this.x = rand(0, w);
    this.y = 0;
    this.vy = rand(4, 5);
    const that = this;
    that.isNotCleared = true;
    setInterval(function() {
      if (that.y < 200) that.draw();
      else {
        if (that.isNotCleared) {
          that.clearDrop();
          that.isNotCleared = false;
        }
      }
    }, 30);
  },
  draw: function() {
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.fillRect(this.x, this.y, 2, 10);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(this.x, 0, 2, this.y);
    this.update();
  },
  update: function() {
    this.y += this.vy;
  },
  clearDrop: function() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x - 1, 0, 4, this.y + this.vy + 2.5);
  }
};
