---
layout: project
title: JSON Canvas Viewer
titleTemplate: Library Suite to Render JSON Canvas in Browsers
description: JSON Canvas Viewer is a front-end library that ships an extensible viewer for JSON Canvas, with easy integration with any existing frameworks and paradigms.
logo: https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg
links:
  - name: GitHub Repository
    url: https://github.com/hesprs/json-canvas-viewer
    color: '#010409'
  - name: npm
    url: https://www.npmjs.com/package/json-canvas-viewer
    color: '#EA2039'
  - name: Documentation
    url: https://github.com/hesprs/json-canvas-viewer/wiki
    color: '#425aef'
  - name: JSON Canvas
    url: https://jsoncanvas.org
    color: '#8B0A5F'
head:
  - - meta
    - name: keywords
      content: JSON Canvas, JSON Canvas Viewer, Obsidian, Obsidian Canvas, visuallization, React component, Vue component, Preact component, npm library, JavaScript, TypeScript
---

<script lang="ts" setup>
import Viewer from '$/components/DemoViewer.vue';
import { IconBrandGithub, IconBrandNpm, IconVocabulary, IconJson } from '@tabler/icons-vue';
import { useLinkIcons } from '$/composables/link-icons';
useLinkIcons({
   'GitHub Repository': IconBrandGithub,
   'npm': IconBrandNpm,
   'Documentation': IconVocabulary,
   'JSON Canvas': IconJson,
});
</script>

## Demo

<Viewer />

Above illustration of the architecture of JSON Canvas Viewer is an instance of itself, with modules [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap), [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls), and [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) loaded.

## Introduction

[Obsidian](https://obsidian.md) ships a powerful tool called [JSON Canvas](https://jsoncanvas.org), it enables me to think in a non-linear style, perfect for usages like complex state machines or dependency graphs. While it's sufficient for personal use, it's hard to share with others since there's no mature way to view it outside Obsidian.

`JSON Canvas Viewer` comes to solve this problem, it is a TypeScript-based viewer for JSON Canvas files that enables users to view and interact with canvases directly in a browser, or embed the viewer in websites with ease. It is built without a framework so it is easily embeddable into any framework.

## Features

- View JSON Canvas files (`.canvas`) in a web browser
- Embed into websites easily
- Interactive pan and zoom functionality
- Can display 100% of canvas features described in the [official spec](https://jsoncanvas.org/spec/1.0/)
- Responsive design with mobile and touchpad adaptation
- Supports Lazy loading
- TypeScript native
- Modern aesthetics with light and dark mode support
- A [chimp version](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#-chimpanzee-version) specially designed for fast trial is available
- 🔥 More performant than rendering canvases in Obsidian!
- 🧩 Out-of-the-box extensibility and tree-shaking powered by [SynthKernel](/researches/synthkernel) architecture, current optional modules include:
  - [`Minimap`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#minimap) for easy navigation
  - [`Controls`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#controls) displays zoom in/out and fullscreen buttons
  - [`MistouchPreventer`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#mistouch-preventer) prevents the canvas from intercepting page scroll.
  - [`DebugPanel`](https://github.com/hesprs/json-canvas-viewer/wiki/3-%F0%9F%A7%A9-Modules#debug-panel) displays scale and position data.

## Integration

JSON Canvas Viewer currently can work seamlessly with the following techstacks / technologies (including but not limited to):

- ✅ Vanilla JS/TS: [natural support](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vanilla-jsts) - `json-canvas-viewer`
- ✅ Prerendering: [`renderToString`](https://github.com/hesprs/json-canvas-viewer/wiki/4-%F0%9F%96%87%EF%B8%8F-Prerendering) - `json-canvas-viewer`
- ✅ Vite: [Vite Plugin](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vite) - `vite-plugin-json-canvas`
- ✅ Vue: [Vue Component](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#vue) - `@json-canvas-viewer/vue`
- ✅ React: [React Component](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#react) - `@json-canvas-viewer/react`
- ✅ Preact: [Preact Component](https://github.com/hesprs/json-canvas-viewer/wiki/1-%F0%9F%9A%80-Quick-Start#preact) - `@json-canvas-viewer/preact`

For more about JSON Canvas Viewer, please go to the [GitHub Repo](https://github.com/hesprs/json-canvas-viewer).

## License

JSON Canvas Viewer is licensed under the [MIT License](https://mit-license.org/).
