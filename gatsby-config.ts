import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: '.env',
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Animal Crossing Art Guide`,
    description: `The ✨definitive✨ guide to Redd's real vs fake art! 🦊 🧐 🦉 🖼️ 👩🏻‍🎨`,
    siteUrl: `https://animal-crossing-art-guide.netlify.app/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-postcss", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Animal Crossing Art Guide",
        short_name: "Animal Crossing Art Guide",
        start_url: "/",
        background_color: "#57cc99",
        theme_color: "#57cc99",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src",
        },
        extensions: ["js", "jsx", "ts", "tsx"]
      }
    }
  ]
};

export default config;
