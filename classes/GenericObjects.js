class GenericObject {
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
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.position.x += this.velocity;
  }
}

export default GenericObject;
