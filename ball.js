// dit commentaar is extra++

// nog meer commentaar houbabla
// bla bal bla
class Ball {
  
  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
  }
  
  
  update() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
    if (this.x <= 0 || this.x >= width) {
      this.speedX = this.speedX * -1;
    }
    
    if (this.y <= 0 || this.y >= height) {
      this.speedY = this.speedY * -2;
    }
    
    /*
    if (y > height) {
      x = random(100, width - 100);
      y = random(100, height - 100);
    }
    */
  }
  
  
  display() {
    fill("white");
    ellipse(this.x, this.y, 20, 20);
  }


}