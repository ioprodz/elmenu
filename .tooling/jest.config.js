/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: "..",
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
