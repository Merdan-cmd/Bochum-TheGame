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
import collisionBorder from "./assets/collisionBorder.png";
import plattformMed from "./assets/PlattformMed.png";
import dachMed from "./assets/Dach-Medium.png";
import rrxFährt from "./assets/RRX-fährt.png";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let jump = new Audio("./assets/sounds/jump.mp3");

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

let biere = [
  new Item({ x: 1390, y: 390, image: createImage(bierFlasche) }),
  new Item({ x: 2250, y: 150, image: createImage(bierFlasche) }),
  new Item({ x: 4050, y: 475, image: createImage(bierFlasche) }),
  new Item({ x: 4250, y: 150, image: createImage(bierFlasche) }),
  new Item({ x: 4800, y: 355, image: createImage(bierFlasche) }),
  new Item({ x: 5990, y: 475, image: createImage(bierFlasche) }),
  new Item({ x: 7290, y: 150, image: createImage(bierFlasche) }),
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
    x: 900,
    y: 248,
    image: createImage(assiLinks),
    velocity: -2,
  }),
  new Enemy({
    x: 1500,
    y: 476,
    image: createImage(assiRechts),
    velocity: 2,
  }),

  new Enemy({
    x: 1200,
    y: 476,
    image: createImage(assiLinks),
    velocity: -1,
  }),

  new Enemy({
    x: 3000,
    y: 476,
    image: createImage(assiLinks),
    velocity: -3,
  }),
  new Enemy({
    x: 3800,
    y: 476,
    image: createImage(assiRechts),
    velocity: 2,
  }),
  new Enemy({
    x: 4500,
    y: 476,
    image: createImage(assiRechts),
    velocity: 2,
  }),
  new Enemy({
    x: 4700,
    y: 476,
    image: createImage(assiLinks),
    velocity: -2,
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
    image: createImage(plattformMed),
  }),
  new Platform({
    x: 8690,
    y: 510,
    image: createImage(rrxFährt),
  }),
  new Platform({
    x: 7440,
    y: 549,
    image: createImage(plattformMed),
  }),

  // new Platform({
  //   x: 9250,
  //   y: 549,
  //   image: platformImage,
  // }),
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
  new Platform({
    x: 2200,
    y: 217,
    image: createImage(laterne),
    collision: true,
  }),
  new Platform({
    x: 3200,
    y: 217,
    image: createImage(laterne),
    collision: true,
  }),
  new Platform({
    x: 4200,
    y: 217,
    image: createImage(laterne),
    collision: true,
  }),
  new Platform({
    x: 5200,
    y: 217,
    image: createImage(laterne),
    collision: true,
  }),
  new Platform({ x: 6200, y: 217, image: createImage(laterne) }),

  new Platform({ x: 6500, y: 317, image: createImage(dachMed) }),
  new Platform({ x: 6300, y: 423, image: createImage(bierTafel) }),
  new Platform({
    x: 1370,
    y: 442,
    image: createImage(automatUkraine),
    collision: true,
  }),
  new Platform({
    x: 499,
    y: 7,
    image: createImage(collisionBorder),
    collision: true,
  }),
  new Platform({
    x: 1950,
    y: 0,
    image: createImage(collisionBorder),
    collision: true,
  }),
  new Platform({
    x: 950,
    y: 417,
    image: createImage(collisionBorder),
    collision: true,
  }),
  new Platform({
    x: 2700,
    y: 317,
    image: createImage(collisionBorder),
    collision: true,
  }),
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
    x: 8000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 10000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 12000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 14000,
    y: 620,
    velocity: 0,
    image: createImage(gleise),
  }),
  new GenericForeground({
    x: 16000,
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

  bierCounter = 0;
  bierCounterOutput.innerHTML = bierCounter;

  enemies = [
    new Enemy({
      x: 900,
      y: 476,
      image: createImage(assiLinks),
      velocity: -5,
    }),
    new Enemy({
      x: 900,
      y: 248,
      image: createImage(assiLinks),
      velocity: -2,
    }),
    new Enemy({
      x: 1550,
      y: 476,
      image: createImage(frauRosaKleid),
      velocity: 2,
    }),

    new Enemy({
      x: 1200,
      y: 476,
      image: createImage(assiLinks),
      velocity: -1,
    }),

    new Enemy({
      x: 3500,
      y: 476,
      image: createImage(assiLinks),
      velocity: -3,
    }),
    new Enemy({
      x: 3800,
      y: 476,
      image: createImage(assiRechts),
      velocity: 2,
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
      image: createImage(plattformMed),
    }),
    new Platform({
      x: 8690,
      y: 510,
      image: createImage(rrxFährt),
    }),
    new Platform({
      x: 7440,
      y: 549,
      image: createImage(plattformMed),
    }),

    // new Platform({
    //   x: 9250,
    //   y: 549,
    //   image: platformImage,
    // }),
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
    new Platform({
      x: 2200,
      y: 217,
      image: createImage(laterne),
      collision: true,
    }),
    new Platform({
      x: 3200,
      y: 217,
      image: createImage(laterne),
      collision: true,
    }),
    new Platform({
      x: 4200,
      y: 217,
      image: createImage(laterne),
      collision: true,
    }),
    new Platform({
      x: 5200,
      y: 217,
      image: createImage(laterne),
      collision: true,
    }),
    new Platform({ x: 6200, y: 217, image: createImage(laterne) }),

    new Platform({ x: 6500, y: 317, image: createImage(dachMed) }),
    new Platform({ x: 6300, y: 423, image: createImage(bierTafel) }),
    new Platform({
      x: 1370,
      y: 442,
      image: createImage(automatUkraine),
      collision: true,
    }),
    new Platform({
      x: 499,
      y: 7,
      image: createImage(collisionBorder),
      collision: true,
    }),
    new Platform({
      x: 1950,
      y: 0,
      image: createImage(collisionBorder),
      collision: true,
    }),
    new Platform({
      x: 950,
      y: 417,
      image: createImage(collisionBorder),
      collision: true,
    }),
    new Platform({
      x: 2700,
      y: 317,
      image: createImage(collisionBorder),
      collision: true,
    }),
  ];

  //Bier INIT
  biere = [
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
      x: 8000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 10000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 12000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 14000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
    }),
    new GenericForeground({
      x: 16000,
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
  biere.forEach((bier) => {
    bier.draw();
  });
  enemies.forEach((enemy) => {
    enemy.draw();
    enemy.update();
  });

  player.update();

  if (scrollOffset >= 9350) {
    genericObjects.forEach((object) => {
      object.position.x -= 0.6;
    });
    genericForegroundObjects.forEach((object) => {
      object.position.x -= 10;
    });
  }

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
        biere.forEach((bier) => {
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
        object.position.x += 4;
      });
      genericForegroundObjects.forEach((object) => {
        object.position.x += 5;
      });
      biere.forEach((bier) => {
        bier.position.x += 5;
      });
    }
  }

  enemies.forEach((enemy) => {
    platforms.forEach((platform) => {
      if (
        enemy.position.x < platform.position.x + platform.width &&
        enemy.position.x + enemy.width > platform.position.x &&
        enemy.position.y < platform.position.y + platform.height &&
        enemy.position.y + enemy.height > platform.position.y &&
        platform.collision === true
      ) {
        if (enemy.velocity > 0) {
          enemy.velocity = -enemy.velocity;
          enemy.image = createImage(assiLinks);
        } else if (enemy.velocity < 0) {
          enemy.velocity = enemy.velocity * -1;
          enemy.image = createImage(assiRechts);
        }
      }
    });
  });

  // Collision Detection Plattform

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
  biere = biere.filter((bier) => {
    // Bier Collision
    {
      if (
        player.position.x < bier.position.x + bier.width &&
        player.position.x + player.width > bier.position.x &&
        player.position.y < bier.position.y + bier.height &&
        player.position.y + player.height > bier.position.y
      ) {
        bierCounter++;
        bierCounterOutput.innerHTML = `<span>${bierCounter}</span> BIERE`;
        return false;
      }
      return true;
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
        jump.play();
      }
      break;
    case 38:
      if (player.velocity.y === 0) {
        player.velocity.y -= 25;
        jump.play();
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
