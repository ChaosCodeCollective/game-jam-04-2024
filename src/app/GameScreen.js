'use client'

import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

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
    })();
  }); // Dependency on container.current to reinitialize if needed

  return (
    <div ref={container} className="grow m-5 rounded overflow-hidden"></div>
  );
}
