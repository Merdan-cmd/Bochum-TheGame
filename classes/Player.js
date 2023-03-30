const gravity = 1.5;
import spriteRunRight from "../assets/spritesheet-rechts.png";
import spriteStandRight from "../assets/SpriteStandRight.png";
import spriteStandLeft from "../assets/SpriteStandLeft.png";
import spriteRunLeft from "../assets/spritesheet-links.png";
function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

class Player {
  constructor({ image, c, canvas, canvasHeight, canvasWidth }) {
    this.position = {
      x: 100,
      y: 479,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };

    (this.image = image),
      (this.frames = 0),
      (this.width = 50),
      (this.height = 69);

    this.sprites = {
      stand: {
        right: createImage(spriteStandRight),
        cropWidth: 55,
        left: createImage(spriteStandLeft),
      },
      run: {
        right: createImage(spriteRunRight),
        cropWidth: 50,
        left: createImage(spriteRunLeft),
        cropWidth: 50,
      },
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 55;
    this.c = c;
    this.canvas = canvas;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  draw() {
    this.c.drawImage(
      this.currentSprite,
      this.currentCropWidth * Math.floor(this.frames / 15),
      0,
      this.currentCropWidth,
      70,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
    this.frames++;
    if (this.frames > 150) {
      this.frames = 0;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= this.canvasHeight) {
      this.velocity.y += gravity;
    }
  }
}

export default Player;
