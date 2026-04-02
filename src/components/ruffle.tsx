import React, { useEffect, useRef } from "react";
import { RuffleConfig, RufflePlayerElement, RuffleProps } from "../types/ruffle";

// It would be great to load ruffle locally, rather than using unpkg.com
// However, bundling the ruffle library with the project is not trivial
// import "../vendor/ruffle.js";

export const Ruffle = ({ src, config, onFSCommand, children, ...rest }: RuffleProps) => {
  // Default Configuration values for Ruffle
  // See values in the Ruffle docs: https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html

  const defaultConfig: RuffleConfig = {};

  // Merge default config with user config
  const mergedConfig = { ...defaultConfig, ...config };

  const containerRef = useRef<HTMLDivElement>(null);

  // Load Ruffle library and create player instance
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let player: RufflePlayerElement | null = null;

    // Create script tag with Ruffle library
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    script.onload = () => {
      const ruffle = window.RufflePlayer.newest();
      player = ruffle.createPlayer();
      container.appendChild(player);
      player.load({ url: src, ...mergedConfig });

      if (onFSCommand) {
        player.onFSCommand = onFSCommand;
      }
    };

    // Add script tag to body
    document.body.appendChild(script);

    return () => {
      // Remove player from container
      if (player && container.contains(player)) {
        container.removeChild(player);
      }
      // Remove script tag from body
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} {...rest}>
      {children}
    </div>
  );
};

export const Flash = Ruffle;

export default Ruffle;
