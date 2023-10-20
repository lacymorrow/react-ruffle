import React from "react";
import { type StoryFn, type Meta } from "@storybook/react";
import Ruffle from "./ruffle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "lacymorrow/react-ruffle",
  component: Ruffle,
} as Meta<typeof Ruffle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Ruffle> = (args) => (
  <div style={{ display: "contents", margin: "2rem" }}>
    <Ruffle {...args} />
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: "/demo.swf",
};
