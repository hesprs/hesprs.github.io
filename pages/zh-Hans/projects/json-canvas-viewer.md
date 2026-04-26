---
layout: project
title: JSON Canvas Viewer
titleTemplate: 在浏览器中渲染 JSON Canvas 的库套件
description: JSON Canvas Viewer 是一个前端库，提供可扩展的 JSON Canvas 查看器，能够轻松集成到任何现有框架和范式中。
logo: https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg
links:
  - name: GitHub 仓库
    url: https://github.com/hesprs/json-canvas-viewer
    color: '#010409'
  - name: npm
    url: https://www.npmjs.com/package/json-canvas-viewer
    color: '#EA2039'
  - name: 文档
    url: https://github.com/hesprs/json-canvas-viewer/wiki
    color: '#425aef'
  - name: JSON Canvas
    url: https://jsoncanvas.org
    color: '#8B0A5F'
head:
  - - meta
    - name: keywords
      content: JSON Canvas, JSON Canvas Viewer, Obsidian, Obsidian Canvas, 可视化, React 组件, Vue 组件, Preact 组件, npm 库, JavaScript, TypeScript
---

<script lang="ts" setup>
import Viewer from '$/components/DemoViewer.vue';
import { IconBrandGithub, IconBrandNpm, IconVocabulary, IconJson } from '@tabler/icons-vue';
import { useLinkIcons } from '$/composables/link-icons';
useLinkIcons({
	'GitHub 仓库': IconBrandGithub,
	'npm': IconBrandNpm,
	'文档': IconVocabulary,
	'JSON Canvas': IconJson,
});
</script>

## 演示

<Viewer />

上方展示的 JSON Canvas Viewer 架构插图本身就是一个 JSON Canvas Viewer 实例，其中加载了 [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap)、[`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls) 与 [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) 模块。

## 简介

[Obsidian](https://obsidian.md) 提供了一款名为 [JSON Canvas](https://jsoncanvas.org) 的强大工具，它让我能够以非线性方式思考，非常适合复杂状态机或依赖图等场景。虽然个人使用已经足够，但由于目前缺少成熟的外部查看方式，它很难与他人分享。

`JSON Canvas Viewer` 正是为了解决这个问题而生。它是一个基于 TypeScript 的 JSON Canvas 文件查看器，可让用户直接在浏览器中查看并交互画布，也能轻松嵌入到网站中。它不依赖任何特定框架构建，因此能够轻松集成到任意框架。

## 特性

- 在浏览器中查看 JSON Canvas 文件（`.canvas`）
- 可轻松嵌入网站
- 支持交互式平移与缩放
- 能完整呈现 [官方规范](https://jsoncanvas.org/spec/1.0/) 定义的所有画布特性
- 响应式设计，适配移动端与触控板
- 支持懒加载
- 原生支持 TypeScript
- 具备现代美学设计，支持亮色与暗色模式
- 提供专为快速试用设计的 [chimp 版本](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#-chimpanzee-version)
- 🔥 比在 Obsidian 中直接渲染画布更高效！
- 🧩 由 [SynthKernel](/zh-Hans/researches/synthkernel) 架构驱动的开箱即用扩展性与摇树优化，当前可选模块包括：
  - [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap)：便于导航
  - [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls)：显示缩放与全屏按钮
  - [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer)：防止画布拦截页面滚动
  - [`DebugPanel`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#debug-panel)：显示缩放比例与位置信息

## 集成

JSON Canvas Viewer 目前可以与以下技术栈 / 技术无缝协作（包括但不限于）：

- ✅ **原生 JS/TS**：[原生支持](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vanilla-jsts) - `json-canvas-viewer`
- ✅ **预渲染**：[`renderToString`](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering) - `json-canvas-viewer`
- ✅ **Vite**：[Vite 插件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vite) - `vite-plugin-json-canvas`
- ✅ **Vue**：[Vue 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vue) - `@json-canvas-viewer/vue`
- ✅ **React**：[React 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#react) - `@json-canvas-viewer/react`
- ✅ **Preact**：[Preact 组件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#preact) - `@json-canvas-viewer/preact`

了解更多关于 JSON Canvas Viewer 的信息，请访问 [GitHub 仓库](https://github.com/hesprs/json-canvas-viewer)。

## 许可证

JSON Canvas Viewer 采用 [MIT 许可证](https://mit-license.org/) 授权。
