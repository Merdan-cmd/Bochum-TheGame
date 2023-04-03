class Platform {
  constructor({ x, y, image, collision, id, c, velocity }) {
    (this.position = {
      x,
      y,
    }),
      (this.collision = collision),
      (this.id = id),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
    this.c = c;
  }

  draw() {
    // c.fillStyle = "blue";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Platform;
