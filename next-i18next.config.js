const path = require("path");

// Mapping of default locale and domain
const domains = {
    // Use Vercel URLs until DNS is set up
    // core: process.env.DOMAIN_CORE || "next-whitelabel.com",
    // customerX: process.env.DOMAIN_CUSTOMERX || "customerX.next-whitelabel.com",
    // customerY: process.env.DOMAIN_CUSTOMERY || "customerY.next-whitelabel.com",
    // customerZ: process.env.DOMAIN_CUSTOMERZ || "customerZ.next-whitelabel.com",
    core: process.env.DOMAIN_CORE || "next-whitelabel.vercel.app",
    customerX: process.env.DOMAIN_CUSTOMERX || "next-whitelabel-customerX.vercel.app",
    customerY: process.env.DOMAIN_CUSTOMERY || "next-whitelabel-customerY.vercel.app",
    customerZ: process.env.DOMAIN_CUSTOMERZ || "next-whitelabel-customerZ.vercel.app",
};

// Default domain to use. Must exist as key in `domains` map.
const defaultDomain = "core";

module.exports = {
    i18n: {
        localeDetection: false,
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: defaultDomain,
        // These are all the locales you want to support in
        // your application
        locales: Object.keys(domains),
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        domains: Object.keys(domains).map((key) => ({
            domain: domains[key],
            defaultLocale: key,
        })),
    },
    localePath: path.resolve("./public/locales"),
};
