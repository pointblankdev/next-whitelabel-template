const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        "storybook-addon-styled-component-theme/dist/register",
    ],
    webpackFinal: async (config) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        // https://github.com/isaachinman/next-i18next/issues/935#issuecomment-802001105
        config.resolve.alias = {
            ...config.resolve.alias,
            "next-i18next": "react-i18next",
        };
        return config;
    },
};
