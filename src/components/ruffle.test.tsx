import { render } from "@testing-library/react";
import React from "react";
import Ruffle from "./ruffle";

type MockPlayer = HTMLElement & {
  load: jest.Mock;
  onFSCommand: ((command: string, args: string) => boolean) | null;
};

let mockPlayer: MockPlayer;
const mockCreatePlayer = jest.fn();
const mockNewest = jest.fn().mockReturnValue({ createPlayer: mockCreatePlayer });

beforeEach(() => {
  jest.clearAllMocks();

  // Use a real DOM element so jsdom accepts it as a valid Node
  mockPlayer = Object.assign(document.createElement("div"), {
    load: jest.fn().mockResolvedValue(undefined),
    onFSCommand: null as ((command: string, args: string) => boolean) | null,
  });
  mockCreatePlayer.mockReturnValue(mockPlayer);

  Object.defineProperty(window, "RufflePlayer", {
    value: { newest: mockNewest },
    writable: true,
    configurable: true,
  });
});

describe("Ruffle", () => {
  test("renders without crashing", () => {
    render(<Ruffle src="../../static/demo.swf" />);
  });

  test("renders a div container", () => {
    const { container } = render(<Ruffle src="../../static/demo.swf" />);
    expect(container.querySelector("div")).toBeTruthy();
  });

  test("renders fallback children", () => {
    const { getByText } = render(
      <Ruffle src="../../static/demo.swf">
        <p>Fallback content</p>
      </Ruffle>
    );
    expect(getByText("Fallback content")).toBeTruthy();
  });

  test("sets onFSCommand on the player when script loads", () => {
    const originalCreateElement = document.createElement.bind(document);
    let capturedOnload: (() => void) | null = null;

    const createElementSpy = jest
      .spyOn(document, "createElement")
      .mockImplementation((tag: string) => {
        const el = originalCreateElement(tag as keyof HTMLElementTagNameMap);
        if (tag === "script") {
          Object.defineProperty(el, "onload", {
            set(fn: () => void) {
              capturedOnload = fn;
            },
            configurable: true,
          });
        }
        return el;
      });

    const fsCommandHandler = jest.fn().mockReturnValue(true);
    render(<Ruffle src="../../static/demo.swf" onFSCommand={fsCommandHandler} />);

    // Simulate the Ruffle script onload event firing
    if (capturedOnload) {
      capturedOnload();
    }

    expect(mockPlayer.onFSCommand).toBe(fsCommandHandler);
    createElementSpy.mockRestore();
  });
});
