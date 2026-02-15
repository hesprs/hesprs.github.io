---
title: Trito
description: A theme for VitePress, a static site generator. Focuses on UI/UX polishes and is powering the website you are visiting right now.
---

<script lang="ts" setup>
import ProjectCard from '$/components/projectCard.vue';
import { IconBrandGithub, IconBrandNpm }  from '@tabler/icons-vue';
</script>

<ProjectCard :meta="{
    name: $frontmatter.title,
    description: $frontmatter.description,
    logo: 'https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/logo.svg',
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/hesprs/vitepress-theme-trito',
            icon: IconBrandGithub,
            color: '#010409'
        },
        {
            name: 'npm',
            url: 'https://www.npmjs.com/package/vitepress-theme-trito',
            icon: IconBrandNpm,
            color: '#EA2039'
        },
    ]
}" />

## Preview

![preview image of a document page with light and dark theme](https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/preview2.png)

## What Is Trito?

Trito (pronounced as try-toe) is a [VitePress](https://vitepress.dev/) theme, which determines the look and feel of a VitePress generated site.

Trito titles itself as **"visually refurbished VitePress default theme"**, thus it does exactly **no more than** the functionalities achieved by the default theme. What makes it differs from the default one is pure UI/UX improvements.

Trito is designed to be a **drop-in replacement** to the default theme, it keeps minimal intrusion to the default theme APIs. If you want to make your site different from all other VitePress websites, please choose Trito 🌊.

## Why Build Trito?

VitePress default theme has been a excellent choice, why do you build Trito?

To be unique.

Inarguably, the aesthetics of VitePress default theme has already defeated 95% of the websites. Most people that firstly visit a website using the default theme are astonished by the neon-styled hero page. However, when an experienced developer that has dived into the ocean of project documentations for years visits the website, he or she will almost certainly feel tedious. The reason is simple - **VitePress websites look the same**.

It's definitely not worthwhile to reinvent the wheel barely for some visual sugar, the value of a custom theme de facto lies in the hidden impacts - for better personal branding, and to manifest that user experience is valued more than efficiency. That's also the reason for organizations like [VoidZero](https://voidzero.dev/) building [their own theme](https://www.npmjs.com/package/@voidzero-dev/vitepress-theme).

## How to Use Trito?

Firstly install it using your favorite package manager, choose `devDependency` or not based on your use case, here we take `npm` as an example:

```sh
npm add vitepress-theme-trito
```

Then modify your `.vitepress/theme/index.ts` or `.vitepress/theme/index.js` to be like this:

```JavaScript
import Trito from 'vitepress-theme-trito';
export default Trito;
```

Go to `.vitepress/config.ts` or `.vitepress/config.js` and do the modifications below:

```TypeScript
// ... some other imports
import { ThemeConfig } from 'vitepress-theme-trito'; // specially for TypeScript
import { defineConfig } from 'vitepress';

export default defineConfig<ThemeConfig>({ // [specially for TypeScript] the type parameter makes VitePress aware of the theme
    // ... your config
    vite: {
        ssr: {
            noExternal: ['vitepress-theme-trito'], // this ensures the website can build
        },
    },
})
```

About the extension, CSS variables, and theme config options of Trito, please consult [its GitHub page](https://github.com/hesprs/vitepress-theme-trito) for more detail.

## License

Pointeract is licensed under the [MIT License](https://mit-license.org/).
