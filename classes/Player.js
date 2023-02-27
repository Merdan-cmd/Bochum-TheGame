const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const gravity = 1.5;
class Player {
  constructor({ image }) {
    this.position = {
      x: 100,
      y: 475,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    (this.image = image),
      (this.width = image.width),
      (this.height = image.height);
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
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
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}
