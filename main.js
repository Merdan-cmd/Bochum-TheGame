import frauRosaKleid from "./assets/Frau__Kleid.png";
import kunststudent from "./assets/Kunststudent.png";
import platform from "./assets/Steig.png";
import platformMittel from "./assets/Bahnsteig-mittel.png";
import platformKlein from "./assets/Bahnsteig-klein.png";
import flugzeug from "./assets/Flugzeug.png";

import hintergrund from "./assets/Hintergrund.png";
import dach from "./assets/Dach-mit-Schild.png";
import sbahn from "./assets/S-BAHN.png";
import automatUkraine from "./assets/Automat__Ukraine.png";
import rrx from "./assets/Zug.png";
import gleise from "./assets/Gleise.png";
import assiRechts from "./assets/Hat_man-rechts.png";
import assiLinks from "./assets/Hat_man-links.png";
import laterne from "./assets/Straßenlaterne.png";
import bierTafel from "./assets/Bierwerbung.png";
import bierFlasche from "./assets/Das-Bier.png";

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
let bierCounter = 0;
let bierCounterOutput = document.querySelector(".punkte");
let player = new Player({ image: createImage(kunststudent) });
let scrollOffset = 0;

//BIER
//BIER
//BIER
//BIER
//BIER
//BIER
//BIER

let bier = [
  new Item({ x: 1390, y: 390, image: createImage(bierFlasche) }),
  new Item({ x: 2250, y: 150, image: createImage(bierFlasche) }),
  new Item({ x: 4050, y: 475, image: createImage(bierFlasche) }),
  new Item({ x: 4250, y: 150, image: createImage(bierFlasche) }),
  new Item({ x: 5990, y: 475, image: createImage(bierFlasche) }),
];

// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
// ENEMIES
let enemies = [
  new Enemy({
    x: 900,
    y: 476,
    image: createImage(assiLinks),
    velocity: -5,
  }),

  new Enemy({
    x: 1200,
    y: 476,
    image: createImage(assiLinks),
    velocity: -5,
  }),

  new Enemy({
    x: 2500,
    y: 476,
    image: createImage(assiLinks),
    velocity: -5,
  }),
  // new Enemy({
  //   x: 2000,
  //   y: 476,
  //   image: createImage(assiRechts),
  //   velocity: 1,
  // }),
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
  new Platform({ x: 4760, y: 423, image: createImage(bierTafel) }),
  new Platform({ x: -1, y: 549, image: platformImage }),
  new Platform({
    x: platformImage.width + 150,
    y: 549,
    image: platformImage,
  }),
  new Platform({
    x: 6050,
    y: 549,
    image: platformImage,
  }),
  new Platform({
    x: 7250,
    y: 549,
    image: platformImage,
  }),
  new Platform({
    x: 9250,
    y: 549,
    image: platformImage,
  }),
  new Platform({
    x: 5450,
    y: 549,
    image: createImage(platformMittel),
  }),
  new Platform({
    x: 5800,
    y: 549,
    image: createImage(platformKlein),
  }),
  new Platform({ x: 0, y: 417, image: createImage(rrx) }),
  new Platform({ x: 499, y: 317, image: createImage(dach) }),
  new Platform({ x: 2200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 3200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 4200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 5200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 6200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 7200, y: 217, image: createImage(laterne) }),
  new Platform({ x: 6500, y: 317, image: createImage(dach) }),
  new Platform({ x: 8200, y: 423, image: createImage(bierTafel) }),
  new Platform({ x: 1370, y: 442, image: createImage(automatUkraine) }),
];
let genericObjects = [
  new GenericObject({
    x: 0,
    y: 0,
    image: createImage(hintergrund),
  }),
];

let genericForegroundObjects = [
  new GenericForeground({
    x: 0,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 2000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 4000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 6200,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),

  new GenericForeground({
    x: 0,
    y: 100,
    velocity: 2,
    image: createImage(flugzeug),
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
      image: createImage(assiLinks),
      velocity: -5,
    }),
    new Enemy({
      x: 1200,
      y: 476,
      image: createImage(assiLinks),
      velocity: -5,
    }),

    new Enemy({
      x: 2500,
      y: 476,
      image: createImage(assiLinks),
      velocity: -5,
    }),
    new Enemy({
      x: 2000,
      y: 476,
      image: createImage(assiRechts),
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
    new Platform({ x: 4760, y: 423, image: createImage(bierTafel) }),
    new Platform({ x: -1, y: 549, image: platformImage }),
    new Platform({
      x: platformImage.width + 150,
      y: 549,
      image: platformImage,
    }),
    new Platform({
      x: 6050,
      y: 549,
      image: platformImage,
    }),
    new Platform({
      x: 7250,
      y: 549,
      image: platformImage,
    }),
    new Platform({
      x: 8050,
      y: 549,
      image: platformImage,
    }),
    new Platform({
      x: 5450,
      y: 549,
      image: createImage(platformMittel),
    }),
    new Platform({
      x: 5800,
      y: 549,
      image: createImage(platformKlein),
    }),
    ,
    new Platform({ x: 0, y: 417, image: createImage(rrx) }),
    new Platform({ x: 499, y: 317, image: createImage(dach) }),
    new Platform({ x: 2200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 3200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 4200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 5200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 6200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 7200, y: 217, image: createImage(laterne) }),
    new Platform({ x: 1370, y: 442, image: createImage(automatUkraine) }),
  ];

  //Bier INIT
  bier = [
    new Item({ x: 1390, y: 390, image: createImage(bierFlasche) }),
    new Item({ x: 2250, y: 150, image: createImage(bierFlasche) }),
    new Item({ x: 4050, y: 475, image: createImage(bierFlasche) }),
    new Item({ x: 4250, y: 150, image: createImage(bierFlasche) }),
    new Item({ x: 5990, y: 475, image: createImage(bierFlasche) }),
  ];

  genericObjects = [
    new GenericObject({
      x: 0,
      y: 0,
      image: createImage(hintergrund),
    }),
  ];

  genericForegroundObjects = [
    new GenericForeground({
      x: 0,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 2000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 4000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 6200,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 1041,
      y: 445,
      image: createImage(automatUkraine),
    }),
    new GenericForeground({
      x: 0,
      y: 100,
      velocity: 2,
      image: createImage(flugzeug),
    }),
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
    object.update();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  bier.forEach((bier) => {
    bier.draw();
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
    (keys.left.pressed && player.position.x > 600) ||
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
        bier.forEach((bier) => {
          bier.position.x -= 5;
        }),
        enemies.forEach((enemy) => {
          enemy.position.x -= 5;
        });
      platforms.forEach((platform) => {
        platform.position.x -= 5;

        genericObjects.forEach((object) => {
          object.position.x -= 0.2;
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
        object.position.x += 0.2;
      });
      genericForegroundObjects.forEach((object) => {
        object.position.x += 5;
      });
      bier.forEach((bier) => {
        bier.position.x += 5;
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
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  // Bier Collision
  bier.forEach((bier) => {
    // Bier Collision
    {
      if (
        player.position.x < bier.position.x + bier.width &&
        player.position.x + player.width > bier.position.x &&
        player.position.y < bier.position.y + bier.height &&
        player.position.y + player.height > bier.position.y
      ) {
        bierCounter++;

        bierCounterOutput.innerHTML = bierCounter;
      } else {
        console.log("no collision");
      }
    }
  });

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
      player.position.x < enemy.position.x + enemy.width &&
      player.position.x + player.width > enemy.position.x &&
      player.position.y < enemy.position.y + enemy.height &&
      player.position.y + player.height > enemy.position.y
    ) {
      init();
    } else {
      console.log("no collision");
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
      if (player.velocity.y === 0) {
        player.velocity.y -= 25;
      }
      break;
    case 38:
      if (player.velocity.y === 0) {
        player.velocity.y -= 25;
      }
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
