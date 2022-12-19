import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@bahmutov/cypress-code-coverage/plugin")(on, config);
      return config;
    },
    supportFile: "cypress/support/index.ts",
    supportFolder: "cypress/support",
    fixturesFolder: "cypress/fixtures",
  },
  component: {
    setupNodeEvents(on, config) {
      require("@bahmutov/cypress-code-coverage/plugin")(on, config);
      return config;
    },
    supportFile: "cypress/support/index.ts",
    supportFolder: "cypress/support",
    fixturesFolder: "cypress/fixtures",
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        mode: "development",
        devtool: false,
        module: {
          rules: [
            // application and Cypress files are bundled like React components
            // and instrumented using the babel-plugin-istanbul
            // (we will filter the code coverage for non-application files later)
            {
              test: /\.tsx$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-typescript",
                    "@babel/preset-env",
                    "@babel/preset-react",
                  ],
                  plugins: [
                    // we could optionally insert this plugin
                    // only if the code coverage flag is on
                    "istanbul",
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
});
