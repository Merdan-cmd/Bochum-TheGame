class Item {
  constructor({ x, y, image, c }) {
    (this.position = {
      x,
      y,
    }),
      (this.image = image);
    this.width = image.width;
    this.height = image.height;
    this.c = c;

    this.collected = false;
  }

  draw() {
    // c.fillStyle = "blue";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Item;
