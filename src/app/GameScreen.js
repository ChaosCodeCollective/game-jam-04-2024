'use client'

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Assets, Sprite } from 'pixi.js';
import player from '../assets/sprites/characters/player.png';
import playerData from '../assets/sprites/characters/player.json'
import slime from '../assets/sprites/characters/slime.png';
import slimeData from '../assets/sprites/characters/slime.json';
export default function Snake() {
  const container = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    (async () => {
      app.current = new PIXI.Application();
      await app.current.init({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
      });
      container.current.appendChild(app.current.canvas);
       // Load the bunny texture
      const texture = await Assets.load(player);

      // Create a bunny Sprite
      const bunny = new Sprite(texture);
      // Move the sprite to the center of the screen
      bunny.x = app.current.screen.width / 2;
      bunny.y = app.current.screen.height / 2;
      app.current.stage.addChild(bunny);
    })();
  }); // Dependency on container.current to reinitialize if needed

  return (
    <div ref={container} className="grow m-5 rounded overflow-hidden"></div>
  );
}
