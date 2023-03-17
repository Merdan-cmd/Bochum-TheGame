const gravity = 1.5;
class Player {
  constructor({ image, c, canvas, canvasHeight, canvasWidth }) {
    this.position = {
      x: 100,
      y: 479,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    (this.image = image),
      (this.width = image.width),
      (this.height = image.height);
    this.c = c;
    this.canvas = canvas;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  draw() {
    this.c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= this.canvasHeight) {
      this.velocity.y += gravity;
    }
  }
}

export default Player;
