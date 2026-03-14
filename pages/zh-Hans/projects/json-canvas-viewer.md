---
title: JSON Canvas Viewer
description: 一个前端库，提供可扩展的 JSON Canvas 查看器，能够轻松集成到任何现有框架和范式中。
layout: project
logo: https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg
---

<script lang="ts" setup>
import Viewer from '$/components/DemoViewer.vue';
import { IconBrandGithub, IconBrandNpm, IconVocabulary, IconJson } from '@tabler/icons-vue';
import { useLinks } from '$/composables/links';
useLinks([
    {
        name: 'GitHub',
        url: 'https://github.com/hesprs/json-canvas-viewer',
        icon: IconBrandGithub,
        color: '#010409'
    },
    {
        name: 'npm',
        url: 'https://www.npmjs.com/package/json-canvas-viewer',
        icon: IconBrandNpm,
        color: '#EA2039'
    },
    {
        name: '文档',
        url: 'https://github.com/hesprs/json-canvas-viewer/wiki',
        icon: IconVocabulary,
        color: '#425aef'
    },
    {
        name: 'JSON Canvas',
        url: 'https://jsoncanvas.org',
        icon: IconJson,
        color: '#8B0A5F'
    },
]);
</script>

## 演示

<Viewer />

上方展示 JSON Canvas Viewer 架构的插图即为该查看器自身的实例，已加载 [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap)、[`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls) 和 [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) 模块。

## 简介

[Obsidian](https://obsidian.md) 提供了一款名为 [JSON Canvas](https://jsoncanvas.org) 的强大工具，它使我能够以非线性方式思考，非常适合用于复杂状态机或依赖关系图等场景。虽然它在个人使用上已足够，但很难与他人分享，因为目前尚无成熟的方法可在 Obsidian 外部查看这些内容。

`JSON Canvas Viewer` 正是为解决此问题而生。它是一个基于 TypeScript 的 JSON Canvas 文件查看器，使用户可以直接在浏览器中查看和交互画布，或轻松将查看器嵌入网站。它不依赖任何特定框架构建，因此可轻易集成至任意框架中。

## 特性

- 在网页浏览器中查看 JSON Canvas 文件（`.canvas`）
- 可轻松嵌入网站
- 支持交互式的平移与缩放功能
- 能够完整显示 [官方规范](https://jsoncanvas.org/spec/1.0/) 中定义的所有画布特性
- 响应式设计，适配移动端与触控板操作
- 支持懒加载
- 原生支持 TypeScript
- 具备现代美学设计，支持亮色与暗色模式
- 提供专为快速试用设计的 [chimp 版本](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#-chimpanzee-version)
- 🔥 性能优于在 Obsidian 中渲染画布！
- 🧩 由 [SynthKernel](/zh-Hans/researches/synthkernel) 架构驱动的开箱即用式可扩展性与摇树优化，当前可选模块包括：
  - [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap)：便于导航
  - [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls)：显示缩放及全屏按钮
  - [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer)：防止画布干扰页面滚动
  - [`DebugPanel`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#debug-panel)：显示缩放比例与位置数据

## 集成

JSON Canvas Viewer 目前可无缝集成以下技术栈 / 技术（包括但不限于）：

- ✅ **原生 JS/TS**: [原生支持](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vanilla-jsts) - `json-canvas-viewer`
- ✅ **预渲染**: [`renderToString`](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering) - `json-canvas-viewer`
- ✅ **Vite**: [Vite 插件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vite) - `vite-plugin-json-canvas`
- ✅ **Vue**: [Vue 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vue) - `@json-canvas-viewer/vue`
- ✅ **React**: [React 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#react) - `@json-canvas-viewer/react`
- ✅ **Preact**: [Preact 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#preact) - `@json-canvas-viewer/preact`

了解更多关于 JSON Canvas Viewer 的信息，请访问 [GitHub 仓库](https://github.com/hesprs/json-canvas-viewer)。

## 许可证

JSON Canvas Viewer 采用 [MIT 许可证](https://mit-license.org/) 授权。
