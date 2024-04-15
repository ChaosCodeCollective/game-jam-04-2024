'use client'

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Application, Assets, AnimatedSprite, Texture } from 'pixi.js';


//player Animation Jsons
const runData = '../assets/sprites/characters/player/runningRight/runRight.json'
const attackAwayData = '../assets/sprites/characters/player/attackAway/attackAway.json'
const attackFacingData = '../assets/sprites/characters/player/attackFacing/attackFacing.json'
const attackRightData = '../assets/sprites/characters/player/attackRight/attackRight.json'
const deathData = '../assets/sprites/characters/player/death/death.json'
const standingAwayData = '../assets/sprites/characters/player/standingAway/standingAway.json'
const standingFacingData = '../assets/sprites/characters/player/standingFacing/standingFacing.json'
const walkingAwayData = '../assets/sprites/characters/player/walkingAway/walkingAway.json'
const WalkingFacingData = '../assets/sprites/characters/player/walkingFacing/walkingFacing.json'
const standingRightData = '../assets/sprites/characters/player/walkingRight/walkingRight.json'


//Slime Animation Jsons
const slimeDeathData = '../assets/sprites/characters/enemy/death/slimeDeath.json'
const slimeHitData = '../assets/sprites/characters/enemy/hit/slimeHit.json'
const slimeRunData = '../assets/sprites/characters/enemy/runRight/slimeHit.json'
const slimeStandingData = '../assets/sprites/characters/enemy/standing/slimeStanding.json'
const slimeWalkData = '../assets/sprites/characters/enemy/walkRight/slimeWalkRight.json'








export default function Snake() {
  const container = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    (async () => {
    const app = new Application();

    // Initialize the application
    await app.init({ background: '#1099bb', width: 600, height: 600 });
        // Append the application canvas to the document body
        document.body.appendChild(app.canvas);


    await Assets.load(attackFacingData);
    // Create an array of textures from the sprite sheet
    const frames = [];

    for (let i = 36; i < 39; i++)
    {
        const val = `player-${i}.png`
        console.log(val)

        // Magically works since the spritesheet was loaded with the pixi loader
        frames.push(Texture.from(val));
    }

    // Create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    const anim = new AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = app.screen.width / 2;
    anim.y = app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.1;
    anim.play();

    app.stage.addChild(anim);

    // Animate the rotation
      // test code ends here


      return () => (app.current = null);
    })();
  }); // Dependency on container.current to reinitialize if needed

  return (
    <div ref={container} className="grow m-5 rounded overflow-hidden"></div>
  );
}
