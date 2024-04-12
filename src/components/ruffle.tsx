import React, { useEffect } from "react";
// import "../vendor/ruffle.js";

export interface RuffleProps
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {
  src: string;
  config?: any;
  rest?: Object;
}

// https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html
declare global {
  interface Window {
    RufflePlayer: any;
  }
}

export const Ruffle: React.FC<RuffleProps> = ({
  src,
  config,
  ...rest
}: RuffleProps) => {
  useEffect(() => {
    // create script tag
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    script.onload = () => {
      if (config) {
        window.RufflePlayer = window.RufflePlayer || {};
        window.RufflePlayer.config = config
      }
    };

    // add script tag to body
    document.body.appendChild(script);
    return () => {
      // remove script tag from body
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <object data={src} {...rest}>
        <param name="movie" value={src} />
        <p>
          Your browser does not support WASM,{" "}
          <a href="https://ruffle.rs/" rel="noopener noreferrer">
            see Ruffle documentation
          </a>{" "}
          for more information.
        </p>
      </object>
    </>
  );
};

export const Flash = Ruffle;

export default Ruffle;
