---
title: JSON Canvas Viewer
description: A front-end library that ships an extensible viewer for JSON Canvas, with easy integration with any existing frameworks and paradigms.
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
    logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg',
    links: [
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
            name: 'Documentation',
            url: 'https://github.com/hesprs/json-canvas-viewer/wiki',
            icon: IconBook,
            color: '#425aef'
        },
        {
            name: 'JSON Canvas',
            url: 'https://jsoncanvas.org',
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

## Demo

<Suspense><JSONCanvasViewerVue :options class="canvas-viewer" :modules /></Suspense>

Above illustration of the architecture of JSON Canvas Viewer is an instance of itself, with modules [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap), [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls), and [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) loaded.

## Introduction

[Obsidian](https://obsidian.md) ships a powerful tool called [JSON Canvas](https://jsoncanvas.org), it enables me to think in a non-linear style, perfect for usages like complex state machine or dependency graph. While it's sufficient for personal use, it's hard to share with others since there's no mature way to view it outside Obsidian.

`JSON Canvas Viewer` comes to solve this problem, it is a TypeScript-based viewer for JSON Canvas files that enables users to view and interact with canvases directly in a browser, or embed the viewer in websites with ease. It is built without a framework so it is easily embeddable into any framework.

## Features

- View JSON Canvas files (`.canvas`) in a web browser
- Embed into websites easily
- Interactive pan and zoom functionality
- Can display 100% of canvas features described in the [official spec](https://jsoncanvas.org/spec/1.0/)
- Responsive design with mobile and touchpad adaptation
- Supports Lazy loading
- TypeScript native
- 🔥 More performant than rendering canvases in Obsidian!
- 🧩 Out-of-the-box extensibility and tree-shaking, current optional modules include:
  - [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap) for easy navigation
  - [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls) displays zoom in/out and fullscreen buttons
  - [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) prevents the canvas from intercepting page scroll.
  - [`DebugPanel`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#debug-panel) displays scale and position data.

## Integration with Existing Paradigms

JSON Canvas Viewer currently can work seamlessly with the following techstacks / technologies (including but not limited to):

- ✅ Vanilla JS/TS: natural support
- ✅ Prerendering: [`renderToString`](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#prerendering)
- ✅ Vite: [Vite Plugin](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#setup-1)
- ✅ Vue: [Vue Component](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#vue-component)
- ✅ React: [React Component](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering-and-Bridges#react-component)

For more about JSON Canvas Viewer, please go to the [GitHub Repo](https://github.com/hesprs/json-canvas-viewer).

## License

JSON Canvas Viewer is licensed under the [MIT License](https://mit-license.org/).
