class Wall {
  constructor({ x, y, image, c, velocity }) {
    (this.position = {
      x,
      y,
    }),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
    this.c = c;
    this.velocity = 0;
  }

  draw() {
    // c.fillStyle = "blue";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    this.c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.position.x += this.velocity;
  }
}

export default Wall;
