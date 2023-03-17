import frauRosaKleid from "./assets/Frau__Kleid.png";
import kunststudent from "./assets/Kunststudent.png";
import kunststudentLinks from "./assets/KunststudentLinks.png";
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
import GenericForeground from "./classes/GenericForeground";
import Platform from "./classes/Platforms";
import Player from "./classes/Player";
import GenericObject from "./classes/GenericObjects";
import Enemy from "./classes/Enemy";
import Item from "./classes/Item";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const c = canvas.getContext("2d");

  let jump = new Audio("./assets/sounds/jump.mp3");
  let music = new Audio("./assets/sounds/music.mp3");
  music.play();

  canvas.width = 1280;
  canvas.height = 720;

  const canvasHeight = canvas.height;

  const canvasWidth = canvas.width;

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
  let player = new Player({
    image: createImage(kunststudent),
    c,
    canvas,
    canvasHeight,
    canvasWidth,
  });
  let scrollOffset = 0;

  //BIER
  //BIER
  //BIER
  //BIER
  //BIER
  //BIER
  //BIER

  let biere = [
    new Item({ x: 1390, y: 390, image: createImage(bierFlasche), c }),
    new Item({ x: 2250, y: 150, image: createImage(bierFlasche), c }),
    new Item({ x: 4050, y: 475, image: createImage(bierFlasche), c }),
    new Item({ x: 4250, y: 150, image: createImage(bierFlasche), c }),
    new Item({ x: 4800, y: 355, image: createImage(bierFlasche), c }),
    new Item({ x: 5990, y: 475, image: createImage(bierFlasche), c }),
    new Item({ x: 7290, y: 150, image: createImage(bierFlasche), c }),
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
      c,
    }),
    new Enemy({
      x: 900,
      y: 248,
      image: createImage(assiLinks),
      velocity: -2,
      c,
    }),
    new Enemy({
      x: 1500,
      y: 476,
      image: createImage(assiRechts),
      velocity: 2,
      c,
    }),

    new Enemy({
      x: 1200,
      y: 476,
      image: createImage(assiLinks),
      velocity: -1,
      c,
    }),

    new Enemy({
      x: 3000,
      y: 476,
      image: createImage(assiLinks),
      velocity: -3,
      c,
    }),
    new Enemy({
      x: 3800,
      y: 476,
      image: createImage(assiRechts),
      velocity: 2,
      c,
    }),
    new Enemy({
      x: 4500,
      y: 476,
      image: createImage(assiRechts),
      velocity: 2,
      c,
    }),
    new Enemy({
      x: 4700,
      y: 476,
      image: createImage(assiLinks),
      velocity: -2,
      c,
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
    new Platform({ x: 2910, y: 423, image: createImage(sbahn), c }),
    new Platform({ x: 4760, y: 423, image: createImage(bierTafel), c }),
    new Platform({ x: -1, y: 549, image: platformImage, c }),
    new Platform({
      x: platformImage.width + 150,
      y: 549,
      image: platformImage,
      c,
    }),
    new Platform({
      x: 6050,
      y: 549,
      image: createImage(plattformMed),
      c,
    }),
    new Platform({
      x: 8690,
      y: 510,
      image: createImage(rrxFährt),
      c,
      id: "fährt",
    }),
    new Platform({
      x: 7440,
      y: 549,
      image: createImage(plattformMed),
      c,
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
      c,
    }),
    new Platform({
      x: 5800,
      y: 549,
      image: createImage(platformKlein),
      c,
    }),
    new Platform({ x: 0, y: 417, image: createImage(rrx), c }),
    new Platform({ x: 499, y: 317, image: createImage(dach), c }),
    new Platform({
      x: 2200,
      y: 217,
      image: createImage(laterne),
      c,
      collision: true,
    }),
    new Platform({
      x: 3200,
      y: 217,
      image: createImage(laterne),
      c,
      collision: true,
    }),
    new Platform({
      x: 4200,
      y: 217,
      image: createImage(laterne),
      c,
      collision: true,
    }),
    new Platform({
      x: 5200,
      y: 217,
      image: createImage(laterne),
      c,
      collision: true,
    }),
    new Platform({ x: 6200, y: 217, image: createImage(laterne), c }),

    new Platform({ x: 6500, y: 317, image: createImage(dachMed), c }),
    new Platform({ x: 6300, y: 423, image: createImage(bierTafel), c }),
    new Platform({
      x: 1370,
      y: 442,
      image: createImage(automatUkraine),
      collision: true,
      c,
    }),
    new Platform({
      x: 499,
      y: 7,
      image: createImage(collisionBorder),
      collision: true,
      c,
    }),
    new Platform({
      x: 1950,
      y: 0,
      image: createImage(collisionBorder),
      collision: true,
      c,
    }),
    new Platform({
      x: 950,
      y: 417,
      image: createImage(collisionBorder),
      collision: true,
      c,
    }),
    new Platform({
      x: 2700,
      y: 317,
      image: createImage(collisionBorder),
      collision: true,
      c,
    }),
  ];
  let genericObjects = [
    new GenericObject({
      x: 0,
      y: 0,
      image: createImage(hintergrund),
      c,
    }),
  ];

  let genericForegroundObjects = [
    new GenericForeground({
      x: 0,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 2000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 4000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 6200,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 8000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 10000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 12000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 14000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),
    new GenericForeground({
      x: 16000,
      y: 620,
      velocity: 0,
      image: createImage(gleise),
      c,
    }),

    new GenericForeground({
      x: 0,
      y: 100,
      velocity: 2,
      image: createImage(flugzeug),
      c,
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
    player = new Player({
      image: createImage(kunststudent),
      c,
      canvas,
      canvasHeight,
      canvasWidth,
    });
    music.play();

    let scrollOffset = 0;

    bierCounter = 0;
    bierCounterOutput.innerHTML = bierCounter;

    enemies = [
      new Enemy({
        x: 900,
        y: 476,
        image: createImage(assiLinks),
        velocity: -3,
        c,
      }),
      new Enemy({
        x: 900,
        y: 248,
        image: createImage(assiLinks),
        velocity: -2,
        c,
      }),
      new Enemy({
        x: 1500,
        y: 476,
        image: createImage(assiRechts),
        velocity: 2,
        c,
      }),

      new Enemy({
        x: 1200,
        y: 476,
        image: createImage(assiLinks),
        velocity: -1,
        c,
      }),

      new Enemy({
        x: 3000,
        y: 476,
        image: createImage(assiLinks),
        velocity: -3,
        c,
      }),
      new Enemy({
        x: 3800,
        y: 476,
        image: createImage(assiRechts),
        velocity: 2,
        c,
      }),
      new Enemy({
        x: 4500,
        y: 476,
        image: createImage(assiRechts),
        velocity: 2,
        c,
      }),
      new Enemy({
        x: 4700,
        y: 476,
        image: createImage(assiLinks),
        velocity: -2,
        c,
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
      new Platform({ x: 2910, y: 423, image: createImage(sbahn), c }),
      new Platform({ x: 4760, y: 423, image: createImage(bierTafel), c }),
      new Platform({ x: -1, y: 549, image: platformImage, c }),
      new Platform({
        x: platformImage.width + 150,
        y: 549,
        image: platformImage,
        c,
      }),
      new Platform({
        x: 6050,
        y: 549,
        image: createImage(plattformMed),
        c,
      }),
      new Platform({
        x: 8690,
        y: 510,
        image: createImage(rrxFährt),
        id: "fährt",
        c,
      }),
      new Platform({
        x: 7440,
        y: 549,
        image: createImage(plattformMed),
        c,
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
        c,
      }),
      new Platform({
        x: 5800,
        y: 549,
        image: createImage(platformKlein),
        c,
      }),
      new Platform({ x: 0, y: 417, image: createImage(rrx), c }),
      new Platform({ x: 499, y: 317, image: createImage(dach), c }),
      new Platform({
        x: 2200,
        y: 217,
        image: createImage(laterne),
        collision: true,
        c,
      }),
      new Platform({
        x: 3200,
        y: 217,
        image: createImage(laterne),
        collision: true,
        c,
      }),
      new Platform({
        x: 4200,
        y: 217,
        image: createImage(laterne),
        collision: true,
        c,
      }),
      new Platform({
        x: 5200,
        y: 217,
        image: createImage(laterne),
        collision: true,
        c,
      }),
      new Platform({ x: 6200, y: 217, image: createImage(laterne), c }),

      new Platform({ x: 6500, y: 317, image: createImage(dachMed), c }),
      new Platform({ x: 6300, y: 423, image: createImage(bierTafel), c }),
      new Platform({
        x: 1370,
        y: 442,
        image: createImage(automatUkraine),
        collision: true,
        c,
      }),
      new Platform({
        x: 499,
        y: 7,
        image: createImage(collisionBorder),
        collision: true,
        c,
      }),
      new Platform({
        x: 1950,
        y: 0,
        image: createImage(collisionBorder),
        collision: true,
        c,
      }),
      new Platform({
        x: 950,
        y: 417,
        image: createImage(collisionBorder),
        collision: true,
        c,
      }),
      new Platform({
        x: 2700,
        y: 317,
        image: createImage(collisionBorder),
        collision: true,
        c,
      }),
    ];

    //Bier INIT
    biere = [
      new Item({ x: 1390, y: 390, image: createImage(bierFlasche), c }),
      new Item({ x: 2250, y: 150, image: createImage(bierFlasche), c }),
      new Item({ x: 4050, y: 475, image: createImage(bierFlasche), c }),
      new Item({ x: 4250, y: 150, image: createImage(bierFlasche), c }),
      new Item({ x: 4800, y: 355, image: createImage(bierFlasche), c }),
      new Item({ x: 5990, y: 475, image: createImage(bierFlasche), c }),
      new Item({ x: 7290, y: 150, image: createImage(bierFlasche), c }),
    ];

    genericObjects = [
      new GenericObject({
        x: 0,
        y: 0,
        image: createImage(hintergrund),
        c,
      }),
    ];

    genericForegroundObjects = [
      new GenericForeground({
        x: 0,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 2000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 4000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 6200,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 8000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 10000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 12000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 14000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),
      new GenericForeground({
        x: 16000,
        y: 620,
        velocity: 0,
        image: createImage(gleise),
        c,
      }),

      new GenericForeground({
        x: 0,
        y: 100,
        velocity: 2,
        image: createImage(flugzeug),
        c,
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

    platforms.forEach((platform) => {
      if (
        player.position.x + player.width >=
          platform.position.x + platform.width / 2 &&
        player.position.x <= platform.position.x + platform.width &&
        platform.id === "fährt"
      ) {
        genericObjects.forEach((object) => {
          object.position.x -= 0.6;
        });
        genericForegroundObjects.forEach((object) => {
          object.position.x -= 10;
        });
      }
    });

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
      player.image = createImage(kunststudent);
    } else if (
      (keys.left.pressed && player.position.x > 600) ||
      (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
    ) {
      player.velocity.x = -5;
      player.image = createImage(kunststudentLinks);
    } else {
      player.velocity.x = 0;
      // Platform movement
      if (keys.right.pressed) {
        scrollOffset += 5;
        player.image = createImage(kunststudent);

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
        player.image = createImage(kunststudentLinks);

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
          bierCounterOutput.innerHTML = `<span>${bierCounter}</span>`;
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

  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    music.play();
  });
});
