import React from "react";
import { type StoryFn, type Meta } from "@storybook/react";
import GitHubReadme from "./github-readme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "lacymorrow/react-github-readme-md",
  component: GitHubReadme,
} as Meta<typeof GitHubReadme>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof GitHubReadme> = (args) => (
  <GitHubReadme {...args} />
);

export const LightMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightMode.args = {
  username: "lacymorrow",
  repo: "react-github-readme-md",
};

export const DarkMode: StoryFn<typeof GitHubReadme> = (args) => (
  <div className="dark" style={{ background: "black" }}>
    <GitHubReadme {...args} />
  </div>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkMode.args = {
  username: "lacymorrow",
  repo: "react-github-readme-md",
};
