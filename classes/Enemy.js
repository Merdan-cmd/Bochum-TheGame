import spriteHatRunRight from "../assets/Spritesheet-hat-man-rechts.png";
import spriteHatRunLeft from "../assets/Hat-man-links.png";
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

const canvasHeight = canvas.height;

const canvasWidth = canvas.width;

class Enemy {
  constructor({ x, y, image, velocity, c, canvas }) {
    (this.position = {
      x,
      y,
    }),
      (this.velocity = velocity),
      (this.image = image);

    (this.frames = 0), (this.width = 66), (this.height = 77);

    this.sprites = {
      run: {
        right: createImage(spriteHatRunRight),
        cropWidth: 70,
        left: createImage(spriteHatRunLeft),
        cropWidth: 67,
      },
    };
    this.currentSprite = this.sprites.run.left;
    this.currentCropWidth = 67;
    this.c = c;
    this.canvas = canvas;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  draw() {
    // c.fillStyle = "green";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.c.drawImage(
      this.currentSprite,
      this.currentCropWidth * Math.floor(this.frames / 8),
      0,
      this.currentCropWidth,
      81,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.frames++;
    if (this.frames > 32) {
      this.frames = 0;
    }
    this.position.x += this.velocity;
  }
}

export default Enemy;
