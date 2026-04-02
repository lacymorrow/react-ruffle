import { act, render, waitFor } from "@testing-library/react";
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

  // Reset the global script-loading singleton between tests
  jest.resetModules();

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
  test("renders without crashing", async () => {
    await act(async () => {
      render(<Ruffle src="../../static/demo.swf" />);
    });
  });

  test("renders a div container", async () => {
    let container: HTMLElement;
    await act(async () => {
      const result = render(<Ruffle src="../../static/demo.swf" />);
      container = result.container;
    });
    expect(container!.querySelector("div")).toBeTruthy();
  });

  test("renders fallback children before player loads", () => {
    // Don't wrap in act so the async load hasn't resolved yet
    const { getByText } = render(
      <Ruffle src="../../static/demo.swf">
        <p>Fallback content</p>
      </Ruffle>
    );
    expect(getByText("Fallback content")).toBeTruthy();
  });

  test("hides fallback children after player loads", async () => {
    let result: ReturnType<typeof render>;
    await act(async () => {
      result = render(
        <Ruffle src="../../static/demo.swf">
          <p>Fallback content</p>
        </Ruffle>
      );
    });
    expect(result!.queryByText("Fallback content")).toBeNull();
  });

  test("sets onFSCommand on the player when loaded", async () => {
    const fsCommandHandler = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<Ruffle src="../../static/demo.swf" onFSCommand={fsCommandHandler} />);
    });

    expect(mockPlayer.onFSCommand).toBe(fsCommandHandler);
  });
});
