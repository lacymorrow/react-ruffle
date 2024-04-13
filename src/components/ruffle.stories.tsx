import { type Meta, type StoryFn } from "@storybook/react";
import React from "react";
import Ruffle from "./ruffle";
import { RuffleProps } from "./types/ruffle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "lacymorrow/react-ruffle",
  component: Ruffle,
} as Meta<typeof Ruffle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Ruffle> = (args: RuffleProps) => (
  <div style={{ display: "contents" }}>
    <Ruffle {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: "/demo.swf",
};
