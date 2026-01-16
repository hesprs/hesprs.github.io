---
title: JSON Canvas Viewer
description: 一个前端库，提供可扩展的 JSON Canvas 查看器，能够轻松集成到任何现有框架和范式中。
---
<script setup>
import ProjectCard from '$/components/projectCard.vue';
import { JSONCanvasViewerVue } from 'json-canvas-viewer/bridges';
import { Minimap, MistouchPreventer, Controls } from 'json-canvas-viewer/modules';
import canvas from '$/assets/demo.canvas';
import { IconBrandGithub, IconBrandNpm, IconBook, IconJson }  from '@tabler/icons-vue';
import { useData } from 'vitepress';
const { page } = useData();
const meta = {
    name: page.value.title,
    description: page.value.description,
    logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg  ',
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/hesprs/json-canvas-viewer  ',
            icon: IconBrandGithub,
            color: '#010409'
        },
        {
            name: 'npm',
            url: 'https://www.npmjs.com/package/json-canvas-viewer  ',
            icon: IconBrandNpm,
            color: '#EA2039'
        },
        {
            name: '文档',
            url: 'https://github.com/hesprs/json-canvas-viewer/wiki  ',
            icon: IconBook,
            color: '#425aef'
        },
        {
            name: 'JSON Canvas',
            url: 'https://jsoncanvas.org  ',
            icon: IconJson,
            color: '#8B0A5F'
        },
    ],
}
const options = {
    lazyLoading: true,
    canvas,
    minimapCollapsed: true,
}
const modules = [Minimap, MistouchPreventer, Controls];
</script>

<ProjectCard :meta />

## 演示

<Suspense><JSONCanvasViewerVue :options class="canvas-viewer" :modules /></Suspense>

上方展示 JSON Canvas Viewer 架构的插图即为该查看器自身的实例，已加载 [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap  )、[`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls  ) 和 [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer  ) 模块。

## 简介

[Obsidian](https://obsidian.md  ) 提供了一款名为 [JSON Canvas](https://jsoncanvas.org  ) 的强大工具，它使我能够以非线性方式思考，非常适合用于复杂状态机或依赖关系图等场景。虽然它在个人使用上已足够，但很难与他人分享，因为目前尚无成熟的方法可在 Obsidian 外部查看这些内容。

`JSON Canvas Viewer` 正是为解决此问题而生。它是一个基于 TypeScript 的 JSON Canvas 文件查看器，使用户可以直接在浏览器中查看和交互画布，或轻松将查看器嵌入网站。它不依赖任何特定框架构建，因此可轻易集成至任意框架中。

## 特性

- 在网页浏览器中查看 JSON Canvas 文件（`.canvas`）
- 可轻松嵌入网站
- 支持交互式的平移与缩放功能
- 能够完整显示 [官方规范](https://jsoncanvas.org/spec/1.0/  ) 中描述的所有画布特性
- 响应式设计，适配移动端与触控板操作
- 支持懒加载
- 原生支持 TypeScript
- 🔥 性能优于在 Obsidian 中渲染画布！
- 🧩 开箱即用的可扩展性与摇树优化（tree-shaking），当前可选模块包括：
  - [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap  )：便于导航
  - [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls  )：显示缩放及全屏按钮
  - [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer  )：防止画布干扰页面滚动
  - [`DebugPanel`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#debug-panel  )：显示缩放比例与位置数据

## 与现有技术栈的集成

JSON Canvas Viewer 目前可无缝集成以下技术栈 / 技术（包括但不限于）：

- ✅ Vanilla JS/TS：天然支持
- ✅ 预渲染：[`renderToString`](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#prerendering  )
- ✅ Vite：[Vite 插件](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#setup-1  )
- ✅ Vue：[Vue 组件](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#vue-component  )
- ✅ React：[React 组件](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#react-component  )

了解更多关于 JSON Canvas Viewer 的信息，请访问 [GitHub 仓库](https://github.com/hesprs/json-canvas-viewer  )。

## 许可证

JSON Canvas Viewer 采用 [MIT 许可证](https://mit-license.org/  ) 授权。