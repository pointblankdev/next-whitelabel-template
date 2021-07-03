const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");
const images = require("next-images");

const config = {
    future: {
        webpack5: true,
    },
    i18n,
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    images: {
        domains: [
            "randomuser.me",
            "picsum.photos",
            "res.cloudinary.com",
            "source.unsplash.com",
        ],
    },
};

module.exports = withPlugins([images], config);
