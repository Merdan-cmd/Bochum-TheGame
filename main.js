import frauRosaKleid from "./assets/Frau__Kleid.png";
import kunststudent from "./assets/Kunststudent.png";
import platform from "./assets/Steig.png";
import hintergrund from "./assets/Hintergrund.png";
import dach from "./assets/Dach.png";
import sbahn from "./assets/S-BAHN.png";
import automatUkraine from "./assets/Automat__Ukraine.png";
import rrx from "./assets/Zug.png";
import gleise from "./assets/Gleise.png";
import assi from "./assets/Hat_man1.png";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function createImage(imageSrc) {
  const image = new Image();
  image.src = imageSrc;
  return image;
}

let player = new Player({ image: createImage(kunststudent) });
let scrollOffset = 0;

// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
let enemies = [
  new Enemy({
    x: 1200,
    y: 479,
    image: createImage(frauRosaKleid),
    velocity: -1,
  }),

  new Enemy({
    x: 2500,
    y: 478,
    image: createImage(assi),
    velocity: -1,
  }),
  new Enemy({
    x: 2000,
    y: 478,
    image: createImage(assi),
    velocity: 1,
  }),
];

//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS
//PLATFORMS

let platformImage = createImage(platform);

let platforms = [
  new Platform({ x: 2910, y: 423, image: createImage(sbahn) }),
  new Platform({ x: -1, y: 549, image: platformImage }),

  new Platform({
    x: platformImage.width + 150,
    y: 549,
    image: platformImage,
  }),
  new Platform({ x: 0, y: 417, image: createImage(rrx) }),
  new Platform({ x: 499, y: 317, image: createImage(dach) }),
];
let genericObjects = [
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(hintergrund),
  }),
];

let genericForegroundObjects = [
  new GenericForeground({ x: 0, y: 620, image: createImage(gleise) }),
  new GenericForeground({
    x: 1041,
    y: 445,
    image: createImage(automatUkraine),
  }),
];

// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
// ####################
function init() {
  player = new Player({ image: createImage(kunststudent) });

  let scrollOffset = 0;
  enemies = [
    new Enemy({
      x: 900,
      y: 476,
      image: createImage(assi),
      velocity: -5,
    }),
    new Enemy({
      x: 1200,
      y: 476,
      image: createImage(assi),
      velocity: -5,
    }),

    new Enemy({
      x: 2500,
      y: 476,
      image: createImage(assi),
      velocity: -5,
    }),
    new Enemy({
      x: 2000,
      y: 476,
      image: createImage(assi),
      velocity: 1,
    }),
  ];
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  //PLATFORMS INIT FUNKTION
  platformImage = createImage(platform);

  platforms = [
    new Platform({ x: 2910, y: 423, image: createImage(sbahn) }),
    new Platform({ x: -1, y: 549, image: platformImage }),

    new Platform({
      x: platformImage.width + 150,
      y: 549,
      image: platformImage,
    }),
    new Platform({ x: 0, y: 417, image: createImage(rrx) }),
    new Platform({ x: 499, y: 317, image: createImage(dach) }),
  ];

  genericObjects = [
    new GenericObject({
      x: 0,
      y: 0,
      image: createImage(hintergrund),
    }),
  ];

  genericForegroundObjects = [
    new GenericForeground({ x: 0, y: 620, image: createImage(gleise) }),
  ];
}

//Animate Funktion

//Animate Funktion

//Animate Funktion

//Animate Funktion

//Animate Funktion

//Animate Funktion

//Animate Funktion

//Animate Funktion
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  console.log(player.position.x);

  genericObjects.forEach((object) => {
    object.draw();
  });
  genericForegroundObjects.forEach((object) => {
    object.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });
  player.update();

  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  // Player movement
  if (keys.right.pressed && player.position.x < 600) {
    player.velocity.x = 5;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    // Platform movement
    if (keys.right.pressed) {
      scrollOffset += 5;

      genericForegroundObjects.forEach((object) => {
        object.position.x -= 5;
      }),
        enemies.forEach((enemy) => {
          enemy.position.x -= 5;
        });
      platforms.forEach((platform) => {
        platform.position.x -= 5;

        genericObjects.forEach((object) => {
          object.position.x -= 0.6;
        });
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;

      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
      enemies.forEach((enemy) => {
        enemy.position.x += 5;
      });
      genericObjects.forEach((object) => {
        object.position.x += 0.6;
      });
      genericForegroundObjects.forEach((object) => {
        object.position.x += 5;
      });
    }
  }

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection

  // Collision Detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffset > 2000) {
    console.log("you win");
  }

  if (player.position.y > canvas.height) {
    init();
  }

  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY
  // ENEMY COLLISION FUNCTIONALITY

  enemies.forEach((enemy) => {
    // X-ACHSE
    if (
      // (player.position.y + player.height === enemy.position.y &&
      (player.position.y + player.velocity.y >= enemy.position.y &&
        player.position.x + player.width >= enemy.position.x &&
        player.position.x + player.width <= enemy.position.x + enemy.width) ||
      (player.position.y + player.velocity.y >= enemy.position.y &&
        player.position.x - player.width === enemy.position.x + enemy.width)
    ) {
      debugger;
      init();
    }
    // Y-ACHSE
    else if (
      player.position.y + player.height <= enemy.position.y &&
      player.position.y + player.height + player.velocity.y >=
        enemy.position.y &&
      player.position.x + player.width >= enemy.position.x &&
      player.position.x <= enemy.position.x + enemy.width
    ) {
      init();
    }
  });
}
animate();
// Check if Key is pressed
// Check if Key is pressed
// Check if Key is pressed
// Check if Key is pressed
// Check if Key is pressed
// Check if Key is pressed
// Check if Key is pressed
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;
    case 37:
      keys.left.pressed = true;
      break;
    case 39:
      keys.right.pressed = true;
      break;
    case 68:
      keys.right.pressed = true;
      break;
    case 87:
      player.velocity.y -= 25;
      break;
    case 38:
      player.velocity.y -= 25;
      break;
  }
});
window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 37:
      keys.left.pressed = false;
      break;
    case 39:
      keys.right.pressed = false;
      break;
    case 68:
      keys.right.pressed = false;
      break;
    case 87:
      player.velocity.y += 0;
      break;
    case 38:
      player.velocity.y += 0;
      break;
  }
});
