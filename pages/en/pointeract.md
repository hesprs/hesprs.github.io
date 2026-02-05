---
title: Pointeract
description: A front-end library that resolves user interactions and dispatches pan zoom events, lightweight and extensible alternative to Hammer.js.
---

<script lang="ts" setup>
import ProjectCard from '$/components/projectCard.vue';
import { IconBrandGithub, IconBrandNpm, IconVocabulary }  from '@tabler/icons-vue';
</script>

<ProjectCard :meta="{
    name: $frontmatter.title,
    description: $frontmatter.description,
    logo: 'https://pointeract.consensia.cc/logo.svg',
    links: [
        {
            name: 'Documentation',
            url: 'https://www.npmjs.com/package/pointeract',
            icon: IconVocabulary,
            color: '#425aef'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/hesprs/pointeract',
            icon: IconBrandGithub,
            color: '#010409'
        },
        {
            name: 'npm',
            url: 'https://www.npmjs.com/package/pointeract',
            icon: IconBrandNpm,
            color: '#EA2039'
        },
    ]
}" />

## Introduction

Pointeract is a tiny JavaScript/TypeScript utility library focusing on one thing - handling user interactions with DOM elements, e.g. multitouch and touchpad.

With the unique strength of versatile typings in TypeScript and its dynamic nature, Pointeract have achieved a highly _modular, extendable and efficient_ architecture. Its core bundle size is only **1KB** minified + gzipped, functionalities come from also byte-sized modules. It's fully **tree-shakable**, the fewer modules you use, the smaller your bundle is.

Homepage & Documentation: [pointeract.consensia.cc](https://pointeract.consensia.cc).

## Advantages

- **🐣 Tiny**: With base **1KB** minified and gzipped, **1-2KB** for normal usage.
- **💪 Robust**: Excels at complex gestures where most interaction libraries fail, [Why?](https://pointeract.consensia.cc/development/testing#monkey-test)
- **🧩 Extensible**: Extend Pointeract effortlessly via our module API.
- **🔌 Flexible during Runtime**: Options are updated reactively. Stop/start any module during runtime.
- **🛡️ Safe**: Not modifying the DOM (except the `PreventDefault` module). Meticulous clean up prevents memory leaks.

## How Pointeract Stands Out?

There're already plenty of interaction libraries out there, most famous ones are `Interact.js` and `Hammer.js`, but Pointeract is different.

| Criteria                                                  |                      Pointeract                       |     [Hammer.js](https://hammerjs.github.io)      |        [Interact.js](https://interactjs.io)         |
| :-------------------------------------------------------- | :---------------------------------------------------: | :----------------------------------------------: | :-------------------------------------------------: |
| Written in TypeScript?                                    |                          ✅                           |                        ❌                        |                         ✅                          |
| Tree-shakeable?                                           |   [✅](https://bundlephobia.com/package/pointeract)   | [❌](https://bundlephobia.com/package/hammerjs)  |  [❌](https://bundlephobia.com/package/interactjs)  |
| Total Bundle Size (Minified + Gzipped)                    | 👑 [3KB](https://bundlephobia.com/package/pointeract) | [7KB](https://bundlephobia.com/package/hammerjs) | [28KB](https://bundlephobia.com/package/interactjs) |
| Last Updated                                              |                👑 Actively Maintained                 |                       2015                       |                        2023                         |
| Features                                                  |        Pointer and Wheel Related + Some Utils         |                 Pointer Related                  | 👑 Pointer and Wheel Related + Comprehensive Utils  |
| Robust? (See [Testing](/development/testing#monkey-test)) |                          ✅                           |                 ❌ Element Jerks                 |         ❌ Element Ignores the Second Touch         |
| Extensible?                                               |                          ✅                           |                        ❌                        |                         ❌                          |

## License

Pointeract is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).
