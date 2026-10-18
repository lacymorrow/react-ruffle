import { execFileSync } from "node:child_process";

export default {
	// Plain npm library: no cargo workspace, and the sibling homebrew-tap is not ours.
	cargoWorkspaces: [],
	git: {
		releaseBranch: "main",
	},
	steps: {
		npm: true,
		githubRelease: true,
		homebrew: false,
		// No tag-triggered workflow in this repo, so there is no CI run to watch.
		watchCi: false,
	},
	hooks: {
		// package.json "files" ships dist/, and nothing in this repo builds on publish.
		preNpm: ({ config }) => {
			execFileSync("npm", ["run", "rollup"], { cwd: config.root, stdio: "inherit" });
		},
	},
};
