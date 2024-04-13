import * as PIXI from 'pixi.js';
import player from '../assets/sprites/characters/player.png';
import playerData from '../assets/sprites/characters/player.json'
import slime from '../assets/sprites/characters/slime.png';
import slimeData from '../assets/sprites/characters/slime.json';
async function createPlayerCharacter() {
   // Load the bunny texture
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a bunny Sprite
    const bunny = new Sprite(texture);

    return bunny;
}