# Leadfeeder Plugin

This plugin is intended for inserting the [Leadfeeder](https://www.leadfeeder.com/) Tracker in the `<header>` section of all the pages of your [Gatsby](https://www.gatsbyjs.org) website.

## Install

**With npm**

```bash
npm install gatsby-plugin-leadfeeder
```

**With yarn**

```bash
yarn add gatsby-plugin-leadfeeder
```

## How to use

Add an entry for the plugin in `gatsby-config.js`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-leadfeeder`,
      options: {
        key: "YOUR_LEADFEEDER_KEY",
      },
    },
  ],
}
```

## Caveats

The plugin does not work on development mode, just on production as a result of a Gatsby build.

To test the plugin:

```bash
yarn build && yarn serve
```
