class Enemy {
  constructor({ x, y, image, velocity, c }) {
    (this.position = {
      x,
      y,
    }),
      (this.velocity = velocity),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
    this.c = c;
  }

  draw() {
    // c.fillStyle = "green";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.c.drawImage(
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

export default Enemy;
