import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	staticDirs: ['../static'],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-mdx-gfm",
		"@storybook/preset-scss"
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
