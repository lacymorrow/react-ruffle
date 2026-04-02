import React, { useCallback, useEffect, useRef, useState } from "react";
import { RuffleConfig, RufflePlayerElement, RuffleProps } from "../types/ruffle";

const RUFFLE_CDN = "https://unpkg.com/@ruffle-rs/ruffle@0.1.0";

// Global singleton: one script tag shared across all Ruffle instances
let ruffleScriptPromise: Promise<void> | null = null;

function loadRuffleScript(): Promise<void> {
  if (ruffleScriptPromise) return ruffleScriptPromise;

  // Check if already loaded (e.g. user added script manually)
  if (window.RufflePlayer) {
    ruffleScriptPromise = Promise.resolve();
    return ruffleScriptPromise;
  }

  ruffleScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = RUFFLE_CDN;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Ruffle script"));
    document.body.appendChild(script);
  });

  return ruffleScriptPromise;
}

export const Ruffle = ({ src, config, onFSCommand, children, ...rest }: RuffleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<RufflePlayerElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Stable config reference for the effect
  const mergedConfig = { ...config };

  // Initialize player once on mount, tear down on unmount
  useEffect(() => {
    let cancelled = false;

    loadRuffleScript().then(() => {
      if (cancelled || !containerRef.current) return;

      const ruffle = window.RufflePlayer.newest();
      const player = ruffle.createPlayer();
      containerRef.current.appendChild(player);
      playerRef.current = player;

      player.load({ url: src, ...mergedConfig });
      if (onFSCommand) {
        player.onFSCommand = onFSCommand;
      }
      setIsReady(true);
    });

    return () => {
      cancelled = true;
      const player = playerRef.current;
      const container = containerRef.current;
      if (player && container && container.contains(player)) {
        container.removeChild(player);
      }
      playerRef.current = null;
      setIsReady(false);
    };
    // Re-create the player when src changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // Update config on existing player when config changes
  const configKey = JSON.stringify(config);
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.load({ url: src, ...mergedConfig });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [configKey]);

  // Update FSCommand handler without recreating the player
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.onFSCommand = onFSCommand ?? null;
  }, [onFSCommand]);

  return (
    <div ref={containerRef} {...rest}>
      {!isReady && children}
    </div>
  );
};

export const Flash = Ruffle;

export default Ruffle;
