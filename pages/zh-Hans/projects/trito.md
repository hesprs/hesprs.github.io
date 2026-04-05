---
layout: project
title: Trito
description: Trito 是一款专为 VitePress（静态站点生成器）设计的主题。它在 VitePress 默认主题的基础上进行了深度定制，重点优化了 UI/UX 体验。同时，它也是本网站所使用的主题。
logo: https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/logo.svg
---

<script lang="ts" setup>
import { IconBrandGithub, IconBrandNpm } from '@tabler/icons-vue';
import { useLinks } from '$/composables/links';
useLinks([
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
]);
</script>

## 预览

![预览图：文档页面的前后对比动效](https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/home.gif)

## 什么是 Trito？

Trito（发音为 "try-toe"）是一个 [VitePress](https://vitepress.dev/) 主题，用于决定由 VitePress 生成的网站的外观和风格。

Trito 自称为 **“视觉焕然一新的 VitePress 默认主题”**，因此它的功能与默认主题完全一致，不增不减。使其区别于默认主题的，纯粹是 UI/UX 上的改进。

Trito 被设计为默认主题的 **开箱即用式替代品**，对默认主题的 API 干预极小。如果你想让你的网站在所有其他 VitePress 网站中脱颖而出，请选择 Trito 🌊。

## 为何要构建 Trito？

VitePress 的默认主题已然十分出色，为何还要构建 Trito？

为了独特性。

不可否认，VitePress 默认主题的美学设计已经超越了 95% 的网站。初次访问使用默认主题的网站时，大多数人都会对霓虹风格的首页感到惊叹。然而，当一位经验丰富的开发者——一位多年来深入项目文档海洋的人——访问该网站时，他或她几乎肯定会感到乏味。原因很简单——**所有 VitePress 网站看起来都一样**。

仅仅为了些许视觉糖衣就重新造轮子，显然不值得。自定义主题的真正价值在于其潜在影响——实现更好的个人品牌塑造，并表明用户体验比开发效率更受重视。这也是像 [VoidZero](https://voidzero.dev/) 这样的组织会打造[他们自己的主题](https://www.npmjs.com/package/@voidzero-dev/vitepress-theme)的原因。

## 如何使用 Trito？

首先，使用你喜欢的包管理器进行安装。根据你的用例决定是否将其作为 `devDependency`，这里以 `npm` 为例：

```sh
npm add vitepress-theme-trito
```

然后将你的 `.vitepress/theme/index.ts` 或 `.vitepress/theme/index.js` 文件修改如下：

```javascript
import Trito from 'vitepress-theme-trito';
export default Trito;
```

接着进入 `.vitepress/config.ts` 或 `.vitepress/config.js` 文件，进行以下修改：

```typescript
// ... 其他导入
import { ThemeConfig } from 'vitepress-theme-trito'; // 特别适用于 TypeScript
import { defineConfig } from 'vitepress';

export default defineConfig<ThemeConfig>({
  // [特别适用于 TypeScript] 类型参数使 VitePress 能识别该主题
  // ... 你的配置
  vite: {
    ssr: {
      noExternal: ['vitepress-theme-trito'], // 确保网站能够成功构建
    },
  },
});
```

关于 Trito 的扩展、CSS 变量以及主题配置选项的更多细节，请查阅[其 GitHub 页面](https://github.com/hesprs/vitepress-theme-trito)。

## 许可证

本项目基于 [MIT 许可证](https://mit-license.org/) 开源。
