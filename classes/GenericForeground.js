class GenericForeground {
  constructor({ x, y, image, velocity }) {
    (this.position = {
      x,
      y,
    }),
      (this.velocity = velocity),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.position.x += this.velocity;
  }
}
