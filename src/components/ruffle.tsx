import React, { useEffect } from "react";
// import "../vendor/ruffle.js";

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
    sans?: string[];
    serif?: string[];
    typewriter?: string[];
    JapaneseGothic?: string[];
    JapaneseGothicMono?: string[];
    JapaneseMincho?: string[];
  };
  credentialAllowList?: string[];
  playerRuntime?: "air" | "flashPlayer";
}

export interface RuffleProps
  extends React.ObjectHTMLAttributes<HTMLObjectElement> {
  src: string;
  config?: RuffleConfig;
  rest?: Object;
}

// https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html
declare global {
  interface Window {
    RufflePlayer: {
      config: RuffleConfig;
    };
  }
}

export const Ruffle: React.FC<RuffleProps> = ({
  src,
  config = {
    allowScriptAccess: false,
    parameters: {},
    autoplay: "auto",
    backgroundColor: null,
    letterbox: "fullscreen",
    unmuteOverlay: "visible",
    upgradeToHttps: true,
    compatibilityRules: true,
    favorFlash: true,
    warnOnUnsupportedContent: true,
    logLevel: "error",
    showSwfDownload: false,
    contextMenu: "on",
    preloader: true,
    splashScreen: true,
    maxExecutionDuration: 15,
    base: null,
    menu: true,
    salign: "",
    forceAlign: false,
    quality: "high",
    scale: "showAll",
    forceScale: false,
    allowFullscreen: false,
    frameRate: null,
    wmode: "window",
    playerVersion: null,
    preferredRenderer: null,
    publicPath: null,
    polyfills: true,
    openUrlMode: "allow",
    allowNetworking: "all",
    openInNewTab: null,
    socketProxy: [],
    fontSources: [],
    defaultFonts: {},
    credentialAllowList: [],
  },
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
        window.RufflePlayer.config = config;
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
