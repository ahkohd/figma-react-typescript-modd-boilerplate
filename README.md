# Figma + React + Typescript+ React-Sweet-State + Webpack + SASS + ESlint + Modd

This boilerplate aims to help developers bootstrap a Figma plugin project and start coding in a jiffy.

Tools and packages used includes:

- React
- Figma APIs
- TypeScript
- Webpack
- React-Sweet-State
- SASS/SCSS
- ESlint
- Modd
- AppleScript

The main plugin code is in `src/backend/code.ts`. The HTML for the UI is in
`src/ui/index.html`, while the embedded JavaScript is in `src/ui/ui.tsx`.

These are compiled to files in `dist/`, which are what Figma will use to run
your plugin.

# Build plugin

Follow the commands below to setup and build plugin:

```bash
    $ brew install modd
    $ chmod +x applescript.sh
    $ yarn
    $ yarn build
```

# Development

The command uses Modd to detect file changes at the project's `/src` folder then builds the project and runs `applescript.sh` which uses apple script to tell bring Figma to foreground, run command execute last plugin. For more information on how it works, please refer to this [article.](https://www.reactjunkie.com/react-graphql-figma-plugin)

```bash
    $ yarn dev
```
