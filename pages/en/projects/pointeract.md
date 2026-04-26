---
layout: project
title: Pointeract
titleTemplate: Lightweight and Extensible Human Interaction Library
description: Pointeract is a tiny (1KB core), tree-shakable TypeScript library for robust human gesture detection. Supports mouse, touch, touchpad, and wheel events. A modern, extensible alternative to Hammer.js.
logo: https://pointeract.consensia.cc/logo.svg
links:
  - name: Documentation
    url: https://pointeract.consensia.cc
    color: '#425aef'
  - name: GitHub Repository
    url: https://github.com/hesprs/pointeract
    color: '#010409'
  - name: npm
    url: https://www.npmjs.com/package/pointeract
    color: '#EA2039'
head:
  - - meta
    - name: keywords
      content: Pointeract, JavaScript, TypeScript, JavaScript gesture library, Hammer.js alternative, pan zoom, touchpad, tree-shakable, mouse wheel, multitouch gestures, drag and drop, swipe detection
---

<script lang="ts" setup>
import { IconBrandNpm, IconBrandGithub, IconVocabulary }  from '@tabler/icons-vue';
import { useLinkIcons } from '$/composables/link-icons';
useLinkIcons({
    'Documentation': IconVocabulary,
    'npm': IconBrandNpm,
    'GitHub Repository': IconBrandGithub,
});
</script>

## Introduction

Pointeract is a tiny JavaScript/TypeScript utility library focusing on one thing - handling user interactions with DOM elements, e.g. multitouch and touchpad.

With the unique strength of versatile typings in TypeScript and its dynamic nature, Pointeract has achieved a highly _modular, extendable and efficient_ architecture. Its core bundle size is only **1KB** minified + gzipped, functionalities come from also byte-sized modules. It's fully **tree-shakable**, the fewer modules you use, the smaller your bundle is.

Homepage & Documentation: [pointeract.consensia.cc](https://pointeract.consensia.cc).

## Supported Features

- **Click (Double Click, Triple Click, Quadruple Click, Any Click)**
- **Drag**
- **Swipe (All directions, single / multiple fingers)**
- **Pan and Zoom via Mouse Wheel (`ctrl`/`shift` key binding, touchpad support)**
- **Pan and Zoom via Multitouch (Pan, Pinch)**
- **One-line Prevent Default**
- **Smooth Everything (drag / pan / zoom / any interaction involving numbers)**

Those interactions are shipped via modules, which can be composed from a single drag-and-drop to a canvas app.

Missing your desired interaction? [Write your own module](https://pointeract.consensia.cc/development/custom-modules)!

## Advantages

- **🐣 Tiny**: With base **1KB** minified and gzipped, **1-2KB** for normal usage.
- **💪 Robust**: Excels at complex gestures where most interaction libraries fail, [Why?](https://pointeract.consensia.cc/development/testing#monkey-test)
- **🧩 Extensible**: Extend Pointeract effortlessly via our module API.
- **🔌 Flexible during Runtime**: Options are updated reactively. Stop/start any module during runtime.
- **🛡️ Safe**: Not modifying the DOM (except the `PreventDefault` module). Meticulous clean up prevents memory leaks.

## How Pointeract Stands Out?

There're already plenty of interaction libraries out there, most famous ones are `d3-drag` + `d3-zoom`, `Interact.js` and `Hammer.js`, but Pointeract is different.

| Criteria                                                                                           |                       Pointeract                        | [D3 Drag](https://github.com/d3/d3-drag) + [D3 Zoom](https://github.com/d3/d3-zoom) |     [Hammer.js](https://hammerjs.github.io)     |         [Interact.js](https://interactjs.io)         |
| :------------------------------------------------------------------------------------------------- | :-----------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------: | :--------------------------------------------------: |
| **Written in TypeScript?**                                                                         |                           ✅                            |                                         ❌                                          |                       ❌                        |                          ✅                          |
| **Tree-shakeable?**                                                                                |                           ✅                            |                                         ❌                                          |                       ❌                        |                          ❌                          |
| **Total Bundle Size (Minified + Gzipped)**                                                         | 👑 [2.7KB](https://bundlejs.com/?q=pointeract%40latest) |          [17KB](https://bundlejs.com/?q=d3-drag%403.0.0%2Cd3-zoom%403.0.0)          | [7KB](https://bundlejs.com/?q=hammerjs%402.0.8) | [28KB](https://bundlejs.com/?q=interactjs%401.10.27) |
| **Last Updated**                                                                                   |                 👑 Actively Maintained                  |                                        2021                                         |                      2015                       |                         2023                         |
| **Versatility**                                                                                    |         Pointer and Wheel Related + Some Utils          |                      👑 Pointer and Wheel Related + Ecosystem                       |                 Pointer Related                 |        Pointer Related + Comprehensive Utils         |
| **Support**                                                                                        |       👑 Mouse, Mouse Wheel, Touch, and Touchpad        |                               ⚠️ No Touchpad Support                                |      ⚠️ No Touchpad or Mouse Wheel Support      |        ⚠️ No Touchpad or Mouse Wheel Support         |
| **Robust (Passes [Monkey Test](https://pointeract.consensia.cc/development/testing#monkey-test))** |                           ✅                            |                                         ✅                                          |                ❌ Element Jerks                 |         ❌ Element Ignores the Second Touch          |
| **Extensible?**                                                                                    |                           ✅                            |                                         ❌                                          |                       ❌                        |                          ❌                          |

## License

Pointeract is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).
