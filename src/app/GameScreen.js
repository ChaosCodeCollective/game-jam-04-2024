"use client";

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Application, Assets, AnimatedSprite, Texture } from "pixi.js";

//player Animation Jsons
const runData =
  "../assets/sprites/characters/player/runningRight/runRight.json";
const attackAwayData =
  "../assets/sprites/characters/player/attackAway/attackAway.json";
const attackFacingData =
  "../assets/sprites/characters/player/attackFacing/attackFacing.json";
const attackRightData =
  "../assets/sprites/characters/player/attackRight/attackRight.json";
const deathData = "../assets/sprites/characters/player/death/death.json";
const standingAwayData =
  "../assets/sprites/characters/player/standingAway/standingAway.json";
const standingFacingData =
  "../assets/sprites/characters/player/standingFacing/standingFacing.json";
const walkingAwayData =
  "../assets/sprites/characters/player/walkingAway/walkingAway.json";
const WalkingFacingData =
  "../assets/sprites/characters/player/walkingFacing/walkingFacing.json";
const standingRightData =
  "../assets/sprites/characters/player/walkingRight/walkingRight.json";

//Slime Animation Jsons
const slimeDeathData =
  "../assets/sprites/characters/enemy/death/slimeDeath.json";
const slimeHitData = "../assets/sprites/characters/enemy/hit/slimeHit.json";
const slimeRunData =
  "../assets/sprites/characters/enemy/runRight/slimeRunRight.json";
const slimeStandingData =
  "../assets/sprites/characters/enemy/standing/slimeStanding.json";
const slimeWalkData =
  "../assets/sprites/characters/enemy/walkRight/slimeWalkRight.json";

async function createFrame(data, start, end,character = 'player') {
  await Assets.load(data);
  // Create an array of textures from the sprite sheet
  const frames = [];

  for (let i = start; i < end; i++) {
      const val = `${character}-${i}.png`;
       console.log(val);

    // Magically works since the spritesheet was loaded with the pixi loader
    frames.push(Texture.from(val));
  }
  return frames;
}

export default function Snake() {
  const container = useRef(null);
  const app = useRef(null);
  var anim;
  useEffect(() => {
    (async () => {
      const app = new Application();

      // Initialize the application
      await app.init({ background: "#1099bb", resizeTo: window });
      // Append the application canvas to the document body
      document.body.appendChild(app.canvas);
      //PlayerFrames
      const standingRightFrames = await createFrame(standingRightData, 6, 10);
      const attackFacingFrames = await createFrame(attackFacingData, 36, 39);
      const attackAwayFrames = await createFrame(attackAwayData, 44, 47);
      const attackRightFrames = await createFrame(attackRightData, 40, 43);
      const deathFrames = await createFrame(deathData, 48, 50);
      const runningRightFrames = await createFrame(runData, 24, 29);
      const standingAwayFrames = await createFrame(standingAwayData, 12, 17);
      const standingFacingFrames = await createFrame(standingFacingData, 0, 5);
      const walkingAwayFrames = await createFrame(walkingAwayData, 30, 35);
      const walkingFacingFrames = await createFrame(WalkingFacingData, 18, 23);
      const allFrames = [
        standingRightFrames,
        attackFacingFrames,
        attackAwayFrames,
        attackRightFrames,
        deathFrames,
        runningRightFrames,
        standingAwayFrames,
        standingFacingFrames,
        walkingAwayFrames,
        walkingFacingFrames,
      ];
      //enemy Frames
      const slimeDeathFrames = await createFrame(slimeDeathData, 20, 24,'slime');
      const slimeHitFrames = await createFrame(slimeHitData, 17, 19,'slime');
      const slimeRunFrames = await createFrame(slimeRunData, 10, 16,'slime');
      const slimeStandingFrames = await createFrame(slimeStandingData, 0, 3,'slime');
      const slimeWalkFrames = await createFrame(slimeWalkData, 4, 9,'slime');
      const allEnemyFrames = [
        slimeDeathFrames,
        slimeHitFrames,
        slimeRunFrames,
        slimeStandingFrames,
        slimeWalkFrames,
      ];
      //await Assets.load(attackFacingData);
      // Create an array of textures from the sprite sheet
      //const frames = [];

      //    for (let i = 36; i < 39; i++)
      //  {
      //    const val = `player-${i}.png`
      //  console.log(val)

      // Magically works since the spritesheet was loaded with the pixi loader
      //        frames.push(Texture.from(val));
      //  }

      // Create an AnimatedSprite (brings back memories from the days of Flash, right ?)
       for (let i = 0; i < 9; i++) {
        anim = new AnimatedSprite(allFrames[i]);
        anim.x = app.screen.width / 2 + i * 20;
       anim.y = app.screen.height / 2;
       anim.anchor.set(0.5);
       anim.animationSpeed = 0.1;
       anim.play();

      app.stage.addChild(anim);
        }
      for (let i = 0; i < 5; i++) {
        anim = new AnimatedSprite(allEnemyFrames[i]);
        anim.x = app.screen.width / 2 + i * 20;
        anim.y = app.screen.height / 2 + 50;
        anim.anchor.set(0.5);
        anim.animationSpeed = 0.1;
        anim.play();

        app.stage.addChild(anim);
      }

      /*
       * An AnimatedSprite inherits all the properties of a PIXI sprite
       * so you can change its position, its anchor, mask it, etc
       */

      // Animate the rotation
      // test code ends here

      return () => (app.current = null);
    })();
  }); // Dependency on container.current to reinitialize if needed

  return (
    <div ref={container} className="grow m-5 rounded overflow-hidden"></div>
  );
}
