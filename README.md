# postcss-hsl-trans
[PostCSS](https://github.com/postcss/postcss) plugin to convert hex colors to hsl.

```css
/* input: global.css */
:root {
  --background: #fbfbf2;
    --foreground: #080708;
}
```

```css
/* output: global_built.css */
:root {
  --background: 60 53% 97%;
  --foreground: 300 7% 3%;
}
```

## Install

```bash
npm i -D postcss-hsl-trans
```

## Usage

```js
// postcss.config.js

export default {
    plugins: {
        /* always add new plugins on the top as mentioned in the tw docs. */
        "postcss-hsl-trans": {},
        tailwindcss: {},
        autoprefixer: {}
    }
}

```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

## Reasoning

This plugin allows you to use HEX colors all over your css file and upon build, transforms your HEX values to HSL for better compatibility with shadcn/ui. You can preview your colors too when using HEX values all over your stylesheet.


