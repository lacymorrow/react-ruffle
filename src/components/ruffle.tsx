import React, { useEffect } from "react";
// import "../vendor/ruffle.js";

export interface RuffleProps
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {
  src: string;
  rest?: Object;
}

export const Ruffle: React.FC<RuffleProps> = ({
  src,
  ...rest
}: RuffleProps) => {
  useEffect(() => {
    // create script tag
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    script.onload = () => {};

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
