import React, { useEffect } from "react";

type Props = {
  src: string;
  className?: string;
};

export const Ruffle = ({ src, className, ...rest }: Props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    // create script tag
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
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
      <object
        data={src}
        className={className}
        style={{ width: "100%" }}
        {...rest}
      >
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
