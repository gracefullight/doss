import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { defineWorkspace } from "vitest/config";

const workspaceFilePath = resolve(__dirname, "pnpm-workspace.yaml");

function getPackagesFromWorkspace(): string[] {
  const fileContents = readFileSync(workspaceFilePath, "utf8");

  const packagePattern = /-\s*'(.*?)'/g;
  const matches = [...fileContents.matchAll(packagePattern)];

  if (!matches) {
    throw new Error("packages field not found in pnpm-workspace.yaml");
  }

  const packages = matches.map((match) => match[1]);
  return packages;
}

const packages = getPackagesFromWorkspace();

export default defineWorkspace(packages);
