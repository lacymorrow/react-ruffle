import React, { useEffect } from "react";
// import "../vendor/ruffle.js";

type Props = {
  src: string;
  style?: Object;
  className?: string;
  rest?: Object;
};

export const Ruffle = ({ src, style, className, ...rest }: Props) => {
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
      <object data={src} className={className} style={style} {...rest}>
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

export default Ruffle;
