import React, { useEffect } from "react";
import { RuffleProps } from "./types/ruffle";

// It would be great to load ruffle locally, rather than using unpkg.com
// However, bundling the ruffle library with the project is not trivial
// import "../vendor/ruffle.js";

export const Ruffle = ({ src, config, children, ...rest }: RuffleProps) => {
  // Default Configuration values for Ruffle
  // See values in the Ruffle docs: https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html

  const defaultConfig = {};

  // Merge default config with user config
  const mergedConfig = { ...defaultConfig, ...config };

  // Load Ruffle library
  useEffect(() => {
    // Create script tag with Ruffle library
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    script.onload = () => {
      window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = mergedConfig;
    };

    // Add script tag to body
    document.body.appendChild(script);

    return () => {
      // Remove script tag from body
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <object data={src} {...rest}>
        <param name="movie" value={src} />
        {children ? (
          children
        ) : (
          <p>
            Your browser does not support WASM,{" "}
            <a href="https://ruffle.rs/" rel="noopener noreferrer">
              see Ruffle documentation
            </a>{" "}
            for more information.
          </p>
        )}
      </object>
    </>
  );
};

export const Flash = Ruffle;

export default Ruffle;
