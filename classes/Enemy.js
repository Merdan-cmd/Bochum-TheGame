class Enemy {
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
    // c.fillStyle = "green";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.position.x += this.velocity;
  }
}
