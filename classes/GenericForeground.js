class GenericForeground {
  constructor({ x, y, image, velocity, c, id }) {
    (this.position = {
      x,
      y,
    }),
      (this.velocity = velocity),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
    this.c = c;
    this.id = id;
  }

  draw() {
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.position.x += this.velocity;
  }
}

export default GenericForeground;
