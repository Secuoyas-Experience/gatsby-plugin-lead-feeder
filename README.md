# Lead Feeder Plugin

## Install

**With npm**

```bash
npm install gatsby-plugin-lead-feeder`
```

**With yarn**

```bash
yarn add gatsby-plugin-lead-feeder`
```

## How to use

Add an entry for the plugin in `gatsby-image`:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-lead-feeder`,
      options: {
        key: "YOU_LEAD_FEEDER_KEY",
      },
    },
  ],
}
```

## Caveats

The plugins only works when Gatsby build.

To test the plugin:

```bash
yarn build && yarn serve
```
