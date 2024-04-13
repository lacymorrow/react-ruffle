import React, { useEffect } from "react";

// It would be great to load ruffle locally, rather than using unpkg.com
// However, bundling the ruffle library with the project is not trivial
// import "../vendor/ruffle.js";

/*
 * Ruffle type configuration
 * Based on the options listed in the Ruffle docs
 * https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html
 */

interface RuffleConfig {
  allowScriptAccess?: boolean;
  parameters?: null | string | URLSearchParams | Record<string, string>;
  autoplay?: "on" | "off" | "auto";
  backgroundColor?: null | string;
  letterbox?: "off" | "fullscreen" | "on";
  unmuteOverlay?: "visible" | "hidden";
  upgradeToHttps?: boolean;
  compatibilityRules?: boolean;
  favorFlash?: boolean;
  warnOnUnsupportedContent?: boolean;
  logLevel?: "error" | "warn" | "info" | "debug" | "trace";
  showSwfDownload?: boolean;
  contextMenu?: "on" | "rightClickOnly" | "off";
  preloader?: boolean;
  splashScreen?: boolean;
  maxExecutionDuration?: number | { secs: number; nanos: number };
  base?: null | string;
  menu?: boolean;
  salign?: string;
  forceAlign?: boolean;
  quality?: string;
  scale?: string;
  forceScale?: boolean;
  allowFullscreen?: boolean;
  frameRate?: null | number;
  wmode?: "window" | "opaque" | "transparent" | "direct" | "gpu";
  playerVersion?: null | number;
  preferredRenderer?: null | "webgpu" | "wgpu-webgl" | "webgl" | "canvas";
  publicPath?: null | string;
  polyfills?: boolean;
  openUrlMode?: "allow" | "confirm" | "deny";
  allowNetworking?: "all" | "internal" | "none";
  openInNewTab?: null | ((swf: URL) => void);
  socketProxy?: { host: string; port: number; proxyUrl: string }[];
  fontSources?: string[];
  defaultFonts?: {
    [key: string]: string[] | undefined;
  };
  credentialAllowList?: string[];
  playerRuntime?: "air" | "flashPlayer";
}

export interface RuffleProps
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {
  src: string;
  config?: RuffleConfig;
  children?: React.ReactNode;
}

type Ruffle = React.FC<RuffleProps>;

// Extend the Window object to include RufflePlayer
declare global {
  interface Window {
    RufflePlayer: {
      config: RuffleConfig;
    };
  }
}

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
