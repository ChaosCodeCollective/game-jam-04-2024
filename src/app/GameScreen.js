'use client'

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Application, Assets, AnimatedSprite, Texture } from 'pixi.js';
const playerPng = '../assets/sprites/characters/player/walkingRight/walkingRight.png'
const playerData = '../assets/sprites/characters/player/walkingRight/walkingRight.json'
export default function Snake() {
  const container = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    (async () => {
    const app = new Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });
        // Append the application canvas to the document body
        document.body.appendChild(app.canvas);


    await Assets.load(playerData);
    // Create an array of textures from the sprite sheet
    const frames = [];

    for (let i = 6; i < 11; i++)
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
    anim.animationSpeed = 0.5;
    anim.play();

    app.stage.addChild(anim);

    // Animate the rotation
      // test code ends here


      return () => app.current = null;
    })();
  }); // Dependency on container.current to reinitialize if needed

  return (
    <div ref={container} className="grow m-5 rounded overflow-hidden"></div>
  );
}
